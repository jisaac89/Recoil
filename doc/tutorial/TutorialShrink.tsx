import * as React from 'react';

import { Align, Button, Card, Checkbox, Door, Dropdown, Emerge, Grid, Input, Layer, Loading, Modal, Pane, Selectable, Shrink, Toolbar, Transform, Wizard } from 'react-recoil';

const ShrinkProperties = [
  {
    name :'if',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the element will shrink and be disabled.'
  },
  {
    name :'fill',
    type: 'boolean',
    options: 'true, false',
    description: 'Set the element to have a 100% height and width.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Add a list of class names to the element.'
  }
]

export default class TutorialShrink extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false,
      shrink: false
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

  toggleShrink() {
    this.setState({
      shrink: this.state.shrink ? false : true
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

          <h1>Checkbox</h1>

          <Layer className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The Checkbox component is an advanced version of the standard input type='checkbox' control.</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer className="ptb10">
            <Button onClick={this.toggleShrink.bind(this)}>Toggle Shrink</Button>
              <Shrink if={this.state.shrink} >
                <Layer className="p10 light mt10">
                  Shrink and disable this element.
                </Layer>
              </Shrink>
            </Layer>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
            <Door open={this.state.showProps}>
              <Layer className="ptb10">
                <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={ShrinkProperties} />
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
