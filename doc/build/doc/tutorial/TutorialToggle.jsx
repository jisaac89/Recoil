"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
var Toolbar_1 = require('../../src/components/Toolbar/Toolbar');
var Toggle_1 = require('../../src/components/Toggle/Toggle');
const CardProperties = [
    {
        name: 'resize',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element can be resized.'
    },
    {
        name: 'hover',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets if the element has an hover action.'
    },
    {
        name: 'float',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element will float on screen.'
    },
    {
        name: 'block',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets the element to have a block display.'
    },
    {
        name: 'fill',
        type: 'number',
        options: '',
        description: 'Sets the element to have a height and width of 100% relative to its parent.'
    },
    {
        name: 'onClick',
        type: 'number',
        options: '',
        description: 'Defines a onClick function for the element.'
    },
    {
        name: 'style',
        type: 'number',
        options: '',
        description: 'Defines the styles for the element.'
    },
    {
        name: 'className',
        type: 'number',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'onMouseEnter',
        type: 'number',
        options: '',
        description: 'Defines a onMouseEnter function for the element.'
    },
    {
        name: 'onMouseLeave',
        type: 'number',
        options: '',
        description: 'Defines a onMouseLeave function for the element.'
    },
];
class TutorialCard extends React.Component {
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
        const columns = [
            { name: 'name', width: 130 },
            { name: 'description' },
            { name: 'type', width: 120 },
            { name: 'options', width: 250 }
        ];
        return (<Emerge_1.default>
        <Layer_1.default>

          <h1>Toggle</h1>

          <Layer_1.default className="ptb20">
            <h2 className="pb10">Description</h2>
            <p>The material component is a google material enspired div, it has advanced feautures.</p>
          </Layer_1.default>

          <Layer_1.default className="pb20">
            <h2 className="pb10">Examples</h2>
            <h3>Default</h3>
            <Layer_1.default className="ptb20">
              <Toggle_1.default />
            </Layer_1.default>
            <Layer_1.default className="pb20">
              <p>With props checked passed as <strong>true</strong>.</p>
              <Toggle_1.default className="mt10" checked={true}/>
            </Layer_1.default>

            <h3>Toggle Numbers</h3>
            <Layer_1.default className="ptb20">
              <Toolbar_1.default spacing>
                <Toggle_1.default columns={[15, 20, 25]}/>
              </Toolbar_1.default>
            </Layer_1.default>

            <h3>Toggle Strings</h3>
            <Layer_1.default className="ptb20">
              <Toolbar_1.default spacing>
                <Toggle_1.default columns={["S", "M", "L"]}/>
              </Toolbar_1.default>
            </Layer_1.default>

            <h3>Toggle Colors</h3>
            <p>To toggle a string of CSS based background colors or images just pass in the <strong>colors</strong> prop.</p>
            <Layer_1.default className="ptb20">
              <Toolbar_1.default spacing>
                <Toggle_1.default type="colors" columns={['#FF5757', '#00A0DC', '#8D6CAB']}/>
              </Toolbar_1.default>
            </Layer_1.default>

            <h3>Ghost Toggle</h3>
            <Layer_1.default className="ptb20">
              <Toolbar_1.default spacing>
                <Toggle_1.default ghost columns={["Monday", "Tuesday", "Wednesday"]}/>
              </Toolbar_1.default>
            </Layer_1.default>
          </Layer_1.default>

          <Layer_1.default className="pb20">
            <h2 className="pb10">Props</h2>
              <Layer_1.default className="ptb10">
                <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={CardProperties}/>
              </Layer_1.default>
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
exports.default = TutorialCard;
