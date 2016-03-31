"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Button_1 = require('../Button/Button');
require('./Checkbox.less');
class Checkbox extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };
    }
    componentDidMount() {
        this.setState({
            value: this.props.tristate ? 2 : this.props.checked ? 1 : 0,
            checked: this.props.checked
        });
        if (this.props.tristate) {
            this.makeCheckboxTriState();
        }
    }
    makeCheckboxTriState() {
        let checkbox = ReactDOM.findDOMNode(this.refs["checkbox"]);
        checkbox.indeterminate = true;
    }
    toggleChecked() {
        this.setState({
            value: this.state.value === 0 ? 1 : 0,
            checked: !this.state.checked
        });
    }
    notchecked() {
        this.setState({
            value: 0,
            checked: false
        });
    }
    checked() {
        this.setState({
            value: 1,
            checked: true
        });
    }
    indeterminate() {
        this.setState({
            value: 2
        });
    }
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        let { checked } = props;
        let { value } = state;
        return (<Button_1.default className="r-Checkbox" progressiveClick={this.props.tristate ? [this.checked.bind(this), this.notchecked.bind(this)] : null} onClick={this.toggleChecked.bind(this)} tabIndex={-1} ghost disabled={props.disabled} icon={value === 1 ? 'check floatL' : value === 0 ? "circle-o" : "minus"}>
          <input ref="checkbox" type="checkbox" checked={this.state.checked}/>
        </Button_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Checkbox;
