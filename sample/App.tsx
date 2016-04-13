/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

import Align from '../src/components/Align/Align';
import Button from '../src/components/Button/Button';
import Badge from '../src/components/Badge/Badge';
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

import SampleData from './SampleData';

export default class App extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      mobile: false,
      nightMode: false,
      slideIndex: 0,
      facilityChecked : false,
      toggleCamera: false,
      toggleSideMenu: false,
      toggleSearchItem : false,
      toggleSample: false
    }
  }

  toggleSearchItem() {
    this.setState({
      toggleSearchItem: !this.state.toggleSearchItem
    })
  }

  toggleSlideIndex(n) {
    this.setState({
      slideIndex: n
    })

    if (n === 2) {
      this.setState({
        facilityChecked : true
      })
    }
  }

  toggleFacility() {
    this.setState({
      facilityChecked: !this.state.facilityChecked
    })
  }

  toggleSideMenu() {
    this.setState({
      toggleSideMenu: !this.state.toggleSideMenu
    })
  }

  toggleCamera() {
    this.setState({
      toggleCamera: !this.state.toggleCamera
    })
  }

  toggleSample() {
    this.setState({
      toggleSample: !this.state.toggleSample
    })
  }
  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let template = (item, index) => {
      return (
        <div>
          {item.item.name}
        </div>
      )
    }
    let toggleTemplate = (item, index) => {
      return (
        <div>
          <Toggle />
        </div>
      )
    }

    let columns = [
      {name: 'item', width:300, template : template},
      {name: 'item', template: toggleTemplate}
    ]

    return (
      <Layer overflow scrollY fill className={state.nightMode ? 'e-NightMode' : ''}>
        <Door open={false}>
          <div className="p10">
            <h1 className="mb10">Qtag</h1>
            <Toolbar vertical spacing block>
              <Input block type="text" title="username" icon="user" />
              <Input block type="text" title="password" icon="key" />
              <Align margin={1} className="text-center">
                <Button block>Forgot</Button>
                <Button block type="primary">Log-in</Button>
              </Align>
            </Toolbar>
          </div>
        </Door>

        <Door open={true}>
          <Layer overflow>
            <Pane open={state.toggleSideMenu} className="h100" direction="left">
              <Layer style={{width: 250}} type='light' className="p10 h100 border-right">
                <Toolbar vertical spacing block>
                  <Emerge exit={'fadeOut'} delay={80} if={this.state.toggleSideMenu}>
                    <Button ghost icon="barcode" block>Manage Items</Button>
                    <Button ghost icon="user" block>Manage User</Button>
                    <Button ghost icon="users" block>Manage Groups</Button>
                    <Button ghost icon="truck" block>Manage Suppliers</Button>
                    <Button ghost icon="bell" block>Manage Notifications</Button>
                  </Emerge>
                </Toolbar>
              </Layer>
            </Pane>
            <Transform type="translate" axis="X" amount="250px" if={state.toggleSideMenu}>
              <div>
                <Layer className="light p10">
                  <Toolbar>
                    <Button ghost onClick={this.toggleSideMenu.bind(this)} icon="bars"></Button>
                  </Toolbar>
                </Layer>
                <hr className="rainbow-line" />
                <Door open={state.slideIndex !== 0}>
                  <div className="p10 border-bottom">
                    {(()=>{
                      if (state.slideIndex === 1) {
                        return (
                          <Toolbar noRadius>
                            <Button checked={true} size="small" onClick={this.toggleSlideIndex.bind(this, 0)} pointer="right">Order</Button>
                            <Button ghost size="small">Select Facility</Button>
                          </Toolbar>
                        )
                      } else if(state.slideIndex === 2) {
                        return (
                          <Toolbar noRadius>
                            <Button checked={true} pointer="right" size="small" onClick={this.toggleSlideIndex.bind(this, 0)}>Order</Button>
                            <Button checked={true} pointer="right" size="small" onClick={this.toggleSlideIndex.bind(this, 1)}>Scottsdale Dental</Button>
                            <Button ghost size="small" onClick={this.toggleSearchItem.bind(this)}>Select Item</Button>
                          </Toolbar>
                        )
                      }
                    })()}
                  </div>
                </Door>
                <Wizard slideIndex={state.slideIndex}>




                  <Layer fill>
                    <Toolbar block className="ps10 pt20">
                      <Badge title={4} type="error" className="circle floatL"><Button left ghost icon="bell">Alerts</Button></Badge>
                      <Button right ghost icon="barcode">Scan a Item</Button>
                    </Toolbar>
                    <Toolbar vertical spacing block className="p10 text-center">
                      <Button size="large" block onClick={this.toggleSlideIndex.bind(this, 1)} icon="cart-plus">Order</Button>
                      <Button size="large" block icon="cart-plus">Stock</Button>
                    </Toolbar>
                  </Layer>




                  <Layer fill>
                    <Toolbar vertical spacing block className="p10 text-center">
                      <Emerge exit={'fadeOut'} delay={80} if={this.state.slideIndex === 1}>
                        <Button size="large" block>Chandler Dental</Button>
                        <Button checked={this.state.facilityChecked} onClick={this.toggleSlideIndex.bind(this, 2)} size="large" block>Scottsdale Dental</Button>
                        <Button size="large" block>Arcadia Dental</Button>
                      </Emerge>
                    </Toolbar>
                  </Layer>




                  <Layer fill>
                    <Toolbar vertical spacing block className="p10 text-center">
                    <Input size="large" type="text" icon="search" title="Search Item by ID or Keyword" block />
                    <Door open={this.state.toggleSearchItem}>
                      <Layer>
                        <Grid hideHeader dataSource={SampleData} columns={columns}/>
                      </Layer>
                    </Door>
                    <Door open={!this.state.toggleSearchItem}>
                      <Layer>
                        <h2 className="mb20 mt10">OR</h2>
                        <Button onClick={this.toggleCamera.bind(this)} size="large" icon="barcode" type="error" block>Scan Barcode</Button>
                      </Layer>
                    </Door>
                    </Toolbar>
                  </Layer>




                </Wizard>
                <Pane fill direction="bottom" open={this.state.toggleCamera}>
                  <Layer fill type="dark">
                    <Pane direction="top" open={true}>
                      <Layer type="p10">
                        <Toolbar block textCenter>
                          <Button onClick={this.toggleCamera.bind(this)}>Close Camera</Button>
                        </Toolbar>
                      </Layer>
                    </Pane>
                  </Layer>
                </Pane>
              </div>
            </Transform>
          </Layer>
        </Door>
      </Layer>
    )
  }
}
