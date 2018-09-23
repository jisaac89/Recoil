import * as React from 'react';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

export default class DropdownHeader extends React.Component<any, any>{
    titleTemplate() {
        const self = this;
        const props = self.props;

        let { onClose, title, icon } = props;

        return (
            <Button tabIndex={-1} icon={icon} left simple onClick={onClose}>{title}</Button>
        )
    }
    menuTemplate() {
        let props = this.props;
        let { onClose } = props;
        return (
            <Button shortcut={'x'} tabIndex={-1} simple right icon="times" onClick={onClose} />
        )
    }
    render() {
        return (
            <Toolbar block className="r-Dropdown__header">
                {this.titleTemplate()}
                {this.menuTemplate()}
            </Toolbar>
        )
    }
}