"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
require('./Door.less');
class Door extends React.Component {
    constructor() {
        super();
        this.state = {
            autoheight: false,
            maxHeight: 100
        };
    }
    componentDidMount() {
        this.refDoor = ReactDOM.findDOMNode(this.refs["door"]);
        const getAbsoluteHeight = (el) => {
            let styles = window.getComputedStyle(el);
            let margin = parseFloat(styles.marginTop) +
                parseFloat(styles.marginBottom);
            return Math.ceil(el.offsetHeight + margin);
        };
        if (this.props.open) {
            this.refDoor.style.maxHeight = getAbsoluteHeight(this.refDoor.childNodes[0]) + 'px';
        }
    }
    componentWillReceiveProps(nextProps) {
        const self = this;
        var refDoor = ReactDOM.findDOMNode(this.refs["door"]);
        const getAbsoluteHeight = (el) => {
            let styles = window.getComputedStyle(el);
            let margin = parseFloat(styles.marginTop) +
                parseFloat(styles.marginBottom);
            return Math.ceil(el.offsetHeight + margin);
        };
        if (nextProps.open) {
            self.setState({
                maxHeight: getAbsoluteHeight(refDoor.childNodes[0])
            });
        }
    }
    render() {
        const self = this;
        const props = self.props;
        const state = self.state;
        const getAbsoluteHeight = (el) => {
            let styles = window.getComputedStyle(el);
            let margin = parseFloat(styles.marginTop) +
                parseFloat(styles.marginBottom);
            return Math.ceil(el.offsetHeight + margin);
        };
        let doorClass = classNames('r-Door', { 'e-open': (props.open) }, { 'e-autoHeight': (state.autoheight) }, props.className);
        let doorContainerClass = classNames('r-Door__container');
        return (<div ref="door" className={doorClass} style={{ maxHeight: (props.open ? this.state.maxHeight + 'px' : '0px') }}>
         <div className={doorContainerClass}>
           {props.children}
         </div>
       </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Door;
