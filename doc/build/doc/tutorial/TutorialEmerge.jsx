"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
const EmergeProperties = [
    {
        name: 'if',
        type: 'boolean',
        options: 'true, false. True by default.',
        description: 'Defines if the element should emerge and stagger its children.'
    },
    {
        name: 'enter',
        type: 'string',
        options: 'Uses animate.css',
        description: 'Add the type of animations the staggered children will display as on enter.'
    },
    {
        name: 'exit',
        type: 'string',
        options: 'Uses animate.css',
        description: 'Add the type of animations the staggered children will display as on exit.'
    },
    {
        name: 'delay',
        type: 'number',
        options: '',
        description: 'Set the delay in milliseconds for each staggered child to appears.'
    },
    {
        name: 'overflow',
        type: 'string',
        options: 'true, false',
        description: 'Defines if the elements overflow is visible.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'style',
        type: 'string',
        options: '',
        description: 'Add inline styles to the element.'
    }
];
class TutorialEmerge extends React.Component {
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
            { name: 'name', width: 250 },
            { name: 'type', width: 300 },
            { name: 'options', width: 250 },
            { name: 'description' }
        ];
        return (<Emerge_1.default>
      <Layer_1.default>

        <h1>Emerge</h1>

        <Layer_1.default className="ptb20">
          <h2 className="pb10">Description</h2>
          <p>The Emerge component staggers children into view if a certain event happens.</p>
        </Layer_1.default>

        <Layer_1.default className="pb20">
          <h2 className="pb10">Examples</h2>
          <Layer_1.default className="ptb10">
            <Layer_1.default className="p10 light">
              <Emerge_1.default delay={300} if={this.props.slideIndex === 6}>
                <Button_1.default className="p10 mr10">
                  A
                </Button_1.default>
                <Button_1.default className="p10 mr10">
                  B
                </Button_1.default>
                <Button_1.default className="p10 mr10">
                  C
                </Button_1.default>
                <Button_1.default className="p10">
                  D
                </Button_1.default>
              </Emerge_1.default>
            </Layer_1.default>
          </Layer_1.default>
        </Layer_1.default>

        <Layer_1.default className="pb20">
          <h2 className="pb10">Options</h2>
          <Button_1.default checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button_1.default>
          <Door_1.default open={this.state.showProps}>
            <Layer_1.default className="ptb10">
              <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={EmergeProperties}/>
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
exports.default = TutorialEmerge;
