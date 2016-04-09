"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Dropdown_1 = require('../../src/components/Dropdown/Dropdown');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
const dropData = ['from', 'block', 'contentClass', 'onSelected', 'type', 'data'];
const DropdownProperties = [
    {
        name: 'from',
        type: 'string',
        options: 'X X, use top bottom left right',
        description: 'Defines the direction of the drop.'
    },
    {
        name: 'block',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the dropdown is a block element with a width of 100%.'
    },
    {
        name: 'contentClass',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a set of class names for the dropdown content container.'
    },
    {
        name: 'onSelected',
        type: 'function',
        options: 'true, false',
        description: 'Return the selected value of the array, if the dropdown is of type selection.'
    },
    {
        name: 'type',
        type: 'string',
        options: 'selection, button, search.',
        description: 'Defines what type of dropdown it is, omit for default option and pass children.'
    }
];
class TutorialDropdown extends React.Component {
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
            { name: 'description' },
            { name: 'type', width: 300 },
            { name: 'options', width: 250 }
        ];
        return (<Emerge_1.default>
      <Layer_1.default>

        <h1>Dropdown</h1>

        <Layer_1.default className="ptb10">
          <h2 className="pb10">Description</h2>
          <p>The Dropdown component is an advanced version of the standard selection options control.</p>
        </Layer_1.default>

        <Layer_1.default className="ptb10">
          <h2 className="pb10">Examples</h2>
          <Layer_1.default className="ptb10">
            <Layer_1.default className="p10 light">
              <Dropdown_1.default type="selection" title="Dropdown Options" data={dropData}/>
            </Layer_1.default>
          </Layer_1.default>
        </Layer_1.default>

        <div className="ptb10">
          <h2 className="pb10">Props</h2>
          <div className="ptb10">
            <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={DropdownProperties}/>
          </div>
        </div>

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
exports.default = TutorialDropdown;
