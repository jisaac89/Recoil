import * as React from 'react';
import * as classNames from 'classnames';

import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';

import DropdownWrapper from './DropdownWrapper';

interface P {
    onRowSelect? : any;
    toggleCpenOnRowSelect? : boolean;
    open? : boolean;
    selected? : Array<any>;
}

export default class DropdownComponent extends React.Component<P,any>{

    public static defaultProps = {
        type: 'button'
    };

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
    onRowSelect(item){
        if (this.props.rowIsSelectable) {
            this.setState({
                selected : [item]
            })
            this.toggleOpen();
        }
        else if (this.props.onRowSelect) {
            this.props.onRowSelect(item);
            this.toggleOpen();
        } else if (this.props.toggleCpenOnRowSelect) {
            this.toggleOpen();
        } else {
            return null;
        }
    }

    componentDidMount() {
        window.addEventListener('mousedown', this.pageClick.bind(this), false);
    }

    pageClick(e) {
        if (this.mouseIsDownOnCalendar) {
            return;
        }

        this.setState({
            open: false
        });
    }

    onMouseDown() {
        this.mouseIsDownOnCalendar = true;
    }

    onMouseUp() {
        this.mouseIsDownOnCalendar = false;
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

        let dropdownContentPartial = <DropdownWrapper {...props} onRowSelect={this.onRowSelect.bind(this)} selected={this.state.selected}>{props.children}</DropdownWrapper>;

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
            <div onMouseDown={this.onMouseDown.bind(this)} onMouseUp={this.onMouseUp.bind(this)} className={dropdownClass}>
                {dropdownTypePartial}
                {dropdownContentPartial}
            </div>
        )
    }
}