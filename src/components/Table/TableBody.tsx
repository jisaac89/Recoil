import * as React from 'react';
import * as classNames from 'classnames';

import TableColumn from './TableColumn';
import TableColumnDetail from './TableColumnDetail';
import TableColumnSelectable from './TableColumnSelectable';

export default class TableBody extends React.Component<any,any>{

    render() {

        const self = this;
        const props = self.props;
        
        let {
            dataSource, 
            columns, 
            detailTemplate,

            selectedElements,

            detailTemplateOpenAll, 
            detailTemplateToggleSelectedElements, 
            detailTemplateSelectedElements,
            detailTemplateHideToggle,

            toggleSelectedElements,
            rowIsSelectable,

            checkable,
            hideColumns,
            onRowSelect

        } = props;

        let columnArray = [];

        if (Array.isArray(dataSource) || Array.isArray(dataSource.slice())) {
            dataSource.map((element, key) => {

                let columnProps = {
                    element: element,
                    columns: columns,
                    detailTemplate: detailTemplate,
                    toggleSelectedElements : toggleSelectedElements,
                    detailTemplateOpenAll : detailTemplateOpenAll,
                    detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
                    detailTemplateSelectedElements: detailTemplateSelectedElements,
                    detailTemplateHideToggle: detailTemplateHideToggle,
                    rowIsSelectable: rowIsSelectable,
                    selectedElements: selectedElements,
                    checkable: checkable,
                    hideColumns : hideColumns,
                    onRowSelect
                }

                columnArray.push(
                    [
                        [<TableColumn key={key} {...columnProps} />],
                        [<TableColumnSelectable {...columnProps} />],
                        [<TableColumnDetail {...columnProps} />]
                    ]
                )
            })
        }

        return (
            <tbody>
                {columnArray}            
            </tbody>
        )
    }
}