"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Emerge_1 = require('../../src/components/Emerge/Emerge');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const EmergeProperties = [
    {
        name: 'if',
        type: 'boolean',
        options: 'true, false. True by default.',
        description: 'Defines if the element should emerge and stagger its children.'
    },
    {
        name: 'enter',
        type: 'string',
        options: 'Uses animate.css',
        description: 'Add the type of animations the staggered children will display as on enter.'
    },
    {
        name: 'exit',
        type: 'string',
        options: 'Uses animate.css',
        description: 'Add the type of animations the staggered children will display as on exit.'
    },
    {
        name: 'delay',
        type: 'number',
        options: '',
        description: 'Set the delay in milliseconds for each staggered child to appears.'
    },
    {
        name: 'overflow',
        type: 'string',
        options: 'true, false',
        description: 'Defines if the elements overflow is visible.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'style',
        type: 'string',
        options: '',
        description: 'Add inline styles to the element.'
    }
];
class TutorialEmerge extends React.Component {
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
            { name: 'name', width: 150 },
            { name: 'description' },
            { name: 'type', width: 100 },
            { name: 'options', width: 250 }
        ];
        return (React.createElement("div", {className: "p10"}, 
            React.createElement("h1", null, "Emerge"), 
            React.createElement("div", {className: "ptb20"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Emerge component staggers children into view if a certain event happens.")), 
            React.createElement("div", {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Emerge_1.default, {delay: 300, if: this.props.slideIndex === 6}, 
                            React.createElement(Button_1.default, {className: "p10 mr10"}, "A"), 
                            React.createElement(Button_1.default, {className: "p10 mr10"}, "B"), 
                            React.createElement(Button_1.default, {className: "p10 mr10"}, "C"), 
                            React.createElement(Button_1.default, {className: "p10"}, "D"))
                    )
                )), 
            React.createElement("div", {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Props"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: EmergeProperties})
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
exports.default = TutorialEmerge;
//# sourceMappingURL=TutorialEmerge.js.map