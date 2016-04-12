"use strict";
var React = require('react');
var Button_1 = require('../src/components/Button/Button');
var Toolbar_1 = require('../src/components/Toolbar/Toolbar');
var Checkbox_1 = require('../src/components/Checkbox/Checkbox');
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
    }];
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
];
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
];
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedItem: '',
            slideIndex: 0,
            selected: [],
            checked: false,
            keyword: '',
            template: 'start'
        };
    }
    toggleChecked() {
        this.setState({
            checked: this.state.checked ? false : true
        });
    }
    setSelectedItem(item) {
        const self = this;
        let itemLowercase;
        if (typeof item === "string") {
            itemLowercase = item.toLowerCase();
        }
        else {
            itemLowercase = item.name.toLowerCase();
        }
        self.setState({
            selectedItem: itemLowercase
        });
    }
    select(key, item) {
        this.setState({
            slideIndex: item.slideIndex
        });
    }
    selected(item) {
        let checked;
        if (this.state.selected.length > 0) {
            console.log(this.state.selected);
            checked = this.state.selected.includes(item.name);
        }
        return checked;
    }
    template() {
        return (<Toolbar_1.default block textCenter>
        <Checkbox_1.default />
      </Toolbar_1.default>);
    }
    detailTemplate(key, item) {
        return (<Layer_1.default className="p10 light">
        <p>{item.description}</p>
      </Layer_1.default>);
    }
    changeKeyword(term) {
        this.setState({ keyword: term });
    }
    setTemplate(temp) {
        this.setState({
            template: temp
        });
    }
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        let { checked } = state;
        let columns = [
            { name: 'name', tabbable: true }
        ];
        let newComponentArray = [];
        var keys = components;
        for (let k in keys) {
            let thisKey = keys[k];
            if (thisKey.name.toLowerCase().indexOf(self.state.keyword.toLowerCase()) > -1) {
                newComponentArray.push(thisKey);
            }
        }
        return (<Layer_1.default fill>
        <Layer_1.default fill>
          <Layer_1.default className="text-center light">
            <Door_1.default open={state.template === 'start'}>
              <Emerge_1.default if={state.template === 'start'}>
                <div>
                  <img width={400} height={260} className="e-float mt20" src={'./img/Recoil.png'}/>
                  <h1 className="super mt20">
                    REACT <strong>RECOIL</strong>
                  </h1>
                  <h1>Front-end Framework built for rapid development.</h1>
                </div>
              </Emerge_1.default>
            </Door_1.default>
            <Toolbar_1.default spacing className="p10">
              <Emerge_1.default delay={120}>
                <Button_1.default shortcut={"g"} checked={state.template === 'start'} onClick={this.setTemplate.bind(this, 'start')} size="large">Getting Started</Button_1.default>
                <Button_1.default shortcut={"c"} checked={state.template === 'comp'} onClick={this.setTemplate.bind(this, 'comp')} size="large">Components</Button_1.default>
                <Button_1.default onClick={this.setTemplate.bind(this, 'start')} size="large">Layout</Button_1.default>
                <Button_1.default size="large" href="http://www.github.com/jisaac89/recoil" right type="primary" target="_blank" icon="github">Grab Latest Version</Button_1.default>
              </Emerge_1.default>
            </Toolbar_1.default>
            <hr className="rainbow-line"/>
          </Layer_1.default>
          {(() => {
            if (state.template === 'start') {
                return null;
            }
            else if (state.template === 'comp') {
                return (<div className="h100 w100">
                  <Layer_1.default className="h100 w100" flex flow="row nowrap">
                    <Layer_1.default className="h100 w400px border-right" flex flow="column nowrap">
                        <Toolbar_1.default className="p10 border-bottom h50px">
                          <Input_1.default focusOnMount onChange={this.changeKeyword.bind(this)} block type="text" title="Find Components" icon="search"/>
                        </Toolbar_1.default>
                        <Layer_1.default scrollY className="h100 pb100">
                          <Grid_1.default hideHeader={true} dataSource={newComponentArray} onSelect={this.select.bind(this)} selected={this.state.selected} columns={columns} numberPerPage={18} openOnSelect={true} detailTemplate={this.detailTemplate.bind(this)}/>
                        </Layer_1.default>
                    </Layer_1.default>
                    <div className="h100 w100 p10">
                      <Wizard_1.default slideIndex={this.state.slideIndex}>
                        <Layer_1.default scrollY fill>
                          <TutorialAlign_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialButton_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialCard_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialCheckbox_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialDoor_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialDropdown_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialEmerge_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialGrid_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialInput_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialLayer_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialLoading_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialModal_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialPane_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialSelectable_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialShrink_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialToolbar_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialTransform_1.default {...state}/>
                        </Layer_1.default>
                        <Layer_1.default scrollY fill>
                          <TutorialWizard_1.default {...state}/>
                        </Layer_1.default>
                      </Wizard_1.default>
                    </div>
                  </Layer_1.default>
                </div>);
            }
        })()}
        </Layer_1.default>
      </Layer_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
