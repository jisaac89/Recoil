import * as React from 'react';
import * as classNames from 'classnames';

import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';

import DropdownWrapper from './DropdownWrapper';

export default class DropdownComponent extends React.Component<any,any>{
    constructor(props) {
        super(props)
        this.state = {
            open : props.open || false,
            selected : props.selected || []
        }
    }
    componentWillReceiveProps(nextProps) {
        const state = this.state;
        this.setState({
            open : nextProps.open !== state.open ? nextProps.open : state.open,
            selected : nextProps.selected !== this.state.selected ? nextProps.selected : this.state.selected
        });
    }
    toggleOpen() {
        this.setState({
            open : !this.state.open
        });
    }
    selectItem(item){
        this.setState({
            selected : item
        })
        this.toggleOpen();
    }
    render() {

        const self = this;
        const props = self.props;
        let state = self.state;
        let dropdownTypePartial;

        let dropdownClass = classNames(
            'r-Dropdown',
            {'e-open' : (state.open)},
            {'dblock' : (props.block)},
            {'pull-right' : (props.right)},
            {'pull-left' : (props.left)},
            props.className
        );

        let dropdownContentPartial = <DropdownWrapper dataSource={props.dataSource} selectedKey={props.selectedKey} selected={this.state.selected} selectItem={this.selectItem.bind(this)}>{props.children}</DropdownWrapper>;

        switch (props.type) {
            case 'button':
                dropdownTypePartial = 
                    <Button 
                        block={props.block}
                        icon="bars"
                        iconPointer="down"
                        iconLocation="left"
                        onClick={this.toggleOpen.bind(this)}
                    >
                        {props.title}
                    </Button>
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
                {dropdownContentPartial}
            </div>
        )
    }
}