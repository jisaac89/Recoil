import React from 'react';
import { Table, Layer } from '../../../src/index';

import TutorialView from './TutorialView';
const TableProperties = [
  {
    name: 'columns',
    type: '',
    options: '',
    description: 'Defines the columns object.'
  },
  {
    name: 'sortable',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the Table is sortable.'
  },
  {
    name: 'hideHeader',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the Table header is visible.'
  },
  {
    name: 'selected',
    type: '',
    options: '',
    description: 'Return item, so user can filter it.'
  },
  {
    name: 'onSelect',
    type: '',
    options: '',
    description: 'Define a function of what happens when a user selected a row.'
  },
  {
    name: 'dataSource',
    type: '',
    options: '',
    description: 'Define the Tables actual data object.'
  },
  {
    name: 'detailTemplate',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  },
  {
    name: 'selectedKey',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  },
  {
    name: 'selected',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  },
  {
    name: 'onRowSelect',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  }
];

export default class TutorialTable extends React.Component<any, any> {
  constructor(props: never) {
    super(props);

    this.state = {
      showProps: true,
      showVideo: false
    };
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      showProps: this.state.showProps ? false : true
    });
  }

  toggleShowVideo() {
    this.setState({
      showProps: false,
      showVideo: this.state.showVideo ? false : true
    });
  }

  detailTemplate(element: { description: string }) {
    return (
      <Layer theme="light" className="p10 pl50">
        <small>{element.description}</small>
      </Layer>
    );
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    const columns = [{ name: 'name' }];
    let example = () => {
      return (
        <div>
          <Table
            showDataSourceLength
            pageSize={5}
            checkable
            detailTemplate={this.detailTemplate.bind(this)}
            searchableKeys={['name']}
            sortable
            columns={columns}
            dataSource={TableProperties}
            loadingKey={'name'}
            loadingElements={['sortable']}
          />
        </div>
      );
    };

    return (
      <TutorialView
        description="The Table component is a simple data-Table that currently takes in a object."
        Id="Table"
        columnData={TableProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    );
  }
}
