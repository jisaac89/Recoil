"use strict";
var React = require('react');
var classnames_1 = require('classnames');
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
        let layerClass = classnames_1.default('r-Layer', { 'flexit': (props.flex) }, { 'flohide': (props.overflow) }, { 'pull-left': (props.left) }, { 'pull-right': (props.right) }, { 'e-scroll-y': (props.scrollY) }, { 'e-scroll-x': (props.scrollX) }, { 'h100': (props.fill) }, { 'w100': (props.fill) }, borderClass, props.type, props.className);
        return (<div onClick={props.onClick} className={layerClass} style={props.style}>
        {props.children}
      </div>);
    }
}
Layer.defaultProps = {
    overflow: false,
    type: '',
    flex: false,
    left: false,
    right: false,
    border: ''
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layer;
//# sourceMappingURL=Layer.jsx.map