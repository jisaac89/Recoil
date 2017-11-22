import * as React from 'react';

import Table from '../Table/Table';
import Tree from '../Tree/Tree';
import Calendar from '../DatePicker/Calendar';

import './Dropdown.less';

export default class DropdownContentType extends React.Component<any, any>{
    render() {

        const self = this;
        const props = self.props;

        let {
            id,
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
            hideFooter,
            scrollToId,
            scrollIf,
            //
            parentId,
            hideRoot
        } = props;

        let dropdownTypePartial;


        let tableProps = {
            // Table
            id,
            portal : true,
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
            hideFooter,
            scrollToId,
            scrollIf
            //
        }

        let treeProps = {
            // Tree
            dataSource,
            columns,
            onRowSelect,
            selectedElements,
            selectedKey,
            filterOpenDetailTemplate,
            parentId,
            hideRoot
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