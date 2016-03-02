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

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Layer className="h100">
        <Layer type="light" className="p10 border-bottom">
          <h1 className="super dinblock">Recoil</h1>
          <Button size="xlarge" right type="primary">Download Latest Version</Button>
        </Layer>
        <hr className="rainbow-line" />
        <Toolbar block noRadius className="border-bottom">
          <Button size="small" ghost>Home</Button>
          <Button size="small" ghost>Get Started</Button>
          <Button size="small" ghost>Components</Button>
        </Toolbar>

        <TutorialButton />


      </Layer>
    )
  }
}
