import * as React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

export interface ITableFooterProps {
  gotoPage ? : any;
  currentPage ? : number;
  changePageSize ? : any;
  firstPage ? : any;
  nextPage ? : any;
  numberOfPages ? : number;
  numberPerPage ? : number;
  lastPage ? : any;
  previousPage ? : any;
  pageSizerOptions? : any;
  dataSource ? : any;
  pageSize ? : any;
  onPageChange? : any;
}

export default class TableFooter extends React.Component<ITableFooterProps, {}>{
  gotoPage(i) {
    this.props.gotoPage(i);
    this.props.onPageChange ? this.props.onPageChange(i + 1) : null
  }

  onSelected(item) {
    this.props.changePageSize(item._Array);
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
      dataSource
    } = props;

    let paginationPartial = [];

    for (let i = 0; i < self.props.numberOfPages; i++) {
      if (
        currentPage === i - 1 ||
        currentPage === i ||
        currentPage === i + 1) {
        paginationPartial.push(
          <Button size="small" tabIndex={-1} theme={currentPage === i ? 'primary' : null} onClick={self.gotoPage.bind(self, i)} key={i}>
            {i+1}
          </Button>
        )
      }
    }

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
              <Dropdown rowIsSelectable onChange={this.onSelected.bind(this)} material size="small" title={"Page Size " + numberPerPage} dataSource={pageSizerOptions || ['5', '10', '15']} />
              <Button simple right size="small">{((currentPage + 1) * pageSize) - pageSize + 1 + ' - ' + (currentPage + 1) * pageSize + '' + (' of ' + dataSource.length + ' items')}</Button>
            </Toolbar>
          </div>
        )
    }

  }
}