import * as React from 'react';
import * as ReactDOM from 'react-dom';


import DropdownContent from './DropdownContent';

import './Dropdown.less';

export default class DropdownPortal extends React.Component<any, any>{

    portalElement : HTMLElement = null;

    constructor(props :any) {
        super(props);
        this.state = {
            position: null
        }
    }

    componentDidMount() {
        this.getDropdownPosition();
    }

    getDropdownPosition() {
        let element = ReactDOM.findDOMNode<HTMLInputElement>(this.props.element);
        let position = element.getBoundingClientRect();
        this.setState({
            position: [position.top, position.left]
        }, () => {
            this.createDropdownPortal();
        })
    }
    createDropdownPortal() {
        let position = this.state.position;

        let y = position[0];
        let x = position[1];

        let absolutePosition = {
            position: 'absolute',
            top: y,
            left: x
        }

        let p = this.props.portalId && document.getElementById(this.props.portalId);
        if (!p) {
            let docfrag = document.createDocumentFragment();
            p = document.createElement('div');
            p.id = this.props.portalId;
            p.style.position = 'absolute';
            p.style.top = absolutePosition.top;
            p.style.left = absolutePosition.left;
            docfrag.appendChild(p);
            document.getElementById('Recoil').appendChild(docfrag);
        }
        this.portalElement = p;
        this.componentDidUpdate();
    }


    componentWillUnmount() {
        document.getElementById('Recoil').removeChild(this.portalElement);
    }
    componentDidUpdate() {
        const self = this;
        const props = self.props;

        let {
            id,
            open,
            title,
            onClose,
            icon,
            position,
            type,
            children,
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
            contentMaxHeight
        } = props;

        let dropdownContentProps = {
            id,
            open,
            title,
            icon,
            onClose,
            position,
            type,
            children,
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
            contentMaxHeight
            //
        }

        ReactDOM.render(
            <DropdownContent
                {...dropdownContentProps}
             />, this.portalElement);
    }
    render() : JSX.Element { return null }
}