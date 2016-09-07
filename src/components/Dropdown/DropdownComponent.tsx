import * as React from 'react';
import * as classNames from 'classnames';

import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';

import DropdownWrapper from './DropdownWrapper';

interface P {
    onRowSelect?: Function;
    onClose?: Function;
    toggleCpenOnRowSelect? : boolean;
    open? : boolean;
    selected? : Array<any>;
    rowIsSelectable?: boolean;
    block?: boolean;
    right?: boolean;
    left?: boolean;
    className?: string;
    type?: '' | 'button' | 'selection' | 'search';
    title?: string | number;
    iconLocation?: 'left' | 'right';
    iconPointer? : 'left' | 'right' | 'up' | 'down';
    dropDirection? : string;
    material? : boolean;
    icon?: string;
    onChange ? : Function;
    theme?: 'success' | 'primary' | 'error';
    size? : 'small' | 'medium' | 'large' | 'xlarge';
    pointer? : 'left' | 'right' | boolean;
    pageSize? : number;
    outline? : boolean;
    simple?: boolean;
}

export interface State {
    open?: boolean;
    selected?: Array<any>;
}

export default class DropdownComponent extends React.Component<P, State>{
    mouseIsDown: boolean;

    public static defaultProps = {
        type: 'button',
        dropDirection: 'down'
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

        if (this.state.open)
            this.props.onClose ? this.props.onClose() : null
    }
    onRowSelect(item){
        this.props.onChange ? this.props.onChange(item) : null;
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
    componentWillUnmount(){
        window.removeEventListener('mousedown', this.pageClick.bind(this), false);
        const removeEvent = window.removeEventListener;
        removeEvent("mousedown", this.pageClick.bind(this));
    }
    pageClick(e) {
        event.preventDefault();
        e.stopPropagation();
        
        if (this.mouseIsDown) {
            return;
        }

        this.setState({
            open: false
        });

        this.props.onClose ? this.props.onClose() : null;
    }

    onMouseDown() {
        this.mouseIsDown = true;
    }

    onMouseUp() {
        this.mouseIsDown = false;
    }

    render() {

        const self = this;
        const props = self.props;
        let state = self.state;
        let dropdownTypePartial;

        let dropdownClass = classNames(
            'r-Dropdown',
            {'e-open' : (state.open)},
            this.props.dropDirection,
            {'block' : (props.block)},
            {'pull-right' : (props.right)},
            {'pull-left' : (props.left)},
            props.className,
            {'material' : (props.material)}
        );

        let dropdownContentPartial = <DropdownWrapper {...props} onRowSelect={this.onRowSelect.bind(this)} selected={this.state.selected} open={state.open}>{props.children}</DropdownWrapper>;

        switch (props.type) {
            case 'button':
                dropdownTypePartial = 
                    <Button 
                        size={props.size}
                        block={props.block}
                        icon={props.icon}
                        iconPointer={props.iconPointer}
                        iconLocation={props.iconLocation}
                        onClick={this.toggleOpen.bind(this)}
                        simple={props.simple}
                        checked={this.state.open}
                        advanced
                        theme={props.theme}
                        pointer={props.pointer}
                    >
                        {props.title}
                    </Button>
                break;
            case 'selection':
                dropdownTypePartial = <Button block={props.block}>{props.title}</Button>;
                break;
            case 'input':
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