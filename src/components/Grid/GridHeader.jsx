"use strict";
var React = require('react');
var Button_1 = require('../Button/Button');
class GridHeaderSortable extends React.Component {
    constructor() {
        super();
        this.state = {
            sortType: 'none',
            columns: []
        };
    }
    toggleSorting(columnName) {
        const self = this;
        this.setState({
            sortType: this.state.sortType === 'none' ? 'desc' : this.state.sortType === 'desc' ? 'asc' : 'none'
        });
        this.props.toggleSorting(columnName, self.state.sortType);
    }
    render() {
        const self = this;
        const props = self.props;
        let { item } = props;
        return (<th style={{ width: item.width }}>
        {this.props.children}
        <Button_1.default onClick={self.toggleSorting.bind(self, item.name)} tabIndex={-1} className="w50px" ghost icon={this.state.sortType === 'none' ? 'minus' : this.state.sortType === 'desc' ? 'caret-down' : 'caret-up'}/>
      </th>);
    }
}
class GridHeader extends React.Component {
    toggleSorting(key, sortType) {
        this.props.toggleSorting(key, sortType);
    }
    render() {
        const self = this;
        const props = self.props;
        let headerTitle;
        let createColumns = (item, index) => {
            if (item.headerTemplate) {
                return (<th style={{ width: item.width }} key={index}>
            {item.headerTemplate()}
          </th>);
            }
            else if (props.sortable) {
                if (item.headerTemplate) {
                    return (<GridHeaderSortable key={index} item={item} toggleSorting={this.toggleSorting.bind(this)}>
              {item.headerTemplate()}
            </GridHeaderSortable>);
                }
                else {
                    return (<GridHeaderSortable key={index} item={item} toggleSorting={this.toggleSorting.bind(this)}>
              <a>{item.name}</a>
            </GridHeaderSortable>);
                }
            }
            else {
                return (<th style={{ width: item.width }} key={index}>
            <a>{item.name}</a>
          </th>);
            }
        };
        if (!props.hideHeader && props.columns) {
            return (<thead className="r-Grid__Header">
          <tr>
            {(() => {
                if (this.props.detailTemplate) {
                    return (<th className="p0" width={5}>
                    <Button_1.default ghost className="p5 ps10" tabIndex={-1} icon="caret-right"></Button_1.default>
                  </th>);
                }
            })()}
            {this.props.columns.map(createColumns)}
          </tr>
        </thead>);
        }
        else {
            return null;
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridHeader;
