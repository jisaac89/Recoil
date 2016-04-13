"use strict";
const React = require('react');
const Button_1 = require('../Button/Button');
class GridColumn extends React.Component {
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        let { dataSource, columns, i, x } = props;
        let columnPartial = () => {
            if (columns[x].tabbable) {
                return (<Button_1.default>
              {dataSource[i][columns[x].name]}
            </Button_1.default>);
            }
            else if (typeof dataSource[i][columns[x].name] === 'object' && columns[x].template) {
                return (<div>
              {columns[x].template(dataSource[i])}
            </div>);
            }
            else if (typeof dataSource[i][columns[x].name] === 'object') {
                return (<span><strong>hasObject</strong></span>);
            }
            else {
                return dataSource[i][columns[x].name];
            }
        };
        if (props.hideColumns && props.hideColumns.includes(columns[x].name)) {
            return null;
        }
        else {
            return (<td className="r-Grid__Row__Column" style={{ width: columns[x].width }} key={i + x}>
          {columnPartial()}
        </td>);
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridColumn;
