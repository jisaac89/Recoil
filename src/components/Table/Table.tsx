import classNames from 'classnames';
import React from 'react';
import { Button } from '../Button/Button';
import { DataSource } from '../DataSource/DataSource';
import { Emerge } from '../Emerge/Emerge';
import { AdvancedLayer } from '../Layer/AdvancedLayer';
import { Loading } from '../Loading/Loading';
import { Toolbar } from '../Toolbar/Toolbar';
import { IColumn } from './IColumn';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableHead } from './TableHead';
import { TableSearch } from './TableSearch';
export { IColumn };

export interface ITableProps {
  id?: string;
  portal?: boolean;
  // initial dataSource loaded as prop
  dataSource: Array<Object> | Array<number> | Array<string>;
  // columns defined by user
  columns?: Array<IColumn>;
  // a detail template function that returns a view
  detailTemplate?: (element: Array<Object>) => JSX.Element;
  // toggle if the table header should show
  hideHeader?: boolean;
  // how many rows to show
  pageSize?: number;
  // current page index
  page?: number;
  detailTemplateOnOpen?: (element: Array<Object>) => any;
  //
  detailTemplateSelectedElements?: Array<Object>;
  selectedElements?: Array<Object>;
  rowIsSelectable?: boolean | 'single' | 'multi';
  checkable?: boolean;
  hideCheckAll?: boolean;
  onCheck?: (event: React.MouseEvent<HTMLInputElement>) => void;
  detailTemplateHideToggle?: boolean;
  hideColumns?: Array<string>;
  onRowSelect?: (element?: Array<Object>, key?: string | number, selectedElements?: Array<Object>, id?: string) => void;
  pageSizerOptions?: Array<number>;
  onPageSizeChange?: (event: React.MouseEvent<HTMLElement>) => void;
  onPageChange?: any;
  sortable?: boolean;
  searchableKeys?: Array<any>;
  searchTitle?: string;
  className?: string;
  detailTemplateOpenOnRowSelect?: boolean | 'single';
  rowCount?: number;
  hidePageSize?: boolean;
  onSort?: Function;
  sortType?: 'asc' | 'desc';
  sortKey?: string;
  showDataSourceLength?: boolean;
  selectedKey?: string;
  flex?: boolean | 'row' | 'row-reverse';
  menuTemplate?: any;
  focusOnMount?: boolean;
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
  title?: string;
  hideFooter?: boolean;
  scrollToId?: any;
  scrollIf?: any;
  loading?: boolean;
  searchValue?: string;
  searchFilter?: any;
  onSearchChange?: (term: string) => void;
  headerTemplate?: () => void;
  serverSide?: boolean;
  disableSelectedElements?: Array<any>;
  fill?: boolean;
  tableDataClassName?: string;
  loadingElements?: any[];
  loadingKey?: string;
}

interface ITableState {}

class TableData extends React.Component<ITableProps, ITableState> {
  public static defaultProps = {
    showDataSourceLength: true,
    title: 'items',
    portal: false,
    disableSelectedElements: [],
    scrollY: true
  };

  render() {
    const self = this;
    const props = self.props;

    const {
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

    const tableProps = {
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

    const headProps = {
      detailTemplateToggleAll: detailTemplateToggleAll,
      selectAll: selectAll,
      sortable: sortable,
      toggleSorting: toggleSorting,
      onSort: onSort,
      sortType: sortType,
      sortKey: sortKey,
      hideCheckAll: hideCheckAll
    };

    const bodyProps = {
      rowIsSelectable: rowIsSelectable,
      toggleSelectedElements: toggleSelectedElements,
      detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
      onRowSelect: onRowSelect
    };

    const footerProps = {
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

    const tableSearchProps = {
      filterItems: filterItems,
      searchableKeys: this.props.searchableKeys,
      focusOnMount,
      searchTitle,
      value: searchValue,
      onSearchChange: onSearchChange
    };

    const tableClass = classNames(
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
      const nothingMatchesSearchCriteria = searchTerm !== '' && activeRows.length === 0;
      return (
        <div id={props.id ? (portal ? props.id + '-portal' : props.id) : null} className={tableClass}>
          {headerTemplate ? headerTemplate : null}
          <TableSearch {...tableSearchProps} />
          {menuTemplate ? menuTemplate() : null}
          <AdvancedLayer
            tabIndex={-1}
            scrollY={true}
            theme='light'
            scrollToId={scrollToId}
            scrollIf={scrollIf}
            fill
            style={contentMaxHeight ? { height: contentMaxHeight } : null}>
            {nothingMatchesSearchCriteria ? (
              <Emerge className='e-fill'>
                <Toolbar block textCenter className='p10 ptb20'>
                  <small>Nothing matches search criteria...</small>
                </Toolbar>
              </Emerge>
            ) : (
              <table tab-index={-1} className='w100'>
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
        <Emerge className='e-fill'>
          <Toolbar block textCenter className='ptb20'>
            <Button block size='large' simple>
              No items found
            </Button>
          </Toolbar>
        </Emerge>
      );
    }
  }
}

export const Table = DataSource(<TableData />);
