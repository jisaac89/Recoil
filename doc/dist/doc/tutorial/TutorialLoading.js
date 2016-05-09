"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const Loading_1 = require('../../src/components/Loading/Loading');
const LoadingProperties = [
    {
        name: 'if',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the loading element should show.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    }
];
class TutorialLoading extends React.Component {
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
            React.createElement("h1", null, "Loading"), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Loading component shows a simple loader if a certain event happens.")), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Loading_1.default, {if: true})
                    )
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Options"), 
                React.createElement(Button_1.default, {checked: this.state.showProps, onClick: this.toggleShowProps.bind(this)}, "Toggle Options"), 
                React.createElement(Door_1.default, {open: this.state.showProps}, 
                    React.createElement(Layer_1.default, {className: "ptb10"}, 
                        React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: LoadingProperties})
                    )
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
exports.default = TutorialLoading;
//# sourceMappingURL=TutorialLoading.js.map