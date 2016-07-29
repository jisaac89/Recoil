import * as React from 'react';
import * as classNames from 'classnames';
import './Grid.less';

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
    onRowSelect?: any;
    selected?: Array<any>;
    hideColumns?: Array<string>;
    columnTemplate?: any;
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
}

export interface S {}

export default class GridComponent extends React.Component<IGridProps, S>{
    render() {
        const self = this;
        const props = self.props;

        return (
            <div className="r-Grid">
                <table className='r-Grid__Table w100'>
                    <GridHeader {...props} />
                    <GridBody {...props} />
                </table>
                <GridFooter {...props} />
            </div>
        )
    }
}