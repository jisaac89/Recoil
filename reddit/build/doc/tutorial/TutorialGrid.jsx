"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
const GridProperties = [
    {
        name: 'columns',
        type: '',
        options: '',
        description: 'Defines the columns object.'
    },
    {
        name: 'sortable',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the grid is sortable.'
    },
    {
        name: 'hideHeader',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the grid header is visible.'
    },
    {
        name: 'selected',
        type: '',
        options: '',
        description: 'Return item, so user can filter it.'
    },
    {
        name: 'onSelect',
        type: '',
        options: '',
        description: 'Define a function of what happens when a user selected a row.'
    },
    {
        name: 'dataSource',
        type: '',
        options: '',
        description: 'Define the grids actual data object.'
    },
    {
        name: 'detailTemplate',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    },
    {
        name: 'selectedKey',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    },
    {
        name: 'selected',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    },
    {
        name: 'onRowSelect',
        type: '',
        options: 'key, item',
        description: 'Returns a custom row template.'
    }
];
class TutorialGrid extends React.Component {
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
            { name: 'name', width: 100 },
            { name: 'description' },
            { name: 'type', width: 200 },
            { name: 'options', width: 250 }
        ];
        return (<Emerge_1.default>
      <Layer_1.default>

        <h1>Grid</h1>

        <div className="ptb10">
          <h2 className="pb10">Description</h2>
          <p>The Grid component is a simple data-grid that currently takes in a object.</p>
        </div>

        <div className="ptb10">
          <h2 className="pb10">Examples</h2>
          <div className="ptb10">
            <Grid_1.default open={true} numberPerPage={20} dataSource={GridProperties}/>
          </div>
        </div>

        <div className="ptb10">
          <h2 className="pb10">Props</h2>
          <div className="ptb10">
            <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={GridProperties}/>
          </div>
        </div>

        <div className="ptb10">
          <h2 className="pb10">Video</h2>
          <Button_1.default checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button_1.default>
          <Door_1.default open={this.state.showVideo}>
            <div className="ptb10">
              VIDEO
            </div>
          </Door_1.default>
        </div>

      </Layer_1.default>
      </Emerge_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialGrid;
