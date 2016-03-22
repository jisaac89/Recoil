"use strict";
var React = require('react');
var Button_1 = require('../Button/Button');
class Checkbox extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false
        };
    }
    componentDidMount() {
        if (this.props.checked) {
            this.setState({
                checked: true
            });
        }
    }
    toggleChecked() {
        this.setState({
            checked: this.state.checked ? false : true
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.props.checked) {
            this.setState({
                checked: true
            });
        }
    }
    render() {
        const self = this;
        const props = self.props;
        let { checked } = props;
        return (<Button_1.default onClick={this.toggleChecked.bind(this)} tabIndex={-1} ghost icon={this.state.checked ? 'check floatL' : "circle-o"}>
        <input className="hide" type="checkbox" checked={this.state.checked}/>
      </Button_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Checkbox;
