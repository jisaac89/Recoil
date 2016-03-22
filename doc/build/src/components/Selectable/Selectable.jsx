"use strict";
var React = require('react');
var classNames = require('classnames');
require('./Selectable.less');
class Selectable extends React.Component {
    render() {
        const self = this;
        const props = self.props;
        let selectableClass = classNames('r-Selectable', { 'checked': (props.checked) });
        let borderPartial = (!props.ghost ? <div><div className='r-Selectable__border-gray'></div><div className={'r-Selectable__border ' + props.type}></div></div> : null);
        return (<div className={selectableClass}>
        {props.children}
        {borderPartial}
      </div>);
    }
}
Selectable.defaultProps = {
    type: 'primary'
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Selectable;
