import * as React from 'react';
import * as classNames from 'classnames';

import Button from '../Button/Button';

export default class TableHead extends React.Component<any,any>{

    render() {
        
        let {detailTemplate, columns, hideHeader} = this.props;
        let columnHeadArray = [];
        
        columns.map((key) => {
            columnHeadArray.push(
                <th key={key}>
                    {key.title || key.name}
                </th>
            )
        })

        if(!hideHeader) {
            return (
                <thead>
                    <tr>
                        {detailTemplate ? <th><Button simple size="small" icon="plus" /></th> : null}
                        {columnHeadArray}
                    </tr>
                </thead>
            )
        } else return null;
    }
}