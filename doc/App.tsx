/// <reference path="../typings/main.d.ts" />

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
import Pane from '../src/components/Pane/Pane';
import Transform from '../src/components/Transform/Transform';
import Toggle from '../src/components/Toggle/Toggle';
import Shrink from '../src/components/Shrink/Shrink';

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
import TutorialToggle from './tutorial/TutorialToggle';
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
      keyword: '',
      toggleMobileTutorial: 0,
      toggleSideMenu: true
    }
  }

  componentWillMount() {
     const self = this;
     if (window.outerWidth < 800) {
       self.setState({mobile: true});
     } else {
       self.setState({mobile: false});
     }
   }

  toggleDocumentation(){
    this.setState({
      viewDocumentation: this.state.viewDocumentation ? false : true,
      toggleMobileTutorial: 0
    })
  }

  toggleNightMode(){
    this.setState({
      nightMode: this.state.nightMode ? false : true
    })
  }

  detailTemplate(index, item) {
    return (
      <div key={index} className="p10 pl50">
        <small>{item.component.description}</small>
        {(()=>{
          if (this.state.mobile) {
            return (
              <div className="mtb10">
                <Button icon="eye" type="primary" size="small" onClick={this.toggleMobileTutorial.bind(this)}>
                  View Documentation
                </Button>
              </div>
            )
          }
        })()}
      </div>
    )
  }

  gotoTutorial(item){
    this.setState({
      slideIndex: item.index,
      selected: [item.index],
      toggleMobileTutorial: 0
    })
  }

  onRowSelect(item) {
    let selected = this.state.selected;
    selected.push(item.guid);
    this.setState({
      selected: selected
    })
  }

  filterComponentMenu(value) {
    this.setState({
      keyword : value
    })
  }


  toggleMobileTutorial(){
    this.setState({
      toggleMobileTutorial: this.state.toggleMobileTutorial === 0 ? 1 : 0
    })
  }

  toggleSideMenu() {
    this.setState({
      toggleSideMenu: !this.state.toggleSideMenu
    })
  }


  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let template = (item, index) => {
      return item.component.name
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


    // Mobile Version //////////////////////////////////////////////////////////////////////////////


    let MobileVersion = () => {
      return (
         <Layer fill scrollY className="pb400">
              <div className="p10 border-bottom text-center">
                <Button icon="th" block type="primary" onClick={this.toggleMobileTutorial.bind(this)}>View components</Button>
              </div>
              
            <Door open={this.state.toggleMobileTutorial === 1}>
              <div className="p10">
                <Input className="mb10" block onChange={this.filterComponentMenu.bind(this)} type="text" placeholder="Find Components" />
                <Grid
                  hideHeader
                  dataSource={newComponentArray}
                  columns={columns}
                  numberPerPage={19}
                  onRowSelect={this.gotoTutorial.bind(this)}
                  selected={[this.state.slideIndex]}
                  selectedKey={'index'}
                />
              </div>
            </Door>
            <Door open={this.state.toggleMobileTutorial !== 1}>
              <Wizard mobile={true} slideIndex={state.slideIndex}>
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
                <TutorialToggle {...state} />
                <TutorialToolbar {...state} />
                <TutorialTransform {...state} />
                <TutorialWizard {...state} />
              </Wizard>
              </Door>
          </Layer>
      )
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
      <Layer scrollY={this.state.mobile ? false : true} fill overflow className={state.nightMode ? 'e-NightMode' : ''}>
        <Door className="w100" open={state.viewDocumentation}>
          <Layer block style={{height:60}}>
            <div className="p10 w100 clearfix">
              <Emerge if={state.viewDocumentation}>
              <h1 className="pull-left">React <strong>Recoil</strong></h1>

                {(()=>{
                  if (this.state.mobile) {
                      return (
                        <Toolbar spacing right>
                          <Button shortcut="n" onClick={this.toggleNightMode.bind(this)} icon="moon-o"></Button>
                          <Button shortcut="g" onClick={this.toggleDocumentation.bind(this)}>
                            Start
                          </Button>
                        </Toolbar>
                      )
                  } else {
                    return (
                      <Toolbar spacing right>
                        <Button shortcut="n" onClick={this.toggleNightMode.bind(this)} icon="moon-o"></Button>
                        <Button shortcut="g" onClick={this.toggleDocumentation.bind(this)}>
                          Get Started
                        </Button>
                        <Button href={'https://www.github.com/jisaac89/recoil'} icon="star" type="primary">
                          Grab Latest Version
                        </Button>
                      </Toolbar>
                    )
                  }
                })()}
              </Emerge>
            </div>
            <hr className="rainbow-line" />
          </Layer>
        </Door>
        <Door className="w100" open={!state.viewDocumentation}>
          <div className="w100">
            <Layer className="text-center w100 pt50 pb50 light">
              <Emerge>
                <div>
                  <img width={300} height={193} className="floatL" src={'./img/recoil.png'} />
                </div>
                <div>
                  <h1 className='super mt50'>REACT <strong>RECOIL</strong></h1>
                  <p>
                    A <a target="_blank" href="https://facebook.github.io/react/" title="React JS">React</a> powered front-end framework written in <a target="_blank" href="http://www.typescriptlang.org/" title="TypeScript"> TypeScript</a>
                  </p>
                </div>
                {(()=>{
                  if (this.state.mobile) {
                      return (
                        <Toolbar spacing vertical className="mt50">
                          <Button block shortcut="n" size="large" onClick={this.toggleNightMode.bind(this)} icon="moon-o">Night Mode</Button>
                          <Button block shortcut="d" onClick={this.toggleDocumentation.bind(this)} size="large">Documentation</Button>
                          <Button block href={'https://www.github.com/jisaac89/recoil'} icon="github" type="primary" size="large">Grab Latest Version</Button>
                        </Toolbar>
                      )
                  } else {
                    return (
                      <Toolbar className="mt50" spacing>
                        <Button shortcut="n" size="large" onClick={this.toggleNightMode.bind(this)} icon="moon-o"></Button>
                        <Button shortcut="d" onClick={this.toggleDocumentation.bind(this)} size="large">Documentation</Button>
                        <Button href={'https://www.github.com/jisaac89/recoil'} icon="github" type="primary" size="large">Grab Latest Version</Button>
                      </Toolbar>
                    )
                  }
                })()}
              </Emerge>
            </Layer>
            <hr className="rainbow-line" />
          </div>
        </Door>
        <Door overflow className="w100" open={state.viewDocumentation}>
          <Layer>
            {(()=>{
              if (this.state.mobile) {
                return MobileVersion();
              } else {
                return (
                    <div>
                      <Pane open={self.state.toggleSideMenu} className="W400px" direction="left">
                        <div className="p10 border-right">
                          <Input className="mb10" icon="th" block focusOnMount={state.viewDocumentation} focusDelay={1000} onChange={this.filterComponentMenu.bind(this)} type="text" title="Find Components" />
                              <Grid
                  hideHeader
                  dataSource={newComponentArray}
                  columns={columns}
                  numberPerPage={19}
                  onRowSelect={this.gotoTutorial.bind(this)}
                  selected={[this.state.slideIndex]}
                  selectedKey={'index'}
                />
                        </div>
                      </Pane>
                      <Transform push="left" if={self.state.toggleSideMenu} amount={'400px'}>
                        <div className="p10">
                          <Toolbar block className="border-bottom">
                            <Button size="small" className="mb10" pointer="left" icon="bars" onClick={this.toggleSideMenu.bind(this)}>{self.state.toggleSideMenu? 'Hide Side Menu' : 'Show Side Menu'}</Button>
                          </Toolbar>
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
                            <TutorialToggle {...state} />
                            <TutorialToolbar {...state} />
                            <TutorialTransform {...state} />
                            <TutorialWizard {...state} />
                          </Wizard>
                        </div>
                      </Transform>
                  </div>
                )
              }
            })()}

          </Layer>
        </Door>
        {(()=>{
          if (this.state.mobile && state.viewDocumentation) {
            return (
              <Pane open={this.state.toggleMobileTutorial === 0 && this.state.mobile} direction="bottom">
                  <Layer fill className="w100 light p10 shadow">
                    <Toolbar textCenter flex block>
                      {(()=>{
                        if (SampleData[this.state.slideIndex - 1]) {
                          return (
                            <Button ghost block icon="chevron-left" onClick={this.gotoTutorial.bind(this, SampleData[this.state.slideIndex - 1])}>{SampleData[this.state.slideIndex - 1].component.name}</Button>
                          )
                        }
                      })()}
                      <Button ghost className="ml5" block icon="chevron-right" onClick={this.gotoTutorial.bind(this, SampleData[this.state.slideIndex + 1])} right>{SampleData[this.state.slideIndex + 1].component.name}</Button>
                    </Toolbar>
                  </Layer>
              </Pane>
            )
          }
        })()}
      </Layer>
    )
  }
}



                          // <Grid
                          //   hideHeader
                          //   dataSource={newComponentArray}
                          //   columns={columns}
                          //   numberPerPage={19}
                          //   onRowSelect={this.gotoTutorial.bind(this)}
                          //   selected={[this.state.slideIndex]}
                          //   selectedKey={'index'}
                          //   detailTemplate={this.detailTemplate.bind(this)}
                          //   detailTemplateOpenOnSelect
                          // />