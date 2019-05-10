import React from 'react';
import { Portal } from '../Portal/Portal';
import { DropdownContentType } from './DropdownContentType';
import { DropdownHeader } from './DropdownHeader';

export class DropdownContent extends React.Component<any, any> {
  render() {
    const self = this;
    const props = self.props;

    const {
      id,
      open,
      title,
      icon,
      onClose,
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

    const dropdownHeaderProps = {
      onClose,
      title,
      icon
    };

    const dropdownContentTypeProps = {
      id,
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
    };

    const dropdownPortal = (
      <Portal
        portalType='SlideIn'
        title={props.title}
        icon={props.icon}
        open={open}
        onClose={onClose}
        portalId={portalId}>
        <DropdownContentType {...dropdownContentTypeProps} />
      </Portal>
    );

    if (mobile) {
      return dropdownPortal;
    } else {
      return (
        <div className='r-DropdownWrapper'>
          {hideDropdownHeader ? null : <DropdownHeader {...dropdownHeaderProps} />}
          <DropdownContentType {...dropdownContentTypeProps} />
        </div>
      );
    }
  }
}
