import * as React from 'react';
import Selectable from '../Selectable/Selectable';

import Table from '../Table/Table';

interface IDropdownDataSourceProps {
    onRowSelect?: (item: any) => void;
    selected?: any;
    open?: boolean;
    dataSource? : Array<any>;
    pageSizerOptions ?: Array<any>;
}

export default class DropdownDataSource extends React.Component<IDropdownDataSourceProps, {}> {
    onRowSelect(item){
        this.props.onRowSelect(item);
    }
    render() {

        const self = this;
        const props = self.props;

        return props.open ? <Table onRowSelect={this.onRowSelect.bind(this)} selectedElements={this.props.selected} pageSizerOptions={props.pageSizerOptions} dataSource={props.dataSource} /> : null
    }
}

// <Grid {...props} onRowSelect={this.onRowSelect.bind(this)} overflow selectedKey={this.props.selected} />