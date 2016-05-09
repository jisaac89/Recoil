"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const Toolbar_1 = require('../../src/components/Toolbar/Toolbar');
const Toggle_1 = require('../../src/components/Toggle/Toggle');
const CardProperties = [
    {
        name: 'resize',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element can be resized.'
    },
    {
        name: 'hover',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets if the element has an hover action.'
    },
    {
        name: 'float',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element will float on screen.'
    },
    {
        name: 'block',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets the element to have a block display.'
    },
    {
        name: 'fill',
        type: 'number',
        options: '',
        description: 'Sets the element to have a height and width of 100% relative to its parent.'
    },
    {
        name: 'onClick',
        type: 'number',
        options: '',
        description: 'Defines a onClick function for the element.'
    },
    {
        name: 'style',
        type: 'number',
        options: '',
        description: 'Defines the styles for the element.'
    },
    {
        name: 'className',
        type: 'number',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'onMouseEnter',
        type: 'number',
        options: '',
        description: 'Defines a onMouseEnter function for the element.'
    },
    {
        name: 'onMouseLeave',
        type: 'number',
        options: '',
        description: 'Defines a onMouseLeave function for the element.'
    },
];
class TutorialCard extends React.Component {
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
            { name: 'name', width: 130 },
            { name: 'description' },
            { name: 'type', width: 120 },
            { name: 'options', width: 250 }
        ];
        return (React.createElement("div", {className: "p10"}, 
            React.createElement("h1", null, "Toggle"), 
            React.createElement(Layer_1.default, {className: "ptb20"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The material component is a google material enspired div, it has advanced feautures.")), 
            React.createElement("div", {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("h3", null, "Default"), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Toggle_1.default, null)
                ), 
                React.createElement("div", {className: "pb20"}, 
                    React.createElement("p", null, 
                        "With props checked passed as ", 
                        React.createElement("strong", null, "true"), 
                        "."), 
                    React.createElement(Toggle_1.default, {className: "mt10", checked: true})), 
                React.createElement("h3", null, "Toggle Numbers"), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {spacing: true}, 
                        React.createElement(Toggle_1.default, {columns: [15, 20, 25]})
                    )
                ), 
                React.createElement("h3", null, "Toggle Strings"), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {spacing: true}, 
                        React.createElement(Toggle_1.default, {columns: ["S", "M", "L"]})
                    )
                ), 
                React.createElement("h3", null, "Toggle Colors"), 
                React.createElement("p", null, 
                    "To toggle a string of CSS based background colors or images just pass in the ", 
                    React.createElement("strong", null, "colors"), 
                    " prop."), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {spacing: true}, 
                        React.createElement(Toggle_1.default, {type: "colors", columns: ['#FF5757', '#00A0DC', '#8D6CAB']})
                    )
                ), 
                React.createElement("h3", null, "Ghost Toggle"), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Toolbar_1.default, {spacing: true}, 
                        React.createElement(Toggle_1.default, {ghost: true, columns: ["Monday", "Tuesday", "Wednesday"]})
                    )
                )), 
            React.createElement("div", {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Props"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: CardProperties})
                )), 
            React.createElement("div", {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Video"), 
                React.createElement(Button_1.default, {checked: this.state.showVideo, onClick: this.toggleShowVideo.bind(this)}, "Toggle Video Tutorial"), 
                React.createElement(Door_1.default, {open: this.state.showVideo}, 
                    React.createElement("div", {className: "ptb10"}, "VIDEO")
                ))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialCard;
//# sourceMappingURL=TutorialToggle.js.map