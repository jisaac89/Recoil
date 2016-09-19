import * as React from 'react';
import * as classNames from 'classnames';

import './Table.less';

import {arraysEqual} from '../Utils';

import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

interface ITableProps {
    // initial dataSource loaded as prop
    dataSource :  any;
    // columns defined by user
    columns? : Array<any>;
    // a detail template function that returns a view
    detailTemplate? : any;
    // toggle if the table header should show
    hideHeader ? : boolean;
    // how many rows to show
    pageSize ? : number;
    // current page index
    page ? : number;
    // 
    detailTemplateSelectedElements ? : Array<any>;

    selectedElements ? : Array<any>;

    rowIsSelectable ? : boolean;

    checkable ? : boolean;

    detailTemplateHideToggle? : boolean;
    
    hideColumns? : any;

    onRowSelect ? : any;

    pageSizerOptions? : any;

    onPageSizeChange? : any;
    onPageChange? : any;

    sortable ? : boolean;
    
}

interface ITableState {
    dataSource ?: any;
    type ?: string;

    detailTemplateSelectedElements? : any;
    selectedElements? : any;
}

export default class Table extends React.Component<ITableProps,any>{

    constructor(props){
        super(props);
        
        this.state = {
            dataSource : [],
            pageSize: props.pageSize || 10,
            page: props.page || 0,

            detailTemplateSelectedElements : props.detailTemplateSelectedElements || [],
            selectedElements : props.selectedElements || []
        }
    }

    componentDidMount() {
        const self = this;
        self.loadDataSource();
    }

    loadDataSource(){
        const self = this;
        let {dataSource} = self.props;

        let setDataSourceState = (dataSource) => {
            self.setState({
                dataSource : dataSource
            })
        }

        if (Array.isArray(dataSource)) {
            if (typeof dataSource[0] === 'string') {
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

        let selectedElementsArray = selectedElements;

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
                if (Array.isArray(dataSource)) {
                    if (typeof dataSource[0] === 'string') {
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
        let numberPerPage, numberOfPages, renderedDataSource;

        if (pageSize) {
            numberPerPage = pageSize;
            numberOfPages = Math.ceil(dataSource.length / (pageSize));
        } else {
            numberPerPage = pageSize;
            numberOfPages = Math.ceil(dataSource.length / (pageSize));
        }

        let begin = ((page) * parseInt(numberPerPage));
        let end = begin + parseInt(numberPerPage);
        let pageList = dataSource.slice(begin, end);

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
        
        if (columnsArray.length) {
            return (
                <div className="r-Table">
                    <TableFooter {...footerProps} />
                    <table>
                        <TableHead {...tableProps} {...headProps} />
                        <TableBody {...tableProps} {...bodyProps} />
                    </table>
                    <TableFooter {...footerProps} />
                </div>
            )
        } else {
            return (
                <div className="p10 block text-center">
                    <small><strong>Table</strong> - No columns defined.</small>
                </div>
            )
        };
    }
}