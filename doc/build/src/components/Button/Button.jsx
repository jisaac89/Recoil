"use strict";
const React = require('react');
const classNames = require('classnames');
const Selectable_1 = require('../Selectable/Selectable');
require('./Button.less');
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            progressiveClickIndex: 0,
            showShortcut: false,
            clickCounter: 0,
            shiftCounter: 0
        };
    }
    componentDidMount() {
        const self = this;
        const props = self.props;
        if (props.progressiveClick) {
            this.setState({
                progressiveClickLength: props.progressiveClick.length
            });
        }
        if (props.shortcut) {
            window.addEventListener("keydown", this.startShortcutListener.bind(this), false);
            window.addEventListener("keyup", this.startShortcutListener.bind(this), false);
        }
    }
    componentWillUnmount() {
        if (this.props.shortcut) {
            window.removeEventListener("keydown", null, false);
            window.removeEventListener("keyup", null, false);
        }
    }
    startShortcutListener(e) {
    }
    onClick() {
        const self = this;
        if (this.props.onClick) {
            this.props.onClick();
            this.setState({
                checked: true
            });
        }
    }
    progressiveClick(arrayOfFunctions) {
        const self = this;
        const array = this.props.progressiveClick;
        let state = self.state;
        let clickIndex = state.progressiveClickIndex;
        let arrayLength = state.progressiveClickLength;
        if (clickIndex < arrayLength) {
            array[clickIndex]();
            self.setState({
                progressiveClickIndex: clickIndex + 1
            });
        }
        else {
            array[0]();
            self.setState({
                progressiveClickIndex: 1
            });
        }
    }
    render() {
        const self = this;
        const props = self.props;
        let buttonType;
        let buttonClass = classNames('r-Button', { 'ghost': (props.ghost) }, { 'block': (props.block) }, { 'column': (props.strech) }, { 'icon': (!props.children) }, { 'pointer': (props.pointer) }, { 'right': (props.pointer === 'right') }, { 'left': (props.pointer === 'left') }, { 'pull-right': (props.right) }, { 'pull-left': (props.left) }, props.size, props.type, props.className);
        if (props.submit) {
            buttonType = 'submit';
        }
        else {
            buttonType = 'button';
        }
        let selectablePartial = <Selectable_1.default checked={props.checked ? true : false}></Selectable_1.default>;
        let iconPartial = (props.icon ? <i className={(this.state.showShortcut ? 'e-invisible ' : '') + 'fa fa-' + props.icon + (props.children ? ' mr5' : '')}></i> : null);
        let showTooltip = () => {
            if (this.state.showShortcut) {
                return (<span className="e-shortcut animated fadeInUp">{this.props.shortcut}</span>);
            }
        };
        if (props.href) {
            return (<a href={props.href} target={props.target} ref="button" tabIndex={props.tabIndex} onClick={props.progressiveClick ? this.progressiveClick.bind(this) : this.onClick.bind(this)} type={buttonType} disabled={props.disabled === true} className={buttonClass} style={props.style}>
          {iconPartial}
          {(() => {
                if (!this.state.showShortcut) {
                    return props.children;
                }
                else {
                    return null;
                }
            })()}
          {showTooltip()}
          {selectablePartial}
        </a>);
        }
        else {
            return (<button ref="button" tabIndex={props.tabIndex} onClick={props.progressiveClick ? this.progressiveClick.bind(this) : this.onClick.bind(this)} type={buttonType} disabled={props.disabled === true} target={props.target} className={buttonClass} style={props.style}>
          {iconPartial}
          {props.children}
          {showTooltip()}
          {selectablePartial}
        </button>);
        }
    }
}
Button.defaultProps = {
    active: true,
    disabled: false,
    block: false
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
