import React from 'react';
import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { Toolbar } from '../Toolbar/Toolbar';

export interface IPagerProps {
  gotoPage: (pageNumber: number, event?: React.MouseEvent<HTMLElement>) => void;
  currentPage: number;
  changePageSize: (pageSizeAmount: number, event?: React.MouseEvent<HTMLElement>) => void;
  numberOfPages: number;
  numberPerPage: number;
  pagerSize?: number;
  firstPage?: any;
  nextPage?: any;
  lastPage?: any;
  previousPage?: any;
  dataSource: Array<object>;
  pageSize: number;
  onPageChange?: (pageNumber: number, event?: React.MouseEvent<any>) => void;
  pageSizerOptions?: Array<number>;
  hidePageSize?: boolean;
  rowCount?: number;
  showDataSourceLength?: boolean;
  hideHeader?: boolean;
  title?: string;
  className?: string;
  pageSizeDropDirection?: string;
}

export class Pager extends React.Component<IPagerProps> {
  gotoPage(pageNumber: number) {
    this.props.gotoPage(pageNumber);
    this.props.onPageChange ? this.props.onPageChange(pageNumber) : null;
  }

  onSelected = (pageSizeAmount: number) => evt => {
    this.props.changePageSize(pageSizeAmount);
  };

  renderPager(page: number, pageCount: number, pagerSize: number) {
    const self = this;

    const { currentPage } = this.props;

    let lastPager = page + Math.floor(pagerSize / 2);
    let firstPager = page - Math.ceil(pagerSize / 2) + 1;
    if (firstPager < 0) {
      lastPager -= firstPager;
      firstPager = 0;
    }
    if (lastPager >= pageCount) {
      const difference = lastPager - (pageCount - 1);
      lastPager -= difference;
      firstPager -= difference;
      if (firstPager < 0) {
        firstPager = 0;
      }
    }
    const pagers: JSX.Element[] = [];
    for (let index = firstPager; index <= lastPager; index++) {
      pagers.push(
        <Button
          simple
          block
          size='small'
          tabIndex={-1}
          advanced
          checked={currentPage === index ? true : false}
          onClick={this.gotoPage.bind(self, index)}
          key={index}>
          {index + 1}
        </Button>
      );
    }
    return pagers;
  }

  render() {
    const self = this;

    const props = self.props;

    const {
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
      pagerSize,
      pageSizeDropDirection
    } = props;

    let dataSourceLength;

    if (rowCount || (dataSource && dataSource.length)) {
      dataSourceLength = rowCount || dataSource.length;
    }

    return (
      <div className='r-Pager'>
        <Toolbar flex textCenter flush block noRadius className={props.className}>
          <Button
            simple
            block
            size='small'
            disabled={currentPage === 0}
            tabIndex={-1}
            onClick={this.gotoPage.bind(this, 9)}
            icon='fast-backward'
          />
          <Button
            simple
            block
            size='small'
            disabled={currentPage === 0}
            tabIndex={-1}
            onClick={this.gotoPage.bind(this, this.props.currentPage - 1)}
            icon='step-backward'
          />
          {this.renderPager(currentPage, numberOfPages, pagerSize ? pagerSize : 5)}
          <Button
            simple
            block
            size='small'
            disabled={currentPage === numberOfPages - 1}
            tabIndex={-1}
            onClick={this.gotoPage.bind(this, this.props.currentPage + 1)}
            icon='step-forward'
          />
          <Button
            simple
            block
            size='small'
            disabled={currentPage === numberOfPages - 1}
            tabIndex={-1}
            onClick={this.gotoPage.bind(this, numberOfPages - 1)}
            icon='fast-forward'
          />
          {hidePageSize ? null : (
            <Dropdown
              simple
              block
              hideHeader
              hideDropdownHeader
              rowIsSelectable='single'
              onChange={this.onSelected}
              material
              size='small'
              dropDirection={pageSizeDropDirection ? pageSizeDropDirection : 'down'}
              title={'Page Size ' + pageSize}
              pageSizerOptions={pageSizerOptions}
              dataSource={pageSizerOptions || ['5', '10', '15']}
            />
          )}
        </Toolbar>
        {hidePageSize ? null : (
          <Toolbar flush noRadius className={props.className}>
            <Button simple size='small'>
              {(currentPage + 1) * pageSize -
                pageSize +
                1 +
                ' - ' +
                ((currentPage + 1) * pageSize > dataSourceLength ? dataSourceLength : (currentPage + 1) * pageSize) +
                '' +
                (' of ' + dataSourceLength + ' ' + props.title)}
            </Button>
          </Toolbar>
        )}
      </div>
    );
  }
}
