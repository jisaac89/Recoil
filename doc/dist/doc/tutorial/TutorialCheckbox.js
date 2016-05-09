"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Checkbox_1 = require('../../src/components/Checkbox/Checkbox');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const ChecboxProperties = [
    {
        name: 'checked',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element is checked.'
    },
    {
        name: 'tristate',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the checkbox has a indeterminate state.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the checkbox has a disabled state.'
    }
];
class TutorialCheckbox extends React.Component {
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
            React.createElement("h1", null, "Checkbox"), 
            React.createElement(Layer_1.default, {className: "ptb20"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Checkbox component is an advanced version of the standard input type='checkbox' control.")), 
            React.createElement(Layer_1.default, {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("h3", null, "Default"), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Checkbox_1.default, null)
                    )
                ), 
                React.createElement("h3", null, "Checked"), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Checkbox_1.default, {checked: true})
                    )
                ), 
                React.createElement("h3", null, "TriState"), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Checkbox_1.default, {tristate: true})
                    )
                )), 
            React.createElement(Layer_1.default, {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Props"), 
                React.createElement(Layer_1.default, {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: ChecboxProperties})
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
exports.default = TutorialCheckbox;
//# sourceMappingURL=TutorialCheckbox.js.map