import * as React from 'react';
import * as classNames from 'classnames';

import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';
import Layer from '../Layer/Layer';

import Table from '../Table/Table';
import Tree from '../Tree/Tree';

export default class TreeComponent extends React.Component<any, any>{

    constructor(props) {
        super(props)
        this.state = {
            renderedTree: []
        }
    }

    componentDidMount() {
        this.DeepCloneAsTree(this.props.dataSource);
    }

    DeepCloneAsTree(dataSource) {
        // console.log(dataSource);
        const self = this;
        let state = self.state;
        let {renderedTree} = state;

        // first check if dataSource is an array 
        if (Array.isArray(dataSource)) {
            // loop through each element in dataSource
            dataSource.map((element, key) => {
                // and check if each individual element is an object
                if (typeof element === 'object') {
                    renderedTree.push(
                        <Toolbar flush key={key} size="small" block className="mb10">
                            <Button theme="primary">{key}</Button>
                            <Button>Object</Button>
                        </Toolbar>
                    )
                //  or an array
                } else {
                    renderedTree.push(
                        <Toolbar flush key={key} size="small" block className="mb10">
                            <Button theme="primary">{key}</Button>
                            <Button>{element}</Button>
                        </Toolbar>
                    )
                }
            })
        } else if (typeof dataSource === 'object') {
            for (var key in dataSource) {
                if (dataSource.hasOwnProperty(key)) {
                    var element = dataSource[key];
                    if (typeof element === 'object') {
                        self.DeepCloneAsTree(element);
                    }
                }
            }
        }

    }

    render() {

        const self = this;
        const props = self.props;
        let {columns, dataSource} = props;
        let state = self.state;

        let treeClass = classNames(
            'r-Tree',
            props.className
        );

        return (
            <div className={treeClass}>
                {state.renderedTree}
            </div>
        )
    }
}