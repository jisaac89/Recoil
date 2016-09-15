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
}

export default class TableFooter extends React.Component<ITableFooterProps, {}>{
  gotoPage(i) {
    this.props.gotoPage(i);
  }

  onSelected(item) {
    this.props.changePageSize(item._Array);
  }

  lastPage(numberOfPages) {
    this.props.lastPage(numberOfPages);
  }

  render() {

    const self = this;

    let paginationPartial = [];

    for (let i = 0; i < self.props.numberOfPages; i++) {
      if (
        self.props.currentPage === i - 1 ||
        self.props.currentPage === i ||
        self.props.currentPage === i + 1) {
        paginationPartial.push(
          <Button size="small" tabIndex={-1} theme={self.props.currentPage === i ? 'primary' : null} onClick={self.gotoPage.bind(self, i)} key={i}>
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
            <Toolbar flush noRadius>
              <Button size="small" disabled={this.props.currentPage === 0} tabIndex={-1} onClick={this.props.firstPage} icon="fast-backward"></Button>
              <Button size="small" disabled={this.props.currentPage === 0} tabIndex={-1} onClick={this.props.previousPage} icon="step-backward"></Button>
              {paginationPartial}
              <Button size="small" disabled={this.props.currentPage === this.props.numberOfPages - 1} tabIndex={-1} onClick={this.props.nextPage} icon="step-forward"></Button>
              <Button size="small" disabled={this.props.currentPage === this.props.numberOfPages - 1} tabIndex={-1} onClick={this.lastPage.bind(this, this.props.numberOfPages)} icon="fast-forward"></Button>
              <Dropdown rowIsSelectable onChange={this.onSelected.bind(this)} material size="small" title={"Page Size " + this.props.numberPerPage} dataSource={this.props.pageSizerOptions || ['5', '10', '15']} />
            </Toolbar>
          </div>
        )
    }

  }
}

// <Dropdown from="top left" onSelected={this.onSelected.bind(this)} title="Page Size" type="selection" data={['5', '10', '15']} />