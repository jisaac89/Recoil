"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const Toolbar_1 = require('../../src/components/Toolbar/Toolbar');
const ButtonProperties = [
    {
        name: 'disabled',
        type: 'boolean',
        options: 'true, false',
        description: 'Toggle if the button is disabled or not.'
    },
    {
        name: 'block',
        type: 'boolean',
        options: 'true, false',
        description: 'Block converts the button element to a block element which gives it full width.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Add a list of class names.'
    },
    {
        name: 'type',
        type: 'string',
        options: 'primary, secondary',
        description: 'Template type for the button.'
    },
    {
        name: 'icon',
        type: 'string',
        options: 'Omit the fa fa-',
        description: 'Include a font-awesome icon.'
    },
    {
        name: 'href',
        type: 'string',
        options: '',
        description: 'Add a link to the button.'
    },
    {
        name: 'target',
        type: 'string',
        options: '',
        description: 'Add a target attribute to the button.'
    },
    {
        name: 'ghost',
        type: 'boolean',
        options: 'true, false',
        description: 'Switch to the ghost template mode.'
    },
    {
        name: 'strech',
        type: 'boolean',
        options: 'true, false',
        description: 'Add a width of 100% to the button.'
    },
    {
        name: 'pointer',
        type: 'any',
        options: 'true, false',
        description: 'Add a mouse pointer on hover.'
    },
    {
        name: 'right',
        type: 'boolean',
        options: 'true, false',
        description: 'Float the button right.'
    },
    {
        name: 'left',
        type: 'boolean',
        options: 'true, false',
        description: 'Float the button left.'
    },
    {
        name: 'size',
        type: 'string',
        options: 'small, large, xlarge',
        description: 'Set the size of the button by class name.'
    },
    {
        name: 'submit',
        type: 'boolean',
        options: 'true, false',
        description: 'Set whether the button is of submit type.'
    },
    {
        name: 'style',
        type: 'any',
        options: '',
        description: 'Add custom inline styles.'
    },
    {
        name: 'checked',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets wether the button is checked.'
    },
    {
        name: 'onClick',
        type: '()',
        options: '',
        description: 'Set an onClick function to the element.'
    },
    {
        name: 'tabIndex',
        type: 'any',
        options: '',
        description: 'Set a tabIndex to the button.'
    },
    {
        name: 'progressiveClick',
        type: 'any',
        options: '',
        description: 'An array of functions that will repeat starting from the firts index.'
    },
    {
        name: 'shortcut',
        type: 'any',
        options: '',
        description: 'Set a shortcut key to the button that will trigger the click event.'
    }
];
class TutorialButton extends React.Component {
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
        const ButtonColumns = [
            { name: 'name', width: 250 },
            { name: 'type', width: 300 },
            { name: 'options', width: 250 },
            { name: 'description' }
        ];
        return (React.createElement("div", {className: "p10"}, 
            React.createElement("h1", null, "Button"), 
            React.createElement("div", {className: "ptb20"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Button component is an advanced version of the standard default button control.")), 
            React.createElement("div", {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("h3", null, "Default"), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {spacing: true}, 
                        React.createElement(Button_1.default, null, "Default Button"), 
                        React.createElement(Button_1.default, {type: "primary"}, "Primary Button"), 
                        React.createElement(Button_1.default, {type: "error"}, "Error Button"))
                ), 
                React.createElement("h3", null, "Adding Icons"), 
                React.createElement("p", null, "To add an icon to a button, just add an icon prop to it. Icon's are taken from font-awesome, you can omit the fa fa-, for example below it would be a Button compoent with a icon prop of \"star\""), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {spacing: true, className: 'mr10'}, 
                        React.createElement(Button_1.default, {icon: "star"}, "Button with an icon"), 
                        React.createElement(Button_1.default, {icon: "home", type: "primary"}))
                ), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {flush: true}, 
                        React.createElement(Button_1.default, {icon: "fast-backward"}), 
                        React.createElement(Button_1.default, {icon: "backward"}), 
                        React.createElement(Button_1.default, {icon: "pause"}))
                ), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {flush: true, noRadius: true, noBorder: true}, 
                        React.createElement(Button_1.default, {icon: "stop"}), 
                        React.createElement(Button_1.default, {icon: "forward"}), 
                        React.createElement(Button_1.default, {icon: "fast-forward"}))
                ), 
                React.createElement("h3", null, "Sizes"), 
                React.createElement("p", null, "Buttons come in a few sizes, small, default, large and xlarge."), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {spacing: true}, 
                        React.createElement(Button_1.default, {size: "small"}, "Small Button"), 
                        React.createElement(Button_1.default, null, "Default"), 
                        React.createElement(Button_1.default, {size: "large"}, "Large Button"), 
                        React.createElement(Button_1.default, {size: "xlarge"}, "Extra Large Button"))
                ), 
                React.createElement("h3", null, "States"), 
                React.createElement("p", null, 
                    "Buttons can have different states. You can pass a ", 
                    React.createElement("strong", null, "disbaled"), 
                    ",", 
                    React.createElement("strong", null, "ghost"), 
                    " or ", 
                    React.createElement("strong", null, "checked"), 
                    " props to a Button."), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {spacing: true}, 
                        React.createElement(Button_1.default, {checked: true}, "Checked Button"), 
                        React.createElement(Button_1.default, {disabled: true}, "Disabled Button"), 
                        React.createElement(Button_1.default, {ghost: true}, "Ghost Button"))
                ), 
                React.createElement("h3", null, "Pointer"), 
                React.createElement("p", null, 
                    "The ", 
                    React.createElement("strong", null, "pointer"), 
                    " prop accepts a direction either ", 
                    React.createElement("strong", null, "left"), 
                    " or ", 
                    React.createElement("strong", null, "right"), 
                    "."), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {spacing: true}, 
                        React.createElement(Button_1.default, {pointer: "right", className: "mr20"}, "Pointer Right"), 
                        React.createElement(Button_1.default, {type: "primary", pointer: "left"}, "Pointer Left"))
                ), 
                React.createElement("h3", null, "Links"), 
                React.createElement("p", null, 
                    "You can convert any Button component to a Link by adding the ", 
                    React.createElement("strong", null, "href"), 
                    " prop to it."), 
                React.createElement(Layer_1.default, {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {spacing: true}, 
                        React.createElement(Button_1.default, {icon: "github", href: 'https//www.github.com/jisaac89/recoil'}, "Recoil Github")
                    )
                )), 
            React.createElement("div", {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Props"), 
                React.createElement(Layer_1.default, {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: ButtonColumns, dataSource: ButtonProperties})
                )), 
            React.createElement("div", {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Video"), 
                React.createElement(Button_1.default, {checked: this.state.showVideo, onClick: this.toggleShowVideo.bind(this)}, "Toggle Video Tutorial"), 
                React.createElement(Door_1.default, {open: this.state.showVideo}, 
                    React.createElement(Layer_1.default, {className: "ptb10"}, "VIDEO")
                ))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialButton;
//# sourceMappingURL=TutorialButton.js.map