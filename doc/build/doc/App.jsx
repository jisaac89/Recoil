"use strict";
var React = require('react');
var Button_1 = require('../src/components/Button/Button');
var Toolbar_1 = require('../src/components/Toolbar/Toolbar');
var Layer_1 = require('../src/components/Layer/Layer');
var Input_1 = require('../src/components/Input/Input');
var Door_1 = require('../src/components/Door/Door');
var Emerge_1 = require('../src/components/Emerge/Emerge');
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            mobile: false,
            nightMode: false,
            viewDocumentation: false
        };
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
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        return (<Layer_1.default fill flex flow="column wrap" className={state.nightMode ? 'e-NightMode' : ''}>
        <Door_1.default className="w100" open={state.viewDocumentation}>
          <div className="p10 w100 border-bottom clearfix">
            <h1 className="pull-left">React <strong>Recoil</strong></h1>
            <Toolbar_1.default spacing right>
              <Button_1.default shortcut="g" onClick={this.toggleDocumentation.bind(this)}>
                Get Started
              </Button_1.default>
              <Button_1.default icon="star" type="primary">
                Git Latest Version
              </Button_1.default>
            </Toolbar_1.default>
          </div>
        </Door_1.default>
        <Door_1.default className="w100" open={!state.viewDocumentation}>
          <div className="w100">
            <Layer_1.default className="text-center w100 pt50 pb50 light">
              <Emerge_1.default>
                <div>
                  <img width={300} height={193} className="floatL" src={'./img/Recoil.png'}/>
                </div>
                <div>
                  <h1 className='super mt50'>REACT <strong>RECOIL</strong></h1>
                    <p>
                      A <a target="_blank" href="https://facebook.github.io/react/" title="React JS">React</a> powered front-end framework written in
                      <a target="_blank" href="http://www.typescriptlang.org/" title="TypeScript"> TypeScript</a>
                    </p>
                </div>
                <Toolbar_1.default className="mt50" spacing>
                  <Button_1.default shortcut="n" size="large" onClick={this.toggleNightMode.bind(this)} icon="moon-o"></Button_1.default>
                  <Button_1.default shortcut="d" onClick={this.toggleDocumentation.bind(this)} size="large">Documentation</Button_1.default>
                  <Button_1.default href={'https://www.github.com/jisaac89/recoil'} icon="github" type="primary" size="large">Grab Latest Version</Button_1.default>
                </Toolbar_1.default>
              </Emerge_1.default>
            </Layer_1.default>
            <hr className="rainbow-line"/>
          </div>
        </Door_1.default>
        <Door_1.default open={state.viewDocumentation}>
          <div className="p10 w100">
            <Input_1.default icon="th" block focusOnMount={state.viewDocumentation} type="text" title="Find Components"/>
          </div>
        </Door_1.default>
      </Layer_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
