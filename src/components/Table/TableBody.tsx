import * as React from 'react';
import * as classNames from 'classnames';

import TableColumn from './TableColumn';
import TableColumnDetail from './TableColumnDetail';
import TableColumnSelectable from './TableColumnSelectable';

export default class TableBody extends React.Component<any,any>{

    render() {

        const self = this;
        const props = self.props;
        let {dataSource, columns, detailTemplate, selected} = props;

        let columnArray = [];

        if (Array.isArray(dataSource)) {
            dataSource.map((element, key) => {

                let columnProps = {
                    element: element,
                    columns: columns,
                    detailTemplate: detailTemplate,
                    selected : selected
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