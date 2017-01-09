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

import DataSource from '../DataSource/DataSource';

import {IColumn} from './IColumn';
export {IColumn}

export interface ITableProps {
    // initial dataSource loaded as prop
    dataSource ?:  Array<any>;
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
    onCheck ? : (event: React.MouseEvent<any>) => void;
    detailTemplateHideToggle? : boolean;
    hideColumns? : Array<any>;
    onRowSelect ? : (event: React.MouseEvent<any>) => void;
    pageSizerOptions? : Array<any>;
    onPageSizeChange? : (event: React.MouseEvent<any>) => void;
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
    toggleSorting?: any;
    toggleSelectedElements?: any;
    selectAll?: any;
    previousPage?: any;
    nextPage?: any;
    gotoPage?: any;
    firstPage?: any;
    lastPage?: any;
    detailTemplateToggleSelectedElements?: any;
    changePageSize?: any;
    isArray?: any;
    numberOfPages?: any;
    numberPerPage?: any;
    activeRows?: any;
    filteredItems?: any;
    detailTemplateToggleAll?: any;
    searchTerm?: any;
    filterItems?: any;
}

interface ITableState {

}

class Table extends React.Component<ITableProps, ITableState>{
    render() {

        const self = this;
        const props = self.props;

        let {
            selectedKey,
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
            sortType,
            sortKey,
            columns,
            page,
            pageSize,
            detailTemplateSelectedElements,
            selectedElements,
            isArray,
            numberOfPages,
            numberPerPage,
            dataSource,
            activeRows,
            toggleSelectedElements,
            selectAll,
            previousPage,
            nextPage,
            gotoPage,
            firstPage,
            lastPage,
            detailTemplateToggleSelectedElements,
            changePageSize,
            toggleSorting,
            filteredItems,
            filterItems,
            detailTemplateToggleAll,
            searchTerm
        } = props;
        
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
            detailTemplateToggleAll: detailTemplateToggleAll,
            selectAll: selectAll,
            sortable: sortable,
            toggleSorting: toggleSorting,
            onSort: onSort,
            sortType : sortType,
            sortKey: sortKey
        }

        let bodyProps = {
            rowIsSelectable:rowIsSelectable,
            toggleSelectedElements: toggleSelectedElements,
            detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
            onRowSelect : onRowSelect
        }

        let footerProps = {
            currentPage : page,
            numberOfPages : numberOfPages,
            numberPerPage : numberPerPage,
            nextPage: nextPage,
            previousPage: previousPage,
            firstPage: firstPage,
            gotoPage: gotoPage,
            lastPage: lastPage,
            changePageSize: changePageSize,
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
            filterItems: filterItems,
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

        let nothingMatchesSearchCriteria = searchTerm !== '' && activeRows.length === 0;
        
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

export default DataSource(<Table />);