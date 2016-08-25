import * as React from 'react';
import * as classNames from 'classnames';
import {findDOMNode} from 'react-dom';
import Selectable from '../Selectable/Selectable';
import './Button.less';

export interface IButtonProps {
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
  className? : string;
  theme?: string;
  icon? : string;
  href?: string;
  target?: string;
  ghost? : boolean;
  strech? : boolean;
  children? : boolean;
  pointer? : any;
  right? : boolean;
  left? : boolean;
  size? : string;
  submit? : boolean;
  style? : any;
  checked? : boolean;
  onClick? : (event: React.MouseEvent) => void;
  tabIndex? : number;
  progressiveClick? : any;
  simple?: boolean;
  iconPointer? : any;
  loading?: boolean;
  iconLocation?: 'left' | 'right';
  checkedTheme? : string;
}

export interface IButtonState {
  checked? : boolean;
  progressiveClickIndex? : number;
  progressiveClickLength? : number;
  clickCounter? : number;
  shiftCounter? : number;
}

export default class Button extends React.Component<IButtonProps, IButtonState>{
  
  public static defaultProps = {
      active: true,
      disabled: false,
      block: false,
      simple: true,
      iconLocation : 'left'
  };

  constructor(props: IButtonProps) {
    super(props);
    this.state = {
      checked : false,
      progressiveClickIndex: 0,
      clickCounter: 0,
      shiftCounter: 0
    };
  }

  public componentDidMount() {
    const self = this;
    const props = self.props;
    if (props.progressiveClick) {
      this.setState({
        progressiveClickLength: props.progressiveClick.length
      })
    }
  }

  public onClick(event: React.MouseEvent) {
    const self = this;
    if (this.props.onClick) {
      this.props.onClick(event);
      this.setState({
        checked : true
      });
    }
  }

  public progressiveClick (arrayOfFunctions) {
    const self = this;
    const array = this.props.progressiveClick;
    let state = self.state;
    let clickIndex = state.progressiveClickIndex;
    let arrayLength = state.progressiveClickLength;

    if (clickIndex < arrayLength) {
      array[clickIndex]();
      self.setState({
        progressiveClickIndex: clickIndex + 1
      })
    } else {
      array[0]();
      self.setState({
        progressiveClickIndex: 1
      })
    }
  }

  render() {

    const self = this;
    const props = self.props;

    let buttonType;

    let buttonClass = classNames(
      'r-Button',
      {'ghost' : (props.ghost)},
      {'block' : (props.block)},
      {'column' : (props.strech)},
      {'icon' : (!props.children)},
      {'pointer' : (props.pointer)},
      {'iconPointer' : (props.iconPointer)},
      {'right' :(props.pointer === 'right')},
      {'left' :(props.pointer === 'left')},
      {'pull-right' :(props.right)},
      {'pull-left' :(props.left)},
      props.size,
      props.theme,
      props.className
    );

    if (props.submit) {
      buttonType = 'submit';
    } else {
      buttonType = 'button';
    }

    let selectablePartial = <Selectable type={props.checkedTheme} checked={props.checked ? true : false}></Selectable>;
    let iconPartial = (props.icon && !props.loading ? <i className={'fa fa-'+props.icon}></i> : null );
    let loadingPartial = (props.loading ? <i className='fa fa-circle-o-notch fa-spin'></i> : null );
    let animatedIcon = (props.iconPointer && !props.loading ? <i className={"e-ico fa fa-caret-"+props.iconPointer} ></i> : null );
    let iconWrapperRight = (props.icon && props.iconLocation === 'right' ? <div className={"ml10 dinblock posrel " + (props.children ? "mr5" : "")}>{iconPartial}{props.iconPointer ? animatedIcon : null}</div> : null);
    let iconWrapperLeft = (props.icon && props.iconLocation === 'left' ? <div className={"dinblock posrel " + (props.children ? "mr5" : "")}>{iconPartial}{props.iconPointer ? animatedIcon : null}</div> : null);

    let linkButton = () => {
      return (
        <a href={props.href} target={props.target} ref="button" tabIndex={props.tabIndex} onClick={props.progressiveClick ? this.progressiveClick.bind(this) : this.onClick.bind(this)} type={buttonType} disabled={props.disabled || props.loading === true} className={buttonClass} style={props.style}>
          {iconWrapperLeft}
          {loadingPartial}
          {props.children}
          {selectablePartial}
          {iconWrapperRight}
        </a>
      )
    }

    let simpleButton = () => {
        return (
          <button ref="button" tabIndex={props.tabIndex} onClick={this.onClick.bind(this)} type={buttonType} disabled={props.disabled || props.loading === true} target={props.target} className={buttonClass} style={props.style}>
            {iconWrapperLeft}
            {loadingPartial}
            {props.children}
            {iconWrapperRight}
          </button>
        );
    }

    let defaultButton = () => {
        return (
          <button ref="button" tabIndex={props.tabIndex} onClick={props.progressiveClick ? this.progressiveClick.bind(this) : this.onClick.bind(this)} type={buttonType} disabled={props.disabled || props.loading === true} target={props.target} className={buttonClass} style={props.style}>
            {iconWrapperLeft}
            {loadingPartial}
            {props.children}
            {selectablePartial}
            {iconWrapperRight}
          </button>
        );
    }

    if (props.href) {
      return linkButton();
    } else {
      return props.simple ? simpleButton() : defaultButton();
    }

  }
}