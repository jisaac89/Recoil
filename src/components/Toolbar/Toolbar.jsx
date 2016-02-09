"use strict";
var React = require('react');
var classnames_1 = require('classnames');
require('./Toolbar.less');
class Toolbar extends React.Component {
    render() {
        const self = this;
        const props = self.props;
        let toolbarClass = classnames_1.default('r-Toolbar', { 'border': (props.border) }, { 'vertical': (props.vertical) }, { 'text-center': (props.textCenter) }, { 'no-radius': (props.noRadius) }, { 'flexit': (props.flex) }, { 'spacing': (props.spacing) }, { 'w100': (props.block) }, { 'pull-left': (props.left) }, { 'pull-right': (props.right) }, { 'w100': (props.fill) }, { 'wh100': (props.fill) }, props.className);
        return (<div style={props.style} className={toolbarClass}>
        {props.children}
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Toolbar;
//# sourceMappingURL=Toolbar.jsx.map