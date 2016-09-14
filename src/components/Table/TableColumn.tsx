import * as React from 'react';
import * as classNames from 'classnames';

import TableData from './TableData';
import Button from '../Button/Button';

class DetailTemplateColumnToggle extends React.Component<any,any>{
    detailTemplateToggleSelectedElements(element) {
        this.props.detailTemplateToggleSelectedElements(element);
    }
    render() {
        let props = this.props;
        
        return (
            <th width={25}>
                <Button simple size="small" onClick={this.detailTemplateToggleSelectedElements.bind(this, props.element)} icon={props.detailTemplateSelectedElements.includes(props.element) ? 'minus' : 'plus'} />
            </th>
        )
    }
};

export default class TableColumn extends React.Component<any,any>{

    render() {

        const self = this;
        const props = self.props;
        
        let {
            element, 
            columns, 
            detailTemplate, 
            detailTemplateOpenAll, 
            detailTemplateToggleSelectedElements, 
            detailTemplateSelectedElements
        } = props;

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

        let DetailTemplateColumnToggleProps = {
            element: element,
            detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
            detailTemplateOpenAll: detailTemplateOpenAll,
            detailTemplateSelectedElements : detailTemplateSelectedElements
        }

        return (
            <tr className="r-TableColumn">
                {detailTemplate ? <DetailTemplateColumnToggle {...DetailTemplateColumnToggleProps} /> : null }
                {TableDataArray.map(createList)}
            </tr>
        )
    }
}