import * as React from 'react';
import * as classNames from 'classnames';
import * as ReactDOM from 'react-dom';

import SlideIn from '../SlideIn/SlideIn';

import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';
import Portal from '../Portal/Portal';
import Toolbar from '../Toolbar/Toolbar';

import Table from '../Table/Table';
import Tree from '../Tree/Tree';
import Calendar from '../DatePicker/Calendar';

import './Dropdown.less';

export default class DropdownContentType extends React.Component<any, any>{
    render() {

        const self = this;
        const props = self.props;

        let {
            type,
            children,
            open,
            // Table
            dataSource,
            focusOnMount,
            hideHeader,
            rowIsSelectable,
            selectedElements,
            selectedKey,
            pageSizerOptions,
            columns,
            onSort,
            sortable,
            hidePageSize,
            pageSize,
            rowCount,
            page,
            onPageChange,
            searchableKeys,
            searchTitle,
            contentMaxHeight,
            onRowSelect,
            filterOpenDetailTemplate,
            sortKey,
            hideFooter
            //
        } = props;

        let dropdownTypePartial;


        let tableProps = {
            // Table
            dataSource,
            focusOnMount,
            hideHeader,
            rowIsSelectable,
            selectedElements,
            selectedKey,
            pageSizerOptions,
            columns,
            onSort,
            hidePageSize,
            pageSize : pageSize ? pageSize : dataSource ? dataSource.length : pageSize,
            rowCount,
            page,
            onPageChange,
            searchableKeys,
            searchTitle,
            contentMaxHeight,
            onRowSelect,
            filterOpenDetailTemplate,
            sortKey,
            sortable,
            hideFooter
            //
        }

        let treeProps = {
            // Tree
            dataSource,
            columns,
            onRowSelect,
            selectedElements,
            selectedKey,
            filterOpenDetailTemplate
            //
        }

        switch (props.type) {
            case 'table':
                dropdownTypePartial = <Table {...tableProps} />;
                break;
            case 'tree':
                dropdownTypePartial = <Tree {...treeProps} />;
                break;
            case 'calendar':
                dropdownTypePartial = <Calendar />;
                break;
            default:
                dropdownTypePartial = children;
        }

        return open ? dropdownTypePartial : null;
    }
}