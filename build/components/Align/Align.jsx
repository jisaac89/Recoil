"use strict";
var React = require('react');
var classNames = require('classnames');
require('./Align.less');
class Align extends React.Component {
    recursiveCloneChildren(children) {
        const self = this;
        const props = self.props;
        const margin = props.margin;
        const columns = props.columns;
        let child;
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
                    marginTop: i === 0 ? 0 : margin + '%',
                    height: (colwidth ? colwidth : singleColWidth) + '%'
                };
            }
            else {
                columnStyle = {
                    marginLeft: i === 0 ? 0 : margin + '%',
                    width: (colwidth ? colwidth : singleColWidth) + '%',
                    float: 'left'
                };
            }
            let childProps = {
                className: 'r-Align__column ' + child.props.className,
                style: columnStyle
            };
            childProps[children] = this.recursiveCloneChildren(child.props.children);
            return React.cloneElement(child, childProps);
        });
    }
    render() {
        const self = this;
        const props = self.props;
        const margin = props.margin;
        const columns = props.columns;
        let maxCol, colwidth, columnStyle;
        if (props.maxCol) {
            maxCol = props.maxCol;
        }
        else {
            maxCol = props.children.length;
        }
        let singleColWidth = (100 - (margin * (maxCol - 1))) / maxCol;
        let alignClass = classNames('r-Align', props.className);
        let columnClass = classNames('r-Align__column');
        let createList = (item, index) => {
            if (props.maxCol) {
                let columnsIdx = props.columns[index];
                colwidth = (singleColWidth * columnsIdx) + (margin * (columnsIdx - 1));
            }
            if (props.vertical) {
                columnStyle = {
                    marginTop: 0,
                    height: (colwidth ? colwidth : singleColWidth) + '%'
                };
            }
            else {
                columnStyle = {
                    marginLeft: index === 0 ? 0 : margin + '%',
                    width: (colwidth ? colwidth : singleColWidth) + '%',
                    float: 'left'
                };
            }
            if (props.vertical && index !== 0) {
                return (<span key={index}>
            <div style={{ height: margin + '%' }} className="w100"></div>
            <div className={columnClass} style={columnStyle} key={index}>
              {item}
            </div>
          </span>);
            }
            else {
                return (<div className={columnClass} style={columnStyle} key={index}>
            {item}
          </div>);
            }
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
    columns: null
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Align;