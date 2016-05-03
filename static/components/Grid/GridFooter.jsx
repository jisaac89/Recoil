"use strict";
var React = require('react');
var Toolbar_1 = require('../Toolbar/Toolbar');
var Button_1 = require('../Button/Button');
var Dropdown_1 = require('../Dropdown/Dropdown');
class GridFooter extends React.Component {
    gotoPage(i) {
        this.props.gotoPage(i);
    }
    onSelected(item) {
        this.props.changePageSize(item);
    }
    render() {
        const self = this;
        let paginationPartial = [];
        for (let i = 0; i < self.props.numberOfPages; i++) {
            paginationPartial.push(<Button_1.default tabIndex={-1} type={this.props.currentPage - 1 === i ? 'primary' : null} onClick={self.gotoPage.bind(self, i)} key={i}>
          {i + 1}
        </Button_1.default>);
        }
        return (<div className="r-Grid__Footer">
        <Toolbar_1.default spacing>
          <Button_1.default disabled={this.props.currentPage === 1} tabIndex={-1} onClick={this.props.firstPage} icon="fast-backward"></Button_1.default>
          <Button_1.default disabled={this.props.currentPage === 1} tabIndex={-1} onClick={this.props.previousPage} icon="step-backward"></Button_1.default>
          {paginationPartial}
          <Button_1.default disabled={this.props.currentPage === this.props.numberOfPages} tabIndex={-1} onClick={this.props.nextPage} icon="step-forward"></Button_1.default>
          <Button_1.default disabled={this.props.currentPage === this.props.numberOfPages} tabIndex={-1} onClick={this.props.lastPage} icon="fast-forward"></Button_1.default>
          <Dropdown_1.default onSelected={this.onSelected.bind(this)} title="Page Size" type="selection" data={['5', '10', '15']}/>
        </Toolbar_1.default>
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridFooter;
