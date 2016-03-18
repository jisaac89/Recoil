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

const CardProperties = [
  {
    name :'resize',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the element can be resized.'
  },
  {
    name :'hover',
    type: 'boolean',
    options: 'true, false',
    description: 'Sets if the element has an hover action.'
  },
  {
    name :'float',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the element will float on screen.'
  },
  {
    name :'block',
    type: 'boolean',
    options: 'true, false',
    description: 'Sets the element to have a block display.'
  },
  {
    name :'fill',
    type: 'number',
    options: '',
    description: 'Sets the element to have a height and width of 100% relative to its parent.'
  },
  {
    name :'onClick',
    type: 'number',
    options: '',
    description: 'Defines a onClick function for the element.'
  },
  {
    name :'style',
    type: 'number',
    options: '',
    description: 'Defines the styles for the element.'
  },
  {
    name :'className',
    type: 'number',
    options: '',
    description: 'Defines a list of class names for the element.'
  },
  {
    name :'onMouseEnter',
    type: 'number',
    options: '',
    description: 'Defines a onMouseEnter function for the element.'
  },
  {
    name :'onMouseLeave',
    type: 'number',
    options: '',
    description: 'Defines a onMouseLeave function for the element.'
  },
]

export default class TutorialCard extends React.Component<any,any>{
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

          <h1>Card</h1>

          <Layer className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The material component is a google material enspired div, it has advanced feautures.</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer className="ptb10">
              <Layer className="p10 dark">
                <Card>
                  This is an exampe of a Card.
                </Card>
              </Layer>
            </Layer>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
            <Door open={this.state.showProps}>
              <Layer className="ptb10">
                <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={CardProperties} />
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
