import React from 'react';

import { Align, Button, Toolbar, Checkbox, Table, Layer } from '../../../src/index';
import TutorialView from './TutorialView';
const ButtonProperties = [
  {
    name: 'disabled',
    type: 'boolean',
    options: 'true, false',
    description: 'Toggle if the button is disabled or not.'
  },
  {
    name: 'block',
    type: 'boolean',
    options: 'true, false',
    description: 'Block converts the button element to a block element which gives it full width.'
  },
  {
    name: 'className',
    type: 'string',
    options: '',
    description: 'Add a list of class names.'
  },
  {
    name: 'theme',
    type: 'string',
    options: 'primary | success | error | default',
    description: 'Template type for the button.'
  },
  {
    name: 'icon',
    type: 'string',
    options: 'Omit the fa fa-',
    description: 'Include a font-awesome icon.'
  },
  {
    name: 'href',
    type: 'string',
    options: '',
    description: 'Add a link to the button.'
  },
  {
    name: 'target',
    type: 'string',
    options: '',
    description: 'Add a target attribute to the button.'
  },
  {
    name: 'simple',
    type: 'boolean',
    options: 'true, false',
    description: 'Switch to the simple template mode.'
  },
  {
    name: 'strech',
    type: 'boolean',
    options: 'true, false',
    description: 'Add a width of 100% to the button.'
  },
  {
    name: 'pointer',
    type: 'any',
    options: 'true, false',
    description: 'Add a mouse pointer on hover.'
  },
  {
    name: 'right',
    type: 'boolean',
    options: 'true, false',
    description: 'Float the button right.'
  },
  {
    name: 'left',
    type: 'boolean',
    options: 'true, false',
    description: 'Float the button left.'
  },
  {
    name: 'size',
    type: 'string',
    options: 'small, large, xlarge',
    description: 'Set the size of the button by class name.'
  },
  {
    name: 'submit',
    type: 'boolean',
    options: 'true, false',
    description: 'Set whether the button is of submit type.'
  },
  {
    name: 'style',
    type: 'any',
    options: '',
    description: 'Add custom inline styles.'
  },
  {
    name: 'checked',
    type: 'boolean',
    options: 'true, false',
    description: 'Sets wether the button is checked.'
  },
  {
    name: 'onClick',
    type: '()',
    options: '',
    description: 'Set an onClick function to the element.'
  },
  {
    name: 'tabIndex',
    type: 'any',
    options: '',
    description: 'Set a tabIndex to the button.'
  },
  {
    name: 'progressiveClick',
    type: 'any',
    options: '',
    description: 'An array of functions that will repeat starting from the firts index.'
  },
  {
    name: 'shortcut',
    type: 'any',
    options: '',
    description: 'Set a shortcut key to the button that will trigger the click event.'
  }
];

export default class TutorialButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      showProps: true,
      showVideo: false
    };
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      showProps: this.state.showProps ? false : true
    });
  }

  toggleShowVideo() {
    this.setState({
      showProps: false,
      showVideo: this.state.showVideo ? false : true
    });
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    const ButtonColumns = [{ name: 'name', width: 120 }, { name: 'type', width: 140 }, { name: 'description' }];

    let example = () => {
      return (
        <div>
          <h3>Default</h3>
          <Layer className="ptb20">
            <Toolbar spacing flex={props.mobile}>
              <Button>Default</Button>
              <Button theme="primary">Primary</Button>
              <Button theme="error">Error</Button>
            </Toolbar>
          </Layer>

          <img className="w100 mtb20" src="http://reactrecoil.io/imgs/button1.png" />

          <h3 className="pb20">Adding Icons</h3>
          <p className="pb20">
            To add an icon to a button, just add an icon prop to it. Icon's are taken from font-awesome, you can omit
            the fa fa-, for example below it would be a Button compoent with a icon prop of "star"
          </p>
          <Layer className="pb20">
            <Toolbar spacing className="mr10">
              <Button icon="star">Button with an icon</Button>
              <Button icon="home" theme="primary"></Button>
            </Toolbar>
          </Layer>

          <Layer className="pb20">
            <Toolbar flush>
              <Button theme="success" icon="fast-backward"></Button>
              <Button theme="success" icon="backward"></Button>
              <Button theme="success" icon="pause"></Button>
            </Toolbar>
          </Layer>

          <Layer className="pb20">
            <Toolbar flush noRadius noBorder>
              <Button icon="stop"></Button>
              <Button icon="forward"></Button>
              <Button icon="fast-forward"></Button>
            </Toolbar>
          </Layer>

          <h3 className="pb20">Sizes</h3>
          <p>Buttons come in a few sizes, small, default, large and xlarge.</p>
          <Layer className="ptb20">
            <Toolbar spacing vertical={props.mobile}>
              <Button size="small">Small</Button>
              <Button>Default</Button>
              <Button size="large">Large</Button>
              <Button size="xlarge">Extra Large</Button>
            </Toolbar>
          </Layer>

          <img className="w100 mtb20" src="http://reactrecoil.io/imgs/button2.png" />

          <h3 className="pb20">States</h3>
          <p>
            Buttons can have different states. You can pass a <strong>checked</strong>,<strong>disabled</strong> or{' '}
            <strong>simple</strong> prop..
          </p>
          <Layer className="ptb20">
            <Toolbar spacing vertical={props.mobile}>
              <Button checked advanced>
                Checked
              </Button>
              <Button disabled>Disabled</Button>
              <Button simple>Simple</Button>
              <Button loading={true}>Loading...</Button>
            </Toolbar>
          </Layer>

          <img className="w100 mtb20" src="http://reactrecoil.io/imgs/button3.png" />

          <h3 className="mb20">Pointer</h3>
          <p>
            The <strong>pointer</strong> prop accepts a direction either <strong>left</strong> or <strong>right</strong>
            .
          </p>
          <Layer className="ptb20">
            <Toolbar spacing>
              <Button pointer="right" className="mr20">
                Pointer Right
              </Button>
              <Button theme="primary" pointer="left">
                Pointer Left
              </Button>
            </Toolbar>
          </Layer>

          <h3 className="mb20">Links</h3>
          <p>
            You can convert any Button component to a Link by adding the <strong>href</strong> prop to it.
          </p>
          <Layer className="ptb20">
            <Toolbar spacing>
              <Button icon="github" href="https//www.github.com/jisaac89/recoil">
                Recoil Github
              </Button>
            </Toolbar>
          </Layer>

          <h3 className="mb20">Toolbar</h3>
          <Layer className="ptb20">
            <Toolbar flex textCenter flush className="w300px">
              <Button icon="users"></Button>
              <Button block href="https//www.github.com/jisaac89/recoil">
                John Doe
              </Button>
              <Button theme="error" icon="times"></Button>
            </Toolbar>
          </Layer>
        </div>
      );
    };

    return (
      <TutorialView
        description="The Button component is an updated version of the standard default button control."
        Id="Button"
        columnData={ButtonProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    );
  }
}
