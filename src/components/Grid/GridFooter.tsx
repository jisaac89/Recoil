import * as React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

export interface IGridFooterProps {
  gotoPage ? : any;
  currentPage ? : number;
  changePageSize ? : any;
  firstPage ? : any;
  nextPage ? : any;
  numberOfPages ? : number;
  numberPerPage ? : number;
  lastPage ? : any;
  previousPage ? : any;
}

export default class GridFooter extends React.Component<IGridFooterProps, {}>{
  gotoPage(i) {
    this.props.gotoPage(i);
  }

  onSelected(item) {
    this.props.changePageSize(item);
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
          <Button size="small" tabIndex={-1} type={self.props.currentPage === i ? 'primary' : null} onClick={self.gotoPage.bind(self, i)} key={i}>
            {i}
          </Button>
        )
      }
    }

    return (
      <div className="r-Grid__Footer">
        <Toolbar flush>
          <Button size="small" disabled={this.props.currentPage === 0} tabIndex={-1} onClick={this.props.firstPage} icon="fast-backward"></Button>
          <Button size="small" disabled={this.props.currentPage === 0} tabIndex={-1} onClick={this.props.previousPage} icon="step-backward"></Button>
          {paginationPartial}
          <Button size="small" disabled={this.props.currentPage === this.props.numberOfPages} tabIndex={-1} onClick={this.props.nextPage} icon="step-forward"></Button>
          <Button size="small" disabled={this.props.currentPage === this.props.numberOfPages} tabIndex={-1} onClick={this.lastPage.bind(this, this.props.numberOfPages)} icon="fast-forward"></Button>
        </Toolbar>
      </div>
    )


  }
}

// <Dropdown from="top left" onSelected={this.onSelected.bind(this)} title="Page Size" type="selection" data={['5', '10', '15']} />