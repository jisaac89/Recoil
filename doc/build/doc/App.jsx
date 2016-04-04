"use strict";
var React = require('react');
var Button_1 = require('../src/components/Button/Button');
var Toolbar_1 = require('../src/components/Toolbar/Toolbar');
var Grid_1 = require('../src/components/Grid/Grid');
var Layer_1 = require('../src/components/Layer/Layer');
var Input_1 = require('../src/components/Input/Input');
var Wizard_1 = require('../src/components/Wizard/Wizard');
var Door_1 = require('../src/components/Door/Door');
var Emerge_1 = require('../src/components/Emerge/Emerge');
var TutorialButton_1 = require('./tutorial/TutorialButton');
var TutorialAlign_1 = require('./tutorial/TutorialAlign');
var TutorialCard_1 = require('./tutorial/TutorialCard');
var TutorialCheckbox_1 = require('./tutorial/TutorialCheckbox');
var TutorialDoor_1 = require('./tutorial/TutorialDoor');
var TutorialDropdown_1 = require('./tutorial/TutorialDropdown');
var TutorialEmerge_1 = require('./tutorial/TutorialEmerge');
var TutorialGrid_1 = require('./tutorial/TutorialGrid');
var TutorialInput_1 = require('./tutorial/TutorialInput');
var TutorialLayer_1 = require('./tutorial/TutorialLayer');
var TutorialLoading_1 = require('./tutorial/TutorialLoading');
var TutorialModal_1 = require('./tutorial/TutorialModal');
var TutorialPane_1 = require('./tutorial/TutorialPane');
var TutorialSelectable_1 = require('./tutorial/TutorialSelectable');
var TutorialShrink_1 = require('./tutorial/TutorialShrink');
var TutorialToolbar_1 = require('./tutorial/TutorialToolbar');
var TutorialTransform_1 = require('./tutorial/TutorialTransform');
var TutorialWizard_1 = require('./tutorial/TutorialWizard');
var SampleData_1 = require('./tutorial/SampleData');
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
            toggleMobileTutorial: 0
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
            viewDocumentation: this.state.viewDocumentation ? false : true
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
                  <small><a onClick={this.toggleMobileTutorial.bind(this)}>View Documentation</a></small>
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
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        let template = (item, index) => {
            return (<Button_1.default key={index}>{item.component.name}</Button_1.default>);
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
        return (<Layer_1.default fill flex flow="row wrap" className={state.nightMode ? 'e-NightMode' : ''}>
      <Door_1.default className="w100" open={state.viewDocumentation}>
        <Layer_1.default block>
          <div className="p10 w100 clearfix">
            <Emerge_1.default if={state.viewDocumentation}>
            <h1 className="pull-left">React <strong>Recoil</strong></h1>

              {(() => {
            if (this.state.mobile) {
                return (<Toolbar_1.default spacing right>
                        <Button_1.default shortcut="g" onClick={this.toggleDocumentation.bind(this)}>
                          Get Started
                        </Button_1.default>
                      </Toolbar_1.default>);
            }
            else {
                return (<Toolbar_1.default spacing right>
                      <Button_1.default shortcut="g" onClick={this.toggleDocumentation.bind(this)}>
                        Get Started
                      </Button_1.default>
                      <Button_1.default icon="star" type="primary">
                        Git Latest Version
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
      <Door_1.default className="w100" open={state.viewDocumentation}>
        <Layer_1.default>
          {(() => {
            if (this.state.mobile) {
                return (<Wizard_1.default slideIndex={this.state.toggleMobileTutorial}>
                  <div className="p10">
                    <Input_1.default icon="th" block focusOnMount={state.viewDocumentation} focusDelay={2000} onChange={this.filterComponentMenu.bind(this)} type="text" title="Find Components"/>
                    <Grid_1.default hideHeader dataSource={newComponentArray} columns={columns} numberPerPage={18} onRowSelect={this.gotoTutorial.bind(this)} detailTemplateOpenOnSelect detailTemplate={this.detailTemplate.bind(this)} selected={[this.state.slideIndex]} selectedKey={'index'}/>
                  </div>
                  <div className="p10">
                    <div className="mtb10">
                      <small><a onClick={this.toggleMobileTutorial.bind(this)}>Back to components</a></small>
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
                      <TutorialToolbar_1.default {...state}/>
                      <TutorialTransform_1.default {...state}/>
                      <TutorialWizard_1.default {...state}/>
                    </Wizard_1.default>
                  </div>
                </Wizard_1.default>);
            }
            else {
                return (<div>
                  <div className="w30 p10 pr20 pull-left">
                    <Input_1.default icon="th" block focusOnMount={state.viewDocumentation} focusDelay={2000} onChange={this.filterComponentMenu.bind(this)} type="text" title="Find Components"/>
                    <Grid_1.default hideHeader dataSource={newComponentArray} columns={columns} numberPerPage={18} onRowSelect={this.gotoTutorial.bind(this)} detailTemplateOpenOnSelect detailTemplate={this.detailTemplate.bind(this)} selected={[this.state.slideIndex]} selectedKey={'index'}/>
                  </div>
                  <div className="p10 w70 pull-left">
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
                      <TutorialToolbar_1.default {...state}/>
                      <TutorialTransform_1.default {...state}/>
                      <TutorialWizard_1.default {...state}/>
                    </Wizard_1.default>
                  </div>
                </div>);
            }
        })()}
        </Layer_1.default>
      </Door_1.default>

      </Layer_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
