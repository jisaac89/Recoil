"use strict";
var React = require('react');
var classnames_1 = require('classnames');
require('./Shrink.less');
class Shrink extends React.Component {
    render() {
        const self = this;
        const props = self.props;
        let shrinkClass = classnames_1.default('r-Shrink', { 'e-shrink': (props.if) });
        return (<div className={shrinkClass}>
        {props.children}
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Shrink;
//# sourceMappingURL=Shrink.jsx.map