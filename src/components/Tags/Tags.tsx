import React from 'react';

import Open from '../Open/Open';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

import { branchIn } from '../Utils';
import { TDataSource } from '../DataSource/DataSource';

export interface ITagsProps {
  dataSource: TDataSource[];
  branchIn?: any;
  onRemove?: any;
}

export interface ITagsState {
  open: boolean;
  dataSource: TDataSource[];
}

export default class Tags extends React.Component<ITagsProps, ITagsState> {
  constructor(props: ITagsProps) {
    super(props);
    this.state = {
      dataSource: props.dataSource || [],
      open: false
    };
  }

  componentDidUpdate(prevProps: ITagsProps) {
    if (prevProps.dataSource !== this.props.dataSource) {
      this.setState({
        dataSource: this.props.dataSource,
        open: true
      });
    }

    if (!!prevProps.dataSource && this.props.dataSource.length === 0 && prevProps.dataSource.length !== 0) {
      this.setState({
        open: false
      });
    }
  }

  onRemove(item: object) {
    this.props.onRemove(item);
  }

  render() {
    let _array: React.ReactNode[] = [];

    let createList = (item: object, index: number) => {
      _array.push(
        <Toolbar flush key={index} className="mr10">
          <Button size="small">{this.props.branchIn ? branchIn(item, this.props.branchIn) : item}</Button>
          <Button size="small" icon="times" onClick={this.onRemove.bind(this, item)} />
        </Toolbar>
      );
    };

    if (!!this.state.dataSource) {
      this.state.dataSource.map(createList);
    }

    return (
      <Open openToHeight={'32px'} if={this.state.open && !!this.state.dataSource}>
        <Toolbar block className="text-left">
          {_array}
        </Toolbar>
      </Open>
    );
  }
}
