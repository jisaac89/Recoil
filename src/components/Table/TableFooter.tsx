import * as React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

import Pager from '../Pager/Pager';

export interface ITableFooterProps {
  gotoPage ? : (event: React.MouseEvent) => void;
  currentPage ? : number;
  changePageSize ? : (event: React.MouseEvent) => void;
  firstPage ? : (event: React.MouseEvent) => void;
  nextPage ? : (event: React.MouseEvent) => void;
  numberOfPages ? : number;
  numberPerPage ? : number;
  lastPage ? : (event: React.MouseEvent) => void;
  previousPage ? : (event: React.MouseEvent) => void;
  dataSource ? : Array<any>;
  pageSize ? : number;
  onPageChange? : (event: React.MouseEvent) => void;
  pageSizerOptions?: Array<any>;
  hidePageSize?: boolean;
  rowCount?: number;
  showDataSourceLength?: boolean;
  hideHeader?: boolean;
}

export default class TableFooter extends React.Component<ITableFooterProps, {}>{

  render() {

    const self = this;

    let props = self.props;

    let {
      currentPage,
      firstPage,
      previousPage,
      nextPage,
      lastPage,
      gotoPage,
      pageSize,
      pageSizerOptions,
      numberOfPages,
      numberPerPage,
      dataSource,
      rowCount,
      hidePageSize,
      showDataSourceLength,
      hideHeader
    } = props;

     
      return (
          <Pager {...props} />
      )

  }
}