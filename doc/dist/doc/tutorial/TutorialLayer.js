"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const LayerProperties = [
    { name: 'border', type: '', options: '', description: '' },
    { name: 'overflow', type: '', options: '', description: '' },
    { name: 'left', type: '', options: '', description: '' },
    { name: 'right', type: '', options: '', description: '' },
    { name: 'scrollY', type: '', options: '', description: '' },
    { name: 'scrollX', type: '', options: '', description: '' },
    { name: 'fill', type: '', options: '', description: '' },
    { name: 'type', type: '', options: '', description: '' },
    { name: 'children', type: '', options: '', description: '' },
    { name: 'className', type: '', options: '', description: '' },
    { name: 'style', type: '', options: '', description: '' },
    { name: 'onClick', type: '', options: '', description: '' },
    { name: 'block', type: '', options: '', description: '' },
    { name: 'key', type: '', options: '', description: '' },
    { name: 'align', type: '', options: '', description: '' },
    { name: 'flex', type: '', options: '', description: '' },
    { name: 'flow', type: '', options: '', description: '' },
    { name: 'justify', type: '', options: '', description: '' }
];
class TutorialLayer extends React.Component {
    constructor() {
        super();
        this.state = {
            showProps: true,
            showVideo: false
        };
    }
    toggleShowProps() {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    }
    toggleShowVideo() {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    }
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        const columns = [
            { name: 'name', width: 250 },
            { name: 'type', width: 300 },
            { name: 'options', width: 250 },
            { name: 'description' }
        ];
        return (React.createElement("div", {className: "p10"}, 
            React.createElement("h1", null, "Layer"), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Layer component is an advanced version of the standard div control.")), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Layer_1.default, {className: "p10 dark"}, 
                        React.createElement(Layer_1.default, {type: "light", className: "p10"}, "This is a Layer")
                    )
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Options"), 
                React.createElement(Button_1.default, {checked: this.state.showProps, onClick: this.toggleShowProps.bind(this)}, "Toggle Options"), 
                React.createElement(Door_1.default, {open: this.state.showProps}, 
                    React.createElement("div", {className: "ptb10"}, 
                        React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: LayerProperties})
                    )
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Video"), 
                React.createElement(Button_1.default, {checked: this.state.showVideo, onClick: this.toggleShowVideo.bind(this)}, "Toggle Video Tutorial"), 
                React.createElement(Door_1.default, {open: this.state.showVideo}, 
                    React.createElement("div", {className: "ptb10"}, "VIDEO")
                ))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialLayer;
//# sourceMappingURL=TutorialLayer.js.map