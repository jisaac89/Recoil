import * as React from 'react';
import Selectable from '../Selectable/Selectable';

import Grid from '../Grid/Grid';
import Table from '../Table/Table';

interface IDropdownDataSourceProps {
    onRowSelect?: (item: any) => void;
    selected?: any;
    open?: boolean;
}

export default class DropdownDataSource extends React.Component<IDropdownDataSourceProps, {}> {
    onRowSelect(item){
        this.props.onRowSelect(item);
    }
    render() {

        const self = this;
        const props = self.props;

        return props.open ? <Table {...props} /> : null
    }
}

// <Grid {...props} onRowSelect={this.onRowSelect.bind(this)} overflow selectedKey={this.props.selected} />