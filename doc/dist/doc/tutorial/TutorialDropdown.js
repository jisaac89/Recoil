"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Dropdown_1 = require('../../src/components/Dropdown/Dropdown');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const dropData = ['from', 'block', 'contentClass', 'onSelected', 'type', 'data'];
const DropdownProperties = [
    {
        name: 'from',
        type: 'string',
        options: 'X X, use top bottom left right',
        description: 'Defines the direction of the drop.'
    },
    {
        name: 'block',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the dropdown is a block element with a width of 100%.'
    },
    {
        name: 'contentClass',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a set of class names for the dropdown content container.'
    },
    {
        name: 'onSelected',
        type: 'function',
        options: 'true, false',
        description: 'Return the selected value of the array, if the dropdown is of type selection.'
    },
    {
        name: 'type',
        type: 'string',
        options: 'selection, button, search.',
        description: 'Defines what type of dropdown it is, omit for default option and pass children.'
    }
];
class TutorialDropdown extends React.Component {
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
            { name: 'description' },
            { name: 'type', width: 300 },
            { name: 'options', width: 250 }
        ];
        return (React.createElement("div", {className: "p10"}, 
            React.createElement("h1", null, "Dropdown"), 
            React.createElement(Layer_1.default, {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Dropdown component is an advanced version of the standard selection options control.")), 
            React.createElement(Layer_1.default, {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("h3", null, "Default"), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Dropdown_1.default, {type: "selection", title: "Dropdown Options", data: dropData})
                    )
                ), 
                React.createElement("h3", null, "With Icon"), 
                React.createElement("p", null, "To add an icon to a dropdowns, just add an icon prop to it. Icon's are taken from font-awesome, you can omit the fa fa-, for example below it would be a Button compoent with a icon prop of \"star\""), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Dropdown_1.default, {icon: "star", type: "selection", title: "Dropdown Options", data: dropData})
                    )
                ), 
                React.createElement("h3", null, "Custom Content"), 
                React.createElement("p", null, "To add custom content to a dropdown, just include it as a child of the component."), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Dropdown_1.default, {contentClass: "w300px", type: "selection", title: "Custom Content"}, 
                            React.createElement("div", {className: "w100 p10"}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
                        )
                    )
                ), 
                React.createElement("h3", null, "Advanced Dropdown"), 
                React.createElement("p", null, 
                    "The example below shows a drop down with the block prop and a ", 
                    React.createElement("strong", null, "from"), 
                    " prop with the value ", 
                    React.createElement("strong", null, "top left"), 
                    " and a ", 
                    React.createElement("strong", null, "contentClass"), 
                    " props of ", 
                    React.createElement("strong", null, "w300px"), 
                    "."), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Dropdown_1.default, {block: true, icon: "eye", from: "top right", contentClass: "w300px", type: "selection", title: "Advanced Dropdown"}, 
                            React.createElement("div", {className: "w100 p10"}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
                        )
                    )
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Props"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: DropdownProperties})
                )), 
            React.createElement(Layer_1.default, {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Video"), 
                React.createElement(Button_1.default, {checked: this.state.showVideo, onClick: this.toggleShowVideo.bind(this)}, "Toggle Video Tutorial"), 
                React.createElement(Door_1.default, {open: this.state.showVideo}, 
                    React.createElement(Layer_1.default, {className: "ptb10"}, "VIDEO")
                ))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialDropdown;
//# sourceMappingURL=TutorialDropdown.js.map