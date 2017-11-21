import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';

import TutorialView from './TutorialView';
const InputProperties = [
  {
    name :'ghost',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the input border should be hidden.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Defines a list of class names for the element.'
  },
  {
    name :'type',
    type: 'string',
    options: 'text, password, textarea',
    description: 'Defines the type of input the element is.'
  },
  {
    name :'icon',
    type: 'string',
    options: 'Omit the fa fa-',
    description: 'Add a font-awesome icon to the input.'
  },
  {
    name :'title',
    type: 'string',
    options: '',
    description: 'Defines the title for the input.'
  },
  {
    name :'placeholder',
    type: '',
    options: '',
    description: 'Defines the placeholder for the input.'
  },
  {
    name :'value',
    type: '',
    options: '',
    description: 'Defines the value for the input.'
  },
  {
    name :'style',
    type: 'string',
    options: '',
    description: 'Defines the inline styles for the element.'
  },
  {
    name :'errorInline',
    type: 'boolean',
    options: '',
    description: 'Defines if the error appears within the input.'
  },
  {
    name :'error',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines whether the error message should show.'
  },
  {
    name :'block',
    type: 'string',
    options: '',
    description: 'Sets the element as a block element with 100% width.'
  },
  {
    name :'onChange',
    type: '',
    options: '',
    description: 'Define a function, returns the current value of the input.'
  },
  {
    name :'focusOnMount',
    type: 'boolean',
    options: 'true, false',
    description: 'When the component mounts should the input be set to focus.'
  },
  {
    name :'focusDelay',
    type: '',
    options: '',
    description: 'Sets the delay for the focus.'
  }
]

export default class TutorialInput extends React.Component<any,any>{
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

  setonChange() {
    // console.log('test');
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
          <Layer className="ptb10">
            <Toolbar vertical spacing>
              <Input size="small" advanced type="text" title="First Name" onChange={this.setonChange.bind(this)} block />
              <Input advanced type="text" title="Last Name" onChange={this.setonChange.bind(this)} block />
              <Input simple size="large" advanced type="text" icon="search" title="Search Users" onChange={this.setonChange.bind(this)} block />
              <Input size="xlarge" advanced type="text" title="Email" onChange={this.setonChange.bind(this)} block />
            </Toolbar>
          </Layer>
          <Layer className="ptb10">
            <Input advanced type="text" placeholder="Search Places" onChange={this.setonChange.bind(this)} block />
          </Layer>
          <Layer className="ptb10">
            <Input error={true} simple errorMessage={"Error Message"} advanced type="text" placeholder="Search Places" onChange={this.setonChange.bind(this)} block />
          </Layer>
        </div>
      )
    }

    return (
      <TutorialView 
        description="The Input component is an advanced version of the standard input type='text' control."
        Id="Input"
        columnData={InputProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
