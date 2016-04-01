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

interface IDoorProps {
  open? : boolean;
  className? : any;
  children? : any;
  overflow? : boolean;
}

const DoorProperties = [
  {
    name :'open',
    type: 'boolean',
    options: 'true, false, false by default',
    description: 'Defines if the element is open or closed.'
  },
  {
    name :'overflow',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the element is overflow is visible.'
  },
  {
    name :'className',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines a set of class names for the element.'
  }
]

export default class TutorialDoor extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false,

      doorIsOpen : false
    }
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      doorIsOpen: false,
      showProps: this.state.showProps ? false : true
    })
  }

  toggleShowVideo() {
    this.setState({
      showProps: false,
      doorIsOpen: false,
      showVideo: this.state.showVideo ? false : true
    })
  }

  toggleDoorIsOpen() {
    this.setState({
      showProps: false,
      showVideo: false,
      doorIsOpen: this.state.doorIsOpen ? false : true
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

        <h1>Door</h1>

        <Layer className="ptb20">
          <h2 className="pb10">Description</h2>
          <p>The Door component opens or closes its children depending on an if statement. By default door are always closed.</p>
        </Layer>

        <Layer className="pb20">
          <h2 className="pb10">Examples</h2>
          <h3>Default</h3>
          <Layer className="ptb20">
            <Layer>
              <Button className="mb10" checked={this.state.doorIsOpen} onClick={this.toggleDoorIsOpen.bind(this)}>Toggle Door Open</Button>
              <Door open={this.state.doorIsOpen}>
                <Layer type="light" className="p10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Layer>
              </Door>
            </Layer>
          </Layer>
        </Layer>

        <Layer className="pb20">
          <h2 className="pb10">Props</h2>
          <Layer className="ptb10">
            <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={DoorProperties} />
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

      </Layer>
      </Emerge>
    )
  }
}
