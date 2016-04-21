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
import Avatar from '../src/components/Avatar/Avatar';

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
      toggleSample: false,
      selected: []
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
    } else if (n === 0) {
      this.setState({
        facilityChecked : false
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

  toggleSample(index) {
    var array = this.state.selected;
    if (array.includes(index)) {
      let i = array.indexOf(index);
      if(i != -1) {
      	array.splice(i, 1);
      }
      this.setState({
        selected: array
      })
    } else {
      array.push(index);
      this.setState({
        selected: array
      })
    }
  }

  detailTemplate(index, item) {
    return (
      <div className="p10">
        <Layer type="light" className="p10 border-bottom">
          <Toolbar block>
            <Button type="success" size="small">In Stock</Button>
            <Button right ghost type="primary" checked={this.state.selected.includes(item.index)} icon="cart-plus" size="small" onClick={this.toggleSample.bind(this, item.index)}>{this.state.selected.includes(item.index) ? 'Remove'  : 'Add to Cart'}</Button>
          </Toolbar>
        </Layer>
        <Layer type="light" className="p10">
          <small>{item.item.description}</small>
        </Layer>
      </div>
    )
  }

  onItemSearch(value) {
    if (value.length) {
      this.setState({
          toggleSearchItem: true
      })
    } else {
      this.setState({
        toggleSearchItem: false
      })
    }
  }

  clearSelectedItems() {
    this.setState({
      selected: []
    })
  }
  toggleNightMode() {
    this.setState({
      nightMode: !this.state.nightMode
    })
  }
  resetItems() {
    this.setState({
      selected:[],
      toggleSearchItem: false,
      facilityChecked: false,
      slideIndex:0
    })
  }
  render() {

    const self = this;
    const props = self.props;
    let state = self.state;
    let totalCart = [];

    for (let i = 0; i < SampleData.length; i++) {
      if (state.selected.includes(SampleData[i].index)) {
        totalCart.push(SampleData[i].price);
      }
    }

    let add = (a,b) => {
      return a + b;
    }

    let totalSum = totalCart.reduce(add, 0);

    let template = (item, index) => {
      return (
        <div>
          <Toolbar vertical>
            <Button ghost className="text-error p0">
              ${item.price}
            </Button>
            <small className="small p0">
              {item.item.name}
            </small>
          </Toolbar>
        </div>
      )
    }

    let toggleTemplate = (item, index) => {
      return <Avatar src={item.item.imageUrl}></Avatar>;
    }

    let columns = [
      {name: 'item', width:90, template: toggleTemplate},
      {name: 'item', template: template}
    ]

    let columnsCheckout = [
      {name: 'item', width:90, template: toggleTemplate},
      {name: 'item', template : template}
    ]

    return (
      <Layer overflow fill className={state.nightMode ? 'e-NightMode pt50' : 'pt50'}>

        <Layer overflow className="light p10 h50px posfix t0">
          <Toolbar block>
            <Door open={this.state.slideIndex !== 3 }>
              <Button ghost onClick={this.toggleSideMenu.bind(this)} icon="bars"></Button>
              {this.state.selected.length && this.state.slideIndex !== 4 ? <Emerge><Button right type="primary" onClick={this.toggleSlideIndex.bind(this, 3)} icon="shopping-cart">{this.state.selected.length}</Button></Emerge>: null}
              <Button ghost right icon="moon-o" className="mr5" onClick={this.toggleNightMode.bind(this)} />
            </Door>
            <Door open={this.state.slideIndex === 3}>
              <Layer className="light p5 text-center">
                <Emerge>
                  <h4>Checking out for <strong>Scottsdale Dental</strong></h4>
                </Emerge>
              </Layer>
            </Door>
            <Door open={this.state.slideIndex === 4}>
              <Layer className="light p5 text-center">
                <Emerge>
                  <h4>Succesfully checkout out for <strong>Scottsdale Dental</strong></h4>
                </Emerge>
              </Layer>
            </Door>
          </Toolbar>
        </Layer>
        <hr />

      <Layer overflow fill scrollY >
        <Pane open={state.toggleSideMenu} className="h100" direction="left">
          <Layer style={{width: 250}} type='light' className="p10 h100 border-right">
            <Toolbar vertical spacing block>
              <Emerge exit={'fadeOut'} delay={80} if={this.state.toggleSideMenu}>
                <Button checked={true} ghost icon="barcode" block>Dashboard</Button>
                <Button ghost icon="barcode" block>Manage Items</Button>
                <Button ghost icon="user" block>Manage User</Button>
                <Button ghost icon="user" block>Order History</Button>
                <Button ghost icon="user" block>Order Templates</Button>
                <Button ghost icon="truck" block>Manage Suppliers</Button>
                <Button ghost icon="bell" block>Manage Notifications</Button>
              </Emerge>
            </Toolbar>
          </Layer>
        </Pane>
        <Transform type="translate" axis="X" amount="250px" if={state.toggleSideMenu}>
          <Layer className="pb300">
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
                  } else if(state.slideIndex === 3) {
                    return (
                      <Toolbar noRadius>
                        <Button checked={true} pointer="right" size="small" onClick={this.toggleSlideIndex.bind(this, 2)}>Order</Button>
                        <Button ghost size="small" onClick={this.toggleSearchItem.bind(this)}>Checkout</Button>
                      </Toolbar>
                    )
                  } else if(state.slideIndex === 4) {
                    return (
                      <Toolbar noRadius>
                        <Button checked={true} pointer="right" size="small" onClick={this.resetItems.bind(this)}>Dashboard</Button>
                      </Toolbar>
                    )
                  }
                })()}
              </div>
            </Door>
            <Wizard slideIndex={state.slideIndex}>

              <Emerge>
                <Toolbar block className="ps10 pt20">
                  <Badge title={4} type="error" className="circle floatL">
                    <Button ghost size="small" left  icon="bell">Alerts</Button>
                  </Badge>
                  <Button ghost size="small" right  icon="barcode">Scan a Item</Button>
                </Toolbar>
                <div className="p10 pt15 text-center">
                  <Toolbar vertical spacing block>
                    <Button size="large" block onClick={this.toggleSlideIndex.bind(this, 1)}>
                      Order
                    </Button>
                    <Button size="large" block>
                      Stock
                    </Button>
                  </Toolbar>
                </div>
              </Emerge>

              <Toolbar vertical spacing block className="p10 text-center">
                <Emerge exit={'fadeOut'} delay={80} if={this.state.slideIndex === 1}>
                  <Button size="large" block>Chandler Dental</Button>
                  <Button checked={this.state.facilityChecked} onClick={this.toggleSlideIndex.bind(this, 2)} size="large" block>Scottsdale Dental</Button>
                  <Button size="large" block>Arcadia Dental</Button>
                </Emerge>
              </Toolbar>

              <div>
                <Toolbar vertical block className="p10 text-center">
                  <Input size="large" type="text" icon="search" onChange={this.onItemSearch.bind(this)} title="Search Item by ID or Keyword" block />
                  <Door open={!this.state.toggleSearchItem}>
                    <h3 className="mtb20">OR</h3>
                    <Button onClick={this.toggleCamera.bind(this)} size="large" icon="barcode" ghost type="primary" block>Scan Barcode</Button>
                  </Door>
                </Toolbar>

                <Door overflow={true} open={this.state.toggleSearchItem}>
                  <Grid
                    hideHeader
                    detailTemplate={this.detailTemplate.bind(this)}
                    detailTemplateOpenOnRowSelect
                    dataSource={SampleData}
                    columns={columns}
                    selected={this.state.selected}
                    selectedKey={'index'}
                  />
                </Door>
              </div>

              <Emerge if={this.state.slideIndex === 3}>
                  <h1 className="p10 text-center">
                    Order Total <span className="text-error">${totalSum}</span>.
                  </h1>
                  <Grid
                    hideHeader
                    dataSource={SampleData}
                    columns={columnsCheckout}
                    filterSelected={true}
                    selected={this.state.selected}
                    selectedKey={'index'}
                  />
              </Emerge>

              <Emerge if={this.state.slideIndex === 4}>
                <Layer>
                  <h1 className="p10 text-center">
                    Order successfully placed.
                  </h1>
                  <Toolbar textCenter block vertical spacing className="p10">
                    <Emerge if={this.state.slideIndex === 4}>
                      <Button onClick={this.resetItems.bind(this)} block size="large">Go Back</Button>
                    </Emerge>
                  </Toolbar>
                </Layer>
              </Emerge>

            </Wizard>
          </Layer>
        </Transform>
      </Layer>

      <Pane fill direction="bottom" open={this.state.toggleCamera}>
        <Pane direction="top" open={true}>
          <Layer type="p10">
            <Toolbar block textCenter>
              <Button onClick={this.toggleCamera.bind(this)}>Close Camera</Button>
            </Toolbar>
          </Layer>
        </Pane>
      </Pane>

      <Pane direction="bottom" open={this.state.selected.length === 0 && (state.slideIndex === 2 || state.slideIndex === 1)}>
        <Toolbar textCenter block vertical spacing className="light p10 border-top">
          <Button onClick={this.toggleSlideIndex.bind(this, state.slideIndex - 1)} size="large" block>
            Go Back
          </Button>
        </Toolbar>
      </Pane>

      <Pane direction="bottom" open={this.state.selected.length && state.slideIndex === 2}>
        <Toolbar textCenter block vertical spacing className="light p10 border-top">
          <Button onClick={this.toggleSlideIndex.bind(this, 3)} size="large" ghost block type="primary">
            Proceed to Checkout
          </Button>
          <Button onClick={this.clearSelectedItems.bind(this)} size="large" block>
            Clear All
          </Button>
        </Toolbar>
      </Pane>

      <Pane direction="bottom" open={this.state.selected.length && state.slideIndex === 3}>
        <Layer type="light p10 border-top" fill>
          <Toolbar textCenter block vertical spacing>
            <Button onClick={this.toggleSlideIndex.bind(this, 4)} type="primary" block size="large">Confirm and Send Order</Button>
            <Button onClick={this.toggleSlideIndex.bind(this, 2)} block size="large">Cancel</Button>
          </Toolbar>
        </Layer>
      </Pane>
      </Layer>
    )
  }
}
