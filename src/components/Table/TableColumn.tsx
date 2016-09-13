import * as React from 'react';
import * as classNames from 'classnames';

import TableData from './TableData';
import Button from '../Button/Button';

const DetailTemplateColumnToggle = (props) => <th width={25}><Button simple size="small" icon={props.detailTemplateOpenAll ? 'minus' : 'plus'} /></th>;

export default class TableColumn extends React.Component<any,any>{

    render() {

        const self = this;
        const props = self.props;
        let {element, columns, detailTemplate, detailTemplateOpenAll} = props;

        let TableDataArray = []

        for (let index = 0; index < columns.length; index++) {
            let key = columns[index].name;
            TableDataArray.push(element[key]);
        }

        let createList = (value, key) => {
            return (
                <TableData key={key} value={value} column={columns[key]} />
            )
        }

        return (
            <tr className="r-TableColumn">
                {detailTemplate ? <DetailTemplateColumnToggle detailTemplateOpenAll={detailTemplateOpenAll} /> : null}
                {TableDataArray.map(createList)}
            </tr>
        )
    }
}