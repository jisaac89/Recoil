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

var componentArray = [
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Holloway",
      "name": "Susanne"
    },
    "balance": "$1,970.31",
    "index": 0,
    "_id": "56f2fe3fa86a21c82318885e"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Wyatt",
      "name": "Ida"
    },
    "balance": "$3,256.62",
    "index": 1,
    "_id": "56f2fe3f22cb3c018164a302"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Fry",
      "name": "Miller"
    },
    "balance": "$1,988.52",
    "index": 2,
    "_id": "56f2fe3fc73a300738f0f82d"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Dodson",
      "name": "Walker"
    },
    "balance": "$2,070.70",
    "index": 3,
    "_id": "56f2fe3fd38b27c43c670ad8"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Poole",
      "name": "Green"
    },
    "balance": "$3,483.05",
    "index": 4,
    "_id": "56f2fe3fca18cb96deb44f54"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Bowman",
      "name": "Lambert"
    },
    "balance": "$3,274.99",
    "index": 5,
    "_id": "56f2fe3f2b47cc1366ed6591"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Mcneil",
      "name": "Cox"
    },
    "balance": "$2,904.45",
    "index": 6,
    "_id": "56f2fe3f7b1e59e32373584f"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Garrett",
      "name": "Love"
    },
    "balance": "$3,442.03",
    "index": 7,
    "_id": "56f2fe3fd0cc60d1883ec7ca"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Joseph",
      "name": "Rodgers"
    },
    "balance": "$2,207.74",
    "index": 8,
    "_id": "56f2fe3f88f28421a8c40cf2"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Jenkins",
      "name": "Kelly"
    },
    "balance": "$3,657.64",
    "index": 9,
    "_id": "56f2fe3f8a95ff90a1624009"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Moody",
      "name": "Eliza"
    },
    "balance": "$1,866.68",
    "index": 10,
    "_id": "56f2fe3f2343e9fd8a2d5f77"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Page",
      "name": "William"
    },
    "balance": "$2,691.58",
    "index": 11,
    "_id": "56f2fe3f04670e8b347af14f"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Carey",
      "name": "Kelli"
    },
    "balance": "$3,788.62",
    "index": 12,
    "_id": "56f2fe3fa510e34677557394"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Crosby",
      "name": "Cochran"
    },
    "balance": "$3,565.56",
    "index": 13,
    "_id": "56f2fe3fe03405617c316100"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Porter",
      "name": "Waters"
    },
    "balance": "$2,892.88",
    "index": 14,
    "_id": "56f2fe3f3e9ff6e8db1303ba"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Burks",
      "name": "Jocelyn"
    },
    "balance": "$1,609.34",
    "index": 15,
    "_id": "56f2fe3fc87c70a248515969"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Sweet",
      "name": "Hammond"
    },
    "balance": "$3,248.98",
    "index": 16,
    "_id": "56f2fe3fab298da61a4d6428"
  },
  {
    "component": {
      "options": "",
      "type": "",
      "description": "Miranda",
      "name": "Merrill"
    },
    "balance": "$3,510.96",
    "index": 17,
    "_id": "56f2fe3ffec2a1eec31b81da"
  }
]

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
      template: 'start',
      mobile: false
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
    const state = this.state;
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

  componentWillMount() {
    const self = this;
    if (window.outerWidth < 800) {
      self.setState({mobile: true});
    } else {
      self.setState({mobile: false});
    }
  }

  colTemplate(item) {
    return (
      <a>
        {item.component.name}
      </a>
    )
  }

  detailTemplatea(index, item) {

    let columns = [
      {name : 'name'}
    ]
    return (
      <Grid dataSource={item.component}></Grid>
    )
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let {checked} = state;

    let columns = [
      {name: 'name'}
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
      <Layer>








      <Layer fill>
        <Layer className="text-center light">
          <Door open={state.template === 'start'}>
            <Emerge if={state.template === 'start'}>
              <div className="">
                <img width={300} height={197} className="e-float mt20" src={'./img/recoil.png'} />
                <h1 className="super mt20">
                  REACT <strong>RECOIL</strong>
                </h1>
                <p>Front-end Framework built for rapid development.</p>
              </div>
            </Emerge>
          </Door>
          {(()=>{
            if (state.mobile) {
                return (
                  <Layer>
                    <Door open={state.template === 'start'}>
                      <Toolbar vertical block spacing className="p10">
                        <Emerge delay={120}>
                          <Button block shortcut={"g"} checked={state.template === 'start'} onClick={this.setTemplate.bind(this, 'start')} size="large">Getting Started</Button>
                          <Button block shortcut={"c"} checked={state.template === 'comp'} onClick={this.setTemplate.bind(this, 'comp')} size="large">Components</Button>
                          <Button block onClick={this.setTemplate.bind(this, 'start')} size="large">Layout</Button>
                          <Button block size="large" href="http://www.github.com/jisaac89/recoil" right type="primary" target="_blank" icon="github">Grab Latest Version</Button>
                        </Emerge>
                      </Toolbar>
                    </Door>
                    <Door open={state.template === 'comp'}>
                      <Toolbar vertical block spacing className="p10">
                        <Emerge delay={120}>
                          <Button right ghost shortcut={"g"} checked={state.template === 'start'} icon="bars" onClick={this.setTemplate.bind(this, 'start')} size="large" />
                        </Emerge>
                      </Toolbar>
                    </Door>
                  </Layer>
                )
            } else {
              return (
                <Toolbar spacing className="p10">
                  <Emerge delay={120}>
                    <Button shortcut={"g"} checked={state.template === 'start'} onClick={this.setTemplate.bind(this, 'start')} size="large">Getting Started</Button>
                    <Button shortcut={"c"} checked={state.template === 'comp'} onClick={this.setTemplate.bind(this, 'comp')} size="large">Components</Button>
                    <Button onClick={this.setTemplate.bind(this, 'start')} size="large">Layout</Button>
                    <Button size="large" href="http://www.github.com/jisaac89/recoil" right type="primary" target="_blank" icon="github">Grab Latest Version</Button>
                  </Emerge>
                </Toolbar>
              )
            }
          })()}
          <hr className="rainbow-line" />
        </Layer>
        {(()=>{
          if (state.template === 'start') {
            return null;
          } else if (state.template === 'comp') {
            return (
              <div className="h100 w100">
                <Layer className="h100 w100" flex flow="row nowrap">
                  <Layer className={'h100 w100'} flex flow="column nowrap">
                      <Toolbar className="p10 border-bottom h50px">
                        <Input focusOnMount={!state.mobile} onChange={this.changeKeyword.bind(this)} block type="text" title="Find Components" icon="search" />
                      </Toolbar>
                      <Layer scrollY className="h100 pb100 pt20 text-center">
                        COMING SOON
                      </Layer>
                  </Layer>
                </Layer>
              </div>
            )
          }
        })()}
      </Layer>

      </Layer>
    )
  }
}
