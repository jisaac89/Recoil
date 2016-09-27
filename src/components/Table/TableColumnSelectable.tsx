import * as React from 'react';

import Selectable from '../Selectable/Selectable';

export default class TableColumnSelectable extends React.Component<any,any>{
    render() {
        const self = this;
        let {columns, detailTemplate, selectedElements, element, checkable} = self.props;
        
        if (detailTemplate || selectedElements) {
            return (
                <tr className="r-TableColumnSelectable">
                    <td colSpan={columns.length + (checkable ? 1 : 0 ) + (detailTemplate ? 1 : 0 )}>
                        <Selectable checked={selectedElements.includes(element)} />
                    </td>
                </tr>
            )
        } else return null;
    }
}