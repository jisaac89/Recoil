import * as React from 'react';

import { Align, Button, Card, Checkbox, Door, Dropdown, Emerge, Grid, Input, Layer, Loading, Modal, Pane, Selectable, Shrink, Toolbar, Transform, Wizard } from 'react-recoil';

const EmergeProperties = [
  {
    name :'if',
    type: 'boolean',
    options: 'true, false. True by default.',
    description: 'Defines if the element should emerge and stagger its children.'
  },
  {
    name :'enter',
    type: 'string',
    options: 'Uses animate.css',
    description: 'Add the type of animations the staggered children will display as on enter.'
  },
  {
    name :'exit',
    type: 'string',
    options: 'Uses animate.css',
    description: 'Add the type of animations the staggered children will display as on exit.'
  },
  {
    name :'delay',
    type: 'number',
    options: '',
    description: 'Set the delay in milliseconds for each staggered child to appears.'
  },
  {
    name :'overflow',
    type: 'string',
    options: 'true, false',
    description: 'Defines if the elements overflow is visible.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Defines a list of class names for the element.'
  },
  {
    name :'style',
    type: 'string',
    options: '',
    description: 'Add inline styles to the element.'
  }
]

export default class TutorialEmerge extends React.Component<any,any>{
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

        <h1>Emerge</h1>

        <Layer className="ptb10">
          <h2 className="pb10">Description</h2>
          <p>The Emerge component staggers children into view if a certain event happens.</p>
        </Layer>

        <Layer className="ptb10">
          <h2 className="pb10">Examples</h2>
          <Layer className="ptb10">
            <Layer className="p10 light">
              <Emerge delay={300} if={this.props.slideIndex === 6}>
                <Button className="p10 mr10">
                  A
                </Button>
                <Button className="p10 mr10">
                  B
                </Button>
                <Button className="p10 mr10">
                  C
                </Button>
                <Button className="p10">
                  D
                </Button>
              </Emerge>
            </Layer>
          </Layer>
        </Layer>

        <Layer className="ptb10">
          <h2 className="pb10">Options</h2>
          <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
          <Door open={this.state.showProps}>
            <Layer className="ptb10">
              <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={EmergeProperties} />
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
