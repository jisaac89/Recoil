"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const Shrink_1 = require('../../src/components/Shrink/Shrink');
const ShrinkProperties = [
    {
        name: 'if',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element will shrink and be disabled.'
    },
    {
        name: 'fill',
        type: 'boolean',
        options: 'true, false',
        description: 'Set the element to have a 100% height and width.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Add a list of class names to the element.'
    }
];
class TutorialShrink extends React.Component {
    constructor() {
        super();
        this.state = {
            showProps: true,
            showVideo: false,
            shrink: false
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
    toggleShrink() {
        this.setState({
            shrink: this.state.shrink ? false : true
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
            React.createElement("h1", null, "Checkbox"), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Checkbox component is an advanced version of the standard input type='checkbox' control.")), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Button_1.default, {onClick: this.toggleShrink.bind(this)}, "Toggle Shrink"), 
                    React.createElement(Shrink_1.default, {if: this.state.shrink}, 
                        React.createElement(Layer_1.default, {className: "p10 light mt10"}, "Shrink and disable this element.")
                    ))), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Options"), 
                React.createElement(Button_1.default, {checked: this.state.showProps, onClick: this.toggleShowProps.bind(this)}, "Toggle Options"), 
                React.createElement(Door_1.default, {open: this.state.showProps}, 
                    React.createElement(Layer_1.default, {className: "ptb10"}, 
                        React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: ShrinkProperties})
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
exports.default = TutorialShrink;
//# sourceMappingURL=TutorialShrink.js.map