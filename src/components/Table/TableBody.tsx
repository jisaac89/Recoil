import * as React from 'react';
import * as classNames from 'classnames';

import TableColumn from './TableColumn';
import TableColumnDetail from './TableColumnDetail';
import TableColumnSelectable from './TableColumnSelectable';

export interface TableBodyProps {
    // initial dataSource loaded as prop
    dataSource: Array<any> | Object;
    // columns defined by user
    columns?: Array<any>;
    // a detail template function that returns a view
    detailTemplate?: (event: React.MouseEvent) => void;

    selectedElements?: Array<any>;

    detailTemplateOpenAll?: any;
    detailTemplateToggleSelectedElements?: any;
    detailTemplateSelectedElements?: Array<any>;
    detailTemplateHideToggle?: boolean;

    toggleSelectedElements?: any;
    rowIsSelectable?: any;

    checkable?: boolean;
    hideColumns ? : Array<any>;
    onRowSelect ? : (event: React.MouseEvent) => void;
    isArray?: boolean;
    detailTemplateOpenOnRowSelect ?: boolean | "single";

    childKey ?: string;
}

export default class TableBody extends React.Component<TableBodyProps,any>{

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
            onRowSelect,
            isArray,
            detailTemplateOpenOnRowSelect
        } = props;

        let columnArray = [];

        if (dataSource instanceof Array) {
            dataSource.map((element, index) => {

                let columnProps = {
                    element: element,
                    columns: columns,
                    detailTemplate: detailTemplate,
                    toggleSelectedElements: toggleSelectedElements,
                    detailTemplateOpenAll: detailTemplateOpenAll,
                    detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
                    detailTemplateSelectedElements: detailTemplateSelectedElements,
                    detailTemplateHideToggle: detailTemplateHideToggle,
                    rowIsSelectable: rowIsSelectable,
                    selectedElements: selectedElements,
                    checkable: checkable,
                    hideColumns: hideColumns,
                    onRowSelect,
                    isArray: isArray,
                    detailTemplateOpenOnRowSelect: detailTemplateOpenOnRowSelect
                }

                if (!element['_uniqueId']) {
                    Object.defineProperty(element, '_uniqueId', {
                        configurable: true,
                        enumerable: false,
                        writable: true,
                        value: Math.floor(Math.random() * 100000)
                    });
                }

                let key = element['_uniqueId'];
                let keySelectable = key + '_selectable';
                let keyDetail = key + '_detail';

                columnArray.push(
                    [
                        [<TableColumn key={key} {...columnProps} />],
                        [<TableColumnSelectable key={keySelectable} {...columnProps} />],
                        [<TableColumnDetail key={keyDetail} {...columnProps} />]
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