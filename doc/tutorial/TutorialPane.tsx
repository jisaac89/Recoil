import * as React from 'react';

import { Align, Button, Card, Checkbox, Door, Dropdown, Emerge, Grid, Input, Layer, Loading, Modal, Pane, Selectable, Shrink, Toolbar, Transform, Wizard } from 'react-recoil';

const PaneProperties = [
  {
    name :'wrapper',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the pane has a wrapper element surrounding it.'
  },
  {
    name :'open',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the pane is open.'
  },
  {
    name :'fill',
    type: 'boolean',
    options: 'true, false',
    description: 'Give the pane element a height and width of 100%.'
  },
  {
    name :'direction',
    type: 'string',
    options: '',
    description: 'Defines the direction the pane slides in from.'
  },
  {
    name :'offset',
    type: 'string, number',
    options: '',
    description: 'Defines the starting offset of the pane.'
  },
  {
    name :'wrapperClick',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines a function the runs when the user clicks the pane wrapper.'
  }
]

export default class TutorialPane extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false,
      paneOpen: false
    }
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      showProps: this.state.showProps ? false : true
    })
  }

  toggleShowVideo() {
    this.setState({
      showProps: false,
      showVideo: this.state.showVideo ? false : true
    })
  }

  togglePane() {
    this.setState({
      paneOpen: this.state.paneOpen ? false : true
    })
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    const columns = [
      {name: 'name', width:250},
      {name: 'type', width:300},
      {name: 'options', width:250},
      {name: 'description'}
    ]

    return (
      <Emerge>
        <Layer>

          <h1>Pane</h1>

          <Layer className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The Pane slides in an element if a certain event happens, user must state the direction as well.</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer className="ptb10">
              <Layer overflow className="p10 dark text-center w100 h200px">
                <Button onClick={this.togglePane.bind(this)}>Toggle Pane</Button>
                <Pane direction='bottom' open={this.state.paneOpen}>
                  <Layer type="light text-center p10">
                    <Toolbar spacing>
                      <Emerge if={this.state.paneOpen}>
                          <Button onClick={this.togglePane.bind(this)} icon="user"></Button>
                          <Button onClick={this.togglePane.bind(this)} icon="search"></Button>
                          <Button onClick={this.togglePane.bind(this)} icon="plus"></Button>
                      </Emerge>
                    </Toolbar>
                  </Layer>
                </Pane>
              </Layer>
            </Layer>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
            <Door open={this.state.showProps}>
              <Layer className="ptb10">
                <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={PaneProperties} />
              </Layer>
            </Door>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Video</h2>
            <Button checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button>
            <Door open={this.state.showVideo}>
              <Layer className="ptb10">
                VIDEO
              </Layer>
            </Door>
          </Layer>

        </Layer>
      </Emerge>
    )
  }
}
