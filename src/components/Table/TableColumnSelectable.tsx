import * as React from 'react';

import Selectable from '../Selectable/Selectable';

export default class TableColumnSelectable extends React.Component<any,any>{
    render() {
        const self = this;
        let {columns, detailTemplate, selected} = self.props;
        
        if (detailTemplate || selected) {
            return (
                <tr className="r-TableColumnSelectable">
                    <td colSpan={columns.length}>
                        <Selectable checked={false} />
                    </td>
                </tr>
            )
        } else return null;
    }
}