import { IColumn } from './Table';
import { T } from '../DataSource/DataSource';
import { IRecoil } from '../..';

export interface ITableProps extends IRecoil {
  portal?: boolean;
  // initial dataSource loaded as prop
  dataSource: T[];
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
  onRowSelect?: (
    element?: Array<object>,
    key?: string | number,
    selectedElements?: Array<any> | Object,
    id?: string | number
  ) => void;
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

export interface ITableHeadProps {
  toggleSorting: (dataSource: any, key: string, sortType: any) => void;
  detailTemplateToggleAll?: (dataSource: any) => void;
  selectAll?: (dataSource: any) => void;
  dataSource: T[];
  columns?: Array<IColumn>;
  hideHeader?: boolean;
  hideColumns?: any;
  checkable?: boolean;
  onSort?: Function;
  selectedElements?: Array<any>;
  sortable?: boolean;
  detailTemplate?: (element: any) => JSX.Element;
  detailTemplateSelectedElements?: Array<any>;
  detailTemplateHideToggle?: boolean;
  sortKey?: any;
  hideCheckAll?: boolean;
  sortType?: string;
}

export interface ITableHeadState {
  sortType: string;
  column: string;
  columns: any[];
}

export interface TableBodyProps {
  id?: string;
  portal?: boolean;
  activeRows: any;
  // initial dataSource loaded as prop
  dataSource: Array<any> | Object;
  // columns defined by user
  columns?: Array<IColumn>;
  // a detail template function that returns a view
  detailTemplate?: (element: Array<any>) => JSX.Element;
  selectedElements?: Array<any>;
  detailTemplateOpenAll?: boolean;
  detailTemplateToggleSelectedElements?: boolean;
  detailTemplateSelectedElements?: Array<any>;
  detailTemplateHideToggle?: boolean;
  toggleSelectedElements?: Array<any>;
  rowIsSelectable?: boolean | string;
  checkable?: boolean;
  hideColumns?: Array<any>;
  onRowSelect?: (
    element?: Array<object>,
    key?: string | number,
    selectedElements?: Array<any> | Object,
    id?: string | number
  ) => void;
  isArray: boolean;
  detailTemplateOpenOnRowSelect?: boolean | 'single';
  selectedKey?: string;
  filterRow?: (item: Object) => void;
  filterOpenDetailTemplate?: (item: Object) => void;
  serverSide?: boolean;
  disableSelectedElements?: Array<any>;
  tableDataClassName?: string;
  loadingElements?: any[];
  loadingKey?: string;
}

export interface ITableColumnSelectableProps {
  columns?: IColumn[];
  detailTemplate?: (element: any) => JSX.Element;
  selectedElements?: any;
  element?: any;
  checkable?: boolean;
  selectedKey?: string;
}

export interface ITableColumnDetailProps {
  element: JSX.Element;
  columns?: Array<IColumn>;
  detailTemplate?: (element: any) => JSX.Element;
  detailTemplateOpenAll?: boolean;
  detailTemplateSelectedElements?: any;
  checkable?: boolean;
  selectedKey?: string;
}

export interface ITableColumnProps {
  element: any;
  columns: IColumn[];
  toggleSelectedElements?: any;
  rowIsSelectable?: any;
  selectedElements?: any;
  checkable?: boolean;
  hideColumns?: Array<string>;
  onRowSelect?: (element: any, index: number | string, event?: React.MouseEvent<any>) => void;
  selectedKey?: string;
  index?: number | string;
  isArray: boolean;
  detailTemplateOpenOnRowSelect?: boolean | 'single';
  detailTemplate?: (element: any) => JSX.Element;
  detailTemplateOpenAll?: any;
  detailTemplateToggleSelectedElements?: any;
  detailTemplateSelectedElements?: Array<any>;
  detailTemplateHideToggle?: boolean;
  filterOpenDetailTemplate?: any;
  id?: any;
  disableSelectedElements?: Array<any>;
  tableDataClassName?: string;
  loadingElements?: any;
  loadingKey?: string;
}
