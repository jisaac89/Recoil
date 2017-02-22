import * as React from 'react';

import Open from '../Open/Open';
import {IColumn} from './IColumn';
export interface ITableColumnDetailProps {
    element?: JSX.Element;
    columns?: Array<IColumn>;
    detailTemplate?: (element: any) => JSX.Element;
    detailTemplateOpenAll?: boolean;
    detailTemplateSelectedElements?: any;
    checkable?: boolean;
    selectedKey?: string;
}

export default class TableDetail extends React.Component<ITableColumnDetailProps,any>{
    shouldComponentUpdate(){
        return true;
    }
    render() {

        const self = this;
        const props = self.props;
        let {element, columns, detailTemplate, detailTemplateOpenAll, detailTemplateSelectedElements, checkable, selectedKey} = props;

        if (detailTemplate) {
            return (
                <tr className="r-TableColumnDetail">
                    <td colSpan={columns.length + (checkable ? 1 : 0 ) + (detailTemplate ? 1 : 0 )}>
                        <Open if={detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element) || detailTemplateOpenAll}>
                            {self.props.detailTemplate(element)}
                        </Open>
                    </td>
                </tr>
            )
        } else return null;
    }
}