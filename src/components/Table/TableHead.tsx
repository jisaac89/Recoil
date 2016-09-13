import * as React from 'react';
import * as classNames from 'classnames';

import Button from '../Button/Button';

const DetailTemplateHeadToggle = (props) => <th width={25}><Button simple size="small" icon="plus" /></th>;

export default class TableHead extends React.Component<any,any>{

    render() {
        
        let {detailTemplate, columns, hideHeader} = this.props;
        let columnHeadArray = [];
        
        columns.map((key) => {
            columnHeadArray.push(
                <th width={key.width} key={key.name}>
                    {key.title || key.name}
                </th>
            )
        })

        if(!hideHeader) {
            return (
                <thead>
                    <tr>
                        {detailTemplate ? <DetailTemplateHeadToggle /> : null}
                        {columnHeadArray}
                    </tr>
                </thead>
            )
        } else return null;
    }
}