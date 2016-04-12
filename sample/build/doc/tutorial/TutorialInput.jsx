"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Input_1 = require('../../src/components/Input/Input');
var Layer_1 = require('../../src/components/Layer/Layer');
const InputProperties = [
    {
        name: 'ghost',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the input border should be hidden.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'type',
        type: 'string',
        options: 'text, password, textarea',
        description: 'Defines the type of input the element is.'
    },
    {
        name: 'icon',
        type: 'string',
        options: 'Omit the fa fa-',
        description: 'Add a font-awesome icon to the input.'
    },
    {
        name: 'title',
        type: 'string',
        options: '',
        description: 'Defines the title for the input.'
    },
    {
        name: 'placeholder',
        type: '',
        options: '',
        description: 'Defines the placeholder for the input.'
    },
    {
        name: 'value',
        type: '',
        options: '',
        description: 'Defines the value for the input.'
    },
    {
        name: 'style',
        type: 'string',
        options: '',
        description: 'Defines the inline styles for the element.'
    },
    {
        name: 'errorInline',
        type: 'boolean',
        options: '',
        description: 'Defines if the error appears within the input.'
    },
    {
        name: 'error',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines whether the error message should show.'
    },
    {
        name: 'block',
        type: 'string',
        options: '',
        description: 'Sets the element as a block element with 100% width.'
    },
    {
        name: 'onChange',
        type: '',
        options: '',
        description: 'Define a function, returns the current value of the input.'
    },
    {
        name: 'focusOnMount',
        type: 'boolean',
        options: 'true, false',
        description: 'When the component mounts should the input be set to focus.'
    },
    {
        name: 'focusDelay',
        type: '',
        options: '',
        description: 'Sets the delay for the focus.'
    }
];
class TutorialInput extends React.Component {
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
    setonChange() {
        console.log('test');
    }
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        const columns = [
            { name: 'name', width: 250 },
            { name: 'description' },
            { name: 'type', width: 300 },
            { name: 'options', width: 250 }
        ];
        return (<Emerge_1.default>
    <Layer_1.default>

      <h1>Input</h1>

      <Layer_1.default className="ptb10">
        <h2 className="pb10">Description</h2>
        <p>The Input component is an advanced version of the standard input type='text' control.</p>
      </Layer_1.default>

      <Layer_1.default className="ptb10">
        <h2 className="pb10">Examples</h2>
        <Layer_1.default className="ptb10">
          <Layer_1.default className="p10 light">
            <Input_1.default type="text" icon="search" title="Search Users" onChange={this.setonChange.bind(this)} block/>
          </Layer_1.default>
        </Layer_1.default>
      </Layer_1.default>

      <Layer_1.default className="ptb10">
        <h2 className="pb10">Options</h2>
        <Layer_1.default className="ptb10">
          <Grid_1.default open={this.state.showProps} numberPerPage={5} sortable columns={columns} dataSource={InputProperties}/>
        </Layer_1.default>
      </Layer_1.default>

      <Layer_1.default className="ptb10">
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
exports.default = TutorialInput;
