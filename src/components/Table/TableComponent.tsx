import * as React from 'react';
import * as classNames from 'classnames';

import './Table.less';

import {arraysEqual, search, branchIn} from '../Utils';

import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableSearch from './TableSearch';
import Layer from '../Layer/Layer';
import Toolbar from '../Toolbar/Toolbar';

import {IColumn} from './IColumn';
export {IColumn}

interface ITableProps {
    // initial dataSource loaded as prop
    dataSource: any;
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
    filterOpenDetailTemplate?: any;

    nextPage?: any;
    previousPage?: any;
    firstPage?: any;
    lastPage?: any;
    gotoPage?: any;
    toggleSorting?: any;
    changePageSize?: any;
    filterItems?: any;
    activeRows?: any;
    isArray?: any;
    numberOfPages?: number;
    numberPerPage?: any;
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
            // table selected options
            detailTemplateSelectedElements: props.detailTemplateSelectedElements || [],
            selectedElements: props.selectedElements || [],
        }
    }

    componentWillReceiveProps(nextProps) {
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

    render() {

        const self = this;
        const props = self.props;

        let {
            selectedKey,
            nextPage,
            previousPage,
            firstPage,
            lastPage,
            gotoPage,
            filterOpenDetailTemplate,
            filterRow,
            contentMaxHeight,
            menuTemplate,
            focusOnMount,
            detailTemplate,
            showDataSourceLength,
            onSort,
            hidePageSize,
            rowCount,
            sortable,
            detailTemplateOpenOnRowSelect,
            onPageChange,
            hideHeader,
            detailTemplateHideToggle,
            rowIsSelectable,
            checkable,
            hideColumns,
            onRowSelect,
            pageSizerOptions,
            dataSource,
            columns,
            activeRows,
            isArray,
            sortKey,
            sortType,
            page,
            pageSize,
            numberOfPages,
            numberPerPage,
        } = props;

        let {detailTemplateSelectedElements, selectedElements} = self.state;

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
            filterRow: filterRow,
            filterOpenDetailTemplate: filterOpenDetailTemplate
        }

        let headProps = {
            detailTemplateToggleAll: this.detailTemplateToggleAll.bind(this),
            selectAll: this.selectAll.bind(this),
            sortable: sortable,
            toggleSorting: this.props.toggleSorting,
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
            nextPage: this.props.nextPage,
            previousPage: this.props.previousPage,
            firstPage: this.props.firstPage,
            gotoPage: this.props.gotoPage,
            lastPage: this.props.lastPage,
            changePageSize: this.props.changePageSize,
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
            filterItems : this.props.filterItems,
            searchableKeys : this.props.searchableKeys,
            focusOnMount: this.props.focusOnMount,
            searchTitle : this.props.searchTitle,
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
                <div className={tableClass}>
                    <TableSearch {...tableSearchProps} />
                    {menuTemplate ? menuTemplate() : null}
                    <Layer scroll fill style={contentMaxHeight ? {height : contentMaxHeight} : null}>
                        {
                            nothingMatchesSearchCriteria ?
                                <Toolbar block textCenter className="p10">Nothing matches search criteria...</Toolbar>
                            :
                                <table className="w100" >
                                    <TableHead {...tableProps} {...headProps} />
                                    <TableBody {...tableProps} {...bodyProps} />
                                </table>
                        }
                    </Layer>
                    {nothingMatchesSearchCriteria ? null : <TableFooter {...footerProps} hidePageSize />}
                </div>
            )
        } else return null;
    }
}