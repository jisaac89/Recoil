"use strict";
var React = require('react');
require('./Grid.less');
var GridHeader_1 = require('./GridHeader');
var GridBody_1 = require('./GridBody');
var GridFooter_1 = require('./GridFooter');
class Grid extends React.Component {
    constructor(props) {
        super();
        this.state = {
            columns: [],
            collection: [],
            pageList: [],
            currentPage: 1,
            numberPerPage: 10,
            numberOfPages: 0
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            collection: nextProps.dataSource !== this.props.dataSource ? nextProps.dataSource : this.props.dataSource
        });
    }
    componentDidMount() {
        let columns = this.props.columns;
        if (!columns) {
            this.automaticallyCreateColumns();
            this.loadCollection();
        }
        else {
            this.loadCollection();
        }
    }
    automaticallyCreateColumns() {
        let columnsArray = [];
        let columns = [];
        if (this.props.dataSource[0] === undefined) {
            for (let i = 0; i < Object.keys(this.props.dataSource).length; i++) {
                columnsArray.push(Object.keys(this.props.dataSource)[i]);
            }
        }
        else {
            for (let i = 0; i < Object.keys(this.props.dataSource[0]).length; i++) {
                columnsArray.push(Object.keys(this.props.dataSource[0])[i]);
            }
        }
        let len = columnsArray.length;
        for (let i = 0; i < len; i++) {
            columns.push({
                name: columnsArray[i]
            });
        }
        this.setState({
            columns: columns.reverse()
        });
    }
    loadCollection() {
        const self = this;
        const props = self.props;
        let state = self.state;
        let collection = props.dataSource;
        let numberOfPages;
        if (this.props.dataSource[0] === undefined) {
            self.setState({
                collection: [props.dataSource]
            });
        }
        else {
            self.setState({
                collection: props.dataSource
            });
        }
    }
    toggleSorting(key, sortType) {
        let updatedCollection = [];
        for (let key in this.props.dataSource) {
            updatedCollection.push(this.props.dataSource[key]);
        }
        let sortCollection = () => {
            updatedCollection.sort(function (a, b) {
                switch (typeof a[key]) {
                    case ('string'):
                        let itemPrev = a[key].toLowerCase();
                        let itemNext = b[key].toLowerCase();
                        if (itemPrev < itemNext)
                            return -1;
                        if (itemPrev > itemNext)
                            return 1;
                        break;
                    case ('number'):
                        return a[key] - b[key];
                    default:
                }
            });
            return updatedCollection;
        };
        if (sortType === 'none') {
            sortCollection();
        }
        else if (sortType === 'desc') {
            sortCollection().reverse();
        }
        this.setState({
            collection: updatedCollection,
            currentPage: 1
        });
    }
    columns(id) {
        this.props.columns(id);
    }
    firstPage() {
        this.setState({
            currentPage: 1
        });
    }
    previousPage() {
        this.setState({
            currentPage: this.state.currentPage -= 1
        });
    }
    nextPage() {
        this.setState({
            currentPage: this.state.currentPage += 1
        });
    }
    lastPage() {
        this.setState({
            currentPage: this.state.numberOfPages
        });
    }
    gotoPage(i) {
        this.setState({
            currentPage: i + 1
        });
    }
    changePageSize(pageSize) {
        this.setState({
            numberPerPage: pageSize
        });
    }
    onRowSelect(item) {
        if (this.props.onRowSelect) {
            this.props.onRowSelect(item);
        }
    }
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        let renderedPage = [];
        let renderedColumns;
        let { columns, dataSource } = props;
        let { collection } = state;
        let numberPerPage, numberOfPages;
        if (props.numberPerPage) {
            numberPerPage = props.numberPerPage;
            numberOfPages = Math.ceil(collection.length / (props.numberPerPage));
        }
        else {
            numberPerPage = state.numberPerPage;
            numberOfPages = Math.ceil(collection.length / (state.numberPerPage));
        }
        let begin = ((state.currentPage - 1) * numberPerPage);
        let end = begin + numberPerPage;
        let pageList = collection.slice(begin, end);
        for (let i = 0; i < pageList.length; i++) {
            renderedPage.push(pageList[i]);
        }
        if (this.props.columns) {
            renderedColumns = this.props.columns;
        }
        else {
            renderedColumns = this.state.columns;
        }
        return (<div className="r-Grid">
        <table className='r-Grid__Table w100'>
          <GridHeader_1.default hideHeader={props.hideHeader} columns={renderedColumns} dataSource={renderedPage} sortable={props.sortable} toggleSorting={this.toggleSorting.bind(this)} sortType={state.sortType} detailTemplate={this.props.detailTemplate} hideColumns={props.hideColumns}/>
          <GridBody_1.default columns={renderedColumns} dataSource={renderedPage} dataType={state.dataType} numberOfPages={numberOfPages} height={props.height} open={props.open} detailTemplate={this.props.detailTemplate} hideColumns={props.hideColumns} columnTemplate={props.columnTemplate} detailTemplateOpenOnHover={props.detailTemplateOpenOnHover} detailTemplateOpenOnSelect={this.props.detailTemplateOpenOnSelect} rowIsSelectable={this.props.rowIsSelectable} onRowSelect={this.onRowSelect.bind(this)} selected={this.props.selected} selectedKey={this.props.selectedKey} rowIsSelectableType={this.props.rowIsSelectableType}/>
        </table>
          {(() => {
            if (numberOfPages <= 1) {
                return null;
            }
            else {
                return (<GridFooter_1.default gotoPage={this.gotoPage.bind(this)} previousPage={this.previousPage.bind(this)} nextPage={this.nextPage.bind(this)} lastPage={this.lastPage.bind(this)} firstPage={this.firstPage.bind(this)} numberOfPages={numberOfPages} currentPage={state.currentPage} changePageSize={this.changePageSize.bind(this)}/>);
            }
        })()}
        </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Grid;
