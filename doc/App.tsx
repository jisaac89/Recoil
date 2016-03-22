/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

import Button from '../src/components/Button/Button';
import Toolbar from '../src/components/Toolbar/Toolbar';
import Checkbox from '../src/components/Checkbox/Checkbox';
import Grid from '../src/components/Grid/Grid';
import Layer from '../src/components/Layer/Layer';
import Dropdown from '../src/components/Dropdown/Dropdown';
import Input from '../src/components/Input/Input';
import Wizard from '../src/components/Wizard/Wizard';
import Modal from '../src/components/Modal/Modal';
import Door from '../src/components/Door/Door';
import Emerge from '../src/components/Emerge/Emerge';

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
      selected: [],
      checked: false,
      keyword: '',
      template: ''
    }
  }

  toggleChecked(){
    this.setState({
      checked : this.state.checked ? false : true
    })
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

  select(key, item) {
    this.setState({
      slideIndex: item.slideIndex
    })
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

  detailTemplate(key, item) {
    return (
      <Layer className="p10 light">
        <p>{item.description}</p>
      </Layer>
    )
  }
  //
  // selected(key, items) {
  //   this.state.selected.push(key);
  // }

  changeKeyword(term) {
    this.setState({keyword: term});
  }

  setTemplate(temp) {
    this.setState({
      template: temp
    })
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let {checked} = state;

    let columns = [
      {name: 'name', tabbable: true}
    ]

    let newComponentArray = [];

    var keys = components;
    for (let k in keys) {
     let thisKey = keys[k];
      if (thisKey.name.toLowerCase().indexOf(self.state.keyword.toLowerCase()) > -1) {
        newComponentArray.push(thisKey)
      }
    }

    return (
      <Layer fill>
        <Layer overflow flex flow="row wrap" className="h100 w100">
          <Layer className="p10 text-center">
            <Door open={!state.template}>
              <div>
                <img className="w300px e-float" src={'./img/Recoil.png'} />
                <h1 className="super mtb20">
                  React <strong>Recoil</strong>
                </h1>
              </div>
            </Door>
            <Toolbar spacing>
              <Emerge>
              <Button onClick={this.setTemplate.bind(this, 'start')} size="large">Getting Started</Button>
              <Button onClick={this.setTemplate.bind(this, 'start')} size="large">Components</Button>
              <Button onClick={this.setTemplate.bind(this, 'start')} size="large">Layout</Button>
              <Button size="large" href="http://www.github.com/jisaac89/recoil" right type="primary" target="_blank" icon="github">Grab Latest Version</Button>
              </Emerge>
            </Toolbar>
            <hr className="rainbow-line mt10" />
          </Layer>
          {(()=>{
            if (state.template === 'start') {
              return (
                <Emerge>
                <div className="h100 w100">
                  <Layer className="h100" flex flow="row nowrap">
                    <Layer className="h100 w400px border-right" flex flow="column nowrap">
                        <Toolbar className="p10 border-bottom h50px">
                          <Input focusOnMount onChange={this.changeKeyword.bind(this)} block type="text" title="Find Components" icon="search" />
                        </Toolbar>
                        <Layer scrollY className="h100 pb100">
                          <Grid
                            hideHeader={true}
                            dataSource={newComponentArray}
                            onSelect={this.select.bind(this)}
                            selected={this.state.selected}
                            columns={columns}
                            numberPerPage={18}
                            openOnSelect={true}
                            detailTemplate={this.detailTemplate.bind(this)}
                            />
                        </Layer>
                    </Layer>
                    <div className="h100 w100 p10">
                      <Wizard slideIndex={this.state.slideIndex}>
                        <Layer scrollY fill>
                          <TutorialAlign {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialButton {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialCard {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialCheckbox {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialDoor {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialDropdown {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialEmerge {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialGrid {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialInput {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialLayer {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialLoading {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialModal {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialPane {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialSelectable {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialShrink {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialToolbar {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialTransform {...state} />
                        </Layer>
                        <Layer scrollY fill>
                          <TutorialWizard {...state} />
                        </Layer>
                      </Wizard>
                    </div>
                  </Layer>
                </div>
                </Emerge>

              )
            }
          })()}
        </Layer>

      </Layer>
    )
  }
}
