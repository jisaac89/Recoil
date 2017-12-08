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
      showDocs: false,
      showInstructions: false
    }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  toggleInstructions() {
    this.setState({
      showInstructions: !this.state.showInstructions
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
        <TutorialCalendar mobile={mobile}></TutorialCalendar>
      </Recoil>
    )
  }
}