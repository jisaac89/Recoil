import React from 'react';
import classNames from 'classnames';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableSearch from './TableSearch';
import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';
import Loading from '../Loading/Loading';
import DataSource, { TDataSource } from '../DataSource/DataSource';
import { IColumn } from './IColumn';
import AdvancedLayer from '../Layer/AdvancedLayer';
export { IColumn };

export interface ITableProps {
  id?: string;
  portal?: boolean;
  // initial dataSource loaded as prop
  dataSource: TDataSource[];
  // columns defined by user
  columns: IColumn[];
  // a detail template function that returns a view
  detailTemplate?: (element: TDataSource) => JSX.Element;
  // toggle if the table header should show
  hideHeader?: boolean;
  // how many rows to show
  pageSize?: number;
  // current page index
  page?: number;
  detailTemplateOnOpen?: (element: TDataSource) => void;
  //
  detailTemplateSelectedElements?: TDataSource[];
  selectedElements?: TDataSource[];
  rowIsSelectable?: boolean | 'single' | 'multi';
  checkable?: boolean;
  hideCheckAll: boolean;
  onCheck?: (event: React.MouseEvent<HTMLInputElement>) => void;
  detailTemplateHideToggle?: boolean;
  hideColumns?: string[];
  onRowSelect?: (element: TDataSource[], key: number, selectedElements?: TDataSource[], id?: string) => void;
  pageSizerOptions?: number[];
  onPageSizeChange?: (event: React.MouseEvent<HTMLElement>) => void;
  onPageChange?: (number: number) => void;
  sortable: boolean;
  searchableKeys: string[];
  searchTitle?: string;
  className?: string;
  detailTemplateOpenOnRowSelect?: boolean | 'single';
  rowCount?: number;
  hidePageSize?: boolean;
  onSort: () => void;
  sortType: 'asc' | 'desc';
  sortKey: 'asc' | 'desc';
  showDataSourceLength?: boolean;
  selectedKey?: string;
  flex?: boolean | 'row' | 'row-reverse';
  menuTemplate?: () => JSX.Element;
  focusOnMount?: boolean;
  contentMaxHeight?: number;
  filterRow?: () => boolean;
  filterOpenDetailTemplate?: () => boolean;
  toggleSorting: (dataSource: TDataSource[], key: string, sortType: 'asc' | 'desc') => void;
  toggleSelectedElements: TDataSource[];
  selectAll: (dataSource: TDataSource[]) => void;
  previousPage?: () => void;
  nextPage?: () => void;
  gotoPage?: () => void;
  firstPage?: number;
  lastPage?: number;
  detailTemplateToggleSelectedElements: () => TDataSource[];
  changePageSize?: any;
  isArray: boolean;
  numberOfPages?: number;
  numberPerPage?: number;
  activeRows: string[];
  filteredItems?: TDataSource[];
  detailTemplateToggleAll: (dataSource: TDataSource[]) => void;
  searchTerm?: string;
  filterItems: (searchTerm: string, keys: string[]) => TDataSource[];
  title?: string;
  hideFooter?: boolean;
  scrollToId?: string;
  scrollIf?: boolean;
  loading?: boolean;
  searchValue?: string;
  searchFilter?: () => TDataSource[];
  onSearchChange?: (term: string) => void;
  headerTemplate?: () => void;
  serverSide?: boolean;
  disableSelectedElements: TDataSource[];
  fill?: boolean;
  tableDataClassName?: string;
  loadingElements?: TDataSource[];
  loadingKey?: string;
}

interface ITableState {}

class Table extends React.Component<ITableProps, ITableState> {
  public static defaultProps = {
    dataSource: [],
    activeRows: [],
    columns: [],
    disableSelectedElements: [],
    searchableKeys: [],
    showDataSourceLength: true,
    title: 'items',
    portal: false,
    scrollY: true,
    filterItems: [],

    // relvant defaults
    detailTemplateToggleAll: null,
    detailTemplateHideToggle: false,
    selectAll: false,
    toggleSorting: false,
    onSort: null,
    sortType: 'asc',
    sortKey: '',
    hideCheckAll: false,
    sortable: false,
    detailTemplateToggleSelectedElements: [],
    toggleSelectedElements: [],
    isArray: true
  };

  render() {
    const self = this;
    const props = self.props;

    let {
      disableSelectedElements,
      searchValue,
      selectedKey,
      filterOpenDetailTemplate,
      filterRow,
      contentMaxHeight,
      menuTemplate,
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
      filterItems,
      detailTemplateToggleAll,
      searchTerm,
      title,
      hideFooter,
      scrollToId,
      scrollIf,
      loading,
      hideCheckAll,
      onSearchChange,
      headerTemplate,
      serverSide,
      id,
      portal,
      focusOnMount,
      tableDataClassName,
      loadingElements,
      loadingKey,
      flex,
      searchTitle
    } = props;

    // assign the props

    let tableProps = {
      dataSource: dataSource,
      activeRows: activeRows,
      columns: columns,
      hideHeader: hideHeader,
      detailTemplate: detailTemplate,
      detailTemplateSelectedElements: detailTemplateSelectedElements,
      selectedElements: selectedElements,
      checkable: checkable,
      detailTemplateHideToggle: detailTemplateHideToggle,
      hideColumns: hideColumns,
      isArray: isArray,
      detailTemplateOpenOnRowSelect: detailTemplateOpenOnRowSelect,
      selectedKey: selectedKey,
      filterRow: filterRow,
      filterOpenDetailTemplate: filterOpenDetailTemplate,
      serverSide,
      id,
      portal,
      disableSelectedElements,
      tableDataClassName,
      loadingElements,
      loadingKey
    };

    let headProps = {
      detailTemplateToggleAll: detailTemplateToggleAll,
      selectAll: selectAll,
      sortable: sortable,
      toggleSorting: toggleSorting,
      onSort: onSort,
      sortType: sortType,
      sortKey: sortKey,
      hideCheckAll: hideCheckAll
    };

    let bodyProps = {
      rowIsSelectable: rowIsSelectable,
      toggleSelectedElements: toggleSelectedElements,
      detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
      onRowSelect: onRowSelect
    };

    let footerProps = {
      currentPage: page,
      numberOfPages: numberOfPages,
      numberPerPage: numberPerPage,
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
      showDataSourceLength: showDataSourceLength,
      title: title,
      flex
    };

    let tableSearchProps = {
      filterItems: filterItems,
      searchableKeys: this.props.searchableKeys,
      focusOnMount,
      searchTitle,
      value: searchValue,
      onSearchChange: onSearchChange
    };

    let tableClass = classNames(
      'r-Table',
      { 'e-flex': !!props.flex },
      { 'e-fill': props.fill },
      { 'e-selectable': !!props.rowIsSelectable },
      { 'e-selectable': detailTemplateOpenOnRowSelect === true || detailTemplateOpenOnRowSelect === 'single' },
      props.className
    );

    if (loading) {
      return <Loading />;
    } else if (!!dataSource && dataSource.length && !!columns && columns.length) {
      let nothingMatchesSearchCriteria = searchTerm !== '' && activeRows.length === 0;
      return (
        <div id={props.id ? (portal ? props.id + '-portal' : props.id) : ''} className={tableClass}>
          {headerTemplate ? headerTemplate : null}
          <TableSearch {...tableSearchProps} />
          {menuTemplate ? menuTemplate() : null}
          <AdvancedLayer
            tabIndex={-1}
            scrollY={true}
            theme="light"
            scrollToId={scrollToId}
            scrollIf={scrollIf}
            fill
            style={contentMaxHeight ? { height: contentMaxHeight } : {}}
          >
            {nothingMatchesSearchCriteria ? (
              <Emerge className="e-fill">
                <Toolbar block textCenter className="p10 ptb20">
                  <small>Nothing matches search criteria...</small>
                </Toolbar>
              </Emerge>
            ) : (
              <table tab-index={-1} className="w100">
                <TableHead {...tableProps} {...headProps} />
                <TableBody {...tableProps} {...bodyProps} />
              </table>
            )}
          </AdvancedLayer>
          {nothingMatchesSearchCriteria || hideFooter ? null : <TableFooter {...footerProps} />}
        </div>
      );
    } else {
      return (
        <Emerge className="e-fill">
          <Toolbar block textCenter className="ptb20">
            <Button block size="large" simple>
              No items found
            </Button>
          </Toolbar>
        </Emerge>
      );
    }
  }
}

export default DataSource(<Table />);
