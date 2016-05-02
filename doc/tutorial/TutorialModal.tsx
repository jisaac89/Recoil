import * as React from 'react';

import Align from '../../src/components/Align/Align';
import Button from '../../src/components/Button/Button';
import Card from '../../src/components/Card/Card';
import Checkbox from '../../src/components/Checkbox/Checkbox';
import Door from '../../src/components/Door/Door';
import Dropdown from '../../src/components/Dropdown/Dropdown';
import Emerge from '../../src/components/Emerge/Emerge';
import Grid from '../../src/components/Grid/Grid';
import Input from '../../src/components/Input/Input';
import Layer from '../../src/components/Layer/Layer';
import Loading from '../../src/components/Loading/Loading';
import Modal from '../../src/components/Modal/Modal';
import Pane from '../../src/components/Pane/Pane';
import Selectable from '../../src/components/Selectable/Selectable';
import Shrink from '../../src/components/Shrink/Shrink';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Transform from '../../src/components/Transform/Transform';
import Wizard from '../../src/components/Wizard/Wizard';

const ModalProperties = [
  {
    name :'open',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the Modal should show.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Defines a list of class names for the element.'
  },
  {
    name :'icon',
    type: 'string',
    options: 'Omit to fa fa-',
    description: 'Defines a font awesome icon for the modal.'
  },
  {
    name :'title',
    type: 'string',
    options: '',
    description: 'Defines a title for the modal element.'
  },
  {
    name :'float',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the modal element is floating.'
  },
  {
    name :'ghost',
    type: 'string',
    options: '',
    description: 'Defines if the modal is in ghost mode.'
  },
  {
    name :'fullScreen',
    type: 'boolean',
    options: 'true, false',
    description: 'Sets the modal to full-screen mode.'
  },
  {
    name :'onClose',
    type: 'string',
    options: '',
    description: 'Defines an onClose event for the modal.'
  },
  {
    name :'min',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the modal is minified.'
  }
]

export default class TutorialModal extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false,
      showModal: false
    }
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      showProps: this.state.showProps ? false : true
    })
  }

  toggleShowVideo() {
    this.setState({
      showProps: false,
      showVideo: this.state.showVideo ? false : true
    })
  }

  toggleModal() {
    this.setState({
      showModal: this.state.showModal ? false : true
    })
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    const columns = [
      {name: 'name', width:250},
      {name: 'type', width:300},
      {name: 'options', width:250},
      {name: 'description'}
    ]

    return (
      <Emerge>
          <div className="p10">

          <h1>Modal</h1>

          <Layer className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The Modal component shows a simple modal if a certain event happens.</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer className="ptb10">
              <Layer className="p10 light">
                <Button onClick={this.toggleModal.bind(this)}>Show Modal</Button>
              </Layer>
            </Layer>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
            <Door open={this.state.showProps}>
              <Layer className="ptb10">
                <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={ModalProperties} />
              </Layer>
            </Door>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Video</h2>
            <Button checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button>
            <Door open={this.state.showVideo}>
              <Layer className="ptb10">
                VIDEO
              </Layer>
            </Door>
          </Layer>

          <Modal open={this.state.showModal}>
            <Layer className="p10">
              <p className="mb10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button onClick={this.toggleModal.bind(this)}>Close Modal</Button>
            </Layer>
          </Modal>

        </div>
      </Emerge>
    )
  }
}
