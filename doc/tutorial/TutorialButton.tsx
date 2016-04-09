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
      <Emerge>
        <Layer>

          <h1>Button</h1>

          <Layer className="ptb20">
            <h2 className="pb10">Description</h2>
            <p>The Button component is an advanced version of the standard default button control.</p>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Examples</h2>
            <h3>Default</h3>
            <Layer className="ptb20">
              <Toolbar spacing>
                <Button>Default Button</Button>
                <Button type="primary">Primary Button</Button>
                <Button type="error">Error Button</Button>
              </Toolbar>
            </Layer>

            <h3>Adding Icons</h3>
            <p>To add an icon to a button, just add an icon prop to it. Icon's are taken from font-awesome, you can omit the fa fa-, for example below it would be a Button compoent with a icon prop of "star"</p>
            <Layer className="ptb20">
              <Toolbar spacing className='mr10'>
                <Button icon="star">Button with an icon</Button>
                <Button icon="home" type="primary"></Button>
              </Toolbar>
            </Layer>

            <Layer className="ptb20">
              <Toolbar flush>
                <Button icon="fast-backward"></Button>
                <Button icon="backward"></Button>
                <Button icon="pause"></Button>
              </Toolbar>
            </Layer>

            <Layer className="ptb20">
              <Toolbar flush noRadius noBorder>
                <Button icon="stop"></Button>
                <Button icon="forward"></Button>
                <Button icon="fast-forward"></Button>
              </Toolbar>
            </Layer>

            <h3>Sizes</h3>
            <p>Buttons come in a few sizes, small, default, large and xlarge.</p>
            <Layer className="ptb20">
              <Toolbar spacing>
                <Button size="small">Small Button</Button>
                <Button>Default</Button>
                <Button size="large">Large Button</Button>
                <Button size="xlarge">Extra Large Button</Button>
              </Toolbar>
            </Layer>

            <h3>States</h3>
            <p>Buttons can have different states. You can pass a <strong>disbaled</strong>,<strong>ghost</strong> or <strong>checked</strong> props to a Button.</p>
            <Layer className="ptb20">
              <Toolbar spacing>
                <Button checked>Checked Button</Button>
                <Button disabled>Disabled Button</Button>
                <Button ghost>Ghost Button</Button>
              </Toolbar>
            </Layer>

            <h3>Pointer</h3>
            <p>The <strong>pointer</strong> prop accepts a direction either <strong>left</strong> or <strong>right</strong>.</p>
            <Layer className="ptb20">
              <Toolbar spacing>
                <Button pointer="right" className="mr20">Pointer Right</Button>
                <Button type="primary" pointer="left">Pointer Left</Button>
              </Toolbar>
            </Layer>

            <h3>Links</h3>
            <p>You can convert any Button component to a Link by adding the <strong>href</strong> prop to it.</p>
            <Layer className="ptb20">
              <Toolbar spacing>
                <Button icon="github" href='https//www.github.com/jisaac89/recoil'>Recoil Github</Button>
              </Toolbar>
            </Layer>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Props</h2>
            <Layer className="ptb10">
              <Grid open={this.state.showProps} numberPerPage={20} sortable columns={ButtonColumns} dataSource={ButtonProperties} />
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
