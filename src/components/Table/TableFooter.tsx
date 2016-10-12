import * as React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

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
}

export default class TableFooter extends React.Component<ITableFooterProps, {}>{
  gotoPage(i) {
    this.props.gotoPage(i);
    this.props.onPageChange ? this.props.onPageChange(i) : null
  }

  onSelected(item) {
    this.props.changePageSize(item);
  }

  lastPage(numberOfPages) {
    this.props.lastPage(numberOfPages);
  }

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
      hidePageSize
    } = props;

    let paginationPartial = [];

    for (let i = 0; i < self.props.numberOfPages; i++) {
      if (
        currentPage === i - 1 ||
        currentPage === i - 2 ||
        currentPage === i + 2 ||
        currentPage === i ||
        currentPage === i + 1) {
        paginationPartial.push(
          <Button size="small" tabIndex={-1} advanced checked={currentPage === i ? true : false} onClick={self.gotoPage.bind(self, i)} key={i}>
            {i + 1}
          </Button>
        )
      }
    }

    let dataSourceLength = rowCount || dataSource.length;

    if(this.props.numberOfPages === 1) {
      return null
    } else {
        return (
          <div className="r-TableFooter">
            <Toolbar block flush noRadius>
              <Button size="small" disabled={currentPage === 0} tabIndex={-1} onClick={firstPage} icon="fast-backward"></Button>
              <Button size="small" disabled={currentPage === 0} tabIndex={-1} onClick={previousPage} icon="step-backward"></Button>
              {paginationPartial}
              <Button size="small" disabled={currentPage === this.props.numberOfPages - 1} tabIndex={-1} onClick={nextPage} icon="step-forward"></Button>
              <Button size="small" disabled={currentPage === this.props.numberOfPages - 1} tabIndex={-1} onClick={this.lastPage.bind(this, numberOfPages)} icon="fast-forward"></Button>
              {hidePageSize ? null : <Dropdown hideHeader rowIsSelectable="single" onChange={this.onSelected.bind(this) } material size="small" title={"Page Size " + pageSize} pageSizerOptions={pageSizerOptions} dataSource={pageSizerOptions || ['5', '10', '15']} />}
              <Button simple right size="small">{((currentPage + 1) * pageSize) - pageSize + 1 + ' - ' + (((currentPage + 1) * pageSize) > dataSourceLength ? dataSourceLength : (currentPage + 1) * pageSize) + '' + (' of ' + dataSourceLength + ' items')}</Button>
            </Toolbar>
          </div>
        )
    }

  }
}