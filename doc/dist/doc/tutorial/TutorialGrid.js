"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const GridProperties = [
    {
        name: 'columns',
        type: '',
        options: '',
        description: 'Defines the columns object.'
    },
    {
        name: 'sortable',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the grid is sortable.'
    },
    {
        name: 'hideHeader',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the grid header is visible.'
    },
    {
        name: 'selected',
        type: '',
        options: '',
        description: 'Return item, so user can filter it.'
    },
    {
        name: 'onSelect',
        type: '',
        options: '',
        description: 'Define a function of what happens when a user selected a row.'
    },
    {
        name: 'dataSource',
        type: '',
        options: '',
        description: 'Define the grids actual data object.'
    },
    {
        name: 'detailTemplate',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    },
    {
        name: 'selectedKey',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    },
    {
        name: 'selected',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    },
    {
        name: 'onRowSelect',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    }
];
class TutorialGrid extends React.Component {
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
            { name: 'name', width: 100 },
            { name: 'description' },
            { name: 'type', width: 200 },
            { name: 'options', width: 250 }
        ];
        return (React.createElement("div", {className: "p10"}, 
            React.createElement("h1", null, "Grid"), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Grid component is a simple data-grid that currently takes in a object.")), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: true, numberPerPage: 20, dataSource: GridProperties})
                )), 
            React.createElement("div", {className: "ptb10"}, 
                React.createElement("h2", {className: "pb10"}, "Props"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: GridProperties})
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
exports.default = TutorialGrid;
//# sourceMappingURL=TutorialGrid.js.map