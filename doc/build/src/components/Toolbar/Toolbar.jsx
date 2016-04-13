"use strict";
const React = require('react');
const classNames = require('classnames');
require('./Toolbar.less');
class Toolbar extends React.Component {
    render() {
        const self = this;
        const props = self.props;
        let flexFlow;
        let flexStyle;
        if (props.flex) {
            flexStyle = {
                'WebkitFlexFlow': props.flow !== '' && props.flow ? props.flow : 'row nowrap',
                'justifyContent': props.justify ? props.justify : 'flex-start',
                'alignItems': props.align ? props.align : 'stretch',
                'WebkitFlex': props.flex !== '' ? props.flex : null
            };
        }
        let toolbarClass = classNames('r-Toolbar', { 'border': (props.border) }, { 'vertical': (props.vertical) }, { 'text-center': (props.textCenter) }, { 'no-radius': (props.noRadius) }, { 'spacing': (props.spacing) }, { 'w100': (props.block) }, { 'pull-left': (props.left) }, { 'pull-right': (props.right) }, { 'w100': (props.fill) }, { 'wh100': (props.fill) }, { 'flush': (props.flush) }, { 'flex': (props.flex) }, { 'no-border': (props.noBorder) }, props.className);
        return (<div ref="toolbar" style={Object.assign({}, flexStyle, props.style)} className={toolbarClass} onClick={this.props.onClick}>
        {props.children}
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Toolbar;
