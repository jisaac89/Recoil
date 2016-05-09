import * as React from 'react';


import Align from '../../src/components/Align/Align';
import Button from '../../src/components/Button/Button';
import Card from '../../src/components/Card/Card';
import Checkbox from '../../src/components/Checkbox/Checkbox';
import Door from '../../src/components/Door/Door';
import Dropdown from '../../src/components/Dropdown/Dropdown';
import Emerge from '../../src/components/Emerge/Emerge';
import Grid from '../../src/components/Grid/Grid';
import Input from '../../src/components/Input/Input';
import Layer from '../../src/components/Layer/Layer';
import Loading from '../../src/components/Loading/Loading';
import Modal from '../../src/components/Modal/Modal';
import Pane from '../../src/components/Pane/Pane';
import Selectable from '../../src/components/Selectable/Selectable';
import Shrink from '../../src/components/Shrink/Shrink';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Transform from '../../src/components/Transform/Transform';
import Wizard from '../../src/components/Wizard/Wizard';

const GridProperties = [
  {
    name :'columns',
    type: '',
    options: '',
    description: 'Defines the columns object.'
  },
  {
    name :'sortable',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the grid is sortable.'
  },
  {
    name :'hideHeader',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the grid header is visible.'
  },
  {
    name :'selected',
    type: '',
    options: '',
    description: 'Return item, so user can filter it.'
  },
  {
    name :'onSelect',
    type: '',
    options: '',
    description: 'Define a function of what happens when a user selected a row.'
  },
  {
    name :'dataSource',
    type: '',
    options: '',
    description: 'Define the grids actual data object.'
  },
  {
    name :'detailTemplate',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  },
  {
    name :'selectedKey',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  },
  {
    name :'selected',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  },
  {
    name :'onRowSelect',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  }
]

export default class TutorialGrid extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false
    }
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      showProps: this.state.showProps ? false : true
    })
  }

  toggleShowVideo() {
    this.setState({
      showProps: false,
      showVideo: this.state.showVideo ? false : true
    })
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    const columns = [
      {name: 'name', width:100},
      {name: 'description'},
      {name: 'type', width:200},
      {name: 'options', width:250}
    ]

    return (
      <div className="p10">

        <h1>Grid</h1>

        <div className="ptb10">
          <h2 className="pb10">Description</h2>
          <p>The Grid component is a simple data-grid that currently takes in a object.</p>
        </div>

        <div className="ptb10">
          <h2 className="pb10">Examples</h2>
          <div className="ptb10">
            <Grid open={true} numberPerPage={20} dataSource={GridProperties} />
          </div>
        </div>

        <div className="ptb10">
          <h2 className="pb10">Props</h2>
          <div className="ptb10">
            <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={GridProperties} />
          </div>
        </div>

        <div className="ptb10">
          <h2 className="pb10">Video</h2>
          <Button checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button>
          <Door open={this.state.showVideo}>
            <div className="ptb10">
              VIDEO
            </div>
          </Door>
        </div>

      </div>
    )
  }
}
