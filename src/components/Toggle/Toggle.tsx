import * as React from 'react';
import * as classNames from 'classnames';
import './Toggle.less';
import Wizard from '../Wizard/Wizard';

export interface IToggleProps {
    name?: string;
    array?: Array<string | number>;
    className?: string;
    size? : 'small' | 'medium' | 'large' | 'xlarge';
    onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
    iconArray?: Array<string>;
    type?: string; // 'colors'
    ghost?: boolean;
    right?: boolean;
    checked?: boolean;
    selected?: Array<Object>;
    value?: string | string[];
    label?: string | number;
    theme?: 'primary' | 'success' | 'error' | 'default';
}

export interface IToggleState {
    checked?: boolean;
    selected?: Array<Object>;
}

export default class Toggle extends React.Component<IToggleProps, IToggleState>{

  public static defaultProps = {
      checked: false
  };

  constructor(props : IToggleProps) {
    super(props);
    this.state = {
      checked: props.checked || false,
      selected: props.selected || []
    }
  }

  componentWillReceiveProps(nextProps : IToggleProps) {
    this.setState({
      checked : nextProps.checked
    })
  }

  onChange(event: React.FormEvent<any>) {
    this.setState({
      checked: !this.state.checked
    });
    if (this.props.onChange) {
      this.props.onChange(this.state.checked, event);
    }
  }

  changeSelected(item : Array<any>) {
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

    let createList = (item : any, index : number) => {

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
        className: this.state.checked ? "r-Toggle__input checked" : "r-Toggle__input",
        onClick:this.onChange.bind(this)
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
          <input type="checkbox" {...inputProps} />
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
