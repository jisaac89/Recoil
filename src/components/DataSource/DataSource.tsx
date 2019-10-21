import React from 'react';
import { arraysEqual, search, branchIn } from '../Utils';
import { ITableProps } from '../Table/Table';
import Emerge from '../Emerge/Emerge';
import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import { IColumn } from './IColumn';

export type TDataSource = object | number | string | [];

export interface IDataSourceProps extends ITableProps {
  // initial dataSource loaded as prop
  dataSource: TDataSource[];
  columns: Array<IColumn>;
  emptyText: string;
  loading?: boolean;
  loadingText?: string;
  addColumns?: Array<IColumn>;
}

interface IDataSourceState {
  // dataSource
  dataSource: TDataSource[];
  isArray: boolean;
  columns: Array<IColumn>;
  activeRows: TDataSource[];
  // page
  rowCount: number;
  pageSize: number;
  page: number;
  numberOfPages: number;
  numberPerPage: number;
  // table selected options
  detailTemplateSelectedElements: TDataSource[];
  selectedElements: TDataSource[];
  // table search
  searchTerm: string;
  searchedItems: TDataSource[];
  // table sort
  sortType: 'asc' | 'desc' | undefined;
  sortKey: 'asc' | 'desc';
}

const DataSource: any = (Component: JSX.Element) =>
  class Enhance extends React.Component<IDataSourceProps, IDataSourceState> {
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
        pageSize: props.pageSize ? props.pageSize : 10,
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
        sortKey: props.sortKey ? props.sortKey : 'asc'
      };
    }

    static getDerivedStateFromProps(props: IDataSourceProps, state: IDataSourceState) {
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

    componentDidUpdate(prevProps: IDataSourceProps, prevState: IDataSourceState) {
      let { dataSource, sortKey, sortType, pageSize, rowCount, searchValue, searchableKeys, page } = this.props;

      if ((page !== null && page !== undefined && page !== prevState.page) || prevProps.pageSize !== pageSize) {
        this.setState(
          {
            // TODO JI fix
            // page: page !== null && page !== undefined ? page : prevState.page,
            // pageSize: prevProps.pageSize !== pageSize ? pageSize : prevProps.pageSize
          },
          () => {
            this.renderActiveRows(prevState.dataSource);
          }
        );
      }

      if (!!this.props.sortKey && this.props.sortKey !== prevProps.sortKey) {
        this.sortDataSource(dataSource, sortType, sortKey);
      } else {
        if (this.props.dataSource && !prevProps.page) {
          // dataSource.length > 0 ? this.loadDataSource(dataSource) : null;
          // dataSource.length === 0 ? this.loadDataSource([]) : this.loadDataSource([]);
          // this.loadDataSource([]);
        }
      }

      if (searchableKeys && !!searchValue && searchValue !== prevProps.searchValue) {
        this.filterItems(searchValue, searchableKeys);
      }

      if (pageSize && prevProps.pageSize !== pageSize) {
        this.setState({
          pageSize: pageSize,
          rowCount: rowCount ? rowCount : prevState.rowCount
        });
      }
    }

    componentDidMount() {
      const self = this;
      const props = self.props;

      let { dataSource } = props;

      (dataSource && Object.keys(dataSource).length) || (dataSource && dataSource.length)
        ? self.loadDataSource(dataSource)
        : self.loadDataSource([]);
    }

    loadDataSource(dataSource: TDataSource[]) {
      const self = this;

      let dataSourceIsObject = typeof dataSource === 'object';
      let dataSourceIsArray = dataSource instanceof Array;
      let dataSourceIsArrayOfStingsOrNumbers = typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number';

      let { sortKey } = this.props;
      let { sortType, page } = this.state;

      let setDataSourceState = (dataSource: TDataSource[], isArray: boolean) => {
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
          let newDataSource: TDataSource[] = [];

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

    sortDataSource(
      dataSource: TDataSource[],
      sortType: 'asc' | 'desc' | undefined,
      sortKey: 'asc' | 'desc' | undefined
    ) {
      const self = this;

      let { searchedItems, searchTerm } = self.state;

      let sortOrderSearchedItems: Array<any>;
      let sortOrderDataSource: Array<any>;

      let sort = (dataSource: any) => {
        return dataSource.sort((a: any, b: any) => {
          let aKey: any = branchIn(a, sortKey as string);
          let bKey: any = branchIn(b, sortKey as string);
          switch (typeof aKey) {
            case 'string':
              let itemPrev = aKey && aKey.toLowerCase();
              let itemNext = bKey && (bKey as string).toLowerCase();
              if (itemPrev < itemNext)
                //string asc
                return -1;
              if (itemPrev > itemNext) return 1;
              break;
            case 'number':
              return (aKey as number) - (bKey as number);
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
      let state = self.state;

      let { columns } = props;
      let { isArray } = state;

      let columnsArray: Array<any>;

      // columns are defined
      if (dataSource.length > 0) {
        if (columns.length > 0) {
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
      } else {
        columnsArray = [];
      }

      this.setState(
        {
          columns: columnsArray
        },
        () => {
          if (props.addColumns) {
            let updatedColumns = self.state.columns;

            for (let col of props.addColumns) {
              updatedColumns.push(col);
            }

            self.setState({
              columns: updatedColumns
            });
          }
        }
      );
    }

    renderActiveRows(dataSource: TDataSource[]) {
      const self = this;
      const props = self.props;
      let { rowCount } = props;

      let activeRows: Array<any> = [];

      let numberPerPage, numberOfPages, renderedPage;

      let { page, pageSize } = self.state;

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

      let begin = page * numberPerPage;
      let end = begin + numberPerPage;
      let pageList = renderedPage.slice(begin, end);

      pageList.map((item: TDataSource) => {
        activeRows.push(item);
      });

      this.setState({
        activeRows: activeRows
      });

      //this.props.searchValue ? this.filterItems(this.props.searchValue, this.props.searchableKeys) : null;
    }

    detailTemplateToggleAll(dataSource: Array<any>) {
      let { detailTemplateSelectedElements } = this.state;

      this.setState({
        detailTemplateSelectedElements: arraysEqual(dataSource, detailTemplateSelectedElements) ? [] : dataSource
      });
    }

    detailTemplateToggleSelectedElements(element: Array<TDataSource>) {
      const self = this;
      let { detailTemplateOpenOnRowSelect, selectedKey } = this.props;
      let { detailTemplateSelectedElements } = self.state;

      let selectedElementsArray: TDataSource[];

      let setSelectedElementsState = (data: Array<any>) => {
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
        selectedElementsArray.map((data: TDataSource | string, key: string | number) => {
          if (data === selectedKey ? element[selectedKey] : element) {
            selectedElementsArray.splice(key as number, 1);
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
      let { selectedElements } = this.state;

      this.setState({
        selectedElements: arraysEqual(dataSource, selectedElements ? selectedElements : []) ? [] : dataSource
      });
    }

    toggleSelectedElements(element: Array<any>, index: number) {
      const self = this;
      let { selectedElements } = self.state;
      let { rowIsSelectable, onCheck, selectedKey } = self.props;
      let selectedElement = selectedKey ? element[selectedKey] : element;
      let selectedElementsArray: TDataSource[];

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

    gotoPage(datasource: TDataSource[], i: number) {
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

    sortCollection(dataSource: TDataSource[], key: 'asc' | 'desc', sortType: 'asc' | 'desc') {
      const self = this;

      let sortKey = this.props.sortKey ? this.props.sortKey : key;

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

    toggleSorting(dataSource: TDataSource[], key: 'asc' | 'desc', sortType: 'asc' | 'desc') {
      const self = this;
      self.sortCollection(dataSource, key, sortType);
    }

    filterItems(term: string, keys: string[]) {
      const self = this;
      let state = self.state;

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
      let { columns, dataSource, activeRows } = self.state;

      let renderedObject = {
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

export default DataSource;
