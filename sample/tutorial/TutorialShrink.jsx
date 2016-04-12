"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
var Shrink_1 = require('../../src/components/Shrink/Shrink');
const ShrinkProperties = [
    {
        name: 'if',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element will shrink and be disabled.'
    },
    {
        name: 'fill',
        type: 'boolean',
        options: 'true, false',
        description: 'Set the element to have a 100% height and width.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Add a list of class names to the element.'
    }
];
class TutorialShrink extends React.Component {
    constructor() {
        super();
        this.state = {
            showProps: true,
            showVideo: false,
            shrink: false
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
    toggleShrink() {
        this.setState({
            shrink: this.state.shrink ? false : true
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

          <h1>Checkbox</h1>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The Checkbox component is an advanced version of the standard input type='checkbox' control.</p>
          </Layer_1.default>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer_1.default className="ptb10">
            <Button_1.default onClick={this.toggleShrink.bind(this)}>Toggle Shrink</Button_1.default>
              <Shrink_1.default if={this.state.shrink}>
                <Layer_1.default className="p10 light mt10">
                  Shrink and disable this element.
                </Layer_1.default>
              </Shrink_1.default>
            </Layer_1.default>
          </Layer_1.default>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button_1.default checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button_1.default>
            <Door_1.default open={this.state.showProps}>
              <Layer_1.default className="ptb10">
                <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={ShrinkProperties}/>
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
exports.default = TutorialShrink;
