import * as React from 'react';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

import './Dropdown.less';

export default class DropdownHeader extends React.Component<any, any>{
    titleTemplate() {
        const self = this;
        const props = self.props;

        let {onClose, title, icon} = props;

        return (
            <Button icon={icon} left simple onClick={onClose}>{title}</Button>    
        )
    }
    menuTemplate() {
        let props = this.props;
        let {onClose} = props;
        return (
            <Button simple right icon="times" onClick={onClose}/>
        )
    }
    render() {

        const self = this;
        const props = self.props;

        let {onClose} = props;

        return (
            <Toolbar onClick={onClose} block className="r-Dropdown__header">
                {this.titleTemplate() }
                {this.menuTemplate() }
            </Toolbar>    
        )
    }
}