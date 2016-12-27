import * as React from 'react';
import * as classNames from 'classnames';

import {arraysEqual} from '../Utils';

import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

import {IColumn} from './IColumn';

class DetailTemplateHeadToggle extends React.Component<any, any>{
    detailTemplateToggleAll(dataSource) {
        this.props.detailTemplateToggleAll(dataSource);
    }
    render(){
        let {props} = this;
        return (
            <th width={25} className="r-Table__DetailTd">
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

export interface ITableHeadProps {
    toggleSorting?: (dataSource: any, key: string, sortType: any) => void;
    detailTemplateToggleAll?: (dataSource: any) => void;
    selectAll?: (dataSource: any) => void;

    dataSource: Array<any> | Object;
    columns?: Array<IColumn>;
    hideHeader?: boolean;
    hideColumns?: Array<any>;
    checkable?: boolean;
    onSort?: Function;
    selectedElements?: Array<any>;
    sortable?: boolean;
    detailTemplate?: (element: any) => JSX.Element;
    detailTemplateSelectedElements?: Array<any>;
    detailTemplateHideToggle?: boolean;
}

export default class TableHead extends React.Component<ITableHeadProps,any>{

    constructor(props) {
        super(props);
        this.state = {
        sortType: props.sortType || 'desc',
        column: props.sortKey || '',
        columns: []
        }
    }

    toggleSorting(dataSource, columnName) {

        const self = this;

        this.setState({
            sortType: this.state.sortType === 'desc' ? 'asc' : 'desc',
            column : columnName
        })

        self.props.onSort ? self.props.onSort(columnName, self.state.sortType) : self.props.toggleSorting(dataSource, columnName, self.state.sortType);
    }

    render() {
        
        let {detailTemplate,onSort, columns, detailTemplateHideToggle, hideHeader,hideColumns, detailTemplateToggleAll, dataSource, detailTemplateSelectedElements, selectAll, checkable, selectedElements, sortable} = this.props;
        let columnHeadArray = [];
        
        columns.map((key) => {
            let hideColumnsArrayIncludesEitherNameOrTitle = hideColumns && hideColumns.includes(key.title ? key.title : key.name);

            if (hideColumnsArrayIncludesEitherNameOrTitle) {
                return null;
            } else {
                columnHeadArray.push(
                    <th width={key.width} key={key.name || key.title}>
                        <Button className="p0" icon={this.state.column === (key.name || key.title) ? 'sort-' + this.state.sortType : null} size="small" simple iconLocation="right" onClick={sortable ? this.toggleSorting.bind(this, dataSource, key.name || key.title) : null}>{key.hideHeader ? null : (key.title || key.name)}</Button>
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

        if(!hideHeader) {
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