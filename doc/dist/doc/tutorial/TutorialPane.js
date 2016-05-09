"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Emerge_1 = require('../../src/components/Emerge/Emerge');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const Pane_1 = require('../../src/components/Pane/Pane');
const Toolbar_1 = require('../../src/components/Toolbar/Toolbar');
const PaneProperties = [
    {
        name: 'wrapper',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the pane has a wrapper element surrounding it.'
    },
    {
        name: 'open',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the pane is open.'
    },
    {
        name: 'fill',
        type: 'boolean',
        options: 'true, false',
        description: 'Give the pane element a height and width of 100%.'
    },
    {
        name: 'direction',
        type: 'string',
        options: '',
        description: 'Defines the direction the pane slides in from.'
    },
    {
        name: 'offset',
        type: 'string, number',
        options: '',
        description: 'Defines the starting offset of the pane.'
    },
    {
        name: 'wrapperClick',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a function the runs when the user clicks the pane wrapper.'
    }
];
class TutorialPane extends React.Component {
    constructor() {
        super();
        this.state = {
            showProps: true,
            showVideo: false,
            paneOpen: false
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
    togglePane() {
        this.setState({
            paneOpen: this.state.paneOpen ? false : true
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
            React.createElement("h1", null, "Pane"), 
            React.createElement(Layer_1.default, {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Pane slides in an element if a certain event happens, user must state the direction as well.")), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Layer_1.default, {overflow: true, className: "p10 dark text-center w100 h200px"}, 
                        React.createElement(Button_1.default, {onClick: this.togglePane.bind(this)}, "Toggle Pane"), 
                        React.createElement(Pane_1.default, {direction: 'bottom', open: this.state.paneOpen}, 
                            React.createElement(Layer_1.default, {type: "light text-center p10"}, 
                                React.createElement(Toolbar_1.default, {spacing: true}, 
                                    React.createElement(Emerge_1.default, {if: this.state.paneOpen}, 
                                        React.createElement(Button_1.default, {onClick: this.togglePane.bind(this), icon: "user"}), 
                                        React.createElement(Button_1.default, {onClick: this.togglePane.bind(this), icon: "search"}), 
                                        React.createElement(Button_1.default, {onClick: this.togglePane.bind(this), icon: "plus"}))
                                )
                            )
                        ))
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Options"), 
                React.createElement(Layer_1.default, {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: PaneProperties})
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Video"), 
                React.createElement(Button_1.default, {checked: this.state.showVideo, onClick: this.toggleShowVideo.bind(this)}, "Toggle Video Tutorial"), 
                React.createElement(Door_1.default, {open: this.state.showVideo}, 
                    React.createElement(Layer_1.default, {className: "ptb10"}, "VIDEO")
                ))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialPane;
//# sourceMappingURL=TutorialPane.js.map