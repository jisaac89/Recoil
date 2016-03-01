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
        <Button type={this.props.currentPage - 1  === i ? 'primary' : null} onClick={self.gotoPage.bind(self, i)} size="small" key={i}>
          {i}
        </Button>
      )
    }

    return (
      <Toolbar spacing className="mt10">
        <Button onClick={this.props.firstPage} size="small" icon="fast-backward"></Button>
        <Button onClick={this.props.previousPage} size="small" icon="step-backward"></Button>
        {paginationPartial}
        <Button onClick={this.props.nextPage} size="small" icon="step-forward"></Button>
        <Button onClick={this.props.lastPage} size="small" icon="fast-forward"></Button>
      </Toolbar>
    )


  }
}
