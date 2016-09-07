import * as React from 'react';
import * as classNames from 'classnames';
import './Grid.less';

import GridSearch from './GridSearch';
import GridHeader from './GridHeader';
import GridBody from './GridBody';
import GridFooter from './GridFooter';

export interface IGridProps {
    dataSource : Array<any>;
    numberPerPage?: number;
    columns?: Array<any>;
    open?: boolean;
    hideHeader?: boolean;
    sortable?: boolean;
    detailTemplate?: any;
    height?: string;
    onRowSelect?: Function;
    selected?: Array<any>;
    hideColumns?: Array<string>;
    columnTemplate?: Function;
    detailTemplateOpenOnHover?: boolean;
    detailTemplateOpenOnSelect?: boolean;
    isSelected?: any;
    dataKey?: any;
    rowIsSelectable?: boolean;
    selectedKey?: string;
    rowIsSelectableType?: string;
    onSelect?: any;
    detailTemplateOpenOnRowSelect?: boolean;
    filterSelected?: boolean;
    initialSortKey?: string;
    numberOfPages?: number;
    searchableKeys? : Array<any>;
    simple? : boolean;
}

export interface S {}

export default class GridComponent extends React.Component<IGridProps, S>{
    render() {
        const self = this;
        const props = self.props;

        let gridClass = classNames(
            'r-Grid',
            {'e-simple' : (props.simple)}
        )

        return (
            <div className={gridClass}>
                <GridSearch {...props} />
                <table className='r-Grid__Table w100'>
                    <GridHeader {...props} />
                    <GridBody {...props} />
                </table>
                <GridFooter {...props} />
            </div>
        )
    }
}