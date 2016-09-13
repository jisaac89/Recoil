import * as React from 'react';
import * as classNames from 'classnames';

import './Table.less';

import TableHead from './TableHead';
import TableBody from './TableBody';

interface ITableProps {
    dataSource :  any;
    columns? : Array<any>;
    detailTemplate? : any;
    hideHeader ? : boolean;
}

interface ITableState {
    dataSource ?: any;
    type ?: string;
}

export default class Table extends React.Component<ITableProps,any>{

    constructor(){
        super();
        
        this.state = {
            dataSource : []
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

    render() {

        const self = this;
        const props = self.props;
        let {detailTemplate, hideHeader} = props;
        let {columns, dataSource} = self.state;

        let columnsArray = [];

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

        let tableProps = {
            dataSource: dataSource,
            columns: props.columns || columnsArray,
            hideHeader: hideHeader,
            detailTemplate: detailTemplate
        }
        
        return (
            <div className="r-Table">
                <table>
                    <TableHead {...tableProps} />
                    <TableBody {...tableProps}/>
                </table>
            </div>
        )
    }
}