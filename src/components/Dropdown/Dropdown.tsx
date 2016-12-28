import * as React from 'react';
import * as classNames from 'classnames';

import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';
import Portal from '../Portal/Portal';
import DropdownWrapper from './DropdownWrapper';
import Toolbar from '../Toolbar/Toolbar';

import {IColumn} from '../Table/IColumn';

import './Dropdown.less';

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

interface P {
    onClose?: Function;
    toggleCpenOnRowSelect?: boolean;
    open?: boolean;
    rowIsSelectable?: string | boolean;
    block?: boolean;
    right?: boolean;
    left?: boolean;
    className?: string;
    type?: '' | 'button' | 'selection' | 'search' | 'text';
    title?: string;
    iconLocation?: 'left' | 'right';
    iconPointer?: 'left' | 'right' | 'up' | 'down';
    dropDirection?: string;
    material?: boolean;
    icon?: string;
    onChange?: Function;
    theme?: 'success' | 'primary' | 'error' | 'default' | string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    pointer?: 'left' | 'right' | boolean;
    pageSize?: number;
    outline?: boolean;
    simple?: boolean;
    width?: string;
    pageSizerOptions?: Array<Number>;
    dataSource?: Array<any> | Object;
    hideHeader?: boolean;
    columns?: Array<IColumn>;
    searchableKeys?: Array<any>;
    onSort?: any;
    sortable?: any;
    hidePageSize?: any;
    rowCount?: any;
    page?: any;
    onPageChange?: any;
    selectedElements?: Array<any>;
    selectedKey?: string;
    required?: boolean;
    checked?: boolean;
    searchTitle?: string;
    mobile?: boolean;
    tree?: boolean;

    fixedClose?: boolean;
    onOpen?: any;
}

export interface State {
    open?: boolean;
    selected?: Array<any>;
}


export default class DropdownComponent extends React.Component<P, State>{
    mouseIsDown: boolean;

    refs: {
        [key: string]: (Element);
        dropdown: (HTMLInputElement);
    }

    public static defaultProps = {
        type: 'button',
        dropDirection: 'down',
        toggleCpenOnRowSelect: true,
        title: 'Dropdown'
    };

    constructor(props) {
        super(props)
        this.state = {
            open: props.open || false,
            selected: props.selected || []
        }
    }
    componentWillReceiveProps(nextProps) {
        const state = this.state;
        this.setState({
            open: nextProps.open !== undefined ? nextProps.open : this.props.open,
            selected: nextProps.selected !== this.state.selected ? nextProps.selected : this.state.selected
        });
    }
    toggleOpen() {
        this.setState({
            open: !this.state.open
        }, () => {
            this.props.onOpen ? this.props.onOpen(this.state.open) : null;
        });
    }
    onRowSelect(item, index) {

        if (this.props.rowIsSelectable) {
            this.setState({
                selected: [item]
            })
            this.props.rowIsSelectable === 'single' && this.props.toggleCpenOnRowSelect ? this.toggleOpen() : null
            this.props.onChange ? this.props.onChange(item, index) : null;
        }
        else if (this.props.onChange) {
            this.props.onChange(item, index);
            this.toggleOpen();
        } else if (this.props.toggleCpenOnRowSelect) {
            //this.toggleOpen();
        } else {
            return null;
        }
    }

    render() {

        const self = this;
        const props = self.props;
        let state = self.state;
        let dropdownTypePartial;

        let dropdownClass = classNames(
            'r-Dropdown',
            { 'e-open': (state.open) },
            this.props.dropDirection,
            { 'block': (props.block) },
            { 'pull-right': (props.right) },
            { 'pull-left': (props.left) },
            props.className,
            { 'material': (props.material) }
        );

        let dropdownContentPartial = <DropdownWrapper {...props} toggleOpen={this.toggleOpen.bind(this) } onRowSelect={this.onRowSelect.bind(this) } selected={this.state.selected} open={state.open}>{props.children}</DropdownWrapper>;
        let dropdownPortal = <Portal portalType="SlideIn" title={props.title} icon={props.icon} open={this.state.open} onClose={this.toggleOpen.bind(this) } portalId={guidGenerator() }>{dropdownContentPartial}</Portal>;

        switch (props.type) {
            case 'button':
                dropdownTypePartial =
                    <Button
                        size={props.size}
                        block={props.block}
                        icon={props.icon}
                        iconPointer={props.iconPointer}
                        iconLocation={props.iconLocation}
                        onClick={this.toggleOpen.bind(this) }
                        simple={props.simple}
                        outline={props.outline}
                        checked={props.checked ? props.checked : this.state.open}
                        advanced
                        theme={props.theme}
                        pointer={props.pointer}
                        required={props.required}
                        checkedTheme={props.theme}
                        >
                        {props.title}
                    </Button>
                break;
            case 'selection':
                dropdownTypePartial = <Button block={props.block}>{props.title}</Button>;
                break;
            case 'text':
                dropdownTypePartial =
                    <Toolbar flush onClick={this.toggleOpen.bind(this) }>
                        <Input
                            block={props.block}
                            type="text"
                            placeholder={props.title}
                            size={props.size}
                            />
                        <Button
                            icon={props.icon ? props.icon : "search"}
                            size={props.size}
                            />
                    </Toolbar>
                break;
            default:
                dropdownTypePartial = null;
        }

        return (
            <div ref='dropdown' className={dropdownClass}>
                {dropdownTypePartial}
                {!props.mobile ? dropdownContentPartial : dropdownPortal}
            </div>
        )
    }
}

