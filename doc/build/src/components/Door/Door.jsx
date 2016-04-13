"use strict";
const React = require('react');
const classNames = require('classnames');
require('./Door.less');
const getAbsoluteHeight = (el) => {
    let styles = window.getComputedStyle(el);
    let margin = parseFloat(styles.marginTop) +
        parseFloat(styles.marginBottom);
    return Math.ceil(el.offsetHeight + margin);
};
class Door extends React.Component {
    constructor() {
        super();
        this.state = {
            autoHeight: false,
            height: 0
        };
    }
    render() {
        const self = this;
        const props = self.props;
        const state = self.state;
        let doorClass = classNames('r-Door', { 'e-open': (props.open) }, { 'e-close': (!props.open) }, { 'e-autoHeight': (state.autoHeight) }, props.className);
        let doorContainerClass = classNames('r-Door__container');
        return (<div ref="door" className={doorClass} style={{ height: this.state.maxHeight }}>
         <div className={doorContainerClass}>
           {props.open ? props.children : null}
         </div>
       </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Door;
