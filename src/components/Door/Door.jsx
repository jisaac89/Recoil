"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var classnames_1 = require('classnames');
require('./Door.less');
class Door extends React.Component {
    componentDidMount() {
        this.refDoor = ReactDOM.findDOMNode(this.refs["door"]);
    }
    render() {
        const self = this;
        const props = self.props;
        const getAbsoluteHeight = (el) => {
            let styles = window.getComputedStyle(el);
            let margin = parseFloat(styles.marginTop) +
                parseFloat(styles.marginBottom);
            return Math.ceil(el.offsetHeight + margin);
        };
        let doorClass = classnames_1.default('r-Door');
        let doorStyle = {
            maxHeight: (props.open ? (this.refDoor ? getAbsoluteHeight(this.refDoor.childNodes[0]) + 'px' : 'auto') : '0px'),
            overflow: 'hidden'
        };
        let doorContainerClass = classnames_1.default('r-Door__container', props.className);
        return (<div ref="door" className={doorClass} style={doorStyle}>
         <div className={doorContainerClass}>
           {props.children}
         </div>
       </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Door;
//# sourceMappingURL=Door.jsx.map