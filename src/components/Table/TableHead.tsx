import * as React from 'react';
import * as classNames from 'classnames';

import {arraysEqual} from '../Utils';

import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

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

class CheckboxHead extends React.Component<any,any>{
    selectAll(dataSource) {
        this.props.selectAll(dataSource);
    }
    render() {
        let props = this.props;
        
        return (
            <th width={25} >
                <Checkbox onChange={this.selectAll.bind(this, props.dataSource)} size='small' checked={arraysEqual(props.dataSource, props.selectedElements)}/>
            </th>
        )
    }
};

export default class TableHead extends React.Component<any,any>{

    constructor() {
        super();
        this.state = {
        sortType: 'desc',
        column: '',
        columns: []
        }
    }

    toggleSorting(columnName) {

        const self = this;

        this.setState({
            sortType: this.state.sortType === 'desc' ? 'asc' : 'desc',
            column : columnName
        })

        this.props.toggleSorting(columnName, self.state.sortType);
    }

    render() {
        
        let {detailTemplate, columns, detailTemplateHideToggle, hideHeader,hideColumns, detailTemplateToggleAll, dataSource, detailTemplateSelectedElements, selectAll, checkable, selectedElements} = this.props;
        let columnHeadArray = [];
        
        columns.map((key) => {
            let hideColumnsArrayIncludesEitherNameOrTitle = hideColumns && hideColumns.includes(key.title ? key.title : key.name);

            if (hideColumnsArrayIncludesEitherNameOrTitle) {
                return null;
            } else {
                columnHeadArray.push(
                    <th width={key.width} key={key.name || key.title}>
                        <Button className="p0" icon={this.state.column === (key.name || key.title )? 'sort-'+ this.state.sortType : null} size="small" simple iconLocation="right" onClick={this.toggleSorting.bind(this, key.name || key.title)}>{key.title || key.name}</Button>
                    </th>
                )
            }
        })

        let detailTemplateHeadProps = {
            detailTemplateToggleAll : detailTemplateToggleAll,
            dataSource : dataSource,
            detailTemplateSelectedElements: detailTemplateSelectedElements
        }

        let checkboxHeadProps = {
            selectAll : selectAll,
            selectedElements : selectedElements,
            dataSource : dataSource
        }

        let columnsExistAndDataSourceNotFlatArray = columns.length > 0 && columns[0].name !== '_Array';

        if(columnsExistAndDataSourceNotFlatArray && !hideHeader) {
            return (
                <thead>
                    <tr>
                        {checkable ? <CheckboxHead {...checkboxHeadProps} /> : null}
                        {detailTemplate && !detailTemplateHideToggle ? <DetailTemplateHeadToggle {...detailTemplateHeadProps} /> : null}
                        {columnHeadArray}
                    </tr>
                </thead>
            )
        } else return null;
    }
}