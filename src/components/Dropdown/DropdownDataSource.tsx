import * as React from 'react';
import Selectable from '../Selectable/Selectable';

import Grid from '../Grid/Grid';

interface IDropdownDataSourceProps {}

export default class DropdownDataSource extends React.Component<IDropdownDataSourceProps, {}> {
    selectItem(item){
        this.props.selectItem(item);
    }
    render() {

        const self = this;
        const props = self.props;

        return <Grid 
                    dataSource={props.dataSource} 
                    hideHeader={props.dataSource.length < 10}
                    onRowSelect={this.selectItem.bind(this)}
                    selected={props.selected}
                    selectedKey={props.selectedKey}
                />
    }
}