"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var Selectable_1 = require('../Selectable/Selectable');
var Pane_1 = require('../Pane/Pane');
require('./Input.less');
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            inputValue: '',
            mouseOut: false
        };
    }
    componentDidMount() {
        const props = this.props;
        this.setState({
            checked: props.value ? true : false
        });
        if (props.focusOnMount) {
            this.focusOnMount();
        }
    }
    componentWillUnmount() {
        let inputDOM = ReactDOM.findDOMNode(this.refs['refInput']);
        inputDOM.blur();
    }
    focusOnMount() {
        const self = this;
        let inputDOM = ReactDOM.findDOMNode(this.refs['refInput']);
        let focusDelay;
        focusDelay = self.props.focusDelay || 800;
        (function (inputDOM) {
            setTimeout(function () {
                inputDOM.focus();
            }, focusDelay);
        }(inputDOM));
    }
    focus(e) {
        this.setState({
            checked: true,
            inputValue: e.target.value
        });
    }
    blur() {
        let inputDOM = this.refs['refInput'];
        this.setState({
            checked: ReactDOM.findDOMNode(inputDOM).value !== '' ? true : false
        });
    }
    mouseOut() {
        let inputDOM = this.refs['refInput'];
        this.setState({
            mouseOut: ReactDOM.findDOMNode(inputDOM).onmouseout ? false : true
        });
    }
    onChange(value) {
        if (this.props.onChange) {
            this.props.onChange(value.target.value);
        }
        else {
            return null;
        }
    }
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        let inputPartial, iconPartial, pencilPartial, textAreaScrollHeight, errorInlinePartialTop, errorInlinePartialBottom;
        let errorInlinePartial = () => {
            if (props.errorInline && (props.errorDirection === 'top' || 'bottom')) {
                return (<Pane_1.default direction={props.errorDirection} open={!state.mouseOut && props.error} className="p5 h90 r-Layer light w100 error-pane h30px ">
            <div className="error-message">{props.errorMessage}</div>
          </Pane_1.default>);
            }
            else {
                return null;
            }
        };
        if (props.icon) {
            iconPartial = <small><i className={'fa fa-' + props.icon}></i> </small>;
        }
        else {
            iconPartial = null;
        }
        let inputDOM = this.refs['refInput'];
        if (inputDOM) {
            if (props.autoExpand) {
                textAreaScrollHeight = Math.min(self.props.scrollHeight, 300) + 'px';
            }
            else {
                textAreaScrollHeight = null;
            }
            if (!props.placeholder && !state.inputValue) {
                pencilPartial = <i className="fa fa-pencil writing"></i>;
            }
            else {
                pencilPartial = null;
            }
        }
        if (!props.errorInline && props.error) {
            if (props.errorDirection === 'top') {
                errorInlinePartialTop = <div className="p5 border-bottom"><small className="error-message">{props.errorMessage}</small></div>;
                errorInlinePartialBottom = null;
            }
            else {
                errorInlinePartialBottom = <div className="p5"><small className="error-message">{props.errorMessage}</small></div>;
                errorInlinePartialTop = null;
            }
        }
        else {
            errorInlinePartialTop = null;
            errorInlinePartialBottom = null;
        }
        switch (props.type) {
            case 'password':
                inputPartial = <input defaultValue={props.value} ref='refInput' onInput={this.focus.bind(this)} onChange={this.onChange.bind(this)} onBlur={this.blur.bind(this)} onFocus={this.focus.bind(this)} placeholder={props.placeholder} type='password'/>;
                break;
            case 'text':
                inputPartial = <input defaultValue={props.value} ref='refInput' onInput={this.focus.bind(this)} onChange={this.onChange.bind(this)} onBlur={this.blur.bind(this)} onFocus={this.focus.bind(this)} placeholder={props.placeholder} type='text'/>;
                break;
            case 'textarea':
                inputPartial = <textarea rows={props.rows} cols={props.cols} ref="refInput" style={{ height: textAreaScrollHeight }} onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)} onChange={this.focus.bind(this)}></textarea>;
                break;
            default:
        }
        let inputWrapperClass = classNames('r-Input', { 'w100': (props.block) }, { 'checked': (this.state.checked) }, props.className);
        let inputClass = classNames('r-Input__container', 'flohide', { 'no-title': (!props.title) }, { 'pt10': (props.type === 'textarea') });
        return (<div onMouseEnter={this.mouseOut.bind(this)} onMouseLeave={this.mouseOut.bind(this)} className={inputWrapperClass} style={props.style}>
          {errorInlinePartialTop}
          <div className={inputClass}>
              {iconPartial}
              <small>{props.title}</small>
              {inputPartial}
              {pencilPartial}
              <Selectable_1.default type={props.error ? 'error' : 'primary'} ghost={props.ghost} checked={this.state.checked}/>
              {errorInlinePartial()}
          </div>
          {errorInlinePartialBottom}
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Input;
