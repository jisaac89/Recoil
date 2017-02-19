import * as React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

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
  title?: string;
  pagerSize? : any;
  className?: any;
}

export default class Pager extends React.Component<ITableFooterProps, {}>{

  gotoPage(i: any) {
    this.props.gotoPage(i);
    this.props.onPageChange ? this.props.onPageChange(i) : null
  }

  onSelected(item : any) {
    this.props.changePageSize(item);
  }

  lastPage(numberOfPages : React.MouseEvent<any>) {
    this.props.lastPage(numberOfPages);
  }

  renderPager(page: number, pageCount: number, pagerSize: number) {

      const self = this;

      let {
          currentPage,
          gotoPage
      } = this.props;

      var lastPager = page + Math.floor(pagerSize / 2);
      var firstPager = page - Math.ceil(pagerSize / 2) + 1;
      if (firstPager < 0) {
          lastPager -= firstPager;
          firstPager = 0;
      }
      if (lastPager >= pageCount) {
          var difference = lastPager - (pageCount - 1);
          lastPager -= difference;
          firstPager -= difference;
          if (firstPager < 0) {
              firstPager = 0;
          }
      }
      var pagers = [];
      for (var index = firstPager; index <= lastPager; index++) {
          pagers.push(
              <Button simple block size="small" tabIndex={-1} advanced checked={currentPage === index ? true : false} onClick={gotoPage.bind(self, index) } key={index}>
                  {index + 1}
              </Button>
          );
      }
      return pagers;
  }

  render() {

    const self = this;

    let props = self.props;

    let {
      currentPage,
      firstPage,
      previousPage,
      nextPage,
      pageSize,
      pageSizerOptions,
      numberOfPages,
      dataSource,
      rowCount,
      hidePageSize,
      pagerSize
    } = props;

    let dataSourceLength;

    if (rowCount || dataSource && dataSource.length){
        dataSourceLength = rowCount || dataSource.length;
    }

      return (
          <div className="r-Pager">
              {(() => {
                  if (numberOfPages !== 1) {
                      return (
                          <Toolbar flex textCenter flush block noRadius className={props.className}>
                              <Button simple block size="small" disabled={currentPage === 0} tabIndex={-1} onClick={firstPage} icon="fast-backward"></Button>
                              <Button simple block size="small" disabled={currentPage === 0} tabIndex={-1} onClick={previousPage} icon="step-backward"></Button>
                              {this.renderPager(currentPage, numberOfPages, pagerSize ? pagerSize : 5) }
                              <Button simple block size="small" disabled={currentPage === numberOfPages - 1} tabIndex={-1} onClick={nextPage} icon="step-forward"></Button>
                              <Button simple block size="small" disabled={currentPage === numberOfPages - 1} tabIndex={-1} onClick={this.lastPage.bind(this, numberOfPages) } icon="fast-forward"></Button>
                              {hidePageSize ? null : <Dropdown simple block hideHeader hideDropdownHeader rowIsSelectable="single" onChange={this.onSelected.bind(this) } material size="small" title={"Page Size " + pageSize} pageSizerOptions={pageSizerOptions} dataSource={pageSizerOptions || ['5', '10', '15']} /> }
                          </Toolbar>
                      )
                  } else return null
              })() }
              {hidePageSize ? null : <Toolbar flush noRadius className={props.className}><Button simple size="small">{((currentPage + 1) * pageSize) - pageSize + 1 + ' - ' + (((currentPage + 1) * pageSize) > dataSourceLength ? dataSourceLength : (currentPage + 1) * pageSize) + '' + (' of ' + dataSourceLength + ' ' + props.title) }</Button></Toolbar>}
          </div>
      )

  }
}