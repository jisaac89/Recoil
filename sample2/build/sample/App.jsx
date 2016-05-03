"use strict";
const React = require('react');
const Align_1 = require('../src/components/Align/Align');
const Button_1 = require('../src/components/Button/Button');
const Badge_1 = require('../src/components/Badge/Badge');
const Toolbar_1 = require('../src/components/Toolbar/Toolbar');
const Grid_1 = require('../src/components/Grid/Grid');
const Layer_1 = require('../src/components/Layer/Layer');
const Input_1 = require('../src/components/Input/Input');
const Wizard_1 = require('../src/components/Wizard/Wizard');
const Door_1 = require('../src/components/Door/Door');
const Emerge_1 = require('../src/components/Emerge/Emerge');
const Pane_1 = require('../src/components/Pane/Pane');
const Transform_1 = require('../src/components/Transform/Transform');
const Toggle_1 = require('../src/components/Toggle/Toggle');
const SampleData_1 = require('./SampleData');
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            mobile: false,
            nightMode: false,
            slideIndex: 0,
            facilityChecked: false,
            toggleCamera: false,
            toggleSideMenu: false,
            toggleSearchItem: false,
            toggleSample: false
        };
    }
    toggleSearchItem() {
        this.setState({
            toggleSearchItem: !this.state.toggleSearchItem
        });
    }
    toggleSlideIndex(n) {
        this.setState({
            slideIndex: n
        });
        if (n === 2) {
            this.setState({
                facilityChecked: true
            });
        }
    }
    toggleFacility() {
        this.setState({
            facilityChecked: !this.state.facilityChecked
        });
    }
    toggleSideMenu() {
        this.setState({
            toggleSideMenu: !this.state.toggleSideMenu
        });
    }
    toggleCamera() {
        this.setState({
            toggleCamera: !this.state.toggleCamera
        });
    }
    toggleSample() {
        this.setState({
            toggleSample: !this.state.toggleSample
        });
    }
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        let template = (item, index) => {
            return (<div>
          {item.item.name}
        </div>);
        };
        let toggleTemplate = (item, index) => {
            return (<div>
          <Toggle_1.default />
        </div>);
        };
        let columns = [
            { name: 'item', width: 300, template: template },
            { name: 'item', template: toggleTemplate }
        ];
        return (<Layer_1.default overflow scrollY fill className={state.nightMode ? 'e-NightMode' : ''}>
        <Door_1.default open={false}>
          <div className="p10">
            <h1 className="mb10">Qtag</h1>
            <Toolbar_1.default vertical spacing block>
              <Input_1.default block type="text" title="username" icon="user"/>
              <Input_1.default block type="text" title="password" icon="key"/>
              <Align_1.default margin={1} className="text-center">
                <Button_1.default block>Forgot</Button_1.default>
                <Button_1.default block type="primary">Log-in</Button_1.default>
              </Align_1.default>
            </Toolbar_1.default>
          </div>
        </Door_1.default>

        <Door_1.default open={true}>
          <Layer_1.default>
            <Pane_1.default open={state.toggleSideMenu} className="h100" direction="left">
              <Layer_1.default style={{ width: 250 }} type='light' className="p10 h100 border-right">
                <Toolbar_1.default vertical spacing block>
                  <Emerge_1.default exit={'fadeOut'} delay={80} if={this.state.toggleSideMenu}>
                    <Button_1.default ghost icon="barcode" block>Manage Items</Button_1.default>
                    <Button_1.default ghost icon="user" block>Manage User</Button_1.default>
                    <Button_1.default ghost icon="users" block>Manage Groups</Button_1.default>
                    <Button_1.default ghost icon="truck" block>Manage Suppliers</Button_1.default>
                    <Button_1.default ghost icon="bell" block>Manage Notifications</Button_1.default>
                  </Emerge_1.default>
                </Toolbar_1.default>
              </Layer_1.default>
            </Pane_1.default>
            <Transform_1.default type="translate" axis="X" amount="250px" if={state.toggleSideMenu}>
              <div>
                <Layer_1.default className="light p10">
                  <Toolbar_1.default>
                    <Button_1.default ghost onClick={this.toggleSideMenu.bind(this)} icon="bars"></Button_1.default>
                  </Toolbar_1.default>
                </Layer_1.default>
                <hr className="rainbow-line"/>
                <Door_1.default open={state.slideIndex !== 0}>
                  <div className="p10 border-bottom">
                    {(() => {
            if (state.slideIndex === 1) {
                return (<Toolbar_1.default noRadius>
                            <Button_1.default checked={true} size="small" onClick={this.toggleSlideIndex.bind(this, 0)} pointer="right">Order</Button_1.default>
                            <Button_1.default ghost size="small">Select Facility</Button_1.default>
                          </Toolbar_1.default>);
            }
            else if (state.slideIndex === 2) {
                return (<Toolbar_1.default noRadius>
                            <Button_1.default checked={true} pointer="right" size="small" onClick={this.toggleSlideIndex.bind(this, 0)}>Order</Button_1.default>
                            <Button_1.default checked={true} pointer="right" size="small" onClick={this.toggleSlideIndex.bind(this, 1)}>Scottsdale Dental</Button_1.default>
                            <Button_1.default ghost size="small" onClick={this.toggleSearchItem.bind(this)}>Select Item</Button_1.default>
                          </Toolbar_1.default>);
            }
        })()}
                  </div>
                </Door_1.default>
                <Wizard_1.default slideIndex={state.slideIndex}>
                  <Layer_1.default fill>
                    <Toolbar_1.default block className="ps10 pt20">
                      <Badge_1.default title={4} type="error" className="circle floatL"><Button_1.default left ghost icon="bell">Alerts</Button_1.default></Badge_1.default>
                      <Button_1.default right ghost icon="barcode">Scan a Item</Button_1.default>
                    </Toolbar_1.default>
                    <Toolbar_1.default vertical spacing block className="p10 text-center">
                      <Button_1.default size="large" block onClick={this.toggleSlideIndex.bind(this, 1)} icon="cart-plus">Order</Button_1.default>
                      <Button_1.default size="large" block icon="cart-plus">Stock</Button_1.default>
                    </Toolbar_1.default>
                  </Layer_1.default>
                  <Layer_1.default fill>
                    <Toolbar_1.default vertical spacing block className="p10 text-center">
                      <Emerge_1.default exit={'fadeOut'} delay={80} if={this.state.slideIndex === 1}>
                        <Button_1.default size="large" block>Chandler Dental</Button_1.default>
                        <Button_1.default checked={this.state.facilityChecked} onClick={this.toggleSlideIndex.bind(this, 2)} size="large" block>Scottsdale Dental</Button_1.default>
                        <Button_1.default size="large" block>Arcadia Dental</Button_1.default>
                      </Emerge_1.default>
                    </Toolbar_1.default>
                  </Layer_1.default>
                  <Layer_1.default fill>
                    <Toolbar_1.default vertical spacing block className="p10 text-center">
                    <Input_1.default size="large" type="text" icon="search" title="Search Item by ID or Keyword" block/>
                    <Door_1.default open={this.state.toggleSearchItem}>
                      <Layer_1.default>
                        <Grid_1.default hideHeader dataSource={SampleData_1.default} columns={columns}/>
                      </Layer_1.default>
                    </Door_1.default>
                    <Door_1.default open={!this.state.toggleSearchItem}>
                      <Layer_1.default>
                        <h2 className="mb20 mt10">OR</h2>
                        <Button_1.default onClick={this.toggleCamera.bind(this)} size="large" icon="barcode" type="error" block>Scan Barcode</Button_1.default>
                      </Layer_1.default>
                    </Door_1.default>
                    </Toolbar_1.default>
                  </Layer_1.default>
                </Wizard_1.default>
                <Pane_1.default fill direction="bottom" open={this.state.toggleCamera}>
                  <Layer_1.default fill type="dark">
                    <Pane_1.default direction="top" open={true}>
                      <Layer_1.default type="p10">
                        <Toolbar_1.default block textCenter>
                          <Button_1.default onClick={this.toggleCamera.bind(this)}>Close Camera</Button_1.default>
                        </Toolbar_1.default>
                      </Layer_1.default>
                    </Pane_1.default>
                  </Layer_1.default>
                </Pane_1.default>
              </div>
            </Transform_1.default>
          </Layer_1.default>
        </Door_1.default>
      </Layer_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
