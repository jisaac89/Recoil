import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';
import TutorialView from './TutorialView';
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
      {name: 'name', width:120},
      {name: 'type', width:140},
      {name: 'description'}
    ]
    let example = () => {
      return (
        <div>
          <Layer className="ptb10">
            <Button onClick={this.toggleShrink.bind(this)}>Toggle Shrink</Button>
              <Shrink if={this.state.shrink} >
                <Layer className="p10 light mt10">
                  Shrink and disable this element.
                </Layer>
              </Shrink>
            </Layer>
        </div>
      )
    }

    return (
      <TutorialView 
        description="The Shrink component is shrinks and disbales its children depending on an if statement."
        Id="Shrink"
        columnData={ShrinkProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
