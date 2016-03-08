import * as React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';

export default class GridFooter extends React.Component<any,any>{
  public gotoPage(i) {
    this.props.gotoPage(i);
  }

  render() {

    const self = this;

    let paginationPartial = [];

    for (let i = 0; i < self.props.numberOfPages; i++) {
      paginationPartial.push(
        <Button tabIndex={-1} type={this.props.currentPage - 1  === i ? 'primary' : null} onClick={self.gotoPage.bind(self, i)} size="small" key={i}>
          {i + 1}
        </Button>
      )
    }

    return (
      <div className="r-Grid__Footer">
        <Toolbar spacing>
        <Button disabled={this.props.currentPage === 1} tabIndex={-1} onClick={this.props.firstPage} size="small" icon="fast-backward"></Button>
        <Button disabled={this.props.currentPage === 1} tabIndex={-1} onClick={this.props.previousPage} size="small" icon="step-backward"></Button>
        {paginationPartial}
        <Button disabled={this.props.currentPage === this.props.numberOfPages} tabIndex={-1} onClick={this.props.nextPage} size="small" icon="step-forward"></Button>
        <Button disabled={this.props.currentPage === this.props.numberOfPages} tabIndex={-1} onClick={this.props.lastPage} size="small" icon="fast-forward"></Button>
        </Toolbar>
      </div>
    )


  }
}
