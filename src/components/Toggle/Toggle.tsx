import * as React from 'react';
import * as classNames from 'classnames';
import './Toggle.less';

import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';

export default class Toggle extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false,
      selected: props.selected || false
    }
  }

  onChange(e) {
    this.setState({checked: e.target.checked});
  }

  changeSelected(item) {
    this.setState({selected: item});
  }
  render(){

    const self = this;
    const props = self.props;
    let state = self.state;

    let toggleClass = classNames(
      'r-Toggle',
      {'e-checked' : (state.checked)},
      {'e-color' : (props.columns && props.type === 'colors')},
      {'e-numbers' : (props.columns && !props.ghost && props.type !== 'colors')},
      {'e-ghost' : (props.ghost)},
      props.className
    );

    let createList = (item, index) => {

      let itemClass = classNames(
        'r-Toggle__item',
        {'e-selected' : (state.selected === item)}
      )

      return (
        <div className={itemClass} onClick={this.changeSelected.bind(this, item)} key={index}>
          {(()=>{
            if (props.columns && props.type === 'colors') {
              return (
                <div className={'r-Toggle__item__color'} style={{background: item, height: 26, width: 26}}></div>
              )
            } else {
              return (
                <div className={'r-Toggle__item__string'} style={{minWidth: 26}}>{item}</div>
              )
            }
          })()}
        </div>
      )
    }

    if (props.columns) {
      return (
        <div className={toggleClass}>
          {this.props.columns.map(createList)}
        </div>
      )
    }
    else {
      return(
        <div className={toggleClass}>
          <input type="checkbox"
               className="r-Toggle__input"
               name={this.props.name}
               checked={this.state.checked}
               onChange={this.onChange.bind(this)}
               value={this.props.value} />
               {this.props.label}
          <label className="r-Toggle__button"></label>
        </div>
      )
    }
  }
}
