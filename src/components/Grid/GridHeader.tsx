import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';

export default class GridHeader extends React.Component<any, any>{
  public toggleSorting(key) {
    this.props.toggleSorting(key);
  }
  render() {

    const self = this;
    const props = self.props;

    let createColumns = (item, index) => {
      if (item.headerTemplate) {
        return (
          <Layer style={{width : item.width}} key={index} className="ptb5 w100">
            {item.headerTemplate()}
          </Layer>
        )
      }
      else if (props.sortable) {
        if (item.headerTemplate) {
          return (
            <Layer flex flow="wrap nowrap" justify="flex-start" align="center" style={{width : item.width}} key={index} className="ptb5 w100">
              {item.headerTemplate()}
              <Button icon='chevron-down' />
            </Layer>
          )
        } else {
          return (
            <Layer flex flow="wrap nowrap" justify="flex-start" align="center" style={{width : item.width}} key={index} className="ptb5 w100">
              <a>{item.name}</a>
              <Button onClick={self.toggleSorting.bind(self, item.name)} tabIndex={-1} className="w50px" ghost size="small" icon={this.props.sortType === 'none' ? 'minus' : this.props.sortType === 'desc' ? 'chevron-down' : 'chevron-up' } />
            </Layer>
          )
        }
      }
      else {
        return (
          <Layer flex flow="wrap nowrap" justify="flex-start" align="center" style={{width : item.width}} key={index} className="ptb5 w100">
            <a>{item.name}</a>
          </Layer>
        )
      }
    }

    if (props.hideHeader) {
      return null;
    } else {
      return(
        <Layer className="r-GridHeader" flex flow="row nowrap">
          {this.props.columns.map(createColumns)}
        </Layer>
      )
    }
  }
}
