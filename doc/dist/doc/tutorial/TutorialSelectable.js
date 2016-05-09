"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const SelectableProperties = [
    {
        name: 'checked',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element is checked.'
    },
    {
        name: 'classNames',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'ghost',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element ghost temppate is checked.'
    },
    {
        name: 'type',
        type: 'string',
        options: '',
        description: 'Defines a class theme for the selectable element.'
    }
];
class TutorialSelectable extends React.Component {
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
            React.createElement("h1", null, "Selectable"), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Selectable component is a simple way to attach a checked state to any element.")), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, "Selectable")
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Options"), 
                React.createElement(Button_1.default, {checked: this.state.showProps, onClick: this.toggleShowProps.bind(this)}, "Toggle Options"), 
                React.createElement(Door_1.default, {open: this.state.showProps}, 
                    React.createElement("div", {className: "ptb10"}, 
                        React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: SelectableProperties})
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
exports.default = TutorialSelectable;
//# sourceMappingURL=TutorialSelectable.js.map