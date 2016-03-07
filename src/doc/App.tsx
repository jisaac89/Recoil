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

    let itemLowercase;

    if (typeof item === "string") {
      itemLowercase = item.toLowerCase();
    } else {
      itemLowercase = item.name.toLowerCase();
    }

    if (itemLowercase == 'align') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex:0
      })
    } else if (itemLowercase == 'button') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex:1
      })
    } else if (itemLowercase === 'card') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex:2
      })
    } else if (itemLowercase === 'checkbox') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex:3
      })
    } else if (itemLowercase === 'door') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex:4
      })
    } else if (itemLowercase === 'dropdown') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex:5
      })
    } else if (itemLowercase === 'emerge') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex:6
      })
    } else if (itemLowercase === 'grid') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex: 7
      })
    } else if (itemLowercase === 'input') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex: 8
      })
    } else if (itemLowercase === 'layer') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex: 9
      })
    } else if (itemLowercase === 'loading') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex: 10
      })
    } else if (itemLowercase === 'modal') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex: 11
      })
    } else if (itemLowercase === 'pane') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex: 12
      })
    } else if (itemLowercase === 'selectable') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex: 13
      })
    } else if (itemLowercase === 'shrink') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex: 14
      })
    } else if (itemLowercase === 'toolbar') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex: 15
      })
    } else if (itemLowercase === 'transform') {
      self.setState({
        selectedItem: itemLowercase,
        slideIndex: 16
      })
    } else if (itemLowercase === 'wizard') {
      self.setState({
        selectedItem: itemLowercase,
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
      <Shortcut dataSource={components} onChange={this.setSelectedItem.bind(this)}>
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
            <Button checked={selectedItem === 'align'} onClick={this.setSelectedItem.bind(this, 'Align')}>Align</Button>
            <Button checked={selectedItem === 'button'} onClick={this.setSelectedItem.bind(this, 'Button')}>Button</Button>
            <Button checked={selectedItem === 'card'} onClick={this.setSelectedItem.bind(this, 'Card')}>Card</Button>
            <Button checked={selectedItem === 'checkbox'} onClick={this.setSelectedItem.bind(this, 'Checkbox')}>Checkbox</Button>
            <Button checked={selectedItem === 'door'} onClick={this.setSelectedItem.bind(this, 'Door')}>Door</Button>
            <Button checked={selectedItem === 'dropdown'} onClick={this.setSelectedItem.bind(this, 'Dropdown')}>Dropdown</Button>
            <Button checked={selectedItem === 'emerge'} onClick={this.setSelectedItem.bind(this, 'Emerge')}>Emerge</Button>
            <Button checked={selectedItem === 'grid'} onClick={this.setSelectedItem.bind(this, 'Grid')}>Grid</Button>
            <Button checked={selectedItem === 'input'} onClick={this.setSelectedItem.bind(this, 'Input')}>Input</Button>
            <Button checked={selectedItem === 'layer'} onClick={this.setSelectedItem.bind(this, 'Layer')}>Layer</Button>
            <Button checked={selectedItem === 'loading'} onClick={this.setSelectedItem.bind(this, 'Loading')}>Loading</Button>
            <Button checked={selectedItem === 'modal'} onClick={this.setSelectedItem.bind(this, 'Modal')}>Modal</Button>
            <Button checked={selectedItem === 'pane'} onClick={this.setSelectedItem.bind(this, 'Pane')}>Pane</Button>
            <Button checked={selectedItem === 'selectable'} onClick={this.setSelectedItem.bind(this, 'Selectable')}>Selectable</Button>
            <Button checked={selectedItem === 'shrink'} onClick={this.setSelectedItem.bind(this, 'Shrink')}>Shrink</Button>
            <Button checked={selectedItem === 'toolbar'} onClick={this.setSelectedItem.bind(this, 'Toolbar')}>Toolbar</Button>
            <Button checked={selectedItem === 'transform'} onClick={this.setSelectedItem.bind(this, 'Transform')}>Transform</Button>
            <Button checked={selectedItem === 'wizard'} onClick={this.setSelectedItem.bind(this, 'Wizard')}>Wizard</Button>
          </Toolbar>


          <Layer className="mw1000 posrel center-width pt50 ps50">
            {(()=>{
              if (selectedItem == 'align') {
                  return(
                    <TutorialAlign {...state} />
                  )
              } else if (selectedItem == 'button') {
                  return(
                    <TutorialButton {...state} />
                  )
              } else if (selectedItem === 'card') {
                  return(
                    <TutorialCard {...state} />
                  )
              } else if (selectedItem === 'checkbox') {
                  return(
                    <TutorialCheckbox {...state} />
                  )
              } else if (selectedItem === 'door') {
                  return(
                    <TutorialDoor {...state} />
                  )
              } else if (selectedItem === 'dropdown') {
                  return(
                    <TutorialDropdown {...state} />
                  )
              } else if (selectedItem === 'emerge') {
                  return(
                    <TutorialEmerge {...state} />
                  )
              } else if (selectedItem === 'grid') {
                  return(
                    <TutorialGrid {...state} />
                  )
              } else if (selectedItem === 'input') {
                  return(
                    <TutorialInput {...state} />
                  )
              } else if (selectedItem === 'layer') {
                  return(
                    <TutorialLayer {...state} />
                  )
              } else if (selectedItem === 'loading') {
                  return(
                    <TutorialLoading {...state} />
                  )
              } else if (selectedItem === 'modal') {
                  return(
                    <TutorialModal {...state} />
                  )
              } else if (selectedItem === 'pane') {
                  return(
                    <TutorialPane {...state} />
                  )
              } else if (selectedItem === 'selectable') {
                  return(
                    <TutorialSelectable {...state} />
                  )
              } else if (selectedItem === 'shrink') {
                  return(
                    <TutorialShrink {...state} />
                  )
              } else if (selectedItem === 'toolbar') {
                  return(
                    <TutorialToolbar {...state} />
                  )
              } else if (selectedItem === 'transform') {
                  return(
                    <TutorialTransform {...state} />
                  )
              } else if (selectedItem === 'wizard') {
                  return(
                    <TutorialWizard {...state} />
                  )
              }
            })()}
          </Layer>

        </Layer>
      </Shortcut>
    )
  }
}
