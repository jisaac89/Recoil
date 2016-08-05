import * as React from 'react';
import * as classNames from 'classnames';
import './Grid.less';

import GridComponent from './GridComponent';
import DataSource from '../DataSource/DataSource';

export interface P {
    dataSource?: Array<any>;
    sortable?: any;
    initialSortKey?: string;
    columns?: any;
    hideHeader?: boolean;
    selectedKey?: string;
    detailTemplate?: any;
    onSelect?: Function;
    onRowSelect?: Function;
    open?: boolean;
    rowIsSelectable? : any;
    searchableKeys? : Array<any>;
    searchTitle ? : string;
}

export interface S { }

export default class Grid extends React.Component<P, S>{
    render() {
        return React.createElement(DataSource(<GridComponent {...this.props} />))
    }
}