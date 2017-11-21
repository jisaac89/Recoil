import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';

import TutorialView from './TutorialView';
const dropData = ['from', 'block', 'contentClass', 'onSelected', 'type', 'data'];

const DropdownProperties = [
  {
    name :'from',
    type: 'string',
    options: 'X X, use top bottom left right',
    description: 'Defines the direction of the drop.'
  },
  {
    name :'block',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the dropdown is a block element with a width of 100%.'
  },
  {
    name :'contentClass',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines a set of class names for the dropdown content container.'
  },
  {
    name :'onSelected',
    type: 'function',
    options: 'true, false',
    description: 'Return the selected value of the array, if the dropdown is of type selection.'
  },
  {
    name :'type',
    type: 'string',
    options: 'selection, button, search.',
    description: 'Defines what type of dropdown it is, omit for default option and pass children.'
  }
]

let days = [
  {name: 'Monday'},
  {name: 'Tuesday'},
  {name: 'Wednesday'},
  {name: 'Thursday'},
  {name: 'Friday'},
  {name: 'Saturday'},
  {name: 'Sunday'}
]

let months = [
  {name: 'January'},
  {name: 'February'},
  {name: 'March'},
  {name: 'April'},
  {name: 'May'},
  {name: 'June'},
  {name: 'July'},
  {name: 'August'},
  {name: 'October'},
  {name: 'September'},
  {name: 'November'},
  {name: 'December'}
]

let users = [
  {name: 'Joe'},
  {name: 'John'},
  {name: 'Mat'},
  {name: 'Tom'},
  {name: 'Sean'},
  {name: 'Rob'},
  {name: 'Anne'}
]

export default class TutorialDropdown extends React.Component<any,any>{
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
      {name: 'name', width:120},
      {name: 'type', width:140},
      {name: 'description'}
    ]
    let example = () => {
      return (
        <div>
          <h3>Default</h3>
          <div className="ptb20">
              <Dropdown 
                className='w200px' 
                rowIsSelectable="single" 
                title="Select Day"
                hideHeader
                dataSource={days}
                hidePageSize
                dropDirection="top"
                icon="calendar"
                iconPointer="down"
              />
          </div>

          <h3>Material</h3>
          <div className="ptb20">
              <Dropdown 
                className='w200px' 
                rowIsSelectable="single" 
                title="Select Month"
                hideHeader 
                dataSource={months}
                hidePageSize 
              />
          </div>

          <h3>Multi Select Mobile Dropdown</h3>
          <div className="ptb20">
              <Dropdown mobile={true} className='w200px' icon="users" iconPointer="down" rowIsSelectable title="Select Users" dataSource={users} columns={[{name:'name'}]} searchableKeys={["name"]} searchTitle="Find Users" />
          </div>

          <h3>Custom Content</h3>
          <p>To add custom content to a dropdown, just include it as a child of the component.</p>
          <div className="ptb20">
              <Dropdown className='w200px' title="Custom Content">
                <div className="w100 p10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Dropdown>
          </div>

          <h3>Advanced Dropdown</h3>
          <p>The example below shows a drop down with the block prop and a <strong>from</strong> prop with the value <strong>top left</strong> and a <strong>contentClass</strong> props of <strong>w300px</strong>.</p>
          <div className="ptb20">
              <Dropdown block icon="eye" title="Advanced Dropdown">
                <div className="w100 p10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Dropdown>
          </div>
        </div>
      )
    }

    return (
      <TutorialView 
        description="The Dropdown component is an advanced version of the standard selection options control."
        Id="Dropdown"
        columnData={DropdownProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
