import * as React from 'react';

import Open from '../Open/Open'
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

import { branchIn } from '../Utils';

export interface ITagsProps {
    dataSource?: any;
    branchIn?: any;
    onRemove?: any;
}

export default class Tags extends React.Component<ITagsProps, any>{

    constructor(props) {
        super(props);
        this.state = {
            dataSource: props.dataSource || [],
            open: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.dataSource !== this.props.dataSource) {
            this.setState({
                dataSource: nextProps.dataSource,
                open: true
            })
        }

        if (nextProps.dataSource && nextProps.dataSource.length === 0) {
            this.setState({
                dataSource: [],
                open: false
            })
        }
    }

    onRemove(item) {
        this.props.onRemove(item);
    }

    render() {

        let _array = [];

        let createList = (item, index) => {
            _array.push(
                <Toolbar flush key={index} className="mr10">
                    <Button size="small">{this.props.branchIn ? branchIn(item, this.props.branchIn) : item}</Button>
                    <Button size="small" icon="times" onClick={this.onRemove.bind(this, item)}></Button>
                </Toolbar>
            )
        }

        if (!!this.state.dataSource) {
            this.state.dataSource.map(createList);
        }

        return (
            <Open openToHeight={'32px'} if={this.state.open && !!this.state.dataSource}>
                <Toolbar block className="text-left">
                    {_array}
                </Toolbar>
            </Open>
        )
    }
}