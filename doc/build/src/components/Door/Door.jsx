"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
require('./Door.less');
const getAbsoluteHeight = (el) => {
    let styles = window.getComputedStyle(el);
    let margin = parseFloat(styles.marginTop) +
        parseFloat(styles.marginBottom);
    return Math.ceil(el.offsetHeight + margin);
};
class Door extends React.Component {
    constructor() {
        super();
        this.state = {
            autoHeight: false,
            maxHeight: 100
        };
    }
    componentDidMount() {
        this.refDoor = ReactDOM.findDOMNode(this.refs["door"]);
        if (this.props.open) {
            this.refDoor.style.maxHeight = getAbsoluteHeight(this.refDoor.childNodes[0]) + 'px';
        }
    }
    componentWillReceiveProps(nextProps) {
        const self = this;
        var refDoor = ReactDOM.findDOMNode(this.refs["door"]);
        if (nextProps.open) {
            self.setState({
                maxHeight: getAbsoluteHeight(refDoor.childNodes[0])
            });
            {
                (() => {
                    window.setTimeout(() => {
                        self.setAutoHeight();
                    }, 600);
                })();
            }
        }
        else {
            self.setState({
                autoHeight: false
            });
        }
    }
    setAutoHeight() {
        this.setState({
            autoHeight: true
        });
    }
    render() {
        const self = this;
        const props = self.props;
        const state = self.state;
        let doorClass = classNames('r-Door', { 'e-open': (props.open) }, { 'e-autoHeight': (state.autoHeight) }, props.className);
        let doorContainerClass = classNames('r-Door__container');
        return (<div ref="door" className={doorClass} style={{ maxHeight: (props.open ? this.state.maxHeight + 'px' : '0px') }}>
         <div className={doorContainerClass}>
           {props.children}
         </div>
       </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Door;
