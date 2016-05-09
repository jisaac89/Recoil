"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const DoorProperties = [
    {
        name: 'open',
        type: 'boolean',
        options: 'true, false, false by default',
        description: 'Defines if the element is open or closed.'
    },
    {
        name: 'overflow',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element is overflow is visible.'
    },
    {
        name: 'className',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a set of class names for the element.'
    }
];
class TutorialDoor extends React.Component {
    constructor() {
        super();
        this.state = {
            showProps: true,
            showVideo: false,
            doorIsOpen: false
        };
    }
    toggleShowProps() {
        this.setState({
            showVideo: false,
            doorIsOpen: false,
            showProps: this.state.showProps ? false : true
        });
    }
    toggleShowVideo() {
        this.setState({
            showProps: false,
            doorIsOpen: false,
            showVideo: this.state.showVideo ? false : true
        });
    }
    toggleDoorIsOpen() {
        this.setState({
            showProps: false,
            showVideo: false,
            doorIsOpen: this.state.doorIsOpen ? false : true
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
            React.createElement("h1", null, "Door"), 
            React.createElement(Layer_1.default, {className: "ptb20"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Door component opens or closes its children depending on an if statement. By default door are always closed.")), 
            React.createElement(Layer_1.default, {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("h3", null, "Default"), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Layer_1.default, null, 
                        React.createElement(Button_1.default, {className: "mb10", checked: this.state.doorIsOpen, onClick: this.toggleDoorIsOpen.bind(this)}, "Toggle Door Open"), 
                        React.createElement(Door_1.default, {open: this.state.doorIsOpen}, 
                            React.createElement(Layer_1.default, {type: "light", className: "p10"}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
                        ))
                )), 
            React.createElement(Layer_1.default, {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Props"), 
                React.createElement(Layer_1.default, {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: DoorProperties})
                )), 
            React.createElement(Layer_1.default, {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Video"), 
                React.createElement(Button_1.default, {checked: this.state.showVideo, onClick: this.toggleShowVideo.bind(this)}, "Toggle Video Tutorial"), 
                React.createElement(Door_1.default, {open: this.state.showVideo}, 
                    React.createElement(Layer_1.default, {className: "ptb10"}, "VIDEO")
                ))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialDoor;
//# sourceMappingURL=TutorialDoor.js.map