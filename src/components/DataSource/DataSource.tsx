import * as React from 'react';
import {search} from './Utils';

enum SortDirection {
    None = 0,
    Asc,
    Desc
}

interface P {
    // default
    pageSize?: number;
    page?: number;
    pagerSize?: number;
    sortedColumn?: string;
    sortedDirection?: SortDirection;
    activeRows?: Array<any>;
    rowCount?: number;
    error?: boolean;

    // added
    dataSource?: Array<any>;
    columns?: Array<any>;
    pageList?: Array<any>,
    initialSortKey?: string;
    numberOfPages: number;
    hideHeader?: Array<any>;
    sortable?: boolean;
    detailTemplate?: any;
    hideColumns?: any;

    columnTemplate?: any;
    height?: any;
    detailTemplateOpenOnHover?: any;
    detailTemplateOpenOnSelect?: any;
    rowIsSelectableType?: any;
    filterSelected?: any;
    detailTemplateOpenOnRowSelect?: any;
    rowIsSelectable?: any;
    selectedKey?: any;
    open?: any;

    // methods
    onPageChange?: any;
    onSort?: any;
    onRowSelect?: any;
}

interface S {
    dataSource?: Array<any>;
    columns?: Array<any>;
    pageList?: Array<any>,
    initialSortKey?: string;
    numberOfPages?: number,
    activeRows?: Array<any>;
    page?: number;
    pageSize?: number;
    sortType?: any;
    selected?: any;
}

const DataSource = (Component) =>
    class Enhance extends React.Component<P, S> {

        constructor(props) {
            super(props);
            this.dataSource = [];
            this.state = {
                dataSource: Component.props.dataSource || [],
                columns: Component.props.columns || [],
                page: Component.props.page || 0,
                numberOfPages: Component.props.pagerSize|| [],
                activeRows: Component.props.activeRows || [],
                pageSize: Component.props.pageSize || 10,
                searchedItems: []
            }
        }
         
        // 1) When the component mounts, check to see if a user has already defined a columns array,
        //    if not automatically create the columns

        componentDidMount() {
            let columnsDefinedByUser = Component.props.columns;
            let dataSource = Component.props.dataSource;

            if (dataSource) {
                if (columnsDefinedByUser) {
                    this.loadCollection(dataSource);
                } else {
                    this.automaticallyCreateColumns();
                    this.loadCollection(dataSource);
                }
            }
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.dataSource !== Component.props.dataSource) {
                this.setState({
                    page: 9
                });
                this.loadCollection(nextProps.dataSource);
            }
        }

        automaticallyCreateColumns() {
            const self = this;
            const props = self.props;
            let {dataSource} = Component.props;

            let columnsArray = [];
            let columnsArrayLength = columnsArray.length;
            let columns = [];

            let firstItemOfDataSource = dataSource[0] || [dataSource];
            let columnHeadersForFirstItem = Object.keys(firstItemOfDataSource);

            // check to see if the dataSource is an array. 
            // checking "dataSource.constructor === Array" would be faster, but with some datSources like mobx it overides the contructor
            if (dataSource instanceof Array) {
                // Grab the first item of the dataSource and push the header names to columns array.
                columnHeadersForFirstItem.map((columnHeaderName) => {
                    columnsArray.push(columnHeaderName);
                })
            } else {
                Object.keys(dataSource).map((columnHeaderName) => {
                    columnsArray.push(Object.keys(dataSource)[columnHeaderName]);
                })
            }

            columnsArray.map((columnHeaderName) => {
                columns.push({
                    name: columnHeaderName
                });
            })

            self.setState({
                columns: columns.reverse()
            })
        }

        loadCollection(dataSource) {
            const self = this;
            const props = self.props;

            if (props.initialSortKey) {
                self.sortCollection(dataSource, Component.props.initialSortKey, "asc");
            } else {
                self.setState({
                    dataSource: dataSource[0] === undefined ? [dataSource] : dataSource
                });
            }
        }

        sortCollection(dataSource, key, sortType) {
            const self = this;

            let sortOrder;

            let sortedDataSource = dataSource.sort(function (a, b) {
                switch (typeof a[key]) {
                    case ('string'):
                        let itemPrev = a[key].toLowerCase();
                        let itemNext = b[key].toLowerCase();
                        if (itemPrev < itemNext) //string asc
                            return -1
                        if (itemPrev > itemNext)
                            return 1
                        break;
                    case ('number'):
                        return a[key] - b[key];
                    default:
                }
            })

            if (sortType === 'asc') {
                sortOrder = sortedDataSource;
            } else {
                sortOrder = sortedDataSource.reverse();
            }

            self.setState({
                dataSource: sortOrder,
                page: 0
            })
        }

        toggleSorting(key, sortType) {
            const self = this;
            self.sortCollection(self.state.dataSource, key, sortType);
        }


        firstPage() {
            this.setState({
                page: 0
            })
        }

        previousPage() {
            this.setState({
                page: this.state.page -= 1
            })
        }

        nextPage() {
            this.setState({
                page: this.state.page += 1
            })
        }

        lastPage(numberOfPages) {
            this.setState({
                page: numberOfPages - 1
            })
        }

        gotoPage(i) {
            this.setState({
                page: i
            })
        }

        changePageSize(pageSize) {
            this.setState({
                pageSize: pageSize
            })
        }

        onRowSelect(item) {
            if (Component.props.onRowSelect) {
                Component.props.onRowSelect(item);
            }
        }

        filterItems(term, keys) {
            const self = this;
            let state = self.state;

            self.setState({
                searchedItems: search(state.dataSource, term, keys)
            })
        }

        render() {
            const self = this;
            const props = self.props;
            let state = self.state;
            let {dataSource} = state;

            let updatedComponent;

            if (dataSource) {

                // grab the dataSource props;

                let renderedPage = [];
                let numberPerPage, numberOfPages, renderedColumns;

                if (Component.props.pageSize) {
                    numberPerPage = Component.props.pageSize;
                    numberOfPages = Math.ceil(dataSource.length / (Component.props.pageSize));
                } else {
                    numberPerPage = state.pageSize;
                    numberOfPages = Math.ceil(dataSource.length / (state.pageSize));
                }

                let begin = ((state.page) * numberPerPage);
                let end = begin + numberPerPage;
                let pageList = dataSource.slice(begin, end);

                pageList.map((item, index) => {
                    renderedPage.push(item);
                })

                if (Component.props.columns) {
                    renderedColumns = Component.props.columns;
                } else {
                    renderedColumns = this.state.columns;
                }
                
                let searchHasValues = this.state.searchedItems.length;
                let data;

                if (searchHasValues) {
                    data = this.state.searchedItems;
                } else {
                    data = renderedPage;
                }

                let renderedObject = {
                    // high order
                    columns: renderedColumns,
                    dataSource: data,
                    sortType: state.sortType,
                    currentPage: state.page,
                    numberOfPages: numberOfPages,
                    // component / view specific
                    hideHeader : Component.props.hideHeader,
                    detailTemplate: Component.props.detailTemplate,
                    sortable: Component.props.sortable,
                    hideColumns: Component.props.hideColumns,
                    columnTemplate: Component.props.columnTemplate,
                    pageSize: Component.props.pageSize,
                    height: Component.props.height,
                    open: Component.props.open,
                    detailTemplateOpenOnHover: Component.props.detailTemplateOpenOnHover,
                    detailTemplateOpenOnSelect: Component.props.detailTemplateOpenOnSelect,
                    rowIsSelectable: Component.props.rowIsSelectable,
                    onRowSelect: Component.props.onRowSelect,
                    selected: Component.props.selected,
                    selectedKey: Component.props.selectedKey,
                    rowIsSelectableType: Component.props.rowIsSelectableType,
                    detailTemplateOpenOnRowSelect: Component.props.detailTemplateOpenOnRowSelect,
                    filterSelected: Component.props.filterSelected,
                    // methods
                    toggleSorting: this.toggleSorting.bind(this),
                    gotoPage:this.gotoPage.bind(this),
                    previousPage:this.previousPage.bind(this),
                    nextPage:this.nextPage.bind(this),
                    lastPage:this.lastPage.bind(this),
                    firstPage:this.firstPage.bind(this),
                    changePageSize:this.changePageSize.bind(this),
                    filterItems: this.filterItems.bind(this),
                }

                // grab new props;
                const newProps = Object.assign({}, renderedObject)
                // clone the original Component and add the new props;
                updatedComponent = React.cloneElement(Component, newProps, Component.props);
            }

            // only if a dataSource exists return the new element else return original
            return dataSource ? updatedComponent : Component;
        }
    };

export default DataSource;