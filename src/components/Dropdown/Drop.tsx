import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';
import Portal from '../Portal/Portal';
import DropdownWrapper from './DropdownWrapper';
import Toolbar from '../Toolbar/Toolbar';

import './Dropdown.less';

import DropdownPortal from './DropdownPortal';
import DropdownContent from './DropdownContent';

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

interface P {

}

export interface State {
    open?: boolean;
}

//DropdownTypes:
//types="table/tree/calendar/children"

export default class Dropdown extends React.Component<any, any>{

    refs: {
        [key: string]: (Element);
        dropdown: (HTMLInputElement);
    }

    public static defaultProps = {
        type: 'children',
        contentMaxHeight: 200,
    };

    constructor(props) {
        super(props);
        this.state = {
            dropdownIsOpen: false,
            type: props.dataSource ? "table" : props.type
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type !== this.props.type) {
            this.setState({
                type: nextProps.type
            })
        }
    }

    closeDropdown() {
        this.setState({
            dropdownIsOpen: false
        })
    }
    openDropdown() {
        this.setState({
            dropdownIsOpen: true
        })
    }
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;

        let {
            title,
            // Button props
            block,
            icon,
            size,
            iconPointer,
            iconLocation,
            onClick,
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
            type,

            // Table
            dataSource,
            focusOnMount,
            hideHeader,
            rowIsSelectable,
            selectedElements,
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
            onRowSelect
        } = props;

        let buttonProps = {
            block,
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
            selectedElements,
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
            onRowSelect
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
// <DropdownContent {...dropdownPortalProps} />