"use strict";
var React = require('react');
var Layer_1 = require('../Layer/Layer');
var Button_1 = require('../Button/Button');
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
            else if (columns[x].template) {
                return (<Layer_1.default>
              {columns[x].template(dataSource[i])}
            </Layer_1.default>);
            }
            else {
                return (<Layer_1.default>
            {dataSource[i][columns[x].name]}
          </Layer_1.default>);
            }
        };
        return (<td className="r-Grid__Row__Column" style={{ width: columns[x].width }} key={i + x}>
        {columnPartial()}
      </td>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridColumn;
