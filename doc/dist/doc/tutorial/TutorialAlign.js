"use strict";
const React = require('react');
const Align_1 = require('../../src/components/Align/Align');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const AlignProperties = [
    {
        name: 'margin',
        type: 'number',
        options: '',
        description: 'Defines the margin between the aligned components.'
    },
    {
        name: 'columns',
        type: 'array of numbers',
        options: '',
        description: 'Defines how columns are layed out.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Add a list of class names.'
    },
    {
        name: 'maxCol',
        type: 'number',
        options: '',
        description: 'Defines the maximum amount of columns.'
    },
    {
        name: 'vertical',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the components are aligned vertically.'
    }
];
class TutorialAlign extends React.Component {
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
            { name: 'type', width: 200 },
            { name: 'options', width: 150 },
            { name: 'description' }
        ];
        return (React.createElement("div", {className: "p10"}, 
            React.createElement("h1", null, "Align"), 
            React.createElement(Layer_1.default, {className: "ptb20"}, 
                React.createElement("h2", {className: "pb10"}, "Description"), 
                React.createElement("p", null, "The Align component is a flex alternative, it aligns components either horizontally or vertically with a option margin set.")), 
            React.createElement(Layer_1.default, {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Examples"), 
                React.createElement("h3", null, "Default"), 
                React.createElement("p", null, "By default, the Align component aligns elements horizontally"), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement("div", {className: "p10 dark"}, 
                        React.createElement(Align_1.default, {margin: 1}, 
                            React.createElement(Layer_1.default, {type: "light", className: "p20"}, "Aligned Element 1"), 
                            React.createElement(Layer_1.default, {type: "light", className: "p20"}, "Aligned Element 2"))
                    )
                ), 
                React.createElement("h3", null, "Vertical"), 
                React.createElement("p", null, 
                    "To align elements vertically, pass the ", 
                    React.createElement("strong", null, "vertical"), 
                    " prop."), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement("div", {className: "p10 dark h200px"}, 
                        React.createElement(Align_1.default, {vertical: true, margin: 5}, 
                            React.createElement(Layer_1.default, {fill: true, type: "light", className: "p20"}, "Aligned Element 1"), 
                            React.createElement(Layer_1.default, {fill: true, type: "light", className: "p20"}, "Aligned Element 2"), 
                            React.createElement(Layer_1.default, {fill: true, type: "light", className: "p20"}, "Aligned Element 3"))
                    )
                ), 
                React.createElement("h3", null, "Multiple Aligns"), 
                React.createElement("p", null, "Below shows an example using multiple Align components to achieve the desired effect."), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement("div", {className: "p10 dark h200px"}, 
                        React.createElement(Align_1.default, {margin: 1}, 
                            React.createElement(Layer_1.default, {fill: true}, 
                                React.createElement(Align_1.default, {margin: 5, vertical: true}, 
                                    React.createElement(Layer_1.default, {type: "light", className: "p10", fill: true}, "1"), 
                                    React.createElement(Layer_1.default, {type: "light", className: "p10", fill: true}, "2"), 
                                    React.createElement(Layer_1.default, {type: "light", className: "p10", fill: true}, "3"))
                            ), 
                            React.createElement(Layer_1.default, {fill: true}, 
                                React.createElement(Align_1.default, {margin: 5, vertical: true}, 
                                    React.createElement(Layer_1.default, {type: "light", className: "p10", fill: true}, "4"), 
                                    React.createElement(Layer_1.default, {type: "light", className: "p10", fill: true}, "5"), 
                                    React.createElement(Layer_1.default, {type: "light", className: "p10", fill: true}, "6"))
                            ))
                    )
                ), 
                React.createElement("h3", null, "Custom Columns"), 
                React.createElement("p", null, "To align columns with custom sizes, pass in a maxCol prop which accepts the max number of columns you would like. Then pass in the columns prop to define an array of numbers."), 
                React.createElement("p", null, 
                    "So the example below, would have the props ", 
                    React.createElement("strong", null, 
                        "maxCol=", 
                        4), 
                    " and ", 
                    React.createElement("strong", null, 
                        "columns=", 
                        [1, 3]), 
                    " ", 
                    React.createElement("strong", null, 
                        "margin=", 
                        3)), 
                React.createElement("div", {className: "ptb20"}, 
                    React.createElement("div", {className: "p10 dark h200px"}, 
                        React.createElement(Layer_1.default, {fill: true}, 
                            React.createElement(Align_1.default, {maxCol: 4, columns: [1, 3], margin: 1}, 
                                React.createElement(Layer_1.default, {type: "light", className: "p10", fill: true}, "1"), 
                                React.createElement(Layer_1.default, {type: "light", className: "p10", fill: true}, "2"))
                        )
                    )
                )), 
            React.createElement("div", {className: "pb20"}, 
                React.createElement("h2", {className: "pb10"}, "Props"), 
                React.createElement("div", {className: "ptb10"}, 
                    React.createElement(Grid_1.default, {open: this.state.showProps, numberPerPage: 20, sortable: true, columns: columns, dataSource: AlignProperties})
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
exports.default = TutorialAlign;
//# sourceMappingURL=TutorialAlign.js.map