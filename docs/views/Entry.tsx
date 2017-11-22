import * as React from 'react';

import { Align, Recoil, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink } from '../../src/index';

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
      nightmode: false,
      showDocs: false
    }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  toggleDocs() {
    this.setState({
      showDocs: !this.state.showDocs
    })
  }

  toggleNightMode() {
    this.setState({
      nightmode: !this.state.nightmode,
    })
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
      showMenu: this.state.mobile ? false : !this.state.showMenu
    })
  }

  toggleMobile(isMobile) {
    this.setState({
      mobile: isMobile,
      showMenu: false
    })
  }

  gotoSlideIndex(item) {
    this.setState({
      slideIndex: item.index,
      showMenu: this.state.mobile ? false : true,
      showModal: false
    })
  }

  render() {

    let { showModal, showMenu, nightmode, slideIndex, mobile } = this.state;
    return (
      <Recoil overflow nightmode={nightmode} onMobile={this.toggleMobile.bind(this)}>
        <Shrink fill if={showModal}>
          <Transform type={mobile ? "translate" : null} push={!mobile ? 'left' : null} axis={'X'} flex fill if={this.state.showMenu} amount="300px" >
            <SlideIn className='z5' if={!showModal} from={'top'}>
              <Layer fill theme="light">
                <Toolbar size="small" block className="p10 border-bottom">
                  {this.state.mobile ? <Button simple icon="bars" onClick={this.toggleMenu.bind(this)} /> : null}
                  <h1 className="dinblock"><strong>Recoil</strong> <small>0.5.3</small></h1>
                  <Button href="https://www.github.com/jisaac89/recoil" theme="error" right icon="github">github</Button>
                  <Button shortcut="h" onClick={this.toggleDocs.bind(this)} right icon="download" className="mr5"></Button>
                  <Button shortcut="n" onClick={this.toggleNightMode.bind(this)} right icon="moon-o" className="mr5"></Button>
                </Toolbar>
                <hr />
              </Layer>
            </SlideIn>
            <Layer fill overflow className="ps5 pt50 z4">
              <Wizard fill flex slideIndex={slideIndex}>
                <TutorialAlign />
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
            <Button shortcut={'C'} block className="text-center mb10">Component List</Button>
            <Table
              dataSource={SampleData}
              pageSize={SampleData.length}
              columns={[{ name: 'name' }]}
              hideHeader
              onRowSelect={this.gotoSlideIndex.bind(this)}
              selectedElements={[this.state.slideIndex]}
              selectedKey='index'
              searchableKeys={['name']}
              searchTitle="Find a Component, e.g Table..."
            />
          </Layer>
        </SlideIn>


        <SlideIn className="z5" if={!this.state.showDocs} from="bottom" fill>

          <Layer flexCenter theme="light" className="p10" fill>
            
              <h2 className="pb20">React Recoil <small>0.5.3</small></h2>

              <Toolbar spacing className="pb20 dinblock">
                <Button shortcut="n" onClick={this.toggleNightMode.bind(this)} icon="moon-o" ></Button>
                <Button onClick={this.toggleDocs.bind(this)} className="ps40" theme="primary" icon="star" iconPointer="down">
                  View Component List
                </Button>
                <Button href="https://www.github.com/jisaac89/recoil" icon="github"></Button>
              </Toolbar>

              <Layer>
                <small>To build Recoil's documentation, clone it from GitHub. </small><br/>
                <small><strong>git clone https://github.com/jisaac89/recoil.git</strong> </small><br/><br/>
                

                <small>Then cd into project </small><br/>
                <small><strong> cd recoil</strong></small><br/><br/>


                <small>Then install the npm dependencies </small><br/>
                <small><strong> npm install</strong></small><br/><br/>
                <small>Then run the project </small><br/>

                <small><strong>npm run watch</strong></small><br/><br/>
                <small>Launch the documentation in your browser. It should be located at <br/><strong>recoil/docs/index.html</strong></small>
              </Layer>
          </Layer>

        </SlideIn>
      </Recoil>
    )
  }
}