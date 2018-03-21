import * as React from 'react';
import Portal from '../Portal/Portal';

import DropdownContentType from './DropdownContentType';
import DropdownHeader from './DropdownHeader';

export default class DropdownContent extends React.Component<any, any>{
    render() {

        const self = this;
        const props = self.props;

        let {
            id,
            open,
            title,
            icon,
            onClose,
            type,
            children,
            // Table
            disableSelectedElements,
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
            portalId,
            mobile,
            sortKey,
            hideFooter,
            hideDropdownHeader,
            scrollToId,
            scrollIf,
            checkable,
            onCheck,
            //
            parentId,
            hideRoot
        } = props;

        let dropdownHeaderProps = {
            onClose,
            title,
            icon
        }

        let dropdownContentTypeProps = {
            id,
            type,
            children,
            open,
            // Table
            disableSelectedElements,
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
            checkable,
            //
            parentId,
            hideRoot
        }


        let dropdownPortal = <Portal portalType="SlideIn" title={props.title} icon={props.icon} open={open} onClose={onClose} portalId={portalId}><DropdownContentType {...dropdownContentTypeProps} /></Portal>;

        if (mobile) {
            return dropdownPortal;
        } else {
            return (
                <div className="r-DropdownWrapper">
                    {hideDropdownHeader ? null : <DropdownHeader {...dropdownHeaderProps} />}
                    <DropdownContentType {...dropdownContentTypeProps} />
                </div>
            )
        }
    }
}