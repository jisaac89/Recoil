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
import TutorialLoading from './tutorial/TutorialLoading';
import TutorialModal from './tutorial/TutorialModal';
import TutorialPane from './tutorial/TutorialPane';
import TutorialSelectable from './tutorial/TutorialSelectable';
import TutorialShrink from './tutorial/TutorialShrink';
import TutorialToolbar from './tutorial/TutorialToolbar';
import TutorialTransform from './tutorial/TutorialTransform';
import TutorialWizard from './tutorial/TutorialWizard';

import SampleData from './tutorial/SampleData';

export default class App extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      mobile: false,
      nightMode: false,
      viewDocumentation: false,
      slideIndex:0,
      selected: [],
      keyword: ''
    }
  }

  toggleDocumentation(){
    this.setState({
      viewDocumentation: this.state.viewDocumentation ? false : true
    })
  }

  toggleNightMode(){
    this.setState({
      nightMode: this.state.nightMode ? false : true
    })
  }

  detailTemplate(index, item) {
    return (
      <div className="p10 pl50">
        <small>{item.component.description}</small>
      </div>
    )
  }

  gotoTutorial(item){
    this.setState({
      slideIndex: item.index,
      selected: [item.index]
    })
  }

  onRowSelect(item) {
    let selected = this.state.selected;
    selected.push(item.guid);
    this.setState({
      selected: selected
    })

    console.log(this.state.selected)
  }

  filterComponentMenu(value) {
    this.setState({
      keyword : value
    })
  }


  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let template = (item, index) => {
      return (
        <Button>{item.component.name}</Button>
      )
    }

    let columns = [
      {name: 'component', template : template}
    ]


    var newComponentArray = [];
  	var keys = SampleData;
    for (var k in keys) {
        var thisKey = keys[k];
        if (thisKey.component.name.toLowerCase().indexOf(self.state.keyword.toLowerCase()) > -1) {
            newComponentArray.push(thisKey);
        }
      }

    return (
      <Layer overflow fill flex flow="column nowrap" className={state.nightMode ? 'e-NightMode' : ''}>
        <Door className="w100" open={state.viewDocumentation}>
          <Layer block>
            <div className="p10 w100 clearfix">
              <Emerge if={state.viewDocumentation}>
              <h1 className="pull-left">React <strong>Recoil</strong></h1>
                <Toolbar spacing right>
                  <Button shortcut="g" onClick={this.toggleDocumentation.bind(this)}>
                    Get Started
                  </Button>
                  <Button icon="star" type="primary">
                    Git Latest Version
                  </Button>
                </Toolbar>
              </Emerge>
            </div>
          <hr className="rainbow-line" />
          </Layer>
        </Door>
        <Door className="w100" open={!state.viewDocumentation}>
          <div className="w100">
            <Layer scrollY className="text-center w100 pt50 pb50 light">
              <Emerge>
                <div>
                  <img width={300} height={193} className="floatL" src={'./img/Recoil.png'} />
                </div>
                <div>
                  <h1 className='super mt50'>REACT <strong>RECOIL</strong></h1>
                  <p>
                    A <a target="_blank" href="https://facebook.github.io/react/" title="React JS">React</a> powered front-end framework written in <a target="_blank" href="http://www.typescriptlang.org/" title="TypeScript"> TypeScript</a>
                  </p>
                </div>
                <Toolbar className="mt50" spacing>
                  <Button shortcut="n" size="large" onClick={this.toggleNightMode.bind(this)} icon="moon-o"></Button>
                  <Button shortcut="d" onClick={this.toggleDocumentation.bind(this)} size="large">Documentation</Button>
                  <Button href={'https://www.github.com/jisaac89/recoil'} icon="github" type="primary" size="large">Grab Latest Version</Button>
                </Toolbar>
              </Emerge>
            </Layer>
            <hr className="rainbow-line" />
          </div>
        </Door>
        <Layer>
          <Door className="w100" open={state.viewDocumentation}>
            <Layer>
              <div className="w30 p10 pr20 pull-left">
                <Input icon="th" block focusOnMount={state.viewDocumentation} onChange={this.filterComponentMenu.bind(this)} type="text" title="Find Components" />
                <Grid
                  hideHeader
                  dataSource={newComponentArray}
                  columns={columns}
                  numberPerPage={17}
                  onRowSelect={this.gotoTutorial.bind(this)}
                  detailTemplateOpenOnSelect
                  detailTemplate={this.detailTemplate.bind(this)}
                  selected={[this.state.slideIndex]}
                  selectedKey={'index'}
                />
              </div>
              <div className="p10 w70 pull-left">
                <Wizard slideIndex={state.slideIndex}>
                  <TutorialAlign {...state}  />
                  <TutorialButton {...state} />
                  <TutorialCard {...state} />
                  <TutorialCheckbox {...state} />
                  <TutorialDoor {...state} />
                  <TutorialDropdown {...state} />
                  <TutorialEmerge {...state} />
                  <TutorialGrid {...state} />
                  <TutorialInput {...state} />
                  <TutorialLayer {...state} />
                  <TutorialLoading {...state} />
                  <TutorialModal {...state} />
                  <TutorialPane {...state} />
                  <TutorialSelectable {...state} />
                  <TutorialShrink {...state} />
                  <TutorialToolbar {...state} />
                  <TutorialTransform {...state} />
                  <TutorialWizard {...state} />
                </Wizard>
              </div>
            </Layer>
          </Door>
        </Layer>
      </Layer>
    )
  }
}
