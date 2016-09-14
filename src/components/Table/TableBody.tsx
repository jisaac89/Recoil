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

            toggleSelectedElements,
            rowIsSelectable,

            checkable

        } = props;

        let columnArray = [];

        if (Array.isArray(dataSource)) {
            dataSource.map((element, key) => {

                let columnProps = {
                    element: element,
                    columns: columns,
                    detailTemplate: detailTemplate,
                    toggleSelectedElements : toggleSelectedElements,
                    detailTemplateOpenAll : detailTemplateOpenAll,
                    detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
                    detailTemplateSelectedElements: detailTemplateSelectedElements,
                    rowIsSelectable: rowIsSelectable,
                    selectedElements: selectedElements,
                    checkable: checkable
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