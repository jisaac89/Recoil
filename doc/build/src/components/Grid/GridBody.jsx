"use strict";
var React = require('react');
var Selectable_1 = require('../Selectable/Selectable');
var Layer_1 = require('../Layer/Layer');
var Door_1 = require('../Door/Door');
var GridRow_1 = require('./GridRow');
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
        const key = props.i;
        return (<tr>
        <td className="p0" colSpan={this.props.columns.length + 1}>
          <Door_1.default open={props.expanded}>
            {self.props.detailTemplate(key, self.props.dataSource[key])}
          </Door_1.default>
        </td>
      </tr>);
    }
}
class GridBody extends React.Component {
    constructor() {
        super();
        this.state = {
            expandedRows: []
        };
    }
    toggleDetailTemplate(i) {
        let expanded = [];
        expanded.push(i);
        this.setState({
            expandedRows: expanded
        });
    }
    render() {
        const self = this;
        const props = self.props;
        let { columns, dataSource } = props;
        let rowArray = [];
        for (let key in self.props.dataSource) {
            if (props.detailTemplate) {
                rowArray.push([<GridRow_1.default expanded={this.state.expandedRows.includes(key)} toggleDetailTemplate={this.toggleDetailTemplate.bind(this)} key={key} i={key} {...props}/>], [<tr>
            <td className="p0" colSpan={this.props.columns.length + 1}>
              <div className="w100 posrel">
                <Selectable_1.default checked={this.state.expandedRows.includes(key)}/>
              </div>
            </td>
          </tr>], [<GridRowTemplate expanded={this.state.expandedRows.includes(key)} i={key} {...props}/>]);
            }
            else {
                rowArray.push([<GridRow_1.default detailTemplate={props.detailTemplate} key={key} i={key} {...props}/>], [<tr>
            <td className="p0" colSpan={this.props.columns.length + 1}>
              <Layer_1.default>
                <Selectable_1.default checked={this.state.expandedRows.includes(key)}/>
              </Layer_1.default>
            </td>
          </tr>]);
            }
        }
        return (<tbody className="r-Grid__Body" style={{ height: this.props.height }}>
        {rowArray}
      </tbody>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridBody;
