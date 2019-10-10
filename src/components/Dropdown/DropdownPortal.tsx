import React from 'react';
import ReactDOM from 'react-dom';

import DropdownContent from './DropdownContent';

export default class DropdownPortal extends React.Component<any, any> {
  portalElement: HTMLElement;
  recoilWapperElement = document.getElementById('Recoil');
  constructor(props: any) {
    super(props);
    this.state = {
      position: null
    };
  }

  componentDidMount() {
    this.getDropdownPosition();
  }

  getDropdownPosition() {
    let element = ReactDOM.findDOMNode(this.props.element) as Element;
    let position = element.getBoundingClientRect();
    this.setState(
      {
        position: [position.top, position.left]
      },
      () => {
        this.createDropdownPortal();
      }
    );
  }
  createDropdownPortal() {
    let position = this.state.position;

    let y = position[0];
    let x = position[1];

    let absolutePosition = {
      position: 'absolute',
      top: y,
      left: x
    };

    let p = this.props.portalId && document.getElementById(this.props.portalId);
    if (!p) {
      let docfrag = document.createDocumentFragment();

      p = document.createElement('div');
      p.id = this.props.portalId;
      p.style.position = 'absolute';
      p.style.top = absolutePosition.top;
      p.style.left = absolutePosition.left;
      docfrag.appendChild(p);
      if (this.recoilWapperElement) {
        this.recoilWapperElement.appendChild(docfrag);
      }
    }
    this.portalElement = p;
    this.componentDidUpdate();
  }

  componentWillUnmount() {
    if (this.recoilWapperElement) {
      this.recoilWapperElement.removeChild(this.portalElement);
    }
  }
  componentDidUpdate() {
    const self = this;
    const props = self.props;

    let {
      id,
      open,
      title,
      onClose,
      icon,
      position,
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
      contentMaxHeight
    } = props;

    let dropdownContentProps = {
      id,
      open,
      title,
      icon,
      onClose,
      position,
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
      contentMaxHeight
      //
    };

    ReactDOM.render(<DropdownContent {...dropdownContentProps} />, this.portalElement);
  }
  render(): JSX.Element {
    return <></>;
  }
}
