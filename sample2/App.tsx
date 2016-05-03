/// <reference path="../typings/main.d.ts" />

import * as React from 'react';


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

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;
    
    return (
      <div>
      hello
      </div>
    )
  }
}
