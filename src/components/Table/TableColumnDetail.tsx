import * as React from 'react';
import * as classNames from 'classnames';

import Open from '../Open/Open';
import Table from '../Table/Table';

export default class TableColumnDetail extends React.Component<any,any>{
    render() {

        const self = this;
        const props = self.props;
        let {element, columns, detailTemplate} = props;

        if (detailTemplate) {
            return (
                <tr className="r-TableColumnDetail">
                    <td colSpan={columns.length}>
                        <Open if={true}>
                            {detailTemplate.bind(element)}
                        </Open>
                    </td>
                </tr>
            )
        } else return null;
    }
}