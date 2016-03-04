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

  setSelectedItem(item) {

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
    } else if (item === 'Grid') {
      self.setState({
        selectedItem: item,
        slideIndex: 7
      })
    } else if (item === 'Input') {
      self.setState({
        selectedItem: item,
        slideIndex: 8
      })
    } else if (item === 'Layer') {
      self.setState({
        selectedItem: item,
        slideIndex: 9
      })
    } else if (item === 'Loading') {
      self.setState({
        selectedItem: item,
        slideIndex: 10
      })
    } else if (item === 'Modal') {
      self.setState({
        selectedItem: item,
        slideIndex: 11
      })
    } else if (item === 'Pane') {
      self.setState({
        selectedItem: item,
        slideIndex: 12
      })
    } else if (item === 'Selectable') {
      self.setState({
        selectedItem: item,
        slideIndex: 13
      })
    } else if (item === 'Shrink') {
      self.setState({
        selectedItem: item,
        slideIndex: 14
      })
    } else if (item === 'Toolbar') {
      self.setState({
        selectedItem: item,
        slideIndex: 15
      })
    } else if (item === 'Transform') {
      self.setState({
        selectedItem: item,
        slideIndex: 16
      })
    } else if (item === 'Wizard') {
      self.setState({
        selectedItem: item,
        slideIndex: 17
      })
    }

  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let selectedItem = state.selectedItem;

    return (
      <Layer className="h100">
        <Layer type="light" className="p10 border-bottom">
          <h1 className="super dinblock">Recoil</h1>
          <Button size="xlarge" right type="primary">Download Latest Version</Button>
        </Layer>

        <hr className="rainbow-line" />

        <Toolbar textCenter block noRadius className="ptb10 border-bottom pr10">
          <Button ghost>Home</Button>
          <Button ghost>Get Started</Button>
        </Toolbar>

        <Toolbar flex flow="row wrap" justify="center" align="center" noRadius>
          <Button checked={selectedItem === 'Align'} onClick={this.setSelectedItem.bind(this, 'Align')}>Align</Button>
          <Button checked={selectedItem === 'Button'} onClick={this.setSelectedItem.bind(this, 'Button')}>Button</Button>
          <Button checked={selectedItem === 'Card'} onClick={this.setSelectedItem.bind(this, 'Card')}>Card</Button>
          <Button checked={selectedItem === 'Checkbox'} onClick={this.setSelectedItem.bind(this, 'Checkbox')}>Checkbox</Button>
          <Button checked={selectedItem === 'Door'} onClick={this.setSelectedItem.bind(this, 'Door')}>Door</Button>
          <Button checked={selectedItem === 'Dropdown'} onClick={this.setSelectedItem.bind(this, 'Dropdown')}>Dropdown</Button>
          <Button checked={selectedItem === 'Emerge'} onClick={this.setSelectedItem.bind(this, 'Emerge')}>Emerge</Button>
          <Button checked={selectedItem === 'Grid'} onClick={this.setSelectedItem.bind(this, 'Grid')}>Grid</Button>
          <Button checked={selectedItem === 'Input'} onClick={this.setSelectedItem.bind(this, 'Input')}>Input</Button>
          <Button checked={selectedItem === 'Layer'} onClick={this.setSelectedItem.bind(this, 'Layer')}>Layer</Button>
          <Button checked={selectedItem === 'Loading'} onClick={this.setSelectedItem.bind(this, 'Loading')}>Loading</Button>
          <Button checked={selectedItem === 'Modal'} onClick={this.setSelectedItem.bind(this, 'Modal')}>Modal</Button>
          <Button checked={selectedItem === 'Pane'} onClick={this.setSelectedItem.bind(this, 'Pane')}>Pane</Button>
          <Button checked={selectedItem === 'Selectable'} onClick={this.setSelectedItem.bind(this, 'Selectable')}>Selectable</Button>
          <Button checked={selectedItem === 'Shrink'} onClick={this.setSelectedItem.bind(this, 'Shrink')}>Shrink</Button>
          <Button checked={selectedItem === 'Toolbar'} onClick={this.setSelectedItem.bind(this, 'Toolbar')}>Toolbar</Button>
          <Button checked={selectedItem === 'Transform'} onClick={this.setSelectedItem.bind(this, 'Transform')}>Transform</Button>
          <Button checked={selectedItem === 'Wizard'} onClick={this.setSelectedItem.bind(this, 'Wizard')}>Wizard</Button>
        </Toolbar>


        <Layer className="mw1000 posrel center-width pt50 ps50">
          {(()=>{
            if (selectedItem == 'Align') {
                return(
                  <TutorialAlign {...state} />
                )
            } else if (selectedItem == 'Button') {
                return(
                  <TutorialButton {...state} />
                )
            } else if (selectedItem === 'Card') {
                return(
                  <TutorialCard {...state} />
                )
            } else if (selectedItem === 'Checkbox') {
                return(
                  <TutorialCheckbox {...state} />
                )
            } else if (selectedItem === 'Door') {
                return(
                  <TutorialDoor {...state} />
                )
            } else if (selectedItem === 'Dropdown') {
                return(
                  <TutorialDropdown {...state} />
                )
            } else if (selectedItem === 'Emerge') {
                return(
                  <TutorialEmerge {...state} />
                )
            } else if (selectedItem === 'Grid') {
                return(
                  <TutorialGrid {...state} />
                )
            } else if (selectedItem === 'Input') {
                return(
                  <TutorialInput {...state} />
                )
            } else if (selectedItem === 'Layer') {
                return(
                  <TutorialLayer {...state} />
                )
            } else if (selectedItem === 'Loading') {
                return(
                  <TutorialLoading {...state} />
                )
            } else if (selectedItem === 'Modal') {
                return(
                  <TutorialModal {...state} />
                )
            } else if (selectedItem === 'Pane') {
                return(
                  <TutorialPane {...state} />
                )
            } else if (selectedItem === 'Selectable') {
                return(
                  <TutorialSelectable {...state} />
                )
            } else if (selectedItem === 'Shrink') {
                return(
                  <TutorialShrink {...state} />
                )
            } else if (selectedItem === 'Toolbar') {
                return(
                  <TutorialToolbar {...state} />
                )
            } else if (selectedItem === 'Transform') {
                return(
                  <TutorialTransform {...state} />
                )
            } else if (selectedItem === 'Wizard') {
                return(
                  <TutorialWizard {...state} />
                )
            }
          })()}
        </Layer>

      </Layer>
    )
  }
}
