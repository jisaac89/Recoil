import * as React from 'react';

import { Align, Button, Card, Checkbox, Door, Dropdown, Emerge, Grid, Input, Layer, Loading, Modal, Pane, Selectable, Shrink, Toolbar, Transform, Wizard } from 'react-recoil';

const TransformProperties = [
  {name : 'fill', type: '', options: '', description: ''},
  {name : 'type', type: '', options: '', description: ''},
  {name : 'className', type: '', options: '', description: ''},
  {name : 'if', type: '', options: '', description: ''},
  {name : 'amount', type: '', options: '', description: ''},
  {name : 'push', type: '', options: '', description: ''},
  {name : 'axis', type: '', options: '', description: ''},
]

export default class TutorialTransform extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false
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

          <h1>Transform</h1>

          <Layer className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The Transform component is an allows you to transform an element, add a type (translate, scale etc) and an amount (interger or string) to an element if a certain event happens.</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer className="ptb10">
              <Layer className="p10 light">
                <Checkbox />
              </Layer>
            </Layer>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
            <Door open={this.state.showProps}>
              <Layer className="ptb10">
                <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={TransformProperties} />
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
