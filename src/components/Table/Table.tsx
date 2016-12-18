import * as React from 'react';
import * as classNames from 'classnames';

import './Table.less';

import {arraysEqual, search} from '../Utils';

import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableSearch from './TableSearch';
import Layer from '../Layer/Layer';

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
}

interface ITableState {
    dataSource ?: any;
    type ?: string;

    detailTemplateSelectedElements? : any;
    selectedElements? : any;
    sortType ? : "asc" | "desc";
    sortKey ? : string;
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
            
            searchedItems: [],
            sortType : props.sortType || null,
            sortKey : props.sortKey || null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            page: nextProps.page !== this.props.page ? nextProps.page : this.state.page,
        })
        if (nextProps.selectedElements) {
            this.setState({
                selectedElements: nextProps.selectedElements
            })
        }
        if (nextProps.dataSource !== this.props.dataSource && !nextProps.page) {
            this.setState({
                page: 0
            })
        }
    }

    loadDataSource(data){
        const self = this;
        let dataSource = [];

        let setDataSourceState = (data) => {
            dataSource = data
        }

        if (data instanceof Array) {
            if (typeof data[0] === 'string' || typeof data[0] === 'number') {
                let newDataSource = [];

                data.forEach(element => {
                    newDataSource.push(element)
                });

                setDataSourceState(newDataSource);
                
            } else {
                setDataSourceState(data);
            }
        } else if (typeof data === 'object') {
            setDataSourceState([data]);
        } else {
            setDataSourceState(data)
        }

        return dataSource;

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

        let setSelectedElementsState = (data) =>{
            self.setState({
                detailTemplateSelectedElements : data
            })
        }

        if (detailTemplateOpenOnRowSelect === 'single') {
            selectedElementsArray = detailTemplateSelectedElements.length ? [detailTemplateSelectedElements[0]] : [];
        } else {
            selectedElementsArray = detailTemplateSelectedElements.slice();
        }

        if (selectedElementsArray.includes(selectedKey ? element[selectedKey] : element)) {
            selectedElementsArray.map((data, key)=>{
                if(data === selectedKey ? element[selectedKey] : element){
                    selectedElementsArray.splice(key,1);
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
            for(let i=0; i < selectedElementsArray.length; i++) {
                if (selectedElementsArray[i] === (selectedKey ? element[selectedKey] : element))
                {
                    selectedElementsArray.splice(i,1);

                    self.setState({
                        selectedElements : selectedElementsArray
                    })
                }
            }
        } else {
            selectedElementsArray.push(selectedKey ? element[selectedKey]: element);
            
            self.setState({
                selectedElements : selectedElementsArray
            })

            onCheck ? onCheck(selectedKey ? element[selectedKey] : element) : null;
        }
    }


    firstPage() {
        this.setState({
            page: 0
        })
        this.props.onPageChange ? this.props.onPageChange(0) : null
    }

    previousPage() {
        this.setState({
            page: this.state.page -= 1
        });
        this.props.onPageChange ? this.props.onPageChange(this.state.page - 1) : null;
    }

    nextPage() {
        this.setState({
            page: this.state.page += 1
        })
        this.props.onPageChange ? this.props.onPageChange(this.state.page + 1) : null
    }

    lastPage(numberOfPages) {
        this.setState({
            page: numberOfPages - 1
        })
        this.props.onPageChange ? this.props.onPageChange(numberOfPages - 1) : null
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

        self.setState({
            sortKey: key,
            sortType : sortType,
            page: 0
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
            searchedItems: search(this.props.dataSource, term, keys),
            page: 0 
        })
    }

    render() {

        const self = this;
        const props = self.props;
        let {selectedKey, menuTemplate, detailTemplate, showDataSourceLength, onSort, hidePageSize, rowCount, sortable,detailTemplateOpenOnRowSelect, onPageChange, hideHeader, detailTemplateHideToggle, rowIsSelectable, checkable, hideColumns, onRowSelect, pageSizerOptions} = props;
        let {sortType, sortKey, columns, page, pageSize, detailTemplateSelectedElements, selectedElements} = self.state;

        // sorting render

        let dataSource;

        if (this.state.sortType && this.state.sortKey) {
            let sortOrder;
            let key = self.state.sortKey;
            let sortType = self.state.sortType;
            
            let sortedDataSource = self.loadDataSource(self.props.dataSource).sort(function (a, b) {
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

            dataSource = self.loadDataSource(sortOrder);
        } else {
            dataSource = self.loadDataSource(self.props.dataSource);
        }

        let columnsArray;
        let isArray = false;

        // if columns props doesnt exist then automatically create columns

        if (dataSource instanceof Array) {
            if (typeof dataSource[0] === 'string' || typeof dataSource[0] === 'number') {
                isArray = true;
            } 
        }

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

        if (rowCount) {
            numberPerPage = pageSize;
            numberOfPages = Math.ceil(rowCount / pageSize);
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
            dataSource: rowCount ? dataSource : renderedPage,
            columns: columnsArray,
            hideHeader: hideHeader,
            detailTemplate: detailTemplate,
            detailTemplateSelectedElements: detailTemplateSelectedElements,
            selectedElements : selectedElements,
            checkable: checkable,
            detailTemplateHideToggle: detailTemplateHideToggle,
            hideColumns: hideColumns,
            isArray: isArray,
            detailTemplateOpenOnRowSelect: detailTemplateOpenOnRowSelect,
            selectedKey: selectedKey
        }

        let headProps = {
            detailTemplateToggleAll: this.detailTemplateToggleAll.bind(this),
            selectAll: this.selectAll.bind(this),
            sortable: sortable,
            toggleSorting: this.toggleSorting.bind(this),
            onSort: onSort,
            sortType : sortType,
            sortKey: sortKey
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
            onPageChange: onPageChange,
            rowCount: rowCount,
            hidePageSize: hidePageSize,
            hideHeader: hideHeader,
            showDataSourceLength: showDataSourceLength
        }

        let tableSearchProps = {
            filterItems : this.filterItems.bind(this),
            searchableKeys : this.props.searchableKeys,
            searchTitle : this.props.searchTitle
        }

        let tableClass = classNames(
            'r-Table',
            { 'e-flex': (props.flex) },
            {'e-selectable' : (props.rowIsSelectable)},
            {'e-selectable' : (detailTemplateOpenOnRowSelect === true || detailTemplateOpenOnRowSelect === 'single')},
            props.className
        )
        
        if ((renderedPage.length || dataSource.length) && columnsArray.length) {
            return (
                <div className={tableClass}>
                    <TableSearch {...tableSearchProps} />
                    {menuTemplate ? menuTemplate() : null}
                    <Layer scroll fill>
                        <table className="w100">
                            <TableHead {...tableProps} {...headProps} />
                            <TableBody {...tableProps} {...bodyProps} />
                        </table>
                    </Layer>
                    <TableFooter {...footerProps} hidePageSize />
                </div>
            )
        } else return null;
    }
}