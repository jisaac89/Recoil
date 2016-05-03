"use strict";
var React = require('react');
var classNames = require('classnames');
require('./Loading.less');
class Loading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const self = this;
        const props = self.props;
        let loadingClass = classNames('r-Loading', 'animated', 'fadeInUp', 'text-center', props.className);
        if (props.if) {
            return <i className="fa fa-circle-o-notch fa-spin"></i>;
        }
        else {
            return null;
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Loading;
