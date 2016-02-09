"use strict";
var React = require('react');
var classnames_1 = require('classnames');
require('./Loading.less');
class Loading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const self = this;
        const props = self.props;
        let loadingClass = classnames_1.default('r-Loading', 'animated', 'fadeInUp', 'text-center', 'mt15', 'ml5', props.className);
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
//# sourceMappingURL=Loading.jsx.map