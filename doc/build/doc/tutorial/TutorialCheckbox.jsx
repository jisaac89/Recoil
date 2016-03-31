"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Checkbox_1 = require('../../src/components/Checkbox/Checkbox');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
const ChecboxProperties = [
    {
        name: 'checked',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element is checked.'
    },
    {
        name: 'tristate',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the checkbox has a indeterminate state.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the checkbox has a disabled state.'
    }
];
class TutorialCheckbox extends React.Component {
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

          <h1>Checkbox</h1>

          <Layer_1.default className="ptb20">
            <h2 className="pb10">Description</h2>
            <p>The Checkbox component is an advanced version of the standard input type='checkbox' control.</p>
          </Layer_1.default>

          <Layer_1.default className="pb20">
            <h2 className="pb10">Examples</h2>
            <h3>Default</h3>
            <Layer_1.default className="ptb20">
              <Layer_1.default className="p10 light">
                <Checkbox_1.default />
              </Layer_1.default>
            </Layer_1.default>

            <h3>Checked</h3>
            <Layer_1.default className="ptb20">
              <Layer_1.default className="p10 light">
                <Checkbox_1.default checked/>
              </Layer_1.default>
            </Layer_1.default>

            <h3>TriState</h3>
            <Layer_1.default className="ptb20">
              <Layer_1.default className="p10 light">
                <Checkbox_1.default tristate/>
              </Layer_1.default>
            </Layer_1.default>
          </Layer_1.default>

          <Layer_1.default className="pb20">
            <h2 className="pb10">Props</h2>
            <Layer_1.default className="ptb10">
              <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={ChecboxProperties}/>
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
exports.default = TutorialCheckbox;
