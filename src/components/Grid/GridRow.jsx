"use strict";
var React = require('react');
var Button_1 = require('../Button/Button');
var GridColumn_1 = require('./GridColumn');
class GridRow extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false
        };
    }
    onSelect(key, item) {
        const self = this;
        self.props.onSelect(key, item);
        if (self.props.openOnSelect) {
            self.toggleDetailTemplate(key);
        }
    }
    toggleDetailTemplate(i) {
        this.props.toggleDetailTemplate(i);
    }
    render() {
        const self = this;
        const props = self.props;
        let { columns, dataSource, i } = props;
        let columnArray = [];
        for (let x = 0; x < columns.length; x++) {
            columnArray.push(<GridColumn_1.default key={x} dataSource={dataSource} i={i} x={x} columns={columns}/>);
        }
        let selectedItem;
        let selectEvent;
        if (props.onSelect) {
            selectedItem = props.selected.includes(i);
        }
        if (props.detailTemplate) {
            return (<tr onClick={this.props.onSelect ? this.onSelect.bind(this, i, self.props.dataSource[i]) : null} className={"r-Grid__Row" + (selectedItem ? ' selected' : '')}>
          <td className="p0" width={5}>
            <Button_1.default className="p5 ps10" ghost onClick={this.toggleDetailTemplate.bind(this, i)} tabIndex={-1} icon={this.props.expanded ? "caret-down" : "caret-right"}>
            </Button_1.default>
          </td>
          {columnArray}
        </tr>);
        }
        else {
            return (<tr onClick={this.props.onSelect ? this.onSelect.bind(this, i, self.props.dataSource[i]) : null} className={"r-Grid__Row" + (selectedItem ? ' selected' : '')}>
          {columnArray}
        </tr>);
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridRow;
