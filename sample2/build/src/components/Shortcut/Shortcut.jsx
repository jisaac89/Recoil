"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Layer_1 = require('../Layer/Layer');
var Shrink_1 = require('../Shrink/Shrink');
var Toolbar_1 = require('../Toolbar/Toolbar');
var Input_1 = require('../Input/Input');
var Grid_1 = require('../Grid/Grid');
var Pane_1 = require('../Pane/Pane');
class Shortcut extends React.Component {
    constructor() {
        super();
        this.state = {
            showShortcut: false,
            clickCounter: 0,
            value: ''
        };
    }
    componentDidMount() {
        const self = this;
        const props = self.props;
        window.addEventListener("keydown", this.startShortcutListener.bind(this), false);
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", null, false);
        window.removeEventListener("keyup", null, false);
    }
    startShortcutListener(e) {
        const context = this;
        const props = context.props;
        let state = context.state;
        const refInput = ReactDOM.findDOMNode(context.refs["input"]);
        if (e.keyCode === 16) {
            context.setState({
                showShortcut: this.state.showShortcut ? false : true
            });
        }
    }
    onChange(value) {
        this.setState({
            value: value
        });
        this.props.onChange(value);
    }
    render() {
        const self = this;
        let itemArray = [];
        let columns = [
            { name: 'name', tabbable: true, width: 200 },
            { name: 'description' }
        ];
        for (let i in this.props.dataSource) {
            let item = this.props.dataSource[i];
            if (item.name.toLowerCase().indexOf(self.state.value.toLowerCase()) > -1) {
                itemArray.push(item);
            }
        }
        return (<Layer_1.default fill overflow>
        <Shrink_1.default className={'posrel'} if={this.state.showShortcut}>
          {this.props.children}
        </Shrink_1.default>
        <Pane_1.default direction="top" open={this.state.showShortcut}>
          <Layer_1.default type="light h100 w600px p10 posrel center-width mt100">
            {(() => {
            if (this.state.showShortcut) {
                return (<Toolbar_1.default block>
                <Input_1.default ghost focusOnMount={this.state.showShortcut} value={this.state.value} onChange={this.onChange.bind(this)} block ref='input' type="text" icon="search" title={this.props.title ? this.props.title : 'Search website'}/>
              </Toolbar_1.default>);
            }
        })()}
            <Grid_1.default dataSource={itemArray} open={this.state.showShortcut} columns={columns} onSelect={this.props.onChange}/>
          </Layer_1.default>
        </Pane_1.default>
      </Layer_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Shortcut;
