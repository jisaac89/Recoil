import * as React from 'react';
import * as classNames from 'classnames';

import Open from '../Open/Open';
import Table from '../Table/Table';

export default class TableColumnDetail extends React.Component<any,any>{
    constructor(props){
        super(props);

        this.state = {
            open: false
        }
    }
    render() {

        const self = this;
        const props = self.props;
        let {element, columns, detailTemplate, detailTemplateOpenAll} = props;
        let {open} = self.state;

        if (detailTemplate) {
            return (
                <tr className="r-TableColumnDetail">
                    <td colSpan={columns.length + 1}>
                        <Open if={detailTemplateOpenAll}>
                            {detailTemplate(element)}
                        </Open>
                    </td>
                </tr>
            )
        } else return null;
    }
}