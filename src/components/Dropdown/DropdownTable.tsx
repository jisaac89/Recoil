import * as React from 'react';
import Selectable from '../Selectable/Selectable';

import Table from '../Table/Table';

interface IDropdownTableProps {
    onRowSelect?: (item: any) => void;
    selected?: any;
    open?: boolean;
    dataSource? : Array<any> | Object;
    pageSizerOptions ?: Array<any>;
    rowIsSelectable? : any;
    hideHeader?: boolean;
    searchableKeys?: Array<any>;
    columns ? : Array<any>;
}

export default class DropdownTable extends React.Component<IDropdownTableProps, {}> {
    onRowSelect(item){
        this.props.onRowSelect(item);
    }
    render() {

        const self = this;
        const props = self.props;

        return <Table hideHeader={props.hideHeader || !props.columns} rowIsSelectable={this.props.rowIsSelectable} onRowSelect={this.onRowSelect.bind(this)} selectedElements={this.props.selected} pageSizerOptions={props.pageSizerOptions} dataSource={props.dataSource} />
    }
}