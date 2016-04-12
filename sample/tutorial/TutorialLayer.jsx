"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
const LayerProperties = [
    { name: 'border', type: '', options: '', description: '' },
    { name: 'overflow', type: '', options: '', description: '' },
    { name: 'left', type: '', options: '', description: '' },
    { name: 'right', type: '', options: '', description: '' },
    { name: 'scrollY', type: '', options: '', description: '' },
    { name: 'scrollX', type: '', options: '', description: '' },
    { name: 'fill', type: '', options: '', description: '' },
    { name: 'type', type: '', options: '', description: '' },
    { name: 'children', type: '', options: '', description: '' },
    { name: 'className', type: '', options: '', description: '' },
    { name: 'style', type: '', options: '', description: '' },
    { name: 'onClick', type: '', options: '', description: '' },
    { name: 'block', type: '', options: '', description: '' },
    { name: 'key', type: '', options: '', description: '' },
    { name: 'align', type: '', options: '', description: '' },
    { name: 'flex', type: '', options: '', description: '' },
    { name: 'flow', type: '', options: '', description: '' },
    { name: 'justify', type: '', options: '', description: '' }
];
class TutorialLayer extends React.Component {
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

      <h1>Layer</h1>

      <Layer_1.default className="ptb10">
        <h2 className="pb10">Description</h2>
        <p>The Layer component is an advanced version of the standard div control.</p>
      </Layer_1.default>

      <Layer_1.default className="ptb10">
        <h2 className="pb10">Examples</h2>
        <Layer_1.default className="ptb10">
          <Layer_1.default className="p10 dark">
            <Layer_1.default type="light" className="p10">
              This is a Layer
            </Layer_1.default>
          </Layer_1.default>
        </Layer_1.default>
      </Layer_1.default>

      <Layer_1.default className="ptb10">
        <h2 className="pb10">Options</h2>
        <Button_1.default checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button_1.default>
        <Door_1.default open={this.state.showProps}>
          <Layer_1.default className="ptb10">
            <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={LayerProperties}/>
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
exports.default = TutorialLayer;
