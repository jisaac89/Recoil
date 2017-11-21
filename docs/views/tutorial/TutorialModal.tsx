import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';
import TutorialView from './TutorialView';
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

  openModal() {
    this.setState({
      showModal: true
    }, ()=>{
      this.props.toggleModal(this.state.showModal);
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    }, ()=>{
      this.props.toggleModal(this.state.showModal);
    })
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    const columns = [
      {name: 'name', width:120},
      {name: 'type', width:140},
      {name: 'description'}
    ]
    let example = () => {
      return (
        <div>
            <Layer className="ptb10">
              <Button theme="primary" onClick={this.openModal.bind(this)}>Show Modal</Button>
            </Layer>
          <Modal open={this.state.showModal} onClose={this.closeModal.bind(this)}>
            <Layer className="p10">
              <p className="mb10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button onClick={this.closeModal.bind(this)}>Close Modal</Button>
            </Layer>
          </Modal>
        </div>
      )
    }

    return (
      <TutorialView 
        description="The Modal component shows a simple modal if a certain event happens."
        Id="Modal"
        columnData={ModalProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
