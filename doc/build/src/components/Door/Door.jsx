"use strict";
var React = require('react');
var classNames = require('classnames');
require('./Door.less');
class Door extends React.Component {
    constructor() {
        super();
        this.state = {
            autoheight: false,
            maxHeight: 100
        };
    }
    render() {
        const self = this;
        const props = self.props;
        const state = self.state;
        let doorClass = classNames('r-Door', props.className);
        let doorContainerClass = classNames('r-Door__container');
        if (props.open) {
            return (<div ref="door" className={doorClass}>
           <div className={doorContainerClass}>
             {props.children}
           </div>
         </div>);
        }
        else {
            return (<div ref="door" className={doorClass}>
           <div className={doorContainerClass}>
           </div>
         </div>);
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Door;
