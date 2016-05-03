"use strict";
const React = require('react');
const classNames = require('classnames');
require('./Layer.less');
class Layer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const self = this;
        const props = self.props;
        let borderClass;
        if (props.border) {
            borderClass = 'border' + props.border;
        }
        else {
            borderClass = null;
        }
        let flexFlow;
        let flexStyle;
        if (props.flex) {
            flexStyle = {
                'WebkitFlexFlow': props.flow !== '' && props.flow ? props.flow : 'row nowrap',
                'flexFlow': props.flow !== '' && props.flow ? props.flow : 'row nowrap',
                'justifyContent': props.justify ? props.justify : 'flex-start',
                'alignItems': props.align ? props.align : 'stretch',
                'WebkitFlex': props.flex !== '' ? props.flex : null,
            };
        }
        let layerClass = classNames(props.className, 'r-Layer', { 'flohide': (props.overflow) }, { 'pull-left': (props.left) }, { 'pull-right': (props.right) }, { 'e-scroll-y': (props.scrollY) }, { 'e-scroll-x': (props.scrollX) }, { 'h100': (props.fill) }, { 'w100': (props.fill) }, { 'flex': (props.flex) }, borderClass, props.type);
        return (<div onClick={props.onClick} className={layerClass} style={Object.assign({}, flexStyle, props.style)}>
        {props.children}
      </div>);
    }
}
Layer.defaultProps = {
    overflow: false,
    type: '',
    left: false,
    right: false,
    border: ''
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layer;
