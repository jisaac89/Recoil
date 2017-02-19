import * as React from 'react';
import * as classNames from 'classnames';

import Button from '../Button/Button';
import {IButtonProps} from '../Button/Button';
import {ITableProps} from '../Table/Table';

import './Dropdown.less';

import DropdownContent from './DropdownContent';

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export interface IDropdownProps extends IButtonProps, ITableProps {
    title?: string;
    type?: string;
    material?: boolean;
    dropDirection?: string;
    onChange?: any;
    fixedClose?: boolean;
    mobile?: boolean;
    open?: boolean;
    onOpen?: any;
    onClose?: any;
    hideDropdownHeader?: boolean;
    titleKey?: string;
}

export interface State {
    open?: boolean;
}

//DropdownTypes:
//types="table/tree/calendar/children"

export default class Dropdown extends React.Component<IDropdownProps, any>{

    refs: {
        [key: string]: (Element);
        dropdown: (HTMLInputElement);
    }

    public static defaultProps = {
        type: 'children',
        contentMaxHeight: 200,
        material: true,
        hideFooter: true
    };

    constructor(props: IDropdownProps) {
        super(props);
        this.state = {
            dropdownIsOpen: false,
            type: props.dataSource && props.type !== 'tree' ? "table" : props.type,
            selectedElements: props.selectedElements || [],
            scrollToId: '',
            title : props.title || ''
        }
    }

    componentWillReceiveProps(nextProps: IDropdownProps) {
        if (nextProps.type !== this.props.type) {
            this.setState({
                type: nextProps.type
            })
        }
        if (nextProps.open !== this.state.dropdownIsOpen) {
            this.setState({
                dropdownIsOpen: nextProps.open
            })
        }

        if (nextProps.selectedElements !== this.state.selectedElements) {
            this.setState({
                selectedElements: nextProps.selectedElements
            })
        }

        if (this.props.type === 'tree' && this.props.selectedElements && nextProps.selectedElements.length !== this.props.selectedElements.length) {
            this.closeDropdown();
        }
    }

    closeDropdown() {
        this.setState({
            dropdownIsOpen: false
        },
            () => {
                this.props.onOpen ? this.props.onOpen(false) : null;
            })
    }
    openDropdown() {
        this.setState({
            dropdownIsOpen: true
        },
            () => {
                this.props.onOpen ? this.props.onOpen(true) : null;
            })
        
    }
    onRowSelect(element: Array<any>, index: string | number, selectedElements: Array<any>, id: string) {
        let {rowIsSelectable } = this.props;

        this.setState({
            selectedElements : selectedElements
        }, ()=>{
            if (rowIsSelectable === 'single') {

                this.setState({
                    scrollToId : this.props.selectedKey ? element[this.props.titleKey ? this.props.titleKey : this.props.selectedKey] : null
                })

                this.closeDropdown();
            }
            this.props.onChange ? this.props.onChange(element, index, selectedElements, id) : null;
        })

    }
    render() : JSX.Element  {
        const self = this;
        const props = self.props;
        let state = self.state;

        let {
            title,
            // Button props
            icon,
            size,
            iconPointer,
            iconLocation,
            simple,
            outline,
            checked,
            advanced,
            theme,
            pointer,
            required,
            checkedTheme,
            //
            children,

            // Table
            dataSource,
            focusOnMount,
            hideHeader,
            rowIsSelectable,
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
            contentMaxHeight,
            filterOpenDetailTemplate,
            mobile,
            sortKey,
            hideFooter,
            hideDropdownHeader
        } = props;

        let buttonProps = {
            block: true,
            icon,
            size,
            iconPointer,
            iconLocation,
            simple,
            outline,
            checked,
            advanced,
            theme,
            pointer,
            required,
            checkedTheme,
            onClick: this.openDropdown.bind(this)
        }

        let dropdownPortalProps = {
            title,
            icon,
            children,
            portalId: guidGenerator(),
            onClose: this.closeDropdown.bind(this),
            open: state.dropdownIsOpen,
            position: state.position,
            type: state.type,
            // Table
            dataSource,
            focusOnMount,
            hideHeader,
            rowIsSelectable,
            selectedElements: this.state.selectedElements,
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
            contentMaxHeight,
            onRowSelect: this.onRowSelect.bind(this),
            filterOpenDetailTemplate,
            mobile,
            sortKey,
            hideFooter,
            hideDropdownHeader,
            scrollToId: this.state.scrollToId,
            scrollIf: this.state.dropdownIsOpen
            //
        }

        let dropdownClass = classNames(
            'r-Dropdown',
            { 'e-open': (state.dropdownIsOpen) },
            { 'block': (props.block) },
            { 'pull-right': (props.right) },
            { 'pull-left': (props.left) },
            { 'material': (props.material) },
            this.props.dropDirection,
            props.className
        );

        return (
            <div ref='dropdown' className={dropdownClass}>
                <Button {...buttonProps}>{title}</Button>
                <DropdownContent {...dropdownPortalProps} />
            </div>
        )
    }
}

//<DropdownPortal {...dropdownPortalProps} />