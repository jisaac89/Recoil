import * as React from 'react';
import * as classNames from 'classnames';

import './Table.less';

import TableHead from './TableHead';
import TableBody from './TableBody';

interface ITableProps {
    // initial dataSource loaded as prop
    dataSource :  any;
    // columns defined by user
    columns? : Array<any>;
    // a detail template function that returns a view
    detailTemplate? : any;
    // toggle if the table header should show
    hideHeader ? : boolean;
}

interface ITableState {
    dataSource ?: any;
    type ?: string;
    detailTemplateOpenAll? : boolean;
}

export default class Table extends React.Component<ITableProps,any>{

    constructor(){
        super();
        
        this.state = {
            dataSource : [],
            detailTemplateOpenAll: false
        }
    }

    componentDidMount() {
        const self = this;
        self.loadDataSource();
    }

    loadDataSource(){
        const self = this;
        let {dataSource} = self.props;

        let setDataSourceState = (dataSource) => {
            self.setState({
                dataSource : dataSource
            })
        }

        if (Array.isArray(dataSource)) {
            if (typeof dataSource[0] === 'string') {
                let newDataSource = [];

                dataSource.forEach(element => {
                    newDataSource.push({
                        '_Array' : element
                    })
                });

                setDataSourceState(newDataSource);
                
            } else {
                setDataSourceState(dataSource);
            }
        } else if (typeof dataSource === 'object') {
            setDataSourceState([dataSource]);
        } else {
            setDataSourceState(dataSource)
        }

    }

    openDetailTemplateHeadToggle() {
        this.setState({
            detailTemplateOpenAll : !this.state.detailTemplateOpenAll
        })
    }

    render() {

        const self = this;
        const props = self.props;
        let {detailTemplate, hideHeader} = props;
        let {columns, dataSource, detailTemplateOpenAll} = self.state;

        let columnsArray;

        if (props.columns) {
            columnsArray = props.columns;
        } else {
            columnsArray = [];

            if (dataSource.length) {
                if (Array.isArray(dataSource)) {
                    if (typeof dataSource[0] === 'string') {
                        columnsArray.push({name : '_Array'});
                    } else {
                        Object.keys(dataSource[0]).map((key) => {
                            columnsArray.push({name: key})
                        })
                    }
                }
            }
        }

        let tableProps = {
            dataSource: dataSource,
            columns: columnsArray,
            hideHeader: hideHeader,
            detailTemplate: detailTemplate,
            detailTemplateOpenAll : detailTemplateOpenAll
        }
        
        return (
            <div className="r-Table">
                <table>
                    <TableHead {...tableProps} openDetailTemplateHeadToggle={this.openDetailTemplateHeadToggle.bind(this)} />
                    <TableBody {...tableProps}/>
                </table>
            </div>
        )
    }
}