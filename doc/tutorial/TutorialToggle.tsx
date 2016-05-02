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
import Toggle from '../../src/components/Toggle/Toggle';

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
      {name: 'name', width:130},
      {name: 'description'},
      {name: 'type', width:120},
      {name: 'options', width:250}
    ]

    return (
      <Emerge>
        <div className="p10">

          <h1>Toggle</h1>

          <Layer className="ptb20">
            <h2 className="pb10">Description</h2>
            <p>The material component is a google material enspired div, it has advanced feautures.</p>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Examples</h2>
            <h3>Default</h3>
            <Layer className="ptb20">
              <Toggle />
            </Layer>
            <Layer className="pb20">
              <p>With props checked passed as <strong>true</strong>.</p>
              <Toggle className="mt10" checked={true} />
            </Layer>

            <h3>Toggle Numbers</h3>
            <Layer className="ptb20">
              <Toolbar spacing>
                <Toggle columns={[15, 20, 25]} />
              </Toolbar>
            </Layer>

            <h3>Toggle Strings</h3>
            <Layer className="ptb20">
              <Toolbar spacing>
                <Toggle columns={["S", "M", "L"]} />
              </Toolbar>
            </Layer>

            <h3>Toggle Colors</h3>
            <p>To toggle a string of CSS based background colors or images just pass in the <strong>colors</strong> prop.</p>
            <Layer className="ptb20">
              <Toolbar spacing>
                <Toggle type="colors" columns={['#FF5757', '#00A0DC', '#8D6CAB']} />
              </Toolbar>
            </Layer>

            <h3>Ghost Toggle</h3>
            <Layer className="ptb20">
              <Toolbar spacing>
                <Toggle ghost columns={["Monday", "Tuesday", "Wednesday"]} />
              </Toolbar>
            </Layer>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Props</h2>
              <Layer className="ptb10">
                <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={CardProperties} />
              </Layer>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Video</h2>
            <Button checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button>
            <Door open={this.state.showVideo}>
              <Layer className="ptb10">
                VIDEO
              </Layer>
            </Door>
          </Layer>

        </div>
      </Emerge>
    )
  }
}
