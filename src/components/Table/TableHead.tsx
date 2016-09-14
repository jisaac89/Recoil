import * as React from 'react';
import * as classNames from 'classnames';

import {arraysEqual} from '../Utils';

import Button from '../Button/Button';

class DetailTemplateHeadToggle extends React.Component<any, any>{
    detailTemplateToggleAll(dataSource) {
        this.props.detailTemplateToggleAll(dataSource);
    }
    render(){
        let {props} = this;
        return (
            <th width={25}>
                <Button icon={arraysEqual(props.dataSource, props.detailTemplateSelectedElements) ? 'minus' : 'plus'} onClick={this.detailTemplateToggleAll.bind(this, props.dataSource)} simple size="small"  />
            </th>
        )
    }
}

export default class TableHead extends React.Component<any,any>{

    render() {
        
        let {detailTemplate, columns, hideHeader, detailTemplateToggleAll, dataSource, detailTemplateSelectedElements} = this.props;
        let columnHeadArray = [];
        
        columns.map((key) => {
            columnHeadArray.push(
                <th width={key.width} key={key.name}>
                    {key.title || key.name}
                </th>
            )
        })

        let detailTemplateHeadProps = {
            detailTemplateToggleAll : detailTemplateToggleAll,
            dataSource : dataSource,
            detailTemplateSelectedElements: detailTemplateSelectedElements
        }

        if(!hideHeader) {
            return (
                <thead>
                    <tr>
                        {detailTemplate ? <DetailTemplateHeadToggle {...detailTemplateHeadProps} /> : null}
                        {columnHeadArray}
                    </tr>
                </thead>
            )
        } else return null;
    }
}