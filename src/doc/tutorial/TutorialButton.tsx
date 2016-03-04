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

const ButtonProperties = [
  {
    name :'disabled',
    type: 'boolean',
    options: 'true, false',
    description: 'Toggle if the button is disabled or not.'
  },
  {
    name :'block',
    type: 'boolean',
    options: 'true, false',
    description: 'Block converts the button element to a block element which gives it full width.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Add a list of class names.'
  },
  {
    name :'type',
    type: 'string',
    options: 'primary, secondary',
    description: 'Template type for the button.'
  },
  {
    name :'icon',
    type: 'string',
    options: 'Omit the fa fa-',
    description: 'Include a font-awesome icon.'
  },
  {
    name :'href',
    type: 'string',
    options: '',
    description: 'Add a link to the button.'
  },
  {
    name :'target',
    type: 'string',
    options: '',
    description: 'Add a target attribute to the button.'
  },
  {
    name :'ghost',
    type: 'boolean',
    options: 'true, false',
    description: 'Switch to the ghost template mode.'
  },
  {
    name :'strech',
    type: 'boolean',
    options: 'true, false',
    description: 'Add a width of 100% to the button.'
  },
  {
    name :'pointer',
    type: 'any',
    options: 'true, false',
    description: 'Add a mouse pointer on hover.'
  },
  {
    name :'right',
    type: 'boolean',
    options: 'true, false',
    description: 'Float the button right.'
  },
  {
    name :'left',
    type: 'boolean',
    options: 'true, false',
    description: 'Float the button left.'
  },
  {
    name :'size',
    type: 'string',
    options: 'small, large, xlarge',
    description: 'Set the size of the button by class name.'
  },
  {
    name :'submit',
    type: 'boolean',
    options: 'true, false',
    description: 'Set whether the button is of submit type.'
  },
  {
    name :'style',
    type: 'any',
    options: '',
    description: 'Add custom inline styles.'
  },
  {
    name :'checked',
    type: 'boolean',
    options: 'true, false',
    description: 'Sets wether the button is checked.'
  },
  {
    name :'onClick',
    type: '()',
    options: '',
    description: 'Set an onClick function to the element.'
  },
  {
    name :'tabIndex',
    type: 'any',
    options: '',
    description: 'Set a tabIndex to the button.'
  },
  {
    name :'progressiveClick',
    type: 'any',
    options: '',
    description: 'An array of functions that will repeat starting from the firts index.'
  },
  {
    name :'shortcut',
    type: 'any',
    options: '',
    description: 'Set a shortcut key to the button that will trigger the click event.'
  }
]

export default class TutorialButton extends React.Component<any,any>{
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

    const ButtonColumns = [
      {name: 'name', width:250},
      {name: 'type', width:300},
      {name: 'options', width:250},
      {name: 'description'}
    ]

    return (
      <Layer className="p50">

        <h1>Button</h1>

        <Layer className="ptb10">
          <h2 className="pb10">Description</h2>
          <p>The Button component is an advanced version of the standard default button control.</p>
        </Layer>

        <Layer className="ptb10">
          <h2 className="pb10">Examples</h2>
          <Layer className="ptb10">
            <Toolbar spacing>
              <Button>Default Button</Button>
              <Button type="primary">Primary Button</Button>
            </Toolbar>
          </Layer>
        </Layer>

        <Layer className="ptb10">
          <h2 className="pb10">Options</h2>
          <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
          <Door open={this.state.showProps}>
            <Layer className="ptb10">
              <Grid open={this.state.showProps} numberPerPage={20} sortable columns={ButtonColumns} dataSource={ButtonProperties} />
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
    )
  }
}
