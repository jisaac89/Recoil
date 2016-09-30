import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import Selectable from '../Selectable/Selectable';
import SlideIn from '../SlideIn/SlideIn';
import './Input.less';

export interface IInputProps {
  ghost?: boolean;
  ref? : any;
  className? : string;
  type? : string;
  icon? : string;
  title? : string | number;
  placeholder? : string | number;
  value ? : string | number;
  defaultValue ? : string | number;
  children? : any;
  style? : any;
  errorInline? : any;
  errorDirection? : any;
  error? : any;
  errorMessage? : any;
  rows? : any;
  cols? : any;
  block? : any;
  autoExpand? : any;
  onChange? : any;
  scrollHeight?: any;
  focusOnMount? : any;
  focusDelay? : any;
  size? : string;
  advanced? : boolean;
  maxLength? : number;
  max ? : number;
  min ? : number;
  name?: string;
  required? : boolean;
  disabled? : boolean;
}

export interface IInputState {
  checked? : boolean;
  inputValue? : string | number;
  mouseOut? : boolean;
}

export default class Input extends React.Component<IInputProps, IInputState>{

  public state : IInputState;

  public static defaultProps = {
      advanced: false,
      type: 'text'
  };

  constructor(props : IInputProps) {
    super(props);
    this.state = {
      checked : false,
      inputValue: props.value && props.value !== '' ? props.value : '',
      mouseOut: false
    };
  }
  public componentDidMount() {
    const props = this.props;
    if (props.focusOnMount) {
      this.focusOnMount();
    }
  }
  public componentWillUnmount() {
    let inputDOM = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['refInput']);
    inputDOM.blur();
  }
  public focusOnMount() {
    const self = this;
    let inputDOM = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['refInput']);
    let focusDelay;

    focusDelay = self.props.focusDelay || 400;

    (function(inputDOM) {
      setTimeout(function() {
          inputDOM.focus();
      }, focusDelay);
    }(inputDOM));
  }
  public focus(e){
    const self = this;
    this.setState({
      checked: self.props.advanced ? true : false,
      inputValue:e.target.value
    });
  }
  public blur(){
    let inputDOM = this.refs['refInput'];
    this.setState({
      checked: ReactDOM.findDOMNode<HTMLInputElement>(inputDOM).value !== '' ? true : false
    });
  }
  public mouseOut() {
    let inputDOM = this.refs['refInput'];
    this.setState({
      mouseOut: ReactDOM.findDOMNode<HTMLInputElement>(inputDOM).onmouseout ? false : true
    });
  }
  public onChange(value) {

    if (this.props.onChange) {
      this.props.onChange(value.target.value, value);
    } else {
      return null;
    }
  }

  limit(max) {
    let inputDOM = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['refInput']);
    let maxLength = max - 1;
    if(inputDOM.value.length > maxLength) {
        inputDOM.value = inputDOM.value.substr(0, maxLength);
    } 
  }

  render(){

    const self = this;
    const props = self.props;
    let state = self.state;

    let inputPartial, iconPartial, pencilPartial, textAreaScrollHeight, errorInlinePartialTop, errorInlinePartialBottom;

    let errorInlinePartial = () => {
      if (props.errorInline && (props.errorDirection === 'top' || 'bottom') ) {
        return (
          <SlideIn from={props.errorDirection} if={!state.mouseOut && props.error} className="p5 h90 r-Layer light w100 error-pane h30px " >
            <div className="error-message">{props.errorMessage}</div>
          </SlideIn>
        );
      } else {
        return null;
      }
    };

    // if input has icon then show it

    if (props.icon) {
      iconPartial = <small><i className={'fa fa-'+props.icon}></i> </small>;
    } else {
      iconPartial = null;
    }

    let inputDOM = this.refs['refInput'];

    if (inputDOM) {
      // textarea auto expand
      if (props.autoExpand) {
        textAreaScrollHeight = Math.min(self.props.scrollHeight, 300) + 'px';
      } else {
        textAreaScrollHeight = null;
      }
      // hide pencil if placholder present or input has value
      if (!props.placeholder && !state.inputValue) {
        pencilPartial = <i className="fa fa-pencil writing"></i>;
      } else {
        pencilPartial = null;
      }
    }

    // error directions
    if (!props.errorInline && props.error) {
        if (props.errorDirection === 'top') {
          errorInlinePartialTop =   <div className="p5 border-bottom"><small className="error-message">{props.errorMessage}</small></div>;
          errorInlinePartialBottom = null;
        } else{
          errorInlinePartialBottom =   <div className="p5"><small className="error-message">{props.errorMessage}</small></div>;
          errorInlinePartialTop = null;
        }
      } else {
        errorInlinePartialTop = null;
        errorInlinePartialBottom = null;
      }

    // switch input type depending on propType
    switch (props.type) {
      case 'password':
          inputPartial = <input name={props.name} onKeyDown={self.limit.bind(self, props.maxLength)} value={props.value} defaultValue={props.defaultValue} ref='refInput' onInput={this.focus.bind(this)} onChange={this.onChange.bind(this)} onBlur={this.blur.bind(this)}  onFocus={this.focus.bind(this)} placeholder={!props.advanced? props.title? props.title : props.placeholder: props.placeholder} type='password' />;
        break;
      case 'text':
          inputPartial = <input name={props.name} onKeyDown={self.limit.bind(self, props.maxLength)} value={props.value} defaultValue={props.defaultValue} ref='refInput' onInput={this.focus.bind(this)} onChange={this.onChange.bind(this)} onBlur={this.blur.bind(this)}  onFocus={this.focus.bind(this)} placeholder={!props.advanced? props.title? props.title : props.placeholder: props.placeholder} type='text' />;
        break;
      case 'number':
          inputPartial = <input name={props.name} onKeyDown={self.limit.bind(self, props.maxLength)} max={props.max} min={props.min} maxLength={props.maxLength} value={props.value} defaultValue={props.defaultValue} ref='refInput' onInput={this.focus.bind(this)} onChange={this.onChange.bind(this)} onBlur={this.blur.bind(this)}  onFocus={this.focus.bind(this)} placeholder={!props.advanced? props.title? props.title : props.placeholder: props.placeholder} type='number' />;
        break;
      case 'textarea':
          inputPartial = <textarea name={props.name} rows={props.rows} cols={props.cols} ref="refInput"   style={{height : textAreaScrollHeight}}  onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)}  onChange={this.focus.bind(this)} ></textarea>;
        break;
      default:
    }

    let inputWrapperClass = classNames(
      'r-Input',
      {'w100' : (props.block)},
      {'checked' : (this.state.checked)},
      props.size,
      props.className
    );

    let inputClass = classNames(
      'r-Input__container',
      'flohide',
      {'no-title':(!props.title)},
      {'pt10' : (props.type === 'textarea')}
    );

    let inputClassadvanced = classNames(
      'r-Input',
      props.size,
      {'w100' : (props.block)},
      {'checked' : (this.state.checked)},
      {'e-disabled' : (props.disabled)},
      'r-Input__container',
      'flohide',
      'no-title',
      'e-advanced',
      {'e-required':(props.required)},
      props.className
    );

    if (!props.advanced) {
      return (
        <div className={inputClassadvanced}>
            {inputPartial}
        </div>
      )
    } else {
      return (
        <div onMouseEnter={self.mouseOut.bind(self)} onMouseLeave={self.mouseOut.bind(self)} className={inputWrapperClass} style={props.style}>
            {errorInlinePartialTop}
            <div className={inputClassadvanced}>
                {iconPartial}
                <small>{props.title}</small>
                {inputPartial}
                {pencilPartial}
                <Selectable type={props.error ? 'error' : 'primary'} ghost={props.ghost} checked={self.state.checked} />
                {errorInlinePartial()}
            </div>
            {errorInlinePartialBottom}
        </div>
      );
    }
  }
}
