"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const Modal_1 = require('../../src/components/Modal/Modal');
const ModalProperties = [
    {
        name: 'open',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the Modal should show.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'icon',
        type: 'string',
        options: 'Omit to fa fa-',
        description: 'Defines a font awesome icon for the modal.'
    },
    {
        name: 'title',
        type: 'string',
        options: '',
        description: 'Defines a title for the modal element.'
    },
    {
        name: 'float',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the modal element is floating.'
    },
    {
        name: 'ghost',
        type: 'string',
        options: '',
        description: 'Defines if the modal is in ghost mode.'
    },
    {
        name: 'fullScreen',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets the modal to full-screen mode.'
    },
    {
        name: 'onClose',
        type: 'string',
        options: '',
        description: 'Defines an onClose event for the modal.'
    },
    {
        name: 'min',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the modal is minified.'
    }
];
class TutorialModal extends React.Component {
    constructor() {
        super();
        this.state = {
            showProps: true,
            showVideo: false,
            showModal: false
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
    toggleModal() {
        this.setState({
            showModal: this.state.showModal ? false : true
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
            React.createElement("h1", null, "Modal"), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Modal component shows a simple modal if a certain event happens.")), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Layer_1.default, {className: "p10 light"}, 
                        React.createElement(Button_1.default, {onClick: this.toggleModal.bind(this)}, "Show Modal")
                    )
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Options"), 
                React.createElement(Button_1.default, {checked: this.state.showProps, onClick: this.toggleShowProps.bind(this)}, "Toggle Options"), 
                React.createElement(Door_1.default, {open: this.state.showProps}, 
                    React.createElement(Layer_1.default, {className: "ptb10"}, 
                        React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: ModalProperties})
                    )
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Video"), 
                React.createElement(Button_1.default, {checked: this.state.showVideo, onClick: this.toggleShowVideo.bind(this)}, "Toggle Video Tutorial"), 
                React.createElement(Door_1.default, {open: this.state.showVideo}, 
                    React.createElement(Layer_1.default, {className: "ptb10"}, "VIDEO")
                )), 
            React.createElement(Modal_1.default, {open: this.state.showModal}, 
                React.createElement(Layer_1.default, {className: "p10"}, 
                    React.createElement("p", {className: "mb10"}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), 
                    React.createElement(Button_1.default, {onClick: this.toggleModal.bind(this)}, "Close Modal"))
            )));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialModal;
//# sourceMappingURL=TutorialModal.js.map