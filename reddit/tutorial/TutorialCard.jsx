"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Card_1 = require('../../src/components/Card/Card');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
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
            { name: 'name', width: 250 },
            { name: 'type', width: 300 },
            { name: 'options', width: 250 },
            { name: 'description' }
        ];
        return (<Emerge_1.default>
        <Layer_1.default>

          <h1>Card</h1>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The material component is a google material enspired div, it has advanced feautures.</p>
          </Layer_1.default>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer_1.default className="ptb10">
              <Layer_1.default className="p10 dark">
                <Card_1.default>
                  This is an exampe of a Card.
                </Card_1.default>
              </Layer_1.default>
            </Layer_1.default>
          </Layer_1.default>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button_1.default checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button_1.default>
            <Door_1.default open={this.state.showProps}>
              <Layer_1.default className="ptb10">
                <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={CardProperties}/>
              </Layer_1.default>
            </Door_1.default>
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
exports.default = TutorialCard;
