"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Door_1 = require('../../src/components/Door/Door');
const Emerge_1 = require('../../src/components/Emerge/Emerge');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const DoorProperties = [
    {
        name: 'open',
        type: 'boolean',
        options: 'true, false, false by default',
        description: 'Defines if the element is open or closed.'
    },
    {
        name: 'overflow',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element is overflow is visible.'
    },
    {
        name: 'className',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines a set of class names for the element.'
    }
];
class TutorialDoor extends React.Component {
    constructor() {
        super();
        this.state = {
            showProps: true,
            showVideo: false,
            doorIsOpen: false
        };
    }
    toggleShowProps() {
        this.setState({
            showVideo: false,
            doorIsOpen: false,
            showProps: this.state.showProps ? false : true
        });
    }
    toggleShowVideo() {
        this.setState({
            showProps: false,
            doorIsOpen: false,
            showVideo: this.state.showVideo ? false : true
        });
    }
    toggleDoorIsOpen() {
        this.setState({
            showProps: false,
            showVideo: false,
            doorIsOpen: this.state.doorIsOpen ? false : true
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

        <h1>Door</h1>

        <Layer_1.default className="ptb20">
          <h2 className="pb10">Description</h2>
          <p>The Door component opens or closes its children depending on an if statement. By default door are always closed.</p>
        </Layer_1.default>

        <Layer_1.default className="pb20">
          <h2 className="pb10">Examples</h2>
          <h3>Default</h3>
          <Layer_1.default className="ptb20">
            <Layer_1.default>
              <Button_1.default className="mb10" checked={this.state.doorIsOpen} onClick={this.toggleDoorIsOpen.bind(this)}>Toggle Door Open</Button_1.default>
              <Door_1.default open={this.state.doorIsOpen}>
                <Layer_1.default type="light" className="p10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Layer_1.default>
              </Door_1.default>
            </Layer_1.default>
          </Layer_1.default>
        </Layer_1.default>

        <Layer_1.default className="pb20">
          <h2 className="pb10">Props</h2>
          <Layer_1.default className="ptb10">
            <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={DoorProperties}/>
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
exports.default = TutorialDoor;
