"use strict";
var React = require('react');
var classNames = require('classnames');
require('./Badge.less');
class Badge extends React.Component {
    render() {
        const self = this;
        const props = self.props;
        const badgeStyle = {
            opacity: props.opacity ? props.opacity : '',
            backgroundColor: props.background ? props.background : '',
            WebkitTransition: 'all',
            msTransition: 'all',
            border: props.border ? props.border : ''
        };
        let badgeClass = classNames('r-Badge');
        let itemClass = classNames('r-Badge__item', props.type, { 'ghost': (props.ghost) });
        return (<div style={badgeStyle} className={badgeClass}>
        {props.children}
        <div className={itemClass}>{props.title}</div>
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Badge;
