import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';
import Dropdown from '../Dropdown/Dropdown';

export interface IGridColumnProps {
  dataSource ? : Array<any>;
  columns ? : Array<any>;
  i ? : any;
  x ? : any;
  hideColumns ? : Array<string>;
  columnTemplate? : Function;
}

export default class GridColumn extends React.Component<IGridColumnProps, {}>{
  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let {dataSource, columns, i, x} = props;

    let columnPartial = () => {
        // if tabbable
        if (columns[x].tabbable) {
          return (
            <Button>
              {dataSource[i][columns[x].name]}
            </Button>
          )
        }
        // if it has a template function in the columns object
        else if ((typeof dataSource[i][columns[x].name] === 'object' && columns[x].template) || (typeof dataSource[i][columns[x].name] === 'string' && columns[x].template) || (typeof dataSource[i][columns[x].name] === 'number' && columns[x].template)) {
          return columns[x].template(dataSource[i]);
        }
        // if the item is an array
        else if (Object.prototype.toString.call( dataSource[i][columns[x].name] ) === '[object Array]') {
          return (
            <Dropdown material type="button" title={Object.keys(dataSource[i][columns[x].name]).length + " { Array }"} dataSource={[dataSource[i][columns[x].name]]} sortable />
          )
        }
        // if the item is an object
        else if (typeof dataSource[i][columns[x].name] === 'object') {
          return (
            <Dropdown material type="button" title={Object.keys(dataSource[i][columns[x].name]).length + " { objects }"} dataSource={[dataSource[i][columns[x].name]]} sortable />
          )
        }
        // else just return the name
        else {
          return dataSource[i][columns[x].name];
        }
    }

    if (props.hideColumns && (columns[x].title ? props.hideColumns.indexOf(columns[x].title) !== -1 : props.hideColumns.indexOf(columns[x].name) !== -1 ) ) {
        return null;
    }
    else {
      return (
        <td className="r-Grid__Row__Column" style={{width: columns[x].width +'px'}} key={i+x}>
          {columnPartial()}
        </td>
      )
    }
  }
}
