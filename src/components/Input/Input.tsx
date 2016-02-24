import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import Selectable from '../Selectable/Selectable';
import Pane from '../Pane/Pane';
import './Input.less';

interface IInputProps {
  ghost?: boolean;
  ref? : any;
  className? : string;
  type? : string;
  icon? : string;
  title? : string;
  placeholder? : string;
  value ? : any;
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
}

interface IInputState {
  checked? : boolean;
  inputValue? : string;
  mouseOut? : boolean;
}

export default class Input extends React.Component<IInputProps, IInputState>{

  public state : IInputState;

  constructor(props : IInputProps) {
    super(props);
    this.state = {
      checked : false,
      inputValue: '',
      mouseOut: false
    };
  }
  public componentDidMount() {
    const props = this.props;
    if (props.value) {
        this.setState({
          checked: true
        });
    }
    if (props.focusOnMount) {
      this.focusOnMount();
    }
  }
  public componentWillReceiveProps(nextProps) {
      const self = this;
      if (nextProps.value > self.props.value) {
        self.setState({
          checked: true
        });
      } else if (nextProps.focusOnMount != this.props.focusOnMount) {
        this.focusOnMount();
      }
  }
  public componentWillUnmount() {
    let inputDOM = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['refInput']);
    inputDOM.blur();
  }
  public focusOnMount() {
    let inputDOM = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['refInput']);

    let focusDelay;


    focusDelay = this.props.focusDelay || 550;


    window.setTimeout(function() {
      inputDOM.focus();
    }, focusDelay);
  }
  public focus(e){
    this.setState({
      checked: true,
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
      this.props.onChange(value.target.value);
    } else {
      return null;
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
          <Pane direction={props.errorDirection} open={!state.mouseOut && props.error} className="p5 h90 r-Layer light w100 error-pane h30px " >
            <div className="error-message">{props.errorMessage}</div>
          </Pane>
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
        inputPartial = <input defaultValue={props.value} ref='refInput' onInput={this.focus.bind(this)} onChange={this.onChange.bind(this)} onBlur={this.blur.bind(this)}  onFocus={this.focus.bind(this)} placeholder={props.placeholder} type='password' />;
        break;
      case 'text':
        inputPartial = <input defaultValue={props.value} ref='refInput' onInput={this.focus.bind(this)} onChange={this.onChange.bind(this)} onBlur={this.blur.bind(this)}  onFocus={this.focus.bind(this)} placeholder={props.placeholder} type='text' />;
        break;
      case 'textarea':
        inputPartial = <textarea rows={props.rows} cols={props.cols} ref="refInput"   style={{height : textAreaScrollHeight}}  onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)}  onChange={this.focus.bind(this)} ></textarea>;
        break;
      default:
    }

    let inputWrapperClass = classNames(
      'r-Input',
      {'w100' : (props.block)},
      {'checked' : (this.state.checked)},
      props.className
    );

    let inputClass = classNames(
      'r-Input__container',
      'flohide',
      {'no-title':(!props.title)},
      {'pt10' : (props.type === 'textarea')}
    );

    return (
      <div onMouseEnter={this.mouseOut.bind(this)} onMouseLeave={this.mouseOut.bind(this)} className={inputWrapperClass} style={props.style}>
          {errorInlinePartialTop}
          <div className={inputClass}>
              {iconPartial}
              <small>{props.title}</small>
              {inputPartial}
              {pencilPartial}
              <Selectable type={props.error ? 'error' : 'primary'} ghost={props.ghost} checked={this.state.checked} />
              {errorInlinePartial()}
          </div>
          {errorInlinePartialBottom}
      </div>
    );
  }
}
