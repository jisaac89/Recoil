import * as React from 'react';

import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';
import Door from '../Door/Door';

import GridRow from './GridRow';

export interface IGridProps {
  dataSource : any;
  numberPerPage ? : number;
  columns ? : any;
  open ? : boolean;
  hideHeader ? : boolean;
  sortable ? : boolean;
  detailTemplateOpenOnSelect? : boolean;
  detailTemplate? : () => void;
  height ? : string;
  onRowSelect ? :any;
  selected ? : any;
  dataType ? : any;
  numberOfPages ? : number;
  hideColumns ? : any;
  columnTemplate? : any;
  detailTemplateOpenOnHover? : boolean;
  rowIsSelectable? : boolean;
  selectedKey ? : string;
  rowIsSelectableType? : string;
  detailTemplateOpenOnRowSelect? : boolean;
  filterSelected? : boolean;
}

export interface IGridBodyState {
  expandedRows ? : any;
  selected  ? : any;
}

interface IGridRowTemplateProps {
  columns ? : any;
  detailTemplate ? : any;
  dataSource ? : any;
  i ? : any;
  expanded ? : boolean;
}

interface IGridRowTemplateState {
  open ? : boolean;
  selected? : any;
}

class GridRowTemplate extends React.Component<IGridRowTemplateProps,IGridRowTemplateState>{

  constructor() {
    super();
    this.state = {
      open : false
    }
  }

  render() {
    const self = this;
    const props = self.props;
    const i = props.i;

    return (
      <Door open={props.expanded}>
        {self.props.detailTemplate(i, self.props.dataSource[i])}
      </Door>
    )
  }
}

export default class GridBody extends React.Component<IGridProps, IGridBodyState>{

  constructor(props) {
    super(props);
    this.state = {
      expandedRows : [],
      selected: props.selected || []
    }
  }

  toggleDetailTemplate(i) {
    let expanded = [];
    expanded.push(i);

    this.setState({
      expandedRows : expanded
    })
  }

  onRowSelect(item) {
    // key of the object key;
    if (this.props.rowIsSelectable) {

      let selected;
      if (this.props.rowIsSelectableType === 'single') {
        selected = [];
      } else {
        selected = this.state.selected;
      }

      selected.push(item);
      this.setState({
        selected: selected
      })
    } else if (this.props.onRowSelect) {
      this.props.onRowSelect(item);
    }
  }

  render(){

    let Array : any;
    const self = this;
    const props = self.props;

    let {columns, dataSource} = props;

    let selectedItem;
    let rowArray = [];

    for (let key in self.props.dataSource) {

      let item = self.props.dataSource[key];

      let selectedItem;

      if (this.state.selected) {
        if (props.selectedKey) {
          selectedItem = this.props.selected.indexOf(item[this.props.selectedKey]) !== -1
        } else {
          selectedItem = this.state.selected.indexOf(item) !== -1;
        }
      }

      let rowItem = [[<GridRow
          expanded={this.props.detailTemplateOpenOnSelect ? selectedItem : this.state.expandedRows.length > 0 ? this.state.expandedRows.indexOf(key) !== -1 : false}
          toggleDetailTemplate={this.props.detailTemplate ? this.toggleDetailTemplate.bind(this) : null}
          key={key}
          i={key}
          selected={this.state.selected}
          item={item}
          selectedKey={this.props.selectedKey}
          dataSource={this.props.dataSource}
          columns={this.props.columns}
          onRowSelect={this.onRowSelect.bind(this)}
          detailTemplate={this.props.detailTemplate}
          selectedItem={selectedItem}
          hideColumns={this.props.hideColumns}
          detailTemplateOpenOnHover={this.props.detailTemplateOpenOnHover}
          detailTemplateOpenOnRowSelect={this.props.detailTemplateOpenOnRowSelect}
        />],
        [<tr key={key}>
          <td colSpan={this.props.columns.length + 1}>
            {this.props.detailTemplate ? <GridRowTemplate detailTemplate={self.props.detailTemplate} dataSource={self.props.dataSource} expanded={this.props.detailTemplateOpenOnSelect ? selectedItem : this.state.expandedRows.length > 0 ? this.state.expandedRows.indexOf(key) !== -1 : false} i={key}  />  : null}
            <Selectable checked={selectedItem} />
          </td>
        </tr>]];

      if (props.filterSelected) {
        if (selectedItem) {
          rowArray.push(rowItem)
        }
      } else if (!props.filterSelected) {
        rowArray.push(rowItem);
      }
    }

    return (
      <tbody className="r-Grid__Body w100" style={{height : this.props.height}}>
        {rowArray}
      </tbody>
    )
  }
}

// this.state.expandedRows.includes(key)
// <SelectableGridRow onRowSelect={this.props.onRowSelect} item={item} selected={this.state.selected} selectedItem={selectedItem} selectedKey={this.props.selectedKey} />
