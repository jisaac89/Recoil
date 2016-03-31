"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
var Toolbar_1 = require('../../src/components/Toolbar/Toolbar');
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
        name: 'type',
        type: 'string',
        options: 'primary, secondary',
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
        name: 'ghost',
        type: 'boolean',
        options: 'true, false',
        description: 'Switch to the ghost template mode.'
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
class TutorialButton extends React.Component {
    constructor() {
        super();
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
        const ButtonColumns = [
            { name: 'name', width: 250 },
            { name: 'type', width: 300 },
            { name: 'options', width: 250 },
            { name: 'description' }
        ];
        return (<Emerge_1.default>
        <Layer_1.default>

          <h1>Button</h1>

          <Layer_1.default className="ptb20">
            <h2 className="pb10">Description</h2>
            <p>The Button component is an advanced version of the standard default button control.</p>
          </Layer_1.default>

          <Layer_1.default className="pb20">
            <h2 className="pb10">Examples</h2>
            <h3>Default</h3>
            <Layer_1.default className="ptb20">
              <Toolbar_1.default spacing>
                <Button_1.default>Default Button</Button_1.default>
                <Button_1.default type="primary">Primary Button</Button_1.default>
                <Button_1.default type="error">Error Button</Button_1.default>
              </Toolbar_1.default>
            </Layer_1.default>

            <h3>Adding Icons</h3>
            <p>To add an icon to a button, just add an icon prop to it. Icon's are taken from font-awesome, you can omit the fa fa-, for example below it would be a Button compoent with a icon prop of "star"</p>
            <Layer_1.default className="ptb20">
              <Toolbar_1.default spacing>
                <Button_1.default icon="star">Button with an icon</Button_1.default>
              </Toolbar_1.default>
            </Layer_1.default>

            <h3>Sizes</h3>
            <p>Buttons come in a few sizes, small, default, large and xlarge.</p>
            <Layer_1.default className="ptb20">
              <Toolbar_1.default spacing>
                <Button_1.default size="small">Small Button</Button_1.default>
                <Button_1.default>Default</Button_1.default>
                <Button_1.default size="large">Large Button</Button_1.default>
                <Button_1.default size="xlarge">Extra Large Button</Button_1.default>
              </Toolbar_1.default>
            </Layer_1.default>

            <h3>States</h3>
            <p>Buttons can have different states. You can pass a <strong>disbaled</strong>,<strong>ghost</strong> or <strong>checked</strong> props to a Button.</p>
            <Layer_1.default className="ptb20">
              <Toolbar_1.default spacing>
                <Button_1.default checked>Checked Button</Button_1.default>
                <Button_1.default disabled>Disabled Button</Button_1.default>
                <Button_1.default ghost>Ghost Button</Button_1.default>
              </Toolbar_1.default>
            </Layer_1.default>

            <h3>Pointer</h3>
            <p>The <strong>pointer</strong> prop accepts a direction either <strong>left</strong> or <strong>right</strong>.</p>
            <Layer_1.default className="ptb20">
              <Toolbar_1.default spacing>
                <Button_1.default pointer="right" className="mr20">Pointer Right</Button_1.default>
                <Button_1.default type="primary" pointer="left">Pointer Left</Button_1.default>
              </Toolbar_1.default>
            </Layer_1.default>

            <h3>Links</h3>
            <p>You can convert any Button component to a Link by adding the <strong>href</strong> prop to it.</p>
            <Layer_1.default className="ptb20">
              <Toolbar_1.default spacing>
                <Button_1.default icon="github" href='https//www.github.com/jisaac89/recoil'>Recoil Github</Button_1.default>
              </Toolbar_1.default>
            </Layer_1.default>
          </Layer_1.default>

          <Layer_1.default className="pb20">
            <h2 className="pb10">Props</h2>
            <Door_1.default open={this.state.showProps}>
              <Layer_1.default className="ptb10">
                <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={ButtonColumns} dataSource={ButtonProperties}/>
              </Layer_1.default>
            </Door_1.default>
          </Layer_1.default>

          <Layer_1.default className="pb20">
            <h2 className="pb10">Video</h2>
            <Button_1.default checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button_1.default>
            <Door_1.default open={this.state.showVideo}>
              <Layer_1.default className="ptb10">
                VIDEO
              </Layer_1.default>
            </Door_1.default>
          </Layer_1.default>

        </Layer_1.default>
      </Emerge_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialButton;
