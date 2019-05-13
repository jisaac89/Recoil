import React from 'react';
import { Button } from '../Button/Button';
import { Emerge } from '../Emerge/Emerge';
import { ITableProps } from '../Table/Table';
import { Toolbar } from '../Toolbar/Toolbar';
import { arraysEqual, branchIn, search } from '../Utils';
import { IColumn } from './IColumn';

export type T = Object | string | number;

export interface IDataSourceProps extends ITableProps {
  // initial dataSource loaded as prop
  dataSource: T[];
  columns?: Array<IColumn>;
  emptyText: string;
  loading?: boolean;
  loadingText?: string;
  addColumns?: Array<IColumn>;
}

const DataSource: any = (Component: JSX.Element) =>
  class Enhance extends React.Component<IDataSourceProps, any> {
    constructor(props: IDataSourceProps) {
      super(props);

      this.state = {
        // dataSource
        dataSource: [],
        isArray: false,
        columns: [],
        activeRows: [],
        // page
        rowCount: props.rowCount || 0,
        pageSize: props.pageSize || 10,
        page: props.page || 0,
        numberOfPages: 0,
        numberPerPage: 0,

        // table selected options
        detailTemplateSelectedElements: props.detailTemplateSelectedElements || [],
        selectedElements: props.selectedElements || [],
        // table search
        searchTerm: '',
        searchedItems: [],
        // table sort
        sortType: props.sortType || 'asc',
        sortKey: props.sortKey || null
      };
    }

    static getDerivedStateFromProps(props, state) {
      if (
        (!!props.selectedElements && props.selectedElements !== state.selectedElements) ||
        (!!props.detailTemplateSelectedElements &&
          props.detailTemplateSelectedElements !== state.detailTemplateSelectedElements)
      ) {
        return {
          selectedElements: props.selectedElements ? props.selectedElements : state.selectedElements,
          detailTemplateSelectedElements: props.detailTemplateSelectedElements
            ? props.detailTemplateSelectedElements
            : state.detailTemplateSelectedElements
        };
      } else {
        return {
          selectedElements: state.selectedElements,
          detailTemplateSelectedElements: state.detailTemplateSelectedElements
        };
      }
    }

    componentDidUpdate(prevProps: IDataSourceProps, prevState) {
      const { dataSource, sortKey, sortType, pageSize, rowCount, searchValue, searchableKeys, page } = this.props;

      if ((page !== null && page !== undefined && page !== prevState.page) || prevProps.pageSize !== pageSize) {
        this.setState(
          {
            page: page !== null && page !== undefined ? page : prevState.page,
            pageSize: prevProps.pageSize !== pageSize ? pageSize : prevProps.pageSize
          },
          () => {
            this.renderActiveRows(prevState.dataSource);
          }
        );
      }

      if (!!sortType && !!sortKey && !!this.props.sortKey && this.props.sortKey !== prevProps.sortKey) {
        this.sortDataSource(dataSource, sortType, sortKey);
      } else {
        if (this.props.dataSource && !prevProps.page) {
          dataSource.length > 0 && prevProps.dataSource !== dataSource ? this.loadDataSource(dataSource) : null;
          dataSource.length === 0 && prevProps.dataSource !== dataSource ? this.loadDataSource([]) : null;
        }
      }

      if (!!searchableKeys && !!searchValue && searchValue !== prevProps.searchValue) {
        this.filterItems(searchValue, searchableKeys);
      }

      if (prevProps.pageSize !== pageSize) {
        this.setState({
          pageSize: pageSize,
          rowCount: rowCount ? rowCount : prevState.rowCount
        });
      }
    }

    componentDidMount() {
      const self = this;
      const props = self.props;

      const { dataSource } = props;
      (dataSource && Object.keys(dataSource).length) || (dataSource && dataSource.length)
        ? self.loadDataSource(dataSource)
        : self.loadDataSource([]);
    }

    loadDataSource<T>(dataSource: Array<T>) {
      const self = this;

      const dataSourceIsObject = typeof dataSource === 'object';
      const dataSourceIsArray = dataSource instanceof Array;
      const dataSourceIsArrayOfStingsOrNumbers = typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number';

      const { sortKey } = this.props;
      const { sortType, page } = this.state;

      const setDataSourceState = (dataSource: Array<T> | Array<Array<T>>, isArray: boolean) => {
        self.setState(
          {
            dataSource: dataSource,
            isArray: isArray
          },
          () => {
            this.defineColumns(dataSource);

            if (sortKey && sortType) {
              self.sortDataSource(dataSource, sortType, sortKey);
            } else {
              self.gotoPage(dataSource, page);
            }
          }
        );
      };

      if (dataSourceIsArray) {
        if (dataSourceIsArrayOfStingsOrNumbers) {
          const newDataSource: Array<T> = [];

          dataSource.forEach(element => {
            newDataSource.push(element);
          });

          setDataSourceState(newDataSource, true);
        } else {
          setDataSourceState(dataSource, false);
        }
      } else if (dataSourceIsObject) {
        setDataSourceState([dataSource], false);
      } else {
        setDataSourceState(dataSource, false);
      }
    }

    sortDataSource(dataSource: Array<never>, sortType: string, sortKey: string) {
      const self = this;

      const { searchedItems, searchTerm } = self.state;

      let sortOrderSearchedItems: Array<never>;
      let sortOrderDataSource: Array<never>;

      const sort = (dataSourcea: Array<never>) => {
        return dataSourcea.sort((a, b) => {
          const aKey = branchIn(a, sortKey);
          const bKey = branchIn(b, sortKey);
          switch (typeof aKey) {
            case 'string':
              const itemPrev = aKey && aKey.toLowerCase();
              const itemNext = bKey && bKey.toLowerCase();
              if (itemPrev < itemNext) {
                //string asc
                return -1;
              }
              if (itemPrev > itemNext) {
                return 1;
              }
              break;
            case 'number':
              return aKey - bKey;
            default:
              return null;
          }
          return null;
        });
      };

      if (sortType === 'asc') {
        sortOrderDataSource = sort(dataSource);
        sortOrderSearchedItems = sort(searchedItems);
      } else {
        sortOrderDataSource = sort(dataSource).reverse();
        sortOrderSearchedItems = sort(searchedItems).reverse();
      }

      if (searchTerm !== '') {
        self.setState(
          {
            dataSource: sortOrderDataSource,
            searchedItems: sortOrderSearchedItems
          },
          () => {
            self.gotoPage(sortOrderSearchedItems, this.state.page);
          }
        );
      } else {
        self.setState(
          {
            dataSource: sortOrderDataSource
          },
          () => {
            self.gotoPage(sortOrderDataSource, this.state.page);
          }
        );
      }
    }

    defineColumns(dataSource: Array<any>) {
      const self = this;
      const props = self.props;
      const state = self.state;

      const { columns } = props;
      const { isArray } = state;

      let columnsArray;

      // columns are defined
      if (dataSource.length > 0) {
        if (columns) {
          columnsArray = columns;
        } else {
          // else automatically create them
          columnsArray = [];

          if (isArray) {
            columnsArray.push({ name: '_Array' });
          } else {
            Object.keys(dataSource[0]).map(key => {
              columnsArray.push({ name: key });
            });
          }
        }
      }

      this.setState(
        {
          columns: columnsArray
        },
        () => {
          if (props.addColumns) {
            const updatedColumns = self.state.columns;

            for (const col of props.addColumns) {
              updatedColumns.push(col);
            }

            self.setState({
              columns: updatedColumns
            });
          }
        }
      );
    }

    renderActiveRows(dataSource: Array<any>) {
      const self = this;
      const props = self.props;
      const { rowCount } = props;

      const activeRows: Array<any> = [];

      let numberPerPage, numberOfPages, renderedPage;

      const { page, pageSize } = self.state;

      if (this.state.searchTerm !== '') {
        renderedPage = this.state.searchedItems;
      } else {
        renderedPage = dataSource;
      }

      if (rowCount) {
        numberPerPage = pageSize;
        numberOfPages = Math.ceil(rowCount / pageSize);
      } else {
        numberPerPage = pageSize;
        numberOfPages = Math.ceil(renderedPage.length / pageSize);
      }

      this.setState({
        numberPerPage: numberPerPage,
        numberOfPages: numberOfPages
      });

      const begin = page * parseInt(numberPerPage);
      const end = begin + parseInt(numberPerPage);
      const pageList = renderedPage.slice(begin, end);

      pageList.map((item: Array<any>) => {
        activeRows.push(item);
      });

      this.setState({
        activeRows: activeRows
      });

      //this.props.searchValue ? this.filterItems(this.props.searchValue, this.props.searchableKeys) : null;
    }

    detailTemplateToggleAll(dataSource: Array<any>) {
      const { detailTemplateSelectedElements } = this.state;

      this.setState({
        detailTemplateSelectedElements: arraysEqual(dataSource, detailTemplateSelectedElements) ? [] : dataSource
      });
    }

    detailTemplateToggleSelectedElements(element: Array<any>) {
      const self = this;
      const { detailTemplateOpenOnRowSelect, selectedKey } = this.props;
      const { detailTemplateSelectedElements } = self.state;

      let selectedElementsArray: any;

      const setSelectedElementsState = (data: Array<any>) => {
        self.setState({
          detailTemplateSelectedElements: data
        });
      };

      if (detailTemplateOpenOnRowSelect === 'single') {
        selectedElementsArray = detailTemplateSelectedElements.length ? [detailTemplateSelectedElements[0]] : [];
        self.props.detailTemplateOnOpen ? self.props.detailTemplateOnOpen(element) : null;
      } else {
        selectedElementsArray = detailTemplateSelectedElements.slice();
      }

      if (selectedElementsArray.includes(selectedKey ? element[selectedKey] : element)) {
        selectedElementsArray.map((data: string, key: string | number) => {
          if (data === selectedKey ? element[selectedKey] : element) {
            selectedElementsArray.splice(key, 1);
            setSelectedElementsState(selectedElementsArray);
          }
        });
      } else {
        if (detailTemplateOpenOnRowSelect === 'single') {
          selectedElementsArray = [];
          selectedElementsArray.push(selectedKey ? element[selectedKey] : element);
          setSelectedElementsState(selectedElementsArray);
        } else {
          selectedElementsArray.push(selectedKey ? element[selectedKey] : element);
          setSelectedElementsState(selectedElementsArray);
        }
      }
    }

    selectAll(dataSource: Array<any>) {
      const { selectedElements } = this.state;

      this.setState({
        selectedElements: arraysEqual(dataSource, selectedElements ? selectedElements : []) ? [] : dataSource
      });
    }

    toggleSelectedElements(element: Array<any>, index: string | number) {
      const self = this;
      const { selectedElements } = self.state;
      const { rowIsSelectable, onCheck, selectedKey } = self.props;
      const selectedElement = selectedKey ? element[selectedKey] : element;
      let selectedElementsArray: any;

      if (rowIsSelectable === 'single') {
        selectedElementsArray = [];
      } else {
        selectedElementsArray = !!selectedElements ? selectedElements.slice() : [];
      }

      if (selectedElementsArray.includes(selectedElement)) {
        for (let i = 0; i < selectedElementsArray.length; i++) {
          if (selectedElementsArray[i] === selectedElement) {
            selectedElementsArray.splice(i, 1);

            self.setState(
              {
                selectedElements: selectedElementsArray
              },
              () => {
                this.props.onRowSelect ? this.props.onRowSelect(element, index, selectedElementsArray) : null;
              }
            );
          }
        }
      } else {
        selectedElementsArray.push(selectedElement);

        self.setState(
          {
            selectedElements: selectedElementsArray
          },
          () => {
            this.props.onRowSelect ? this.props.onRowSelect(element, index, selectedElementsArray) : null;
          }
        );

        onCheck ? onCheck(selectedElement) : null;
      }
    }

    firstPage() {
      this.setState(
        {
          page: 0
        },
        () => {
          this.renderActiveRows(this.state.dataSource);
        }
      );
      this.props.onPageChange ? this.props.onPageChange(0) : null;
    }

    previousPage() {
      let pageNumber = this.state.page;
      this.props.onPageChange ? this.props.onPageChange(this.state.page - 1) : null;
      if (!this.props.serverSide) {
        this.setState(
          {
            page: pageNumber -= 1
          },
          () => {
            this.renderActiveRows(this.state.dataSource);
          }
        );
      }
    }

    nextPage() {
      let pageNumber = this.state.page;
      this.setState(
        {
          page: pageNumber += 1
        },
        () => {
          this.renderActiveRows(this.state.dataSource);
          this.props.onPageChange ? this.props.onPageChange(this.state.page) : null;
        }
      );
    }

    lastPage(numberOfPages: number) {
      this.setState(
        {
          page: numberOfPages - 1
        },
        () => {
          this.renderActiveRows(this.state.dataSource);
        }
      );
      this.props.onPageChange ? this.props.onPageChange(numberOfPages - 1) : null;
    }

    gotoPage(datasource, i: number) {
      this.setState(
        {
          page: i,
          pageSize: this.state.pageSize
        },
        () => {
          this.renderActiveRows(datasource);
        }
      );
    }

    changePageSize(pageSize: any) {
      this.setState(
        {
          pageSize: pageSize,
          page: 0
        },
        () => {
          this.renderActiveRows(this.state.dataSource);
        }
      );

      this.props.onPageSizeChange ? this.props.onPageSizeChange(pageSize) : null;
    }

    sortCollection(dataSource: Array<any>, key: string, sortType: string) {
      const self = this;

      const sortKey = this.props.sortKey ? this.props.sortKey : key;

      self.setState(
        {
          sortKey: sortKey,
          sortType: sortType
        },
        () => {
          self.sortDataSource(dataSource, sortType, sortKey);
        }
      );
    }

    toggleSorting(dataSource: Array<any>, key: string, sortType: string) {
      const self = this;
      self.sortCollection(dataSource, key, sortType);
    }

    filterItems(term: string, keys: Array<any>) {
      const self = this;
      const state = self.state;

      self.setState(
        {
          searchedItems: search(state.dataSource, term, keys, self.props.searchFilter),
          searchTerm: term,
          page: 0
        },
        () => {
          self.renderActiveRows(state.dataSource);
        }
      );
    }

    render() {
      const self = this;
      const props = self.props;
      const { columns, dataSource, activeRows } = self.state;
      //let {emptyText} = props;

      const renderedObject = {
        // methods
        gotoPage: this.gotoPage.bind(this, dataSource),
        previousPage: this.previousPage.bind(this),
        nextPage: this.nextPage.bind(this),
        lastPage: this.lastPage.bind(this),
        firstPage: this.firstPage.bind(this),
        changePageSize: this.changePageSize.bind(this),

        detailTemplateToggleSelectedElements: this.detailTemplateToggleSelectedElements.bind(this),
        detailTemplateToggleAll: this.detailTemplateToggleAll.bind(this),
        selectAll: this.selectAll.bind(this),
        toggleSelectedElements: this.toggleSelectedElements.bind(this),

        sortCollection: this.sortCollection.bind(this),
        toggleSorting: this.toggleSorting.bind(this),
        filterItems: this.filterItems.bind(this)
      };

      if (props.loading) {
        return (
          <Emerge className="e-fill">
            <Toolbar block textCenter>
              <Button loading={true} block size="large" simple>
                {props.loadingText}
              </Button>
            </Toolbar>
          </Emerge>
        );
      } else if ((activeRows.length || dataSource.length) && columns && columns.length) {
        const newProps = Object.assign({}, props, self.state, renderedObject);
        // clone the original component and add the new props
        const updatedComponent = React.cloneElement(Component, newProps, Component.props);
        // only if a dataSource exists return the new element - else return original
        return dataSource.length ? updatedComponent : Component;
      } else {
        return props.emptyText ? (
          <Emerge enter="fadeIn" className="e-fill">
            <Toolbar block textCenter>
              <Button block size="small" simple>
                {props.emptyText}
              </Button>
            </Toolbar>
          </Emerge>
        ) : null;
      }
    }
  };

export { DataSource };
