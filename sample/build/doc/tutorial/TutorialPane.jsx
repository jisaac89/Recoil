"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
var Pane_1 = require('../../src/components/Pane/Pane');
var Toolbar_1 = require('../../src/components/Toolbar/Toolbar');
const PaneProperties = [
    {
        name: 'wrapper',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the pane has a wrapper element surrounding it.'
    },
    {
        name: 'open',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the pane is open.'
    },
    {
        name: 'fill',
        type: 'boolean',
        options: 'true, false',
        description: 'Give the pane element a height and width of 100%.'
    },
    {
        name: 'direction',
        type: 'string',
        options: '',
        description: 'Defines the direction the pane slides in from.'
    },
    {
        name: 'offset',
        type: 'string, number',
        options: '',
        description: 'Defines the starting offset of the pane.'
    },
    {
        name: 'wrapperClick',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a function the runs when the user clicks the pane wrapper.'
    }
];
class TutorialPane extends React.Component {
    constructor() {
        super();
        this.state = {
            showProps: true,
            showVideo: false,
            paneOpen: false
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
    togglePane() {
        this.setState({
            paneOpen: this.state.paneOpen ? false : true
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

          <h1>Pane</h1>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The Pane slides in an element if a certain event happens, user must state the direction as well.</p>
          </Layer_1.default>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer_1.default className="ptb10">
              <Layer_1.default overflow className="p10 dark text-center w100 h200px">
                <Button_1.default onClick={this.togglePane.bind(this)}>Toggle Pane</Button_1.default>
                <Pane_1.default direction='bottom' open={this.state.paneOpen}>
                  <Layer_1.default type="light text-center p10">
                    <Toolbar_1.default spacing>
                      <Emerge_1.default if={this.state.paneOpen}>
                          <Button_1.default onClick={this.togglePane.bind(this)} icon="user"></Button_1.default>
                          <Button_1.default onClick={this.togglePane.bind(this)} icon="search"></Button_1.default>
                          <Button_1.default onClick={this.togglePane.bind(this)} icon="plus"></Button_1.default>
                      </Emerge_1.default>
                    </Toolbar_1.default>
                  </Layer_1.default>
                </Pane_1.default>
              </Layer_1.default>
            </Layer_1.default>
          </Layer_1.default>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Options</h2>
            <Layer_1.default className="ptb10">
              <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={PaneProperties}/>
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
exports.default = TutorialPane;
