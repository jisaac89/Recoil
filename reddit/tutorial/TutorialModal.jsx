"use strict";
var React = require('react');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
var Modal_1 = require('../../src/components/Modal/Modal');
const ModalProperties = [
    {
        name: 'open',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the Modal should show.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'icon',
        type: 'string',
        options: 'Omit to fa fa-',
        description: 'Defines a font awesome icon for the modal.'
    },
    {
        name: 'title',
        type: 'string',
        options: '',
        description: 'Defines a title for the modal element.'
    },
    {
        name: 'float',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the modal element is floating.'
    },
    {
        name: 'ghost',
        type: 'string',
        options: '',
        description: 'Defines if the modal is in ghost mode.'
    },
    {
        name: 'fullScreen',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets the modal to full-screen mode.'
    },
    {
        name: 'onClose',
        type: 'string',
        options: '',
        description: 'Defines an onClose event for the modal.'
    },
    {
        name: 'min',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the modal is minified.'
    }
];
class TutorialModal extends React.Component {
    constructor() {
        super();
        this.state = {
            showProps: true,
            showVideo: false,
            showModal: false
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
    toggleModal() {
        this.setState({
            showModal: this.state.showModal ? false : true
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

          <h1>Modal</h1>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The Modal component shows a simple modal if a certain event happens.</p>
          </Layer_1.default>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer_1.default className="ptb10">
              <Layer_1.default className="p10 light">
                <Button_1.default onClick={this.toggleModal.bind(this)}>Show Modal</Button_1.default>
              </Layer_1.default>
            </Layer_1.default>
          </Layer_1.default>

          <Layer_1.default className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button_1.default checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button_1.default>
            <Door_1.default open={this.state.showProps}>
              <Layer_1.default className="ptb10">
                <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={ModalProperties}/>
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

          <Modal_1.default open={this.state.showModal}>
            <Layer_1.default className="p10">
              <p className="mb10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button_1.default onClick={this.toggleModal.bind(this)}>Close Modal</Button_1.default>
            </Layer_1.default>
          </Modal_1.default>

        </Layer_1.default>
      </Emerge_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialModal;
