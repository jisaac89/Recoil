import * as React from 'react';
import * as classNames from 'classnames';
import './Grid.less';

import GridComponent from './GridComponent';
import DataSource from '../DataSource/DataSource';

export interface P {
    dataSource?: Array<any>;
    sortable?: boolean;
    initialSortKey?: string;
    columns?: Array<any>;
    hideHeader?: boolean;
    selectedKey?: string;
    detailTemplate?: Function;
    onSelect?: Function;
    onRowSelect?: Function;
    open?: boolean;
    rowIsSelectable? : boolean;
    searchableKeys? : Array<any>;
    searchTitle ? : string | number;
    hideColumns?: Array<string>;
    overflow?: boolean;
    selected? : Array<any>;
    simple? : boolean;
    filterItems? : any;
    pageSize? : number;
}

export interface S { }

export default class Grid extends React.Component<P, S>{
    render() {
        return React.createElement(DataSource(<GridComponent {...this.props} />))
    }
}