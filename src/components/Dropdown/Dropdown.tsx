import * as React from 'react';
import classNames from 'classnames';

import Button from '../Button/Button';
import { IButtonProps } from '../Button/Button';
import { ITableProps } from '../Table/Table';

import Tags from '../Tags/Tags';

import DropdownContent from './DropdownContent';

function guidGenerator() {
	var S4 = function() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

export interface IDropdownProps extends IButtonProps, ITableProps {
	title?: string;
	material?: boolean;
	materialIcon?: boolean;
	dropDirection?: 'up' | 'down' | 'left' | 'right' | string;
	fixedClose?: boolean;
	mobile?: boolean;
	open?: boolean;
	hideDropdownHeader?: boolean;
	titleKey?: string;
	disabled?: boolean;
	parentId?: any;
	hideRoot?: boolean;
	tagSelected?: boolean;
	tagSelectedKey?: string;
	tagSelectedElements?: Array<any>;
	onChange?: (element?: Array<Object>, key?: string | number, selectedElements?: Array<Object>, id?: string) => void;
	onOpen?: (boolean: boolean) => void;
	onClose?: (boolean: boolean) => void;
	onCloseDropdown?: () => void;
	onTagRemove?: (item) => void;
}

export interface State {
	open?: boolean;
}

export default class Dropdown extends React.Component<IDropdownProps, any> {
	refs: {
		[key: string]: Element;
		dropdown: HTMLInputElement;
	};

	public static defaultProps = {
		contentMaxHeight: 200,
		material: true,
		hideFooter: true,
		open: null
	};

	constructor(props: IDropdownProps) {
		super(props);
		this.state = {
			dropdownIsOpen: false,
			selectedElements: props.selectedElements || [],
			scrollToId: props.scrollToId || '',
			title: props.title || ''
		};
	}

	static getDerivedStateFromProps(props, state) {
		// must get very explicit on state changes
		if (props.open !== null) {
			if (props.open !== state.dropdownIsOpen) {
				return {
					dropdownIsOpen: props.open
				};
			} else if (props.selectedElements !== state.selectedElements) {
				return {
					selectedElements: props.selectedElements
				};
			} else if (props.scrollToId !== state.scrollToId) {
				return {
					scrollToId: props.scrollToId
				};
			} else {
				return {
					dropdownIsOpen: state.dropdownIsOpen
				};
			}
		} else return null;
	}

	closeDropdown() {
		this.setState(
			{
				dropdownIsOpen: false
			},
			() => {
				this.props.onCloseDropdown ? this.props.onCloseDropdown() : null;
			}
		);
	}
	openDropdown() {
		this.setState(
			{
				dropdownIsOpen: true
			},
			() => {
				//    may not need as it seems like a duplicate call
				this.props.onOpen ? this.props.onOpen(true) : null;
			}
		);
	}
	onRowSelect(element: Array<any>, index: string | number, selectedElements: Array<any>, id: string) {
		let { rowIsSelectable } = this.props;

		this.setState(
			{
				selectedElements: selectedElements
			},
			() => {
				if (rowIsSelectable === 'single') {
					this.setState({
						scrollToId: this.props.selectedKey
							? element[this.props.titleKey ? this.props.titleKey : this.props.selectedKey]
							: null
					});

					this.closeDropdown();
				}
				this.props.onChange ? this.props.onChange(element, index, selectedElements, id) : null;
			}
		);
	}

	removeSelectedItem(item) {
		function remove(array, element) {
			return array.filter((e) => e !== element);
		}

		this.setState({
			selectedElements: remove(this.state.selectedElements, item)
		});
	}

	onTagRemove(item) {
		this.props.onTagRemove(item);
	}
	render(): JSX.Element {
		const self = this;
		const props = self.props;
		let state = self.state;

		let {
			id,
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
			loading,
			theme,
			pointer,
			required,
			checkedTheme,
			disabled,
			parentId,
			shortcut,
			materialIcon,
			//
			children,

			// Table
			disableSelectedElements,
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
			hideDropdownHeader,
			hideRoot,
			tagSelected,
			tagSelectedKey,
			tagSelectedElements,
			checkable,
			onCheck
		} = props;

		let buttonProps = {
			block: true,
			shortcut,
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
			loading,
			disabled,
			checkedTheme,
			materialIcon,
			onClick: props.onClick || this.openDropdown.bind(this)
		};

		let dropdownPortalProps = {
			id,
			title,
			icon,
			children,
			portalId: guidGenerator(),
			onClose: this.closeDropdown.bind(this),
			open: props.loading ? false : state.dropdownIsOpen,
			position: state.position,
			// Table
			disableSelectedElements,
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
			scrollIf: this.state.dropdownIsOpen,
			checkable,
			onCheck,
			//
			parentId: parentId,
			hideRoot: hideRoot
		};

		let dropdownClass = classNames(
			'r-Dropdown',
			{ 'e-open': state.dropdownIsOpen },
			{ block: props.block },
			{ 'pull-right': props.right },
			{ 'pull-left': props.left },
			{ material: props.material },
			this.props.dropDirection,
			props.className
		);

		let selectedTitle =
			rowIsSelectable === 'single' &&
			this.state.selectedElements &&
			this.state.selectedElements.length > 0 &&
			!this.props.title
				? this.state.selectedElements[0]
				: props.title;

		if (tagSelected) {
			return (
				<div className={props.block ? 'block' : 'dinblock'} id={id} ref="dropdown">
					<Tags
						branchIn={tagSelectedKey}
						onRemove={
							tagSelectedElements ? this.onTagRemove.bind(this) : this.removeSelectedItem.bind(this)
						}
						dataSource={tagSelectedElements ? tagSelectedElements : this.state.selectedElements}
					/>
					<div className={dropdownClass}>
						<Button {...buttonProps}>{selectedTitle}</Button>
						<DropdownContent {...dropdownPortalProps} />
					</div>
				</div>
			);
		} else {
			return (
				<div id={id} ref="dropdown" className={dropdownClass}>
					<Button {...buttonProps}>{selectedTitle}</Button>
					<DropdownContent {...dropdownPortalProps} />
				</div>
			);
		}
	}
}
