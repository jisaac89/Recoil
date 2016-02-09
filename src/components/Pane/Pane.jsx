"use strict";
var React = require('react');
var classnames_1 = require('classnames');
require('./Pane.less');
;
class Pane extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const self = this;
        const props = self.props;
        let axis, paneContainerStyle;
        let paneClass = classnames_1.default('r-Pane', { 'e-wrapper': (props.wrapper) }, { 'e-open': (props.open) });
        let paneContainerClass = classnames_1.default('r-Pane__container', { 'e-open': (props.open) }, { 'w100': (props.fill) }, { 'h100': (props.fill) }, props.direction, props.className);
        switch (props.direction) {
            case 'left' || 'right':
                axis = 'X';
                break;
            case 'top' || 'bottom':
                axis = 'Y';
                break;
            default:
        }
        let offset;
        if (props.offset) {
            offset = props.offset;
        }
        else {
            offset = '0px';
        }
        if (props.open) {
            paneContainerStyle = {
                transform: 'translate' + axis + '(' + offset + ')'
            };
        }
        else {
            paneContainerStyle = null;
        }
        return (<div onClick={props.wrapperClick} className={paneClass}>
        <div ref="pane" className={paneContainerClass} style={paneContainerStyle}>
          {props.children}
        </div>
      </div>);
    }
}
Pane.defaultProps = {
    className: 'w100'
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Pane;
//# sourceMappingURL=Pane.jsx.map