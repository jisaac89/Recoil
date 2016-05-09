"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Input_1 = require('../../src/components/Input/Input');
const Layer_1 = require('../../src/components/Layer/Layer');
const InputProperties = [
    {
        name: 'ghost',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the input border should be hidden.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'type',
        type: 'string',
        options: 'text, password, textarea',
        description: 'Defines the type of input the element is.'
    },
    {
        name: 'icon',
        type: 'string',
        options: 'Omit the fa fa-',
        description: 'Add a font-awesome icon to the input.'
    },
    {
        name: 'title',
        type: 'string',
        options: '',
        description: 'Defines the title for the input.'
    },
    {
        name: 'placeholder',
        type: '',
        options: '',
        description: 'Defines the placeholder for the input.'
    },
    {
        name: 'value',
        type: '',
        options: '',
        description: 'Defines the value for the input.'
    },
    {
        name: 'style',
        type: 'string',
        options: '',
        description: 'Defines the inline styles for the element.'
    },
    {
        name: 'errorInline',
        type: 'boolean',
        options: '',
        description: 'Defines if the error appears within the input.'
    },
    {
        name: 'error',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines whether the error message should show.'
    },
    {
        name: 'block',
        type: 'string',
        options: '',
        description: 'Sets the element as a block element with 100% width.'
    },
    {
        name: 'onChange',
        type: '',
        options: '',
        description: 'Define a function, returns the current value of the input.'
    },
    {
        name: 'focusOnMount',
        type: 'boolean',
        options: 'true, false',
        description: 'When the component mounts should the input be set to focus.'
    },
    {
        name: 'focusDelay',
        type: '',
        options: '',
        description: 'Sets the delay for the focus.'
    }
];
class TutorialInput extends React.Component {
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
    setonChange() {
        console.log('test');
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
            React.createElement("h1", null, "Input"), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Input component is an advanced version of the standard input type='text' control.")), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Input_1.default, {type: "text", icon: "search", title: "Search Users", onChange: this.setonChange.bind(this), block: true})
                    )
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Options"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 5, sortable: true, columns: columns, dataSource: InputProperties})
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
exports.default = TutorialInput;
//# sourceMappingURL=TutorialInput.js.map