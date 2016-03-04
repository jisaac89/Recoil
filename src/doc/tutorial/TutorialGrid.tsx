import * as React from 'react';

import Align from '../../components/Align/Align';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Checkbox from '../../components/Checkbox/Checkbox';
import Door from '../../components/Door/Door';
import Dropdown from '../../components/Dropdown/Dropdown';
import Emerge from '../../components/Emerge/Emerge';
import Grid from '../../components/Grid/Grid';
import Input from '../../components/Input/Input';
import Layer from '../../components/Layer/Layer';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import Pane from '../../components/Pane/Pane';
import Selectable from '../../components/Selectable/Selectable';
import Shrink from '../../components/Shrink/Shrink';
import Toolbar from '../../components/Toolbar/Toolbar';
import Transform from '../../components/Transform/Transform';
import Wizard from '../../components/Wizard/Wizard';

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
      {name: 'name', width:250},
      {name: 'type', width:300},
      {name: 'options', width:250},
      {name: 'description'}
    ]

    return (
      <Emerge>
      <Layer>

        <h1>Grid</h1>

        <Layer className="ptb10">
          <h2 className="pb10">Description</h2>
          <p>The Grid component is a simple data-grid that currently takes in a object.</p>
        </Layer>

        <Layer className="ptb10">
          <h2 className="pb10">Examples</h2>
          <Layer className="ptb10">
            <Layer className="p10 light">
              <Grid open={true} numberPerPage={20} hideHeader={true} columns={columns} dataSource={GridProperties} />
            </Layer>
          </Layer>
        </Layer>

        <Layer className="ptb10">
          <h2 className="pb10">Options</h2>
          <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
          <Door open={this.state.showProps}>
            <Layer className="ptb10">
              <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={GridProperties} />
            </Layer>
          </Door>
        </Layer>

        <Layer className="ptb10">
          <h2 className="pb10">Video</h2>
          <Button checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button>
          <Door open={this.state.showVideo}>
            <Layer className="ptb10">
              VIDEO
            </Layer>
          </Door>
        </Layer>

      </Layer>
      </Emerge>
    )
  }
}
