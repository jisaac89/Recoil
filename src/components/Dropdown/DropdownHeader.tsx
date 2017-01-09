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