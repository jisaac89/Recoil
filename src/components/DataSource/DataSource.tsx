import * as React from 'react';
import {search} from './Utils';

interface ObjectCtor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}
declare var Object: ObjectCtor;
export let assign = Object.assign ? Object.assign : function(target: any, ...sources: any[]): any {
        return;
};

const DataSource = (Component) =>
    class Enhance extends React.Component<any, any> {
        dataSource: any;

        constructor(props) {
            super(props);
            this.state = {
                dataSource: []
            }
        }
         
        // 1) When the component mounts, check to see if a user has already defined a columns array,
        //    if not automatically create the columns

        componentDidMount() {
            let dataSource = Component.props.dataSource;

            if (dataSource) {
                this.loadCollection(dataSource);
            }
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.dataSource !== Component.props.dataSource) {
                this.setState({
                    page: 0
                });
                this.loadCollection(nextProps.dataSource);
            }
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
                let numberPerPage, numberOfPages, renderedDataSource;

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
                    renderedDataSource = Component.props.columns;
                } else {
                    renderedDataSource = this.state.columns;
                }
                
                let data;

                let renderedObject = {
                    // high order
                    dataSource: renderedDataSource,
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