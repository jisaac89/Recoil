import React from 'react';
import ReactDOM from 'react-dom';
import { DropdownContent } from './DropdownContent';

export class DropdownPortal extends React.Component<any, any> {
  portalElement: HTMLElement;

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
    const element: HTMLElement = ReactDOM.findDOMNode(this.props.element);
    const position = element.getBoundingClientRect();
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
    const position = this.state.position;

    const y = position[0];
    const x = position[1];

    const absolutePosition = {
      position: 'absolute',
      top: y,
      left: x
    };

    let p = this.props.portalId && document.getElementById(this.props.portalId);
    if (!p) {
      const docfrag = document.createDocumentFragment();
      p = document.createElement('div');
      p.id = this.props.portalId;
      p.style.position = 'absolute';
      p.style.top = absolutePosition.top;
      p.style.left = absolutePosition.left;
      docfrag.appendChild(p);
      document.getElementById('Recoil').appendChild(docfrag);
    }
    this.portalElement = p;
    this.componentDidUpdate();
  }

  componentWillUnmount() {
    document.getElementById('Recoil').removeChild(this.portalElement);
  }
  componentDidUpdate() {
    const self = this;
    const props = self.props;

    const {
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

    const dropdownContentProps = {
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
  render() {
    return null;
  }
}
