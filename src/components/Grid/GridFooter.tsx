import * as React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

export default class GridFooter extends React.Component<any,any>{
  public gotoPage(i) {
    this.props.gotoPage(i);
  }

  public onSelected(item) {
    this.props.changePageSize(item);
  }

  render() {

    const self = this;

    let paginationPartial = [];

    for (let i = 0; i < self.props.numberOfPages; i++) {
      paginationPartial.push(
        <Button tabIndex={-1} type={this.props.currentPage - 1  === i ? 'primary' : null} onClick={self.gotoPage.bind(self, i)} key={i}>
          {i + 1}
        </Button>
      )
    }

    return (
      <div className="r-Grid__Footer">
        <Toolbar spacing>
          <Button disabled={this.props.currentPage === 1} tabIndex={-1} onClick={this.props.firstPage} icon="fast-backward"></Button>
          <Button disabled={this.props.currentPage === 1} tabIndex={-1} onClick={this.props.previousPage} icon="step-backward"></Button>
          {paginationPartial}
          <Button disabled={this.props.currentPage === this.props.numberOfPages} tabIndex={-1} onClick={this.props.nextPage} icon="step-forward"></Button>
          <Button disabled={this.props.currentPage === this.props.numberOfPages} tabIndex={-1} onClick={this.props.lastPage} icon="fast-forward"></Button>
          <Dropdown onSelected={this.onSelected.bind(this)} title="Page Size" type="selection" data={['5', '10', '15']} />
        </Toolbar>
      </div>
    )


  }
}
