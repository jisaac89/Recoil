import * as React from 'react';

import Align from '../components/Align/Align';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import Checkbox from '../components/Checkbox/Checkbox';
import Door from '../components/Door/Door';
import Dropdown from '../components/Dropdown/Dropdown';
import Emerge from '../components/Emerge/Emerge';
import Grid from '../components/Grid/Grid';
import Input from '../components/Input/Input';
import Layer from '../components/Layer/Layer';
import Loading from '../components/Loading/Loading';
import Modal from '../components/Modal/Modal';
import Pane from '../components/Pane/Pane';
import Selectable from '../components/Selectable/Selectable';
import Shrink from '../components/Shrink/Shrink';
import Toolbar from '../components/Toolbar/Toolbar';
import Transform from '../components/Transform/Transform';
import Wizard from '../components/Wizard/Wizard';

import TutorialButton from './tutorial/TutorialButton';
import TutorialAlign from './tutorial/TutorialAlign';
import TutorialCard from './tutorial/TutorialCard';
import TutorialCheckbox from './tutorial/TutorialCheckbox';
import TutorialDoor from './tutorial/TutorialDoor';

import TutorialDropdown from './tutorial/TutorialDropdown';
import TutorialEmerge from './tutorial/TutorialEmerge';
// import TutorialGrid from './tutorial/TutorialGrid';
// import TutorialInput from './tutorial/TutorialInput';
// import TutorialLayer from './tutorial/TutorialLayer';
// import TutorialLoading from './tutorial/TutorialLoading';
// import TutorialModal from './tutorial/TutorialModal';
// import TutorialPane from './tutorial/TutorialPane';
// import TutorialSelectable from './tutorial/TutorialSelectable';
// import TutorialShrink from './tutorial/TutorialShrink';
// import TutorialToolbar from './tutorial/TutorialToolbar';
// import TutorialTransform from './tutorial/TutorialTransform';
// import TutorialWizard from './tutorial/TutorialWizard';

const components = [
  {
    name: 'Align',
    description: 'Aligns other components either horizontally or vertically.'
  },
  {
    name: 'Button',
    description: 'Advanced version of the standard html button control.'
  },
  {
    name: 'Card',
    description: 'Material inspired Card'
  },
  {
    name: 'Checkbox',
    description: 'Advanced version of the standard html checkbox control.'
  },
  {
    name: 'Door',
    description: 'Opens or shuts a component vertically.'
  },
  {
    name: 'Dropdown',
    description: 'Advanced version of the standard html option control.'
  },
  {
    name: 'Emerge',
    description: 'Emerge components into view if a certain event happens.'
  },
  {
    name: 'Grid',
    description: 'Simple data grid.'
  },
  {
    name: 'Input',
    description: 'Advanced version of the standard html Input control.'
  },
  {
    name: 'Layer',
    description: 'Advanced version of the standard html Div control.'
  },
  {
    name: 'Loading',
    description: 'Loading component.'
  },
  {
    name: 'Modal',
    description: 'Modal component.'
  },
  {
    name: 'Pane',
    description: 'Slide in Components if a certain event happens.'
  },
  {
    name: 'Selectable',
    description: 'Allows an component to have a selectable feature.'
  },
  {
    name: 'Shrink',
    description: 'Shrinks components if a certain event happens.'
  },
  {
    name: 'Toolbar',
    description: 'Combine with Button and Input components for powerful options.'
  },
  {
    name: 'Transform',
    description: 'CSS Transform a component.'
  },
  {
    name: 'Wizard',
    description: 'Simple Wizard component.'
  },
]

let componentsArray = [
  'Align',
  'Button',
  'Card',
  'Checkbox',
  'Door',
  'Dropdown',
  'Emerge',
  'Grid',
  'Input',
  'Layer',
  'Loading',
  'Modal',
  'Pane',
  'Selectable',
  'Shrink',
  'Toolbar',
  'Transform',
  'Wizard'
]

export default class App extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      selectedItem: '',
      slideIndex:0
    }
  }

  onSelected(item) {

    const self = this;

    if (item == 'Align') {
      self.setState({
        selectedItem: item,
        slideIndex:0
      })
    } else if (item == 'Button') {
      self.setState({
        selectedItem: item,
        slideIndex:1
      })
    } else if (item === 'Card') {
      self.setState({
        selectedItem: item,
        slideIndex:2
      })
    } else if (item === 'Checkbox') {
      self.setState({
        selectedItem: item,
        slideIndex:3
      })
    } else if (item === 'Door') {
      self.setState({
        selectedItem: item,
        slideIndex:4
      })
    } else if (item === 'Dropdown') {
      self.setState({
        selectedItem: item,
        slideIndex:5
      })
    } else if (item === 'Emerge') {
      self.setState({
        selectedItem: item,
        slideIndex:6
      })
    }

  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    return (
      <Layer className="h100">
        <Layer type="light" className="p10 border-bottom">
          <h1 className="super dinblock">Recoil</h1>
          <Button size="xlarge" right type="primary">Download Latest Version</Button>
        </Layer>
        <hr className="rainbow-line" />
        <Toolbar block noRadius className="ptb10 border-bottom pr10">
          <Button ghost>Home</Button>
          <Button ghost>Get Started</Button>
          <Dropdown
            right
            onSelected={this.onSelected.bind(this)}
            title="Components"
            type="selection"
            data={componentsArray}
          >
          </Dropdown>
        </Toolbar>

        <Wizard vertical slideIndex={this.state.slideIndex}>

          <TutorialAlign {...state} />
          <TutorialButton {...state} />
          <TutorialCard {...state} />
          <TutorialCheckbox {...state} />
          <TutorialDoor {...state} />
          <TutorialDropdown {...state} />
          <TutorialEmerge {...state} />

        </Wizard>

      </Layer>
    )
  }
}
//
// <TutorialGrid {...state} />,
// <TutorialInput {...state} />,
// <TutorialLayer {...state} />,
// <TutorialLoading {...state} />,
// <TutorialModal {...state} />,
// <TutorialPane {...state} />,
// <TutorialSelectable {...state} />,
// <TutorialShrink {...state} />,
// <TutorialToolbar {...state} />,
// <TutorialTransform {...state} />,
// <TutorialWizard {...state} />
