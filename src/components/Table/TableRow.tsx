import * as React from 'react';

import TableColumn from './TableColumn';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import {IColumn} from './IColumn';

import {branchIn} from '../Utils';

class DetailTemplateColumnToggle extends React.Component<any,any>{
    detailTemplateToggleSelectedElements(element : Array<any>) {
        this.props.detailTemplateToggleSelectedElements(element);
    }
    render() {
        let props = this.props;

        let {
            detailTemplateOpenOnRowSelect,
            element,
            selectedKey,
            filterOpenDetailTemplate
        } = props;
        
        return (
            <td 
                onClick={!detailTemplateOpenOnRowSelect ? this.detailTemplateToggleSelectedElements.bind(this, props.element) : null} 
                className="r-Table__DetailTd" 
                style={{width : "25"}}>
                {filterOpenDetailTemplate? 
                    filterOpenDetailTemplate(element) === true ?  
                    <Button 
                        tabIndex={-1} 
                        simple 
                        size="small" 
                        
                        icon={props.detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element) ? 'chevron-down' : 'chevron-right'} 
                    /> 
                    : null : 
                     <Button 
                        tabIndex={-1} 
                        simple 
                        size="small"  
                        icon={props.detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element) ? 'chevron-down' : 'chevron-right'} 
                    />
                }
            </td>
        )
    }
};

class CheckboxColumn extends React.Component<any,any>{
    toggleSelectedElements(element: Array<any>) {
        this.props.toggleSelectedElements(element);
    }
    render() {
        let props = this.props;
        
        return (
            <td style={{width : "25"}}>
                <Checkbox onChange={this.toggleSelectedElements.bind(this, props.element)} size='small' checked={props.selectedElements.includes(props.element)}/>
            </td>
        )
    }
};

export interface ITableColumnProps {
    element?: any;
    columns?: IColumn[];
    toggleSelectedElements?: any;
    rowIsSelectable?: any;
    selectedElements?: any;
    checkable?: boolean;
    hideColumns?: Array<string>;
    onRowSelect?: (element: any, index: number | string, event?: React.MouseEvent<any>) => void;
    selectedKey?: string;
    index ?: number | string;
    isArray: boolean;
    detailTemplateOpenOnRowSelect?: boolean | "single";
    detailTemplate?: (element: any) => JSX.Element;
    detailTemplateOpenAll?: any;
    detailTemplateToggleSelectedElements?: any;
    detailTemplateSelectedElements?: Array<any>;
    detailTemplateHideToggle?: boolean;
    filterOpenDetailTemplate?: any;
    id ? :any;
}

export default class TableRow extends React.Component<ITableColumnProps,any>{

    toggleSelectedElements(element: Array<any>, index: string | number) {
        this.props.rowIsSelectable ? this.props.toggleSelectedElements(element, index) : null;
        !this.props.rowIsSelectable && this.props.onRowSelect ? this.props.onRowSelect(element, index) : null;
        this.props.detailTemplateOpenOnRowSelect ? this.props.detailTemplateToggleSelectedElements(element) : null;
    }

    onRowSelect(element: Array<any>, index: string | number) {
        this.props.onRowSelect ? this.props.onRowSelect(element, index) : null;
        this.props.detailTemplateOpenOnRowSelect ? this.props.detailTemplateToggleSelectedElements(element) : null;
    }

    render() {

        const self = this;
        const props = self.props;
        
        let {
            element, 
            columns,
            detailTemplate, 
            detailTemplateToggleSelectedElements, 
            detailTemplateSelectedElements,
            detailTemplateHideToggle,
            toggleSelectedElements,
            selectedElements,
            rowIsSelectable,
            hideColumns,
            checkable,
            onRowSelect,
            isArray,
            detailTemplateOpenOnRowSelect,
            selectedKey,
            index,
            filterOpenDetailTemplate,
            id
        } = props;

        let columnsValueArray = []

        for (let index = 0; index < columns.length; index++) {
            let key = columns[index].name;
            columnsValueArray.push(key ? branchIn(element, key) : element[key]);
        }

        let createColumnValue = (value : Array<any>, key : string | number) => {
            return (
                <TableColumn isArray={isArray} hideColumns={hideColumns} element={element} key={key} value={value} column={columns[key]} />
            )
        }

        let DetailTemplateColumnToggleProps = {
            element: element,
            detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
            detailTemplateSelectedElements : detailTemplateSelectedElements,
            detailTemplateOpenOnRowSelect : detailTemplateOpenOnRowSelect,
            selectedKey: selectedKey,
            filterOpenDetailTemplate
        }

        let CheckBoxColumnProps = {
            element : element,
            selectedElements : selectedElements,
            toggleSelectedElements: toggleSelectedElements
        }
        
        return (
            <tr  
                tab-index={-1}
                className={selectedElements.includes(selectedKey ? element[selectedKey] : element) ? 'r-TableColumn checked' : 'r-TableColumn'} 
                onClick={rowIsSelectable && !checkable ? this.toggleSelectedElements.bind(this, element, index) : null || (onRowSelect || detailTemplateOpenOnRowSelect ? this.onRowSelect.bind(this, element, index) : null) }
            >
                {checkable ? <CheckboxColumn {...CheckBoxColumnProps} /> : null }
                {detailTemplate && !detailTemplateHideToggle? <DetailTemplateColumnToggle {...DetailTemplateColumnToggleProps} /> : null }
                {columnsValueArray.map(createColumnValue)}
            </tr>
        )
    }
}