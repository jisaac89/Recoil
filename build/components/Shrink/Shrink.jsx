"use strict";
var React = require('react');
var classNames = require('classnames');
require('./Shrink.less');
class Shrink extends React.Component {
    render() {
        const self = this;
        const props = self.props;
        let shrinkClass = classNames('r-Shrink', { 'e-shrink': (props.if) }, { 'h100': (props.fill) }, { 'w100': (props.fill) }, props.className);
        return (<div className={shrinkClass}>
        {props.children}
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Shrink;
