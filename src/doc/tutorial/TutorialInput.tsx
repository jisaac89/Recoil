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
    console.log('test');
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

      <h1>Input</h1>

      <Layer className="ptb10">
        <h2 className="pb10">Description</h2>
        <p>The Input component is an advanced version of the standard input type='text' control.</p>
      </Layer>

      <Layer className="ptb10">
        <h2 className="pb10">Examples</h2>
        <Layer className="ptb10">
          <Layer className="p10 light">
            <Input type="text" icon="search" title="Search Users" onChange={this.setonChange.bind(this)} block />
          </Layer>
        </Layer>
      </Layer>

      <Layer className="ptb10">
        <h2 className="pb10">Options</h2>
        <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
        <Door open={this.state.showProps}>
          <Layer className="ptb10">
            <Grid open={this.state.showProps} numberPerPage={5} sortable columns={columns} dataSource={InputProperties} />
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
