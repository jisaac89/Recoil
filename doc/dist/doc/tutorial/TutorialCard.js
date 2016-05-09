"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Card_1 = require('../../src/components/Card/Card');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
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
            { name: 'name', width: 250 },
            { name: 'description' },
            { name: 'type', width: 300 },
            { name: 'options', width: 250 }
        ];
        return (React.createElement("div", {className: "p10"}, 
            React.createElement("h1", null, "Card"), 
            React.createElement("div", {className: "ptb20"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The material component is a google material enspired div, it has advanced feautures.")), 
            React.createElement("div", {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("h3", null, "Default"), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 dark h100px"}, 
                        React.createElement(Card_1.default, null, "This is an exampe of a Card.")
                    )
                ), 
                React.createElement("h3", null, "Fill"), 
                React.createElement("p", null, 
                    "Fill gives the element a ", 
                    React.createElement("strong", null, "width"), 
                    " and ", 
                    React.createElement("strong", null, "height"), 
                    " of ", 
                    React.createElement("strong", null, "100%"), 
                    " relative to its parent."), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 dark h100px"}, 
                        React.createElement(Card_1.default, {fill: true}, 
                            "This is an exampe of a Card with the prop ", 
                            React.createElement("strong", null, "fill"), 
                            ".")
                    )
                ), 
                React.createElement("h3", null, "Block"), 
                React.createElement("p", null, 
                    "Block gives the element a ", 
                    React.createElement("strong", null, "width"), 
                    " of ", 
                    React.createElement("strong", null, "100%"), 
                    " relative to its parent."), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 dark h100px"}, 
                        React.createElement(Card_1.default, {block: true}, 
                            "This is an exampe of a Card with the prop ", 
                            React.createElement("strong", null, "block"), 
                            ".")
                    )
                ), 
                React.createElement("h3", null, "Resize"), 
                React.createElement("p", null, "Resize allows the user to resize the element."), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement(Layer_1.default, {className: "p10 dark"}, 
                        React.createElement(Card_1.default, {resize: true}, 
                            "This is an exampe of a Card with the prop ", 
                            React.createElement("strong", null, "resize"), 
                            ".")
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
//# sourceMappingURL=TutorialCard.js.map