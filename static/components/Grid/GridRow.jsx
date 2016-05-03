"use strict";
var React = require('react');
var Button_1 = require('../Button/Button');
var GridColumn_1 = require('./GridColumn');
class GridRow extends React.Component {
    onRowSelect(item) {
        this.props.onRowSelect(item);
    }
    toggleDetailTemplate(i) {
        this.props.toggleDetailTemplate(i);
    }
    render() {
        const self = this;
        const props = self.props;
        let { columns, dataSource, i, onRowSelect, detailTemplateOpenOnHover, expanded } = props;
        let item = self.props.dataSource[i];
        let columnArray = [];
        for (let x = 0; x < columns.length; x++) {
            columnArray.push(<GridColumn_1.default key={x} dataSource={dataSource} i={i} x={x} columns={columns} hideColumns={props.hideColumns} columnTemplate={props.columnTemplate}/>);
        }
        let selectEvent;
        if (props.detailTemplate) {
            return (<tr onMouseEnter={detailTemplateOpenOnHover ? self.toggleDetailTemplate.bind(this, i) : null} onClick={this.props.onRowSelect ? this.onRowSelect.bind(this, item) : null} className={"r-Grid__Row" + (this.props.selectedItem ? ' e-selected' : '')}>
          <td className="p0" width={5}>
            <Button_1.default className="p5 ps10" ghost onClick={this.toggleDetailTemplate.bind(this, i)} tabIndex={-1} icon={expanded ? "caret-down" : "caret-right"}>
            </Button_1.default>
          </td>
          {columnArray}
        </tr>);
        }
        else {
            return (<tr onClick={this.props.onRowSelect ? this.onRowSelect.bind(this, item) : null} className={"r-Grid__Row" + (this.props.selectedItem ? ' e-selected' : '')}>
          {columnArray}
        </tr>);
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridRow;
