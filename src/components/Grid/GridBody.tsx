import * as React from 'react';

import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';
import Open from '../Open/Open';

import GridRow from './GridRow';
import GridRowTemplate from './GridRowTemplate';

export interface IGridProps {
  dataSource : any;
  numberPerPage ? : number;
  columns ? : any;
  open ? : boolean;
  hideHeader ? : boolean;
  sortable ? : boolean;
  detailTemplateOpenOnSelect? : boolean;
  detailTemplate? : any;
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
  currentPage? : number;
}

export interface IGridBodyState {
  expandedRows ? : any;
  selected  ? : any;
}

export default class GridBody extends React.Component<IGridProps, IGridBodyState>{

  public static defaultProps = {
      rowIsSelectableType: 'single'
  };

  constructor(props) {
    super(props);
    this.state = {
      expandedRows : [],
      selected: props.selected || []
    }
  }

  toggleDetailTemplate(i, item) {
    const self = this;
    const props = self.props;
    let state = self.state;
    
    let expanded : any = [];
    let expandedRows = state.expandedRows;
    let selectedItem;

    if (props.selectedKey) {
      selectedItem = item[props.selectedKey];
      expanded.push(item[props.selectedKey]);
    } else {
      selectedItem = i;
      expanded.push(i);
    }

    self.setState({
      expandedRows : expandedRows.indexOf(selectedItem) >= 0 ? [] : expanded,
      selected : expandedRows.indexOf(selectedItem) >= 0 ? [] : expanded
    })
  }

  componentWillReceiveProps(nextProps) {
      const self = this;
      if (nextProps.currentPage !== this.props.currentPage) {
        self.setState({
          expandedRows: []
        })
      }
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

      if (this.props.selectedKey) {
        selected.push(item[this.props.selectedKey]);  
      } else {
        selected.push(item);
      }

      this.setState({
        selected: selected
      })
      if (this.props.onRowSelect) {
        this.props.onRowSelect(item);
      }
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

      if (props.selectedKey) {
        selectedItem = this.state.selected.indexOf(item[this.props.selectedKey]) >= 0;
      } else {
        selectedItem = this.state.selected.indexOf(item) >= 0;
      }

      let rowItem = [[<GridRow
          expanded={this.state.expandedRows.indexOf(props.selectedKey ? item[props.selectedKey] : key) >= 0}
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
          detailTemplateOpenOnSelect={this.props.detailTemplateOpenOnSelect}
          detailTemplateOpenOnRowSelect={this.props.detailTemplateOpenOnRowSelect}
        />],
        [<tr key={key}>
          <td colSpan={this.props.columns.length + 1}>
            {this.props.detailTemplate ? <GridRowTemplate detailTemplate={self.props.detailTemplate} dataSource={self.props.dataSource} expanded={this.state.expandedRows.indexOf(props.selectedKey ? item[props.selectedKey] : key) >= 0} i={key}  />  : null}
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