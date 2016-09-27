import * as React from 'react';
import * as classNames from 'classnames';
import './Toggle.less';

import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Align from '../Align/Align';
import Wizard from '../Wizard/Wizard';

export default class Toggle extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false,
      selected: props.selected || false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked : nextProps.checked
    })
  }

  onChange(e) {
    const self = this;
    self.setState({checked: e.target.checked});
    if (self.props.onChange) {
      self.props.onChange(e.target.checked);
    }
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
      {'e-text' : (props.array && props.array.length === 2  || props.iconArray && props.iconArray.length === 2)},
      {'e-checked' : (state.checked)},
      {'e-color' : (props.array && props.array.length > 2 && props.type === 'colors')},
      {'e-numbers' : (props.array && props.array.length > 2 && !props.ghost && props.type !== 'colors')},
      {'e-ghost' : (props.ghost)},
      {'pull-right' : (props.right)},
      props.size,
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
            if (props.array && props.type === 'colors') {
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

    let slideIndex;

    let inputProps = {
      type:"checkbox",
      className:"r-Toggle__input",
      name:this.props.name,
      checked:this.state.checked,
      onChange:this.onChange.bind(this),
      value:this.props.value
    }

    if (state.checked) {
      slideIndex = 1
    } else {
      slideIndex = 0
    }

    if (props.type === 'colors' || props.type === 'strings' || props.type === 'numbers' && props.array && props.array.length > 2) {
      return (
        <div className={toggleClass}>
          {this.props.array.map(createList)}
        </div>
      )
    }
    else {
      return(
        <div className={toggleClass}>
          <input {...inputProps} />
          {this.props.label}
          {props.array && props.array.length === 2 || props.iconArray && props.iconArray.length === 2 ? 
          <label className={"r-Toggle__button "+props.theme}>
            <Wizard slideIndex={slideIndex}>
              <div className="text-right">{props.array && props.array[0] || (props.iconArray[0] ? <i className={"fa fa-"+props.iconArray[0]} /> : null)}</div>
              <div className="text-white">{props.array && props.array[1] || (props.iconArray[1] ? <i className={"fa fa-"+props.iconArray[1]} /> : null)}</div>
            </Wizard>
          </label> : 
          <label className={"r-Toggle__button "+props.theme}></label>}
        </div>
      )
    }
  }
}
