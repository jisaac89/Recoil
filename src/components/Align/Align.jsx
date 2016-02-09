"use strict";
var React = require('react');
var classnames_1 = require('classnames');
require('./Align.less');
class Align extends React.Component {
    recursiveCloneChildren(children) {
        const self = this;
        const props = self.props;
        const margin = props.margin;
        const data = props.data;
        let maxCol, colwidth, singleColWidth, columnStyle;
        let index = 0;
        if (props.maxCol) {
            maxCol = props.maxCol;
        }
        else {
            maxCol = props.children.props.children.length;
        }
        singleColWidth = (100 - (margin * (maxCol - 1))) / maxCol;
        return React.Children.map(children, (child, i) => {
            if ((!React.isValidElement(child))) {
                return child;
            }
            if (props.vertical) {
                columnStyle = {
                    marginTop: margin + '%',
                    height: (colwidth ? colwidth : singleColWidth) + '%'
                };
            }
            else {
                columnStyle = {
                    marginLeft: margin + '%',
                    width: (colwidth ? colwidth : singleColWidth) + '%',
                    float: 'left'
                };
            }
            let childProps = {
                className: 'r-Align__column ' + child.props.className,
                style: columnStyle
            };
            childProps.children = this.recursiveCloneChildren(child.props.children);
            return React.cloneElement(child, childProps);
        });
    }
    render() {
        const self = this;
        const props = self.props;
        const margin = props.margin;
        const data = props.data;
        let maxCol, colwidth, columnStyle;
        if (props.maxCol) {
            maxCol = props.maxCol;
        }
        else {
            maxCol = props.children.length;
        }
        let singleColWidth = (100 - (margin * (maxCol - 1))) / maxCol;
        let alignClass = classnames_1.default('r-Align', props.className);
        let columnClass = classnames_1.default('r-Align__column');
        let createList = (item, index) => {
            if (props.maxCol) {
                let dataIdx = props.data[index];
                colwidth = (singleColWidth * dataIdx) + (margin * (dataIdx - 1));
            }
            if (props.vertical) {
                columnStyle = {
                    marginTop: margin + '%',
                    height: (colwidth ? colwidth : singleColWidth) + '%'
                };
            }
            else {
                columnStyle = {
                    marginLeft: margin + '%',
                    width: (colwidth ? colwidth : singleColWidth) + '%',
                    float: 'left'
                };
            }
            return (<div className={columnClass} style={columnStyle} key={index}>
          {item}
        </div>);
        };
        if (props.children.length > 1) {
            return (<div className={alignClass}>
          {props.children.map(createList)}
        </div>);
        }
        else if (props.children) {
            var element = React.cloneElement(props.children, { className: 'primary' });
            return (<div className={alignClass}>
          {this.recursiveCloneChildren(this.props.children)}
        </div>);
        }
        else {
            return null;
        }
    }
}
Align.defaultProps = {
    margin: 0,
    vertical: false,
    maxCol: null,
    data: null
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Align;
//# sourceMappingURL=Align.jsx.map
