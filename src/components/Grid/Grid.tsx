import * as React from 'react';
import * as classNames from 'classnames';
import './Grid.less';

import GridComponent from './GridComponent';
import DataSource from '../DataSource/DataSource';

export interface P{}
export interface S{}

export default class Grid extends React.Component<P, S>{
    render() {
        return React.createElement(DataSource(<GridComponent {...this.props} />))
    }
}