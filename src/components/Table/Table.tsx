import * as React from 'react';
import * as classNames from 'classnames';

import './Table.less';

import {arraysEqual, search} from '../Utils';

import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableSearch from './TableSearch';

interface ITableProps {
    // initial dataSource loaded as prop
    dataSource :  Array<any> | Object;
    // columns defined by user
    columns? : Array<any>;
    // a detail template function that returns a view
    detailTemplate? : (event: React.MouseEvent) => void;
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
    onPageChange? : (event: React.MouseEvent) => void;

    sortable ? : boolean;

    searchableKeys? : Array<any>;
    searchTitle? : string;

    className? : string;
    
}

interface ITableState {
    dataSource ?: any;
    type ?: string;

    detailTemplateSelectedElements? : any;
    selectedElements? : any;

    searchedItems? : any;
}

export default class Table extends React.Component<ITableProps,any>{

    constructor(props){
        super(props);
        
        this.state = {
            dataSource : [],
            pageSize: props.pageSize || 10,
            page: props.page || 0,

            detailTemplateSelectedElements : props.detailTemplateSelectedElements || [],
            selectedElements : props.selectedElements || [],
            
            searchedItems: []
        }
    }

    componentDidMount() {
        const self = this;
        self.loadDataSource(this.props.dataSource);
    }


    componentWillReceiveProps(nextProps) {
        const self = this;
        if (nextProps.dataSource !== self.props.dataSource) {
            self.loadDataSource(nextProps.dataSource);
        }
        if (nextProps.detailTemplateSelectedElements !== self.props.detailTemplateSelectedElements) {
            this.setState({
                detailTemplateSelectedElements: nextProps.detailTemplateSelectedElements
            })
        }
    }

    loadDataSource(dataSource){
        const self = this;
        // let {dataSource} = self.props;

        let setDataSourceState = (dataSource) => {
            self.setState({
                dataSource : dataSource
            })
        }

        if (dataSource instanceof Array) {
            if (typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number') {
                let newDataSource = [];

                dataSource.forEach(element => {
                    newDataSource.push({
                        '_Array' : element
                    })
                });

                setDataSourceState(newDataSource);
                
            } else {
                setDataSourceState(dataSource);
            }
        } else if (typeof dataSource === 'object') {
            setDataSourceState([dataSource]);
        } else {
            setDataSourceState(dataSource)
        }

    }

    detailTemplateToggleAll(dataSource) {
        let {detailTemplateSelectedElements} = this.state;

        this.setState({
            detailTemplateSelectedElements: arraysEqual(dataSource, detailTemplateSelectedElements) ? [] : dataSource
        })
    }

    detailTemplateToggleSelectedElements(element) {
        const self = this;
        let {detailTemplateSelectedElements} = self.state;

        let detailTemplateSelectedElementsArray = detailTemplateSelectedElements;

        if (detailTemplateSelectedElementsArray.includes(element)) {
            for(let i=0; i < detailTemplateSelectedElementsArray.length; i++) {
                if(detailTemplateSelectedElementsArray[i] === element)
                {
                    detailTemplateSelectedElementsArray.splice(i,1);

                    self.setState({
                        detailTemplateSelectedElements : detailTemplateSelectedElementsArray
                    })
                }
            }
        } else {
            detailTemplateSelectedElementsArray.push(element);
            
            self.setState({
                detailTemplateSelectedElements : detailTemplateSelectedElementsArray
            })
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
        let {rowIsSelectable, onCheck} = self.props;

        let selectedElementsArray;

        if (rowIsSelectable === 'single') {
            selectedElementsArray = [];
        } else {
            selectedElementsArray = selectedElements;
        }

        if (selectedElementsArray.includes(element)) {
            for(let i=0; i < selectedElementsArray.length; i++) {
                if(selectedElementsArray[i] === element)
                {
                    selectedElementsArray.splice(i,1);

                    self.setState({
                        selectedElements : selectedElementsArray
                    })
                }
            }
        } else {
            selectedElementsArray.push(element);
            
            self.setState({
                selectedElements : selectedElementsArray
            })

            onCheck ? onCheck(element) : null;
        }
    }


    firstPage() {
        this.setState({
            page: 0
        })
    }

    previousPage() {
        this.setState({
            page: this.state.page -= 1
        })
    }

    nextPage() {
        this.setState({
            page: this.state.page += 1
        })
    }

    lastPage(numberOfPages) {
        this.setState({
            page: numberOfPages - 1
        })
    }

    gotoPage(i) {
        this.setState({
            page: i,
            pageSize: this.state.pageSize,
        })
    }

    changePageSize(pageSize) {
        this.setState({
            pageSize: pageSize,
            page: 0
        })

        this.props.onPageSizeChange ? this.props.onPageSizeChange(pageSize) : null;
    }

    sortCollection(dataSource, key, sortType) {
        const self = this;

        let sortOrder;

        let sortedDataSource = dataSource.sort(function (a, b) {
            switch (typeof a[key]) {
                case ('string'):
                    let itemPrev = a[key].toLowerCase();
                    let itemNext = b[key].toLowerCase();
                    if (itemPrev < itemNext) //string asc
                        return -1
                    if (itemPrev > itemNext)
                        return 1
                    break;
                case ('number'):
                    return a[key] - b[key];
                default:
            }
        })

        if (sortType === 'asc') {
            sortOrder = sortedDataSource;
        } else {
            sortOrder = sortedDataSource.reverse();
        }

        self.setState({
            dataSource: sortOrder,
            page: 0
        })
    }

    toggleSorting(key, sortType) {
        const self = this;
        self.sortCollection(self.state.dataSource, key, sortType);
    }

    filterItems(term, keys) {
        const self = this;
        let state = self.state;

        self.setState({
            searchedItems: search(state.dataSource, term, keys),
            page: 0 
        })
    }

    render() {

        const self = this;
        const props = self.props;
        let {detailTemplate, sortable, onPageChange, hideHeader, detailTemplateHideToggle, rowIsSelectable, checkable, hideColumns, onRowSelect, pageSizerOptions} = props;
        let {columns, dataSource, page, pageSize, detailTemplateSelectedElements, selectedElements} = self.state;

        let columnsArray;

        // if columns props doesnt exist then automatically create columns

        if (props.columns) {
            columnsArray = props.columns;
        } else {
            columnsArray = [];

            if (dataSource.length) {
                if (dataSource instanceof Array) {
                    if (typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number') {
                        columnsArray.push({name : '_Array'});
                    } else {
                        Object.keys(dataSource[0]).map((key) => {
                            columnsArray.push({name: key})
                        })
                    }
                }
            }
        }

        // create the rendered page

        let renderedPage = [];
        let numberPerPage, numberOfPages, renderedDataSource, activeRows;


        if (this.state.searchedItems.length > 0) {
            activeRows = this.state.searchedItems;
        } else {
            activeRows = dataSource
        }

        if (pageSize) {
            numberPerPage = pageSize;
            numberOfPages = Math.ceil(activeRows.length / (pageSize));
        } else {
            numberPerPage = pageSize;
            numberOfPages = Math.ceil(activeRows.length / (pageSize));
        }

        let begin = ((page) * parseInt(numberPerPage));
        let end = begin + parseInt(numberPerPage);
        let pageList = activeRows.slice(begin, end);

        pageList.map((item, index) => {
            renderedPage.push(item);
        })

        // assign the props

        let tableProps = {
            dataSource: renderedPage,
            columns: columnsArray,
            hideHeader: hideHeader,
            detailTemplate: detailTemplate,
            detailTemplateSelectedElements: detailTemplateSelectedElements,
            selectedElements : selectedElements,
            checkable: checkable,
            detailTemplateHideToggle: detailTemplateHideToggle,
            hideColumns: hideColumns
        }

        let headProps = {
            detailTemplateToggleAll: this.detailTemplateToggleAll.bind(this),
            selectAll: this.selectAll.bind(this),
            sortable: sortable,
            toggleSorting: this.toggleSorting.bind(this)
        }

        let bodyProps = {
            rowIsSelectable:rowIsSelectable,
            toggleSelectedElements:this.toggleSelectedElements.bind(this),
            detailTemplateToggleSelectedElements:this.detailTemplateToggleSelectedElements.bind(this),
            onRowSelect : onRowSelect
        }

        let footerProps = {
            currentPage : page,
            numberOfPages : numberOfPages,
            numberPerPage : numberPerPage,
            nextPage : this.nextPage.bind(this),
            previousPage: this.previousPage.bind(this),
            firstPage : this.firstPage.bind(this),
            gotoPage: this.gotoPage.bind(this),
            lastPage: this.lastPage.bind(this),
            changePageSize: this.changePageSize.bind(this),
            pageSizerOptions: pageSizerOptions,
            dataSource: dataSource,
            pageSize: pageSize,
            onPageChange: onPageChange
        }

        let tableSearchProps = {
            filterItems : this.filterItems.bind(this),
            searchableKeys : this.props.searchableKeys,
            searchTitle : this.props.searchTitle
        }

        let tableClass = classNames(
            'r-Table',
            {'e-selectable' : (props.rowIsSelectable)},
            props.className
        )
        
        if (renderedPage.length && columnsArray.length) {
            return (
                <div className={tableClass}>
                    <TableFooter {...footerProps} />
                    <TableSearch {...tableSearchProps} />
                    <table>
                        <TableHead {...tableProps} {...headProps} />
                        <TableBody {...tableProps} {...bodyProps} />
                    </table>
                    <TableFooter {...footerProps} />
                </div>
            )
        } else return null;
    }
}