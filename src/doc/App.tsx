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
import Shortcut from '../components/Shortcut/Shortcut';

import TutorialButton from './tutorial/TutorialButton';
import TutorialAlign from './tutorial/TutorialAlign';
import TutorialCard from './tutorial/TutorialCard';
import TutorialCheckbox from './tutorial/TutorialCheckbox';
import TutorialDoor from './tutorial/TutorialDoor';

import TutorialDropdown from './tutorial/TutorialDropdown';
import TutorialEmerge from './tutorial/TutorialEmerge';
import TutorialGrid from './tutorial/TutorialGrid';
import TutorialInput from './tutorial/TutorialInput';
import TutorialLayer from './tutorial/TutorialLayer';
//
import TutorialLoading from './tutorial/TutorialLoading';
import TutorialModal from './tutorial/TutorialModal';
import TutorialPane from './tutorial/TutorialPane';
import TutorialSelectable from './tutorial/TutorialSelectable';
import TutorialShrink from './tutorial/TutorialShrink';
import TutorialToolbar from './tutorial/TutorialToolbar';
import TutorialTransform from './tutorial/TutorialTransform';
import TutorialWizard from './tutorial/TutorialWizard';

const comp = [{
  "key1": {
    "name": "33"
  },
  "key2": {
    "name": "36 "
  },
  "key3": {
    "name": "38"
  },
  "key4": {
    "name": "41"
  }
}]


const components = [
  {
    name: 'Align',
    description: 'Aligns other components either horizontally or vertically.',
    slideIndex: 0
  },
  {
    name: 'Button',
    description: 'Advanced version of the standard html button control.',
    slideIndex: 1
  },
  {
    name: 'Card',
    description: 'Material inspired Card',
    slideIndex: 2
  },
  {
    name: 'Checkbox',
    description: 'Advanced version of the standard html checkbox control.',
    slideIndex: 3
  },
  {
    name: 'Door',
    description: 'Opens or shuts a component vertically.',
    slideIndex: 4
  },
  {
    name: 'Dropdown',
    description: 'Advanced version of the standard html option control.',
    slideIndex: 5
  },
  {
    name: 'Emerge',
    description: 'Emerge components into view if a certain event happens.',
    slideIndex: 6
  },
  {
    name: 'Grid',
    description: 'Simple data grid.',
    slideIndex: 7
  },
  {
    name: 'Input',
    description: 'Advanced version of the standard html Input control.',
    slideIndex: 8
  },
  {
    name: 'Layer',
    description: 'Advanced version of the standard html Div control.',
    slideIndex: 9
  },
  {
    name: 'Loading',
    description: 'Loading component.',
    slideIndex: 10
  },
  {
    name: 'Modal',
    description: 'Modal component.',
    slideIndex: 11
  },
  {
    name: 'Pane',
    description: 'Slide in Components if a certain event happens.',
    slideIndex: 12
  },
  {
    name: 'Selectable',
    description: 'Allows an component to have a selectable feature.',
    slideIndex: 13
  },
  {
    name: 'Shrink',
    description: 'Shrinks components if a certain event happens.',
    slideIndex: 14
  },
  {
    name: 'Toolbar',
    description: 'Combine with Button and Input components for powerful options.',
    slideIndex: 15
  },
  {
    name: 'Transform',
    description: 'CSS Transform a component.',
    slideIndex: 16
  },
  {
    name: 'Wizard',
    description: 'Simple Wizard component.',
    slideIndex: 17
  }
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
      slideIndex:0,
      selected: []
    }
  }

  setSelectedItem(item) {

    const self = this;

    let itemLowercase;

    if (typeof item === "string") {
      itemLowercase = item.toLowerCase();
    } else {
      itemLowercase = item.name.toLowerCase();
    }

    self.setState({
      selectedItem: itemLowercase
    })
  }

  public onSelect(item) {
    this.state.selected.push(item.name)
  }

  public selected(item) {

    let checked;

    if (this.state.selected.length > 0) {
      console.log(this.state.selected);
      checked = this.state.selected.includes(item.name);
    }
    return checked;

  }

  template() {
    return (
      <Toolbar block textCenter>
        <Checkbox />
      </Toolbar>
    )
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let selectedItem = state.selectedItem;

    let slides = [
      {
        name: ''
      }
    ]

    let columns = [
      {name: 'name', width: 100, tabbable: true},
      {name: 'description'},
      {name: '', template : this.template.bind(this)}
    ]

    let col = [
      {name: 'name'}
    ]

    return (
      <Wizard >
        <Layer>
          <Grid dataSource={components} />
        </Layer>
        <Layer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Layer>
        <Layer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Layer>
        <Layer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Layer>
      </Wizard>
    )
  }
}
