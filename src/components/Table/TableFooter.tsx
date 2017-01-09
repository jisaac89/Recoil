import * as React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

import Pager from '../Pager/Pager';

export interface ITableFooterProps {
  gotoPage ? : (event: React.MouseEvent<any>) => void;
  currentPage ? : number;
  changePageSize ? : (event: React.MouseEvent<any>) => void;
  firstPage ? : (event: React.MouseEvent<any>) => void;
  nextPage ? : (event: React.MouseEvent<any>) => void;
  numberOfPages ? : number;
  numberPerPage ? : number;
  lastPage ? : (event: React.MouseEvent<any>) => void;
  previousPage ? : (event: React.MouseEvent<any>) => void;
  dataSource ? : Array<any>;
  pageSize ? : number;
  onPageChange? : (event: React.MouseEvent<any>) => void;
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