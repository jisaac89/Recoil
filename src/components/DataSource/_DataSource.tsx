import * as React from 'react';

interface P {}
interface S {
    dataSource?: any;
}

const DataSource = (Component) =>
    class Enhance extends React.Component<P, S> {

        constructor(props) {
            super(props);

            let ComponentProps = Component.props;

            this.state = {

            }
        }

        componentDidMount() {
           
        }

        componentWillReceiveProps(nextProps) {
          
        }

        automaticallyCreateColumns() {
         
        }

        loadCollection(dataSource) {
          
        }

        sortCollection(dataSource, key, sortType) {
           
        }

        toggleSorting(key, sortType) {
         
        }

        firstPage() {
          
        }

        previousPage() {
          
        }

        nextPage() {
          
        }

        lastPage(numberOfPages) {
          
        }

        gotoPage(i) {
         
        }

        changePageSize(pageSize) {
         
        }

        onRowSelect(item) {

        }

        render() {
            const self = this;
            const props = self.props;
            let state = self.state;
            let {dataSource} = state;

            let renderedObject = {
                // high order
            }

            // grab new props;
            const newProps = Object.assign({}, renderedObject)
            // clone the original Component and add the new props;
            const updatedComponent = React.cloneElement(Component, newProps, Component.props);
            // only if a dataSource exists return the new element else return original
            return Component.props.dataSource ? updatedComponent : Component;
        }
    };

export default DataSource;