import React from 'react';
import { Button } from '../Button/Button';
import { Toolbar } from '../Toolbar/Toolbar';

export class DropdownHeader extends React.Component<any, any> {
  titleTemplate() {
    const self = this;
    const props = self.props;

    const { onClose, title, icon } = props;

    return (
      <Button tabIndex={-1} icon={icon} left simple onClick={onClose}>
        {title}
      </Button>
    );
  }
  menuTemplate() {
    const props = this.props;
    const { onClose } = props;
    return <Button shortcut={'x'} tabIndex={-1} simple right icon="times" onClick={onClose} />;
  }
  render() {
    return (
      <Toolbar block className="r-Dropdown__header">
        {this.titleTemplate()}
        {this.menuTemplate()}
      </Toolbar>
    );
  }
}
