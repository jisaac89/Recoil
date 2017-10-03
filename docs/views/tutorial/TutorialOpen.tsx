import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';

import TutorialView from './TutorialView';
interface IOpenProps {
  open? : boolean;
  className? : any;
  children? : any;
  overflow? : boolean;
}

const OpenProperties = [
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

export default class TutorialOpen extends React.Component<any,any>{
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

  toggleOpenIsOpen() {
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
      {name: 'name', width:120},
      {name: 'type', width:140},
      {name: 'description'}
    ]
    let example = () => {
      return (
        <div>
          <h3>Default</h3>
          <Layer className="ptb20">
            <Layer>
              <Button className="mb10" checked={this.state.doorIsOpen} onClick={this.toggleOpenIsOpen.bind(this)}>Toggle Open Open</Button>
              <Open if={this.state.doorIsOpen}>
                <Layer theme="light" className="p10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Layer>
              </Open>
            </Layer>
          </Layer>
        </div>
      )
    }

    return (
      <TutorialView 
        description="The Open component opens or closes its children depending on an if statement. By default Open are always closed."
        Id="Open"
        columnData={OpenProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
