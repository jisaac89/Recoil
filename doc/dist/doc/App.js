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
        return (React.createElement("div", {key: index, className: "p10 pl50"}, 
            React.createElement("small", null, item.component.description), 
            (() => {
                if (this.state.mobile) {
                    return (React.createElement("div", {className: "mtb10"}, 
                        React.createElement(Button_1.default, {icon: "eye", type: "primary", size: "small", onClick: this.toggleMobileTutorial.bind(this)}, "View Documentation")
                    ));
                }
            })()));
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
        let template = (item, index) => {
            return item.component.name;
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
        let MobileVersion = () => {
            return (React.createElement(Layer_1.default, {fill: true}, 
                React.createElement(Pane_1.default, {open: this.state.toggleMobileTutorial === 1, direction: "left", className: "h100 w200px"}, 
                    React.createElement(Layer_1.default, {fill: true, type: "light", className: "p10"}, 
                        React.createElement(Input_1.default, {className: "mb10", block: true, onChange: this.filterComponentMenu.bind(this), type: "text", placeholder: "Find Components"}), 
                        React.createElement(Grid_1.default, {hideHeader: true, dataSource: newComponentArray, columns: columns, numberPerPage: 19, onRowSelect: this.gotoTutorial.bind(this), selected: [this.state.slideIndex], selectedKey: 'index'}))
                ), 
                React.createElement(Transform_1.default, {type: "translate", axis: 'X', amount: '200px', if: this.state.toggleMobileTutorial === 1}, 
                    React.createElement("div", {className: "p10 border-bottom"}, 
                        React.createElement(Button_1.default, {pointer: "left", type: "primary", size: "small", onClick: this.toggleMobileTutorial.bind(this)}, "Back to components")
                    ), 
                    React.createElement(Wizard_1.default, {mobile: true, slideIndex: state.slideIndex}, 
                        React.createElement(TutorialAlign_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialButton_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialCard_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialCheckbox_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialDoor_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialDropdown_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialEmerge_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialGrid_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialInput_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialLayer_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialLoading_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialModal_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialPane_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialSelectable_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialShrink_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialToggle_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialToolbar_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialTransform_1.default, React.__spread({}, state)), 
                        React.createElement(TutorialWizard_1.default, React.__spread({}, state))))));
        };
        return (React.createElement(Layer_1.default, {scrollY: true, fill: true, className: state.nightMode ? 'e-NightMode' : ''}, 
            React.createElement(Door_1.default, {className: "w100", open: state.viewDocumentation}, 
                React.createElement(Layer_1.default, {block: true, style: { height: 60 }}, 
                    React.createElement("div", {className: "p10 w100 clearfix"}, 
                        React.createElement(Emerge_1.default, {if: state.viewDocumentation}, 
                            React.createElement("h1", {className: "pull-left"}, 
                                "React ", 
                                React.createElement("strong", null, "Recoil")), 
                            (() => {
                                if (this.state.mobile) {
                                    return (React.createElement(Toolbar_1.default, {spacing: true, right: true}, 
                                        React.createElement(Button_1.default, {shortcut: "n", onClick: this.toggleNightMode.bind(this), icon: "moon-o"}), 
                                        React.createElement(Button_1.default, {shortcut: "g", onClick: this.toggleDocumentation.bind(this)}, "Start")));
                                }
                                else {
                                    return (React.createElement(Toolbar_1.default, {spacing: true, right: true}, 
                                        React.createElement(Button_1.default, {shortcut: "n", onClick: this.toggleNightMode.bind(this), icon: "moon-o"}), 
                                        React.createElement(Button_1.default, {shortcut: "g", onClick: this.toggleDocumentation.bind(this)}, "Get Started"), 
                                        React.createElement(Button_1.default, {href: 'https://www.github.com/jisaac89/recoil', icon: "star", type: "primary"}, "Grab Latest Version")));
                                }
                            })())
                    ), 
                    React.createElement("hr", {className: "rainbow-line"}))
            ), 
            React.createElement(Door_1.default, {className: "w100", open: !state.viewDocumentation}, 
                React.createElement("div", {className: "w100"}, 
                    React.createElement(Layer_1.default, {className: "text-center w100 pt50 pb50 light"}, 
                        React.createElement(Emerge_1.default, null, 
                            React.createElement("div", null, 
                                React.createElement("img", {width: 300, height: 193, className: "floatL", src: './img/recoil.png'})
                            ), 
                            React.createElement("div", null, 
                                React.createElement("h1", {className: 'super mt50'}, 
                                    "REACT ", 
                                    React.createElement("strong", null, "RECOIL")), 
                                React.createElement("p", null, 
                                    "A ", 
                                    React.createElement("a", {target: "_blank", href: "https://facebook.github.io/react/", title: "React JS"}, "React"), 
                                    " powered front-end framework written in ", 
                                    React.createElement("a", {target: "_blank", href: "http://www.typescriptlang.org/", title: "TypeScript"}, " TypeScript"))), 
                            (() => {
                                if (this.state.mobile) {
                                    return (React.createElement(Toolbar_1.default, {spacing: true, vertical: true, className: "mt50"}, 
                                        React.createElement(Button_1.default, {block: true, shortcut: "n", size: "large", onClick: this.toggleNightMode.bind(this), icon: "moon-o"}, "Night Mode"), 
                                        React.createElement(Button_1.default, {block: true, shortcut: "d", onClick: this.toggleDocumentation.bind(this), size: "large"}, "Documentation"), 
                                        React.createElement(Button_1.default, {block: true, href: 'https://www.github.com/jisaac89/recoil', icon: "github", type: "primary", size: "large"}, "Grab Latest Version")));
                                }
                                else {
                                    return (React.createElement(Toolbar_1.default, {className: "mt50", spacing: true}, 
                                        React.createElement(Button_1.default, {shortcut: "n", size: "large", onClick: this.toggleNightMode.bind(this), icon: "moon-o"}), 
                                        React.createElement(Button_1.default, {shortcut: "d", onClick: this.toggleDocumentation.bind(this), size: "large"}, "Documentation"), 
                                        React.createElement(Button_1.default, {href: 'https://www.github.com/jisaac89/recoil', icon: "github", type: "primary", size: "large"}, "Grab Latest Version")));
                                }
                            })())
                    ), 
                    React.createElement("hr", {className: "rainbow-line"}))
            ), 
            React.createElement(Door_1.default, {overflow: true, className: "w100 mb100", open: state.viewDocumentation}, 
                React.createElement(Layer_1.default, null, (() => {
                    if (this.state.mobile) {
                        return MobileVersion();
                    }
                    else {
                        return (React.createElement("div", null, 
                            React.createElement(Pane_1.default, {open: self.state.toggleSideMenu, className: "W400px", direction: "left"}, 
                                React.createElement("div", {className: "p10 border-right"}, 
                                    React.createElement(Input_1.default, {className: "mb10", icon: "th", block: true, focusOnMount: state.viewDocumentation, focusDelay: 1000, onChange: this.filterComponentMenu.bind(this), type: "text", title: "Find Components"}), 
                                    React.createElement(Grid_1.default, {hideHeader: true, dataSource: newComponentArray, columns: columns, numberPerPage: 19, onRowSelect: this.gotoTutorial.bind(this), selected: [this.state.slideIndex], selectedKey: 'index', detailTemplate: this.detailTemplate.bind(this), detailTemplateOpenOnSelect: true}))
                            ), 
                            React.createElement(Transform_1.default, {push: "left", if: self.state.toggleSideMenu, amount: '400px'}, 
                                React.createElement("div", {className: "p10"}, 
                                    React.createElement(Toolbar_1.default, {block: true, className: "border-bottom"}, 
                                        React.createElement(Button_1.default, {size: "small", className: "mb10", pointer: "left", icon: "bars", onClick: this.toggleSideMenu.bind(this)}, self.state.toggleSideMenu ? 'Hide Side Menu' : 'Show Side Menu')
                                    ), 
                                    React.createElement(Wizard_1.default, {animate: false, slideIndex: state.slideIndex}, 
                                        React.createElement(TutorialAlign_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialButton_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialCard_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialCheckbox_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialDoor_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialDropdown_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialEmerge_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialGrid_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialInput_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialLayer_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialLoading_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialModal_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialPane_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialSelectable_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialShrink_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialToggle_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialToolbar_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialTransform_1.default, React.__spread({}, state)), 
                                        React.createElement(TutorialWizard_1.default, React.__spread({}, state))))
                            )));
                    }
                })())
            ), 
            (() => {
                if (this.state.mobile && state.viewDocumentation) {
                    return (React.createElement(Pane_1.default, {open: this.state.toggleMobileTutorial === 0 && this.state.mobile, direction: "bottom"}, 
                        React.createElement(Layer_1.default, {fill: true, className: "w100 light p10 shadow"}, 
                            React.createElement(Toolbar_1.default, {textCenter: true, flex: true, block: true}, 
                                (() => {
                                    if (SampleData_1.default[this.state.slideIndex - 1]) {
                                        return (React.createElement(Button_1.default, {ghost: true, block: true, icon: "chevron-left", onClick: this.gotoTutorial.bind(this, SampleData_1.default[this.state.slideIndex - 1])}, SampleData_1.default[this.state.slideIndex - 1].component.name));
                                    }
                                })(), 
                                React.createElement(Button_1.default, {ghost: true, className: "ml5", block: true, icon: "chevron-right", onClick: this.gotoTutorial.bind(this, SampleData_1.default[this.state.slideIndex + 1]), right: true}, SampleData_1.default[this.state.slideIndex + 1].component.name))
                        )
                    ));
                }
            })()));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=App.js.map