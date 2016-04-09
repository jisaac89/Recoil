"use strict";
var React = require('react');
var classNames = require('classnames');
require('./Pane.less');
class Pane extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const self = this;
        const props = self.props;
        let axis, paneContainerStyle;
        let paneClass = classNames('r-Pane', { 'e-wrapper': (props.wrapper) }, { 'e-open': (props.open) });
        let paneContainerClass = classNames('r-Pane__container', { 'e-open': (props.open) }, { 'w100': (props.fill) }, { 'h100': (props.fill) }, props.direction, props.className);
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
        let childrenPartial = () => {
            return props.children;
        };
        return (<div onClick={props.wrapperClick} className={paneClass}>
        <div ref="pane" className={paneContainerClass} style={paneContainerStyle}>
          {childrenPartial()}
        </div>
      </div>);
    }
}
Pane.defaultProps = {
    className: 'w100'
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Pane;
