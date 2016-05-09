"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Emerge_1 = require('../../src/components/Emerge/Emerge');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const Toolbar_1 = require('../../src/components/Toolbar/Toolbar');
const ToolbarProperties = [
    { name: 'border', type: '', options: '', description: '' },
    { name: 'vertical', type: '', options: '', description: '' },
    { name: 'textCenter', type: '', options: '', description: '' },
    { name: 'noRadius', type: '', options: '', description: '' },
    { name: 'spacing', type: '', options: '', description: '' },
    { name: 'block', type: '', options: '', description: '' },
    { name: 'left', type: '', options: '', description: '' },
    { name: 'right', type: '', options: '', description: '' },
    { name: 'fill', type: '', options: '', description: '' },
    { name: 'className', type: '', options: '', description: '' },
    { name: 'style', type: '', options: '', description: '' },
    { name: 'children', type: '', options: '', description: '' },
    { name: 'flex', type: '', options: '', description: '' },
    { name: 'flow', type: '', options: '', description: '' },
    { name: 'justify', type: '', options: '', description: '' },
    { name: 'align', type: '', options: '', description: '' }
];
class TutorialToolbar extends React.Component {
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
        return (React.createElement(Emerge_1.default, null, 
            React.createElement("div", {className: "p10"}, 
                React.createElement("h1", null, "Toolbar"), 
                React.createElement(Layer_1.default, {className: "ptb10"}, 
                    React.createElement("h2", {className: "pb10"}, "Description"), 
                    React.createElement("p", null, "The toolbar component allows you to pass and style a group of buttons, inputs and dropdowns.")), 
                React.createElement(Layer_1.default, {className: "ptb10"}, 
                    React.createElement("h2", {className: "pb10"}, "Examples"), 
                    React.createElement(Layer_1.default, {className: "ptb10"}, 
                        React.createElement(Layer_1.default, {className: "p10 light text-center"}, 
                            React.createElement(Toolbar_1.default, {vertical: true, spacing: true}, 
                                React.createElement(Button_1.default, null, "A"), 
                                React.createElement(Button_1.default, null, "B"), 
                                React.createElement(Button_1.default, null, "C")), 
                            React.createElement(Toolbar_1.default, {spacing: true}, 
                                React.createElement(Button_1.default, null, "A"), 
                                React.createElement(Button_1.default, null, "B"), 
                                React.createElement(Button_1.default, null, "C")))
                    )), 
                React.createElement(Layer_1.default, {className: "ptb10"}, 
                    React.createElement("h2", {className: "pb10"}, "Options"), 
                    React.createElement(Button_1.default, {checked: this.state.showProps, onClick: this.toggleShowProps.bind(this)}, "Toggle Options"), 
                    React.createElement(Door_1.default, {open: this.state.showProps}, 
                        React.createElement(Layer_1.default, {className: "ptb10"}, 
                            React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: ToolbarProperties})
                        )
                    )), 
                React.createElement(Layer_1.default, {className: "ptb10"}, 
                    React.createElement("h2", {className: "pb10"}, "Video"), 
                    React.createElement(Button_1.default, {checked: this.state.showVideo, onClick: this.toggleShowVideo.bind(this)}, "Toggle Video Tutorial"), 
                    React.createElement(Door_1.default, {open: this.state.showVideo}, 
                        React.createElement(Layer_1.default, {className: "ptb10"}, "VIDEO")
                    )))
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialToolbar;
//# sourceMappingURL=TutorialToolbar.js.map