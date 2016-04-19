"use strict";
const React = require('react');
const Button_1 = require('../src/components/Button/Button');
const Toolbar_1 = require('../src/components/Toolbar/Toolbar');
const Grid_1 = require('../src/components/Grid/Grid');
const Layer_1 = require('../src/components/Layer/Layer');
const Input_1 = require('../src/components/Input/Input');
const Wizard_1 = require('../src/components/Wizard/Wizard');
const Door_1 = require('../src/components/Door/Door');
const Emerge_1 = require('../src/components/Emerge/Emerge');
const Pane_1 = require('../src/components/Pane/Pane');
const Transform_1 = require('../src/components/Transform/Transform');
const TutorialButton_1 = require('./tutorial/TutorialButton');
const TutorialAlign_1 = require('./tutorial/TutorialAlign');
const TutorialCard_1 = require('./tutorial/TutorialCard');
const TutorialCheckbox_1 = require('./tutorial/TutorialCheckbox');
const TutorialDoor_1 = require('./tutorial/TutorialDoor');
const TutorialDropdown_1 = require('./tutorial/TutorialDropdown');
const TutorialEmerge_1 = require('./tutorial/TutorialEmerge');
const TutorialGrid_1 = require('./tutorial/TutorialGrid');
const TutorialInput_1 = require('./tutorial/TutorialInput');
const TutorialLayer_1 = require('./tutorial/TutorialLayer');
const TutorialLoading_1 = require('./tutorial/TutorialLoading');
const TutorialModal_1 = require('./tutorial/TutorialModal');
const TutorialPane_1 = require('./tutorial/TutorialPane');
const TutorialSelectable_1 = require('./tutorial/TutorialSelectable');
const TutorialShrink_1 = require('./tutorial/TutorialShrink');
const TutorialToggle_1 = require('./tutorial/TutorialToggle');
const TutorialToolbar_1 = require('./tutorial/TutorialToolbar');
const TutorialTransform_1 = require('./tutorial/TutorialTransform');
const TutorialWizard_1 = require('./tutorial/TutorialWizard');
const SampleData_1 = require('./tutorial/SampleData');
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            mobile: false,
            nightMode: false,
            viewDocumentation: false,
            slideIndex: 0,
            selected: [],
            keyword: '',
            toggleMobileTutorial: 0,
            toggleSideMenu: true
        };
    }
    componentWillMount() {
        const self = this;
        if (window.outerWidth < 800) {
            self.setState({ mobile: true });
        }
        else {
            self.setState({ mobile: false });
        }
    }
    toggleDocumentation() {
        this.setState({
            viewDocumentation: this.state.viewDocumentation ? false : true,
            toggleMobileTutorial: 0
        });
    }
    toggleNightMode() {
        this.setState({
            nightMode: this.state.nightMode ? false : true
        });
    }
    detailTemplate(index, item) {
        return (<div key={index} className="p10 pl50">
        <small>{item.component.description}</small>
        {(() => {
            if (this.state.mobile) {
                return (<div className="mtb10">
                  <Button_1.default icon="eye" type="primary" size="small" onClick={this.toggleMobileTutorial.bind(this)}>View Documentation</Button_1.default>
                </div>);
            }
        })()}
      </div>);
    }
    gotoTutorial(item) {
        this.setState({
            slideIndex: item.index,
            selected: [item.index]
        });
    }
    onRowSelect(item) {
        let selected = this.state.selected;
        selected.push(item.guid);
        this.setState({
            selected: selected
        });
    }
    filterComponentMenu(value) {
        this.setState({
            keyword: value
        });
    }
    toggleMobileTutorial() {
        this.setState({
            toggleMobileTutorial: this.state.toggleMobileTutorial === 0 ? 1 : 0
        });
    }
    toggleSideMenu() {
        this.setState({
            toggleSideMenu: !this.state.toggleSideMenu
        });
    }
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        console.log(self.state.slideIndex);
        let template = (item, index) => {
            return (<Button_1.default>
          {item.component.name}
        </Button_1.default>);
        };
        let columns = [
            { name: 'component', template: template }
        ];
        var newComponentArray = [];
        var keys = SampleData_1.default;
        for (var k in keys) {
            var thisKey = keys[k];
            if (thisKey.component.name.toLowerCase().indexOf(self.state.keyword.toLowerCase()) > -1) {
                newComponentArray.push(thisKey);
            }
        }
        return (<Layer_1.default scrollY fill className={state.nightMode ? 'e-NightMode' : ''}>
      <Door_1.default className="w100" open={state.viewDocumentation}>
        <Layer_1.default block style={{ height: 60 }}>
          <div className="p10 w100 clearfix">
            <Emerge_1.default if={state.viewDocumentation}>
            <h1 className="pull-left">React <strong>Recoil</strong></h1>

              {(() => {
            if (this.state.mobile) {
                return (<Toolbar_1.default spacing right>
                        <Button_1.default shortcut="n" onClick={this.toggleNightMode.bind(this)} icon="moon-o"></Button_1.default>
                        <Button_1.default shortcut="g" onClick={this.toggleDocumentation.bind(this)}>
                          Start
                        </Button_1.default>
                      </Toolbar_1.default>);
            }
            else {
                return (<Toolbar_1.default spacing right>
                      <Button_1.default shortcut="n" onClick={this.toggleNightMode.bind(this)} icon="moon-o"></Button_1.default>
                      <Button_1.default shortcut="g" onClick={this.toggleDocumentation.bind(this)}>
                        Get Started
                      </Button_1.default>
                      <Button_1.default href={'https://www.github.com/jisaac89/recoil'} icon="star" type="primary">
                        Grab Latest Version
                      </Button_1.default>
                    </Toolbar_1.default>);
            }
        })()}
            </Emerge_1.default>
          </div>
          <hr className="rainbow-line"/>
        </Layer_1.default>
      </Door_1.default>
      <Door_1.default className="w100" open={!state.viewDocumentation}>
        <div className="w100">
          <Layer_1.default className="text-center w100 pt50 pb50 light">
            <Emerge_1.default>
              <div>
                <img width={300} height={193} className="floatL" src={'./img/recoil.png'}/>
              </div>
              <div>
                <h1 className='super mt50'>REACT <strong>RECOIL</strong></h1>
                <p>
                  A <a target="_blank" href="https://facebook.github.io/react/" title="React JS">React</a> powered front-end framework written in <a target="_blank" href="http://www.typescriptlang.org/" title="TypeScript"> TypeScript</a>
                </p>
              </div>
              {(() => {
            if (this.state.mobile) {
                return (<Toolbar_1.default spacing vertical className="mt50">
                        <Button_1.default block shortcut="n" size="large" onClick={this.toggleNightMode.bind(this)} icon="moon-o">Night Mode</Button_1.default>
                        <Button_1.default block shortcut="d" onClick={this.toggleDocumentation.bind(this)} size="large">Documentation</Button_1.default>
                        <Button_1.default block href={'https://www.github.com/jisaac89/recoil'} icon="github" type="primary" size="large">Grab Latest Version</Button_1.default>
                      </Toolbar_1.default>);
            }
            else {
                return (<Toolbar_1.default className="mt50" spacing>
                      <Button_1.default shortcut="n" size="large" onClick={this.toggleNightMode.bind(this)} icon="moon-o"></Button_1.default>
                      <Button_1.default shortcut="d" onClick={this.toggleDocumentation.bind(this)} size="large">Documentation</Button_1.default>
                      <Button_1.default href={'https://www.github.com/jisaac89/recoil'} icon="github" type="primary" size="large">Grab Latest Version</Button_1.default>
                    </Toolbar_1.default>);
            }
        })()}
            </Emerge_1.default>
          </Layer_1.default>
          <hr className="rainbow-line"/>
        </div>
      </Door_1.default>
      <Door_1.default overflow className="w100 mb100" open={state.viewDocumentation}>
        <Layer_1.default>
          {(() => {
            if (this.state.mobile) {
                return (<Wizard_1.default slideIndex={this.state.toggleMobileTutorial}>
                  <div className="p10">
                    <Input_1.default className="mb10" icon="th" block focusOnMount={state.viewDocumentation} focusDelay={2000} onChange={this.filterComponentMenu.bind(this)} type="text" title="Find Components"/>
                    <Grid_1.default hideHeader dataSource={newComponentArray} columns={columns} numberPerPage={19} onRowSelect={this.gotoTutorial.bind(this)} detailTemplateOpenOnSelect detailTemplate={this.detailTemplate.bind(this)} selected={[this.state.slideIndex]} selectedKey={'index'}/>
                  </div>
                  <div className="p10">
                    <div className="mtb10">
                      <Button_1.default pointer="left" type="primary" size="small" onClick={this.toggleMobileTutorial.bind(this)}>Back to components</Button_1.default>
                    </div>
                    <Wizard_1.default slideIndex={state.slideIndex}>
                      <TutorialAlign_1.default {...state}/>
                      <TutorialButton_1.default {...state}/>
                      <TutorialCard_1.default {...state}/>
                      <TutorialCheckbox_1.default {...state}/>
                      <TutorialDoor_1.default {...state}/>
                      <TutorialDropdown_1.default {...state}/>
                      <TutorialEmerge_1.default {...state}/>
                      <TutorialGrid_1.default {...state}/>
                      <TutorialInput_1.default {...state}/>
                      <TutorialLayer_1.default {...state}/>
                      <TutorialLoading_1.default {...state}/>
                      <TutorialModal_1.default {...state}/>
                      <TutorialPane_1.default {...state}/>
                      <TutorialSelectable_1.default {...state}/>
                      <TutorialShrink_1.default {...state}/>
                      <TutorialToggle_1.default {...state}/>
                      <TutorialToolbar_1.default {...state}/>
                      <TutorialTransform_1.default {...state}/>
                      <TutorialWizard_1.default {...state}/>
                    </Wizard_1.default>
                  </div>
                </Wizard_1.default>);
            }
            else {
                return (<div>
                    <Pane_1.default open={self.state.toggleSideMenu} className="W400px" direction="left">
                      <div className="p10">
                        <Input_1.default className="mb10" icon="th" block focusOnMount={state.viewDocumentation} focusDelay={1000} onChange={this.filterComponentMenu.bind(this)} type="text" title="Find Components"/>
                        <Grid_1.default hideHeader dataSource={newComponentArray} columns={columns} numberPerPage={19} onRowSelect={this.gotoTutorial.bind(this)} detailTemplateOpenOnSelect detailTemplate={this.detailTemplate.bind(this)} selected={[this.state.slideIndex]} selectedKey={'index'}/>
                      </div>
                    </Pane_1.default>
                    <Transform_1.default push="left" if={self.state.toggleSideMenu} amount={'400px'}>
                      <div className="p10">
                        <Button_1.default size="small" className="mb20" pointer="left" icon="bars" onClick={this.toggleSideMenu.bind(this)}>{self.state.toggleSideMenu ? 'Hide Side Menu' : 'Show Side Menu'}</Button_1.default>
                        <Wizard_1.default slideIndex={state.slideIndex}>
                          <TutorialAlign_1.default {...state}/>
                          <TutorialButton_1.default {...state}/>
                          <TutorialCard_1.default {...state}/>
                          <TutorialCheckbox_1.default {...state}/>
                          <TutorialDoor_1.default {...state}/>
                          <TutorialDropdown_1.default {...state}/>
                          <TutorialEmerge_1.default {...state}/>
                          <TutorialGrid_1.default {...state}/>
                          <TutorialInput_1.default {...state}/>
                          <TutorialLayer_1.default {...state}/>
                          <TutorialLoading_1.default {...state}/>
                          <TutorialModal_1.default {...state}/>
                          <TutorialPane_1.default {...state}/>
                          <TutorialSelectable_1.default {...state}/>
                          <TutorialShrink_1.default {...state}/>
                          <TutorialToggle_1.default {...state}/>
                          <TutorialToolbar_1.default {...state}/>
                          <TutorialTransform_1.default {...state}/>
                          <TutorialWizard_1.default {...state}/>
                        </Wizard_1.default>
                      </div>
                    </Transform_1.default>
                </div>);
            }
        })()}

        </Layer_1.default>
      </Door_1.default>
      {(() => {
            if (this.state.mobile) {
                return (<Pane_1.default open={this.state.toggleMobileTutorial === 1 && this.state.mobile} direction="bottom">
                <Layer_1.default fill className="w100 light p10 shadow">
                  <Toolbar_1.default block>
                    {(() => {
                    if (SampleData_1.default[this.state.slideIndex - 1]) {
                        return (<Button_1.default icon="chevron-left" onClick={this.gotoTutorial.bind(this, SampleData_1.default[this.state.slideIndex - 1])}>{SampleData_1.default[this.state.slideIndex - 1].component.name}</Button_1.default>);
                    }
                })()}
                    <Button_1.default icon="chevron-right" onClick={this.gotoTutorial.bind(this, SampleData_1.default[this.state.slideIndex + 1])} right>{SampleData_1.default[this.state.slideIndex + 1].component.name}</Button_1.default>
                  </Toolbar_1.default>
                </Layer_1.default>
            </Pane_1.default>);
            }
        })()}
      </Layer_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
