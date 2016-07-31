import * as React from 'react';
import * as classNames from 'classnames';

import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';

export default class DropdownComponent extends React.Component<any,any>{
    render() {

        const self = this;
        const props = self.props;
        let dropdownTypePartial;

        let dropdownClass = classNames(
            'r-Dropdown',
            {'dblock' : (props.block)},
            {'pull-right' : (props.right)},
            {'pull-left' : (props.left)},
            props.className
        );

        switch (props.type) {
            case 'button':
                dropdownTypePartial = 
                    <Button 
                        block={props.block}
                        icon="bars"
                        iconPointer="down"
                    >{props.title}</Button>
                break;
            case 'selection':
                dropdownTypePartial = <Button block={props.block}>{props.title}</Button>;
                break;
            case 'search':
                dropdownTypePartial = <Input block={props.block} type="text" placeholder={props.title} />
                break;
            default:
                dropdownTypePartial = null;
        }  

        return (
            <div className={dropdownClass}>
                {dropdownTypePartial}
            </div>
        )
    }
}