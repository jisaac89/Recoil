import * as React from 'react';
import * as classNames from 'classnames';

import TableData from './TableData';
import Button from '../Button/Button';

export default class TableColumn extends React.Component<any,any>{

    render() {

        const self = this;
        const props = self.props;
        let {element, columns, detailTemplate} = props;

        let TableDataArray = []

        for (let index = 0; index < columns.length; index++) {
            let key = columns[index].name;
            TableDataArray.push(element[key]);
        }

        let createList = (value, index) => {
            return (
                <TableData key={index} value={value} />
            )
        }

        return (
            <tr className="r-TableColumn">
                {detailTemplate ? <td><Button simple size="small" icon="plus" /></td> : null}
                {TableDataArray.map(createList)}
            </tr>
        )
    }
}