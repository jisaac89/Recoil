"use strict";
const React = require('react');
const classNames = require('classnames');
require('./Emerge.less');
class Emerge extends React.Component {
    render() {
        const self = this;
        const props = self.props;
        let index = 0;
        let emergeClass = classNames('r-Emerge', props.className, { 'e-enter': (props.if) }, { 'floshow': (props.overflow) });
        let itemClass = classNames('r-Emerge', { 'e-enter': (props.if) });
        let createItems = (item, index) => {
            return (<div className={itemClass} style={{ animationDelay: ((index + 1) * props.delay) + 'ms' }} key={index}>
            {item}
          </div>);
        };
        let newChildren = React.Children.map(this.props.children, (child) => {
            let exit, enter;
            if (props.if === true) {
                enter = props.enter;
            }
            else {
                enter = null;
            }
            if (props.if === false) {
                exit = props.exit;
            }
            else {
                exit = null;
            }
            let newClass = classNames('r-Emerge', 'animated', enter, exit, child.props.className);
            let newStyle = {
                animationDelay: ((index++) * props.delay) + 'ms'
            };
            function merge_options(obj1, obj2) {
                let obj3 = {};
                for (let attrname in obj1) {
                    obj3[attrname] = obj1[attrname];
                }
                for (let attrname in obj2) {
                    obj3[attrname] = obj2[attrname];
                }
                return obj3;
            }
            return React.cloneElement(child, { className: newClass, style: merge_options(newStyle, props.style) });
        });
        return (<span className={emergeClass} ref="element">
          {newChildren}
        </span>);
    }
}
Emerge.defaultProps = {
    if: true,
    enter: 'fadeInUp',
    exit: 'fadeOutDownBig',
    delay: 300,
    overflow: false
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Emerge;
