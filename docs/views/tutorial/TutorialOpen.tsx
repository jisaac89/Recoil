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
  constructor(props) {
    super(props);

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
          <Layer className="pt20">

              <Toggle className="mb20" checked={this.state.doorIsOpen} onChange={this.toggleOpenIsOpen.bind(this)} array={['Closed', 'Open']}/>
              
              <Open if={this.state.doorIsOpen} openToHeight={'201px'}>
                <Layer flexCenter dimensions={['200px', '200px', 1]} theme="dark" className="p10">
                  Opened!
                </Layer>
              </Open>
              
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
