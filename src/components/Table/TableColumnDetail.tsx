import * as React from 'react';
import * as classNames from 'classnames';

import Open from '../Open/Open';
import Table from '../Table/Table';

export default class TableColumnDetail extends React.Component<any,any>{
    render() {

        const self = this;
        const props = self.props;
        let {element, columns, detailTemplate, detailTemplateOpenAll, detailTemplateSelectedElements, checkable} = props;

        if (detailTemplate) {
            return (
                <tr className="r-TableColumnDetail">
                    <td colSpan={columns.length + (checkable ? 1 : 0 ) + (detailTemplate ? 1 : 0 )}>
                        <Open if={detailTemplateOpenAll || detailTemplateSelectedElements.includes(element)}>
                            {detailTemplate(element)}
                        </Open>
                    </td>
                </tr>
            )
        } else return null;
    }
}