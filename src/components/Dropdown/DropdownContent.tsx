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

import DropdownContentType from './DropdownContentType';
import DropdownHeader from './DropdownHeader';

import './Dropdown.less';

export default class DropdownContent extends React.Component<any, any>{
    render() {

        const self = this;
        const props = self.props;

        let {
            position,
            open,
            title,
            icon,
            onClose,
            type,
            children,
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
            portalId,
            mobile,
            sortKey,
            hideFooter,
            hideDropdownHeader,
            scrollToId,
            scrollIf
            //
        } = props;

        let dropdownHeaderProps = {
            onClose,
            title,
            icon
        }

        let dropdownContentTypeProps = {
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
            hideFooter,
            scrollToId,
            scrollIf
            //
        }


        let dropdownPortal = <Portal portalType="SlideIn" title={props.title} icon={props.icon} open={open} onClose={onClose} portalId={portalId}><DropdownContentType {...dropdownContentTypeProps} /></Portal>;

        if (mobile) {
            return dropdownPortal;
        } else {
            return (
                <div className="r-DropdownWrapper">
                    {hideDropdownHeader ? null : <DropdownHeader {...dropdownHeaderProps} /> }
                    <DropdownContentType {...dropdownContentTypeProps} />
                </div>
            )
        }
    }
}