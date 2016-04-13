"use strict";
const React = require('react');
const Selectable_1 = require('../Selectable/Selectable');
const Door_1 = require('../Door/Door');
const GridRow_1 = require('./GridRow');
class SelectableGridRow extends React.Component {
    render() {
        return (<div className="w100 posrel">
        <Selectable_1.default checked={this.props.selectedItem}/>
      </div>);
    }
}
class GridRowTemplate extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }
    render() {
        const self = this;
        const props = self.props;
        const i = props.i;
        return (<Door_1.default open={props.expanded}>
        {self.props.detailTemplate(i, self.props.dataSource[i])}
      </Door_1.default>);
    }
}
class GridBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedRows: [],
            selected: props.selected || []
        };
    }
    toggleDetailTemplate(i) {
        let expanded = [];
        expanded.push(i);
        this.setState({
            expandedRows: expanded
        });
    }
    onRowSelect(item) {
        if (this.props.rowIsSelectable) {
            let selected;
            if (this.props.rowIsSelectableType === 'single') {
                selected = [];
            }
            else {
                selected = this.state.selected;
            }
            selected.push(item);
            this.setState({
                selected: selected
            });
        }
        else if (this.props.onRowSelect) {
            this.props.onRowSelect(item);
        }
    }
    render() {
        let Array;
        const self = this;
        const props = self.props;
        let { columns, dataSource } = props;
        let selectedItem;
        let rowArray = [];
        for (let key in self.props.dataSource) {
            let item = self.props.dataSource[key];
            let selectedItem;
            if (this.state.selected) {
                if (props.selectedKey) {
                    selectedItem = this.props.selected.includes(item[this.props.selectedKey]);
                }
                else {
                    selectedItem = this.state.selected.includes(item);
                }
            }
            rowArray.push([<GridRow_1.default expanded={this.props.detailTemplateOpenOnSelect ? selectedItem : this.state.expandedRows.length > 0 ? this.state.expandedRows.includes(key) : false} toggleDetailTemplate={this.props.detailTemplate ? this.toggleDetailTemplate.bind(this) : null} key={key} i={key} selected={this.state.selected} item={item} selectedKey={this.props.selectedKey} dataSource={this.props.dataSource} columns={this.props.columns} onRowSelect={this.onRowSelect.bind(this)} detailTemplate={this.props.detailTemplate} selectedItem={selectedItem} hideColumns={this.props.hideColumns}/>], [<tr key={key}>
          <td className="p0" colSpan={this.props.columns.length + 1}>
            <SelectableGridRow onRowSelect={this.props.onRowSelect} item={item} selected={this.state.selected} selectedItem={selectedItem} selectedKey={this.props.selectedKey}/>
            {this.props.detailTemplate ? <GridRowTemplate detailTemplate={self.props.detailTemplate} dataSource={self.props.dataSource} expanded={this.props.detailTemplateOpenOnSelect ? selectedItem : this.state.expandedRows.length > 0 ? this.state.expandedRows.includes(key) : false} i={key}/> : null}
          </td>
        </tr>]);
        }
        return (<tbody className="r-Grid__Body w100" style={{ height: this.props.height }}>
        {rowArray}
      </tbody>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridBody;
