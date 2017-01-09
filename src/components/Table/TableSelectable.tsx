import * as React from 'react';

import Selectable from '../Selectable/Selectable';

import {IColumn} from './IColumn';

export interface ITableColumnSelectableProps {
    columns?: any;
    detailTemplate?: (element: any) => JSX.Element;
    selectedElements?: any;
    element?: any;
    checkable?: boolean;
    selectedKey?: string;
}

export default class TableSelectable extends React.Component<ITableColumnSelectableProps,any>{
    render() {
        const self = this;
        let {columns, detailTemplate, selectedElements, element, checkable, selectedKey} = self.props;
        
        if (detailTemplate || selectedElements) {
            return (
                <tr className="r-TableColumnSelectable">
                    <td colSpan={columns.length + (checkable ? 1 : 0 ) + (detailTemplate ? 1 : 0 )}>
                        <Selectable checked={selectedElements.includes(selectedKey ? element[selectedKey] : element)} />
                    </td>
                </tr>
            )
        } else return null;
    }
}