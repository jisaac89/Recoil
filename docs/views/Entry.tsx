import * as React from 'react';

import {Align, Recoil, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../src/index';

import TutorialButton from './tutorial/TutorialButton';
import TutorialAlign from './tutorial/TutorialAlign';
import TutorialCheckbox from './tutorial/TutorialCheckbox';
import TutorialOpen from './tutorial/TutorialOpen';
import TutorialDropdown from './tutorial/TutorialDropdown';
import TutorialEmerge from './tutorial/TutorialEmerge';
import TutorialTable from './tutorial/TutorialTable';
import TutorialInput from './tutorial/TutorialInput';
import TutorialLayer from './tutorial/TutorialLayer';
import TutorialLoading from './tutorial/TutorialLoading';
import TutorialModal from './tutorial/TutorialModal';
import TutorialSlideIn from './tutorial/TutorialSlideIn';
import TutorialSelectable from './tutorial/TutorialSelectable';
import TutorialShrink from './tutorial/TutorialShrink';
import TutorialToggle from './tutorial/TutorialToggle';
import TutorialToolbar from './tutorial/TutorialToolbar';
import TutorialTransform from './tutorial/TutorialTransform';
import TutorialWizard from './tutorial/TutorialWizard';

import TutorialCalendar from './tutorial/TutorialCalendar';
import TutorialDatePicker from './tutorial/TutorialDatePicker';
import TutorialRecoil from './tutorial/TutorialRecoil';
import TutorialStepper from './tutorial/TutorialStepper';

import SampleData from './tutorial/SampleData';

export default class App extends React.Component<any, any> {

  constructor() {
    super();

    this.state = {
      slideIndex: 0,
      showMenu: true,
      showModal: false,
      nightmode: false
    }
  }

  toggleMenu() {
    this.setState({
      showMenu : !this.state.showMenu
    })
  }

  toggleNightMode() {
    this.setState({
      nightmode : !this.state.nightmode,
    })
  }

  toggleModal(){
      this.setState({
        showModal :!this.state.showModal,
        showMenu :  this.state.mobile ? false : !this.state.showMenu
      })
  }

  toggleMobile(isMobile){
    this.setState({
      mobile: isMobile,
      showMenu:false
    })
  }

  gotoSlideIndex(item) {
    this.setState({
      slideIndex : item.index,
      showMenu: this.state.mobile ? false : true,
      showModal: false
    })
  }

  render() {

    let {showModal, showMenu, nightmode, slideIndex, mobile} = this.state;
    return (
      <Recoil nightmode={nightmode} onMobile={this.toggleMobile.bind(this)}>
        <Shrink fill if={showModal}>
          <Transform type={mobile ? "translate" : null} push={!mobile ? 'left' : null} axis={'X'} flex fill if={this.state.showMenu} amount="300px" >
            <SlideIn className='z5' if={!showModal} from={'top'}>
              <Layer fill theme="light">
                <Toolbar size="small" block className="p10 border-bottom">
                  {this.state.mobile ? <Button simple icon="bars" onClick={this.toggleMenu.bind(this)} /> : null}
                  <h1 className="dinblock">Recoil</h1>
                  <Button href="https://www.github.com/jisaac89/recoil" theme="error" right icon="github">github</Button>
                  <Button onClick={this.toggleNightMode.bind(this)} right icon="moon-o" className="mr5"></Button>
                </Toolbar>
                <hr />  
              </Layer>
            </SlideIn>
            <Layer fill overflow className="ps5 ptb50 z4">
              <Wizard fill flex slideIndex={slideIndex}>
                <TutorialAlign  />
                <TutorialButton mobile={mobile}></TutorialButton>
                <TutorialCalendar mobile={mobile}></TutorialCalendar>
                <TutorialCheckbox ></TutorialCheckbox>
                <TutorialDatePicker mobile={mobile}></TutorialDatePicker>
                <TutorialDropdown mobile={mobile}></TutorialDropdown>
                <TutorialEmerge ></TutorialEmerge>
                <TutorialInput></TutorialInput>
                <TutorialLayer></TutorialLayer>
                <TutorialLoading></TutorialLoading>
                <TutorialModal toggleModal={this.toggleModal.bind(this)}></TutorialModal>
                <TutorialOpen ></TutorialOpen>
                <TutorialRecoil mobile={mobile}></TutorialRecoil>
                <TutorialSelectable></TutorialSelectable>
                <TutorialShrink></TutorialShrink>
                <TutorialSlideIn></TutorialSlideIn>
                <TutorialStepper />
                <TutorialTable></TutorialTable>
                <TutorialToggle></TutorialToggle>
                <TutorialToolbar></TutorialToolbar>
                <TutorialTransform></TutorialTransform>
                <TutorialWizard></TutorialWizard>
              </Wizard>    
            </Layer>
            <SlideIn className='z5' if={!showModal && showMenu === false && showModal === false} from={'bottom'}>
              <Layer fill nightmode>
                <Toolbar textCenter flex spacing block className="p10 border-top">
                  {SampleData[slideIndex - 1] ? <Button block onClick={this.gotoSlideIndex.bind(this, SampleData[slideIndex - 1])}>{SampleData[slideIndex - 1].name}</Button> : null}
                  {SampleData[slideIndex + 1] ? <Button block right onClick={this.gotoSlideIndex.bind(this, SampleData[slideIndex + 1])}>{SampleData[slideIndex + 1].name}</Button> : null}
                </Toolbar>
              </Layer>
            </SlideIn>
          </Transform>
        </Shrink>
        <SlideIn if={this.state.showMenu} from="left" className={mobile ? "w300px h100" : "w300px h100 pt50"}>
          <Layer fill nightmode scrollY className="p10">
            <Table
              dataSource={SampleData}
              pageSize={SampleData.length}
              columns={[{name: 'name'}]}
              hideHeader
              onRowSelect={this.gotoSlideIndex.bind(this)}
              selectedElements={[this.state.slideIndex]}
              selectedKey='index'
              searchableKeys={['name']}
              searchTitle="Find a Component, e.g Table..."
            />
          </Layer>
        </SlideIn>
      </Recoil>
    )
  }
}