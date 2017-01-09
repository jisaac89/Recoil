import * as React from 'react';
import * as classNames from 'classnames';

import './Table.less';

import {arraysEqual, search, branchIn} from '../Utils';

import TreeRowContent from './TreeRowContent';
import Layer from '../Layer/Layer';
import Toolbar from '../Toolbar/Toolbar';

import {IColumn} from './IColumn';
export {IColumn}

interface ITableProps {
    // initial dataSource loaded as prop
    dataSource :  Array<any> | Object;
    // columns defined by user
    columns?: Array<IColumn>;
    // a detail template function that returns a view
    detailTemplate?: (element: any) => JSX.Element;
    // toggle if the table header should show
    hideHeader ? : boolean;
    // how many rows to show
    pageSize ? : number;
    // current page index
    page ? : number;
    // 
    detailTemplateSelectedElements ? : Array<any>;

    selectedElements ? : Array<any>;

    rowIsSelectable ? : any;

    checkable ? : boolean;
    onCheck ? : (event: React.MouseEvent) => void;

    detailTemplateHideToggle? : boolean;
    
    hideColumns? : Array<any>;

    onRowSelect ? : (event: React.MouseEvent) => void;

    pageSizerOptions? : Array<any>;

    onPageSizeChange? : (event: React.MouseEvent) => void;
    onPageChange? : any;

    sortable ? : boolean;

    searchableKeys? : Array<any>;
    searchTitle? : string;

    className? : string;

    detailTemplateOpenOnRowSelect?: boolean | "single";

    rowCount?: number;

    hidePageSize?: boolean;

    onSort ? : Function;
    sortType? : "asc" | "desc";
    sortKey?: string;
    showDataSourceLength?: boolean;

    selectedKey?: string;
    flex?: boolean;

    menuTemplate?: any;

    focusOnMount?: any;
    contentMaxHeight?: number;

    filterRow?: any;
}

interface ITableState {
    dataSource?: any;
    columns?: any;
    isArray?: any;
    type?: string;

    page?: number;
    pageSize?: number;

    detailTemplateSelectedElements? : any;
    selectedElements? : any;
    sortType ? : "asc" | "desc";
    sortKey ? : string;
    searchedItems?: any;
    searchTerm?: string;
    numberOfPages?: any;
    numberPerPage?: any;
    activeRows?: any;
}

export default class Table extends React.Component<ITableProps, ITableState>{

    constructor(props) {
        super(props);

        this.state = {
            // dataSource
            dataSource: [],
            isArray: false,
            columns: [],
            activeRows: [],
            // page
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
            sortType: props.sortType || "asc",
            sortKey: props.sortKey || null
        }
    }

    componentWillReceiveProps(nextProps) {

        let {dataSource, sortable, sortKey} = nextProps;

        this.setState({
            page: nextProps.page !== this.props.page ? nextProps.page : this.state.page,
        })
        if (nextProps.selectedElements) {
            this.setState({
                selectedElements: nextProps.selectedElements
            })
        }
        if (nextProps.detailTemplateSelectedElements) {
            this.setState({
                detailTemplateSelectedElements: nextProps.detailTemplateSelectedElements
            })
        }

        if (sortKey) {
            this.sortDataSource(dataSource, this.state.sortType, sortKey);
        } else {
            if (nextProps.dataSource !== this.props.dataSource && !nextProps.page) {
                this.setState({
                    page: 0
                })
            } else {
                this.loadDataSource(dataSource);
            }
        }

    }

    componentDidMount() {
        const self = this;
        const props = self.props;
        
        let {dataSource} = props;

        self.loadDataSource(dataSource);
    }

    loadDataSource(dataSource) {
        const self = this;

        let dataSourceIsObject = typeof dataSource === 'object';
        let dataSourceIsArray = dataSource instanceof Array;
        let dataSourceIsArrayOfStingsOrNumbers = typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number';
        let updatedDataSource = [];

        let {sortKey} = this.props;
        let {sortType} = this.state;

        
        let setDataSourceState = (dataSource, isArray) => {
            updatedDataSource = dataSource;
            self.setState({
                dataSource: dataSource,
                isArray: isArray
            }, () => {
                this.defineColumns(dataSource);

                if (sortKey && sortType) {
                    self.sortDataSource(dataSource, sortType, sortKey);
                } else {
                    self.renderActiveRows(dataSource);
                }

            })
        }

        if (dataSourceIsArray) {
            if (dataSource.length && dataSourceIsArrayOfStingsOrNumbers) {
                let newDataSource = [];

                dataSource.forEach(element => {
                    newDataSource.push(element)
                });

                setDataSourceState(newDataSource, true);

            } else {
                setDataSourceState(dataSource, false);
            }
        } else if (dataSourceIsObject) {
            setDataSourceState([dataSource], false);
        } else {
            setDataSourceState(dataSource, false)
        }
    }

    sortDataSource(dataSource, sortType, sortKey) {
        const self = this;

        let {searchedItems, searchTerm} = self.state;

        let sortOrderSearchedItems;
        let sortOrderDataSource;

        let sort = (dataSource) => {
            return dataSource.sort(function (a, b) {
                let aKey = branchIn(a, sortKey);
                let bKey = branchIn(b, sortKey);
                switch (typeof aKey) {
                    case ('string'):
                        let itemPrev = aKey && aKey.toLowerCase();
                        let itemNext = bKey && bKey.toLowerCase();
                        if (itemPrev < itemNext) //string asc
                            return -1
                        if (itemPrev > itemNext)
                            return 1
                        break;
                    case ('number'):
                        return aKey - bKey;
                    default:
                }
            })
        }

        if (sortType === 'asc') {
            sortOrderDataSource = sort(dataSource);
            sortOrderSearchedItems = sort(searchedItems);
        } else {
            sortOrderDataSource = sort(dataSource).reverse();
            sortOrderSearchedItems = sort(searchedItems).reverse();
        }

        if (searchTerm !== '') {
            self.setState({
                dataSource: sortOrderDataSource,
                searchedItems: sortOrderSearchedItems
            }, () => {
                self.renderActiveRows(sortOrderSearchedItems);
            })
        } else {
            self.setState({
                dataSource: sortOrderDataSource,
            }, () => {
                self.renderActiveRows(sortOrderDataSource);
            })
        }

    }

    defineColumns(dataSource) {
        const self = this;
        const props = self.props;
        let state = self.state;

        let {columns} = props;
        let {isArray} = state;

        let columnsArray;

        // columns are defined
        if (columns) {
            columnsArray = columns;
        }
        // else automatically create them
        else {
            columnsArray = [];

            if (isArray) {
                columnsArray.push({ name: '_Array' });
            } else {
                Object.keys(dataSource[0]).map((key) => {
                    columnsArray.push({ name: key })
                })
            }
        }

        this.setState({
            columns: columnsArray
        })
    }

    renderActiveRows(dataSource) {
        const self = this;
        const props = self.props;
        let {rowCount} = props;

        let activeRows = [];

        let numberPerPage, numberOfPages, renderedPage;

        let {page, pageSize} = self.state;

        if (this.state.searchTerm !== '') {
            renderedPage = this.state.searchedItems;
        } else {
            renderedPage = dataSource
        }

        if (rowCount) {
            numberPerPage = pageSize;
            numberOfPages = Math.ceil(rowCount / pageSize);
        } else {
            numberPerPage = pageSize;
            numberOfPages = Math.ceil(renderedPage.length / (pageSize));
        }

        this.setState({
            numberPerPage: numberPerPage,
            numberOfPages: numberOfPages
        })

        let begin = ((page) * parseInt(numberPerPage));
        let end = begin + parseInt(numberPerPage);
        let pageList = renderedPage.slice(begin, end);

        pageList.map((item, index) => {
            activeRows.push(item);
        })

        this.setState({
            activeRows: activeRows
        });
    }

    detailTemplateToggleAll(dataSource) {
        let {detailTemplateSelectedElements} = this.state;

        this.setState({
            detailTemplateSelectedElements: arraysEqual(dataSource, detailTemplateSelectedElements) ? [] : dataSource
        })
    }

    detailTemplateToggleSelectedElements(element) {
        const self = this;
        let {detailTemplateOpenOnRowSelect, selectedKey} = this.props;
        let {detailTemplateSelectedElements} = self.state;

        let selectedElementsArray;

        let setSelectedElementsState = (data) => {
            self.setState({
                detailTemplateSelectedElements: data
            })
        }

        if (detailTemplateOpenOnRowSelect === 'single') {
            selectedElementsArray = detailTemplateSelectedElements.length ? [detailTemplateSelectedElements[0]] : [];
        } else {
            selectedElementsArray = detailTemplateSelectedElements.slice();
        }

        if (selectedElementsArray.includes(selectedKey ? element[selectedKey] : element)) {
            selectedElementsArray.map((data, key) => {
                if (data === selectedKey ? element[selectedKey] : element) {
                    selectedElementsArray.splice(key, 1);
                    setSelectedElementsState(selectedElementsArray)
                }
            })
        } else {
            if (detailTemplateOpenOnRowSelect === 'single') {
                selectedElementsArray = [];
                selectedElementsArray.push(selectedKey ? element[selectedKey] : element);
                setSelectedElementsState(selectedElementsArray)

            } else {
                selectedElementsArray.push(selectedKey ? element[selectedKey] : element);
                setSelectedElementsState(selectedElementsArray)
            }
        }
    }

    selectAll(dataSource) {
        let {selectedElements} = this.state;

        this.setState({
            selectedElements: arraysEqual(dataSource, selectedElements) ? [] : dataSource
        })
    }

    toggleSelectedElements(element) {
        const self = this;
        let {selectedElements} = self.state;
        let {rowIsSelectable, onCheck, selectedKey} = self.props;

        let selectedElementsArray;

        if (rowIsSelectable === 'single') {
            selectedElementsArray = [];
        } else {
            selectedElementsArray = selectedElements.slice();
        }

        if (selectedElementsArray.includes(selectedKey ? element[selectedKey] : element)) {
            for (let i = 0; i < selectedElementsArray.length; i++) {
                if (selectedElementsArray[i] === (selectedKey ? element[selectedKey] : element)) {
                    selectedElementsArray.splice(i, 1);

                    self.setState({
                        selectedElements: selectedElementsArray
                    })
                }
            }
        } else {
            selectedElementsArray.push(selectedKey ? element[selectedKey] : element);

            self.setState({
                selectedElements: selectedElementsArray
            })

            onCheck ? onCheck(selectedKey ? element[selectedKey] : element) : null;
        }
    }
    
    firstPage() {
        this.setState({
            page: 0
        }, () => {
            this.renderActiveRows(this.state.dataSource);
        })
        this.props.onPageChange ? this.props.onPageChange(0) : null
    }

    previousPage() {
        this.setState({
            page: this.state.page -= 1
        }, () => {
            this.renderActiveRows(this.state.dataSource);
        })
        this.props.onPageChange ? this.props.onPageChange(this.state.page - 1) : null;
    }

    nextPage() {
        this.setState({
            page: this.state.page += 1
        }, () => {
            this.renderActiveRows(this.state.dataSource);
            this.props.onPageChange ? this.props.onPageChange(this.state.page) : null
        })

    }

    lastPage(numberOfPages) {
        this.setState({
            page: numberOfPages - 1
        }, () => {
            this.renderActiveRows(this.state.dataSource);
        })
        this.props.onPageChange ? this.props.onPageChange(numberOfPages - 1) : null
    }

    gotoPage(i) {
        this.setState({
            page: i,
            pageSize: this.state.pageSize,
        }, () => {
            this.renderActiveRows(this.state.dataSource);
        })
    }

    changePageSize(pageSize) {
        this.setState({
            pageSize: pageSize,
            page: 0
        }, () => {
            this.renderActiveRows(this.state.dataSource);
        })

        this.props.onPageSizeChange ? this.props.onPageSizeChange(pageSize) : null;
    }

    sortCollection(dataSource, key, sortType) {
        const self = this;

        let sortKey = this.props.sortKey ? this.props.sortKey : key;

        self.setState({
            sortKey: sortKey,
            sortType: sortType
        }, () => {
            self.sortDataSource(this.state.dataSource, sortType, sortKey);
        })
    }

    toggleSorting(dataSource, key, sortType) {
        const self = this;
        self.sortCollection(dataSource, key, sortType);
    }

    filterItems(term, keys) {
        const self = this;
        let state = self.state;

        self.setState({
            searchedItems: search(state.dataSource, term, keys),
            searchTerm: term,
            page: 0
        }, () => {
                self.renderActiveRows(state.dataSource);
            })

        
    }

    render() {

        const self = this;
        const props = self.props;
        let {selectedKey, filterRow, contentMaxHeight, menuTemplate, focusOnMount, detailTemplate, showDataSourceLength, onSort, hidePageSize, rowCount, sortable,detailTemplateOpenOnRowSelect, onPageChange, hideHeader, detailTemplateHideToggle, rowIsSelectable, checkable, hideColumns, onRowSelect, pageSizerOptions} = props;
        let {sortType, sortKey, columns, page, pageSize, detailTemplateSelectedElements, selectedElements, isArray, numberOfPages, numberPerPage, dataSource, activeRows} = self.state;

        // assign the props

        let tableProps = {
            dataSource: rowCount ? dataSource : activeRows,
            columns: columns,
            hideHeader: hideHeader,
            detailTemplate: detailTemplate,
            detailTemplateSelectedElements: detailTemplateSelectedElements,
            selectedElements : selectedElements,
            checkable: checkable,
            detailTemplateHideToggle: detailTemplateHideToggle,
            hideColumns: hideColumns,
            isArray: isArray,
            detailTemplateOpenOnRowSelect: detailTemplateOpenOnRowSelect,
            selectedKey: selectedKey,
            filterRow: filterRow
        }

        let bodyProps = {
            rowIsSelectable:rowIsSelectable,
            toggleSelectedElements:this.toggleSelectedElements.bind(this),
            detailTemplateToggleSelectedElements:this.detailTemplateToggleSelectedElements.bind(this),
            onRowSelect : onRowSelect
        }



        let tableClass = classNames(
            'r-Table',
            { 'e-flex': (props.flex) },
            {'e-selectable' : (props.rowIsSelectable)},
            {'e-selectable' : (detailTemplateOpenOnRowSelect === true || detailTemplateOpenOnRowSelect === 'single')},
            props.className
        )

        let nothingMatchesSearchCriteria = this.state.searchTerm !== '' && activeRows.length === 0;
        
        if ((activeRows.length || dataSource.length) && columns.length) {
            return (
                <TreeRowContent {...tableProps} {...bodyProps} />
            )
        } else return null;
    }
}