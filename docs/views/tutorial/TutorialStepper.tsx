import * as React from 'react';
import { Align, Button, Toolbar, Checkbox, Stepper, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink } from '../../../src/index';
import TutorialView from './TutorialView';
const ChecboxProperties = [
  {
    name: 'checked',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the element is checked.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the checkbox has a disabled state.'
  }
]

export default class TutorialStepper extends React.Component<any, any>{
  constructor(props) {
    super(props);

    this.state = {
      showProps: true,
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
      { name: 'name', width: 120 },
      { name: 'type', width: 140 },
      { name: 'description' }
    ]
    let example = () => {
      return (
        <div>

          <h3>Default</h3>
          <Layer className="ptb20">
            <Layer className="p10 light">
              <Stepper title={'User Setup'} stepIndex={1}>
                <Toolbar flush>
                  <Button>1</Button>
                  <Button>Basic Info</Button>
                </Toolbar>
                <Toolbar flush>
                  <Button theme="primary">2</Button>
                  <Button theme="primary">Contact Details</Button>
                </Toolbar>
                <Toolbar flush>
                  <Button>3</Button>
                  <Button>Success!</Button>
                </Toolbar>
              </Stepper>
            </Layer>
          </Layer>

          <h3>Vertical</h3>
          <Layer className="ptb20">
            <Layer className="p10 light">
              <Stepper vertical stepIndex={0}>
                <Button simple className="p0">Basic Info</Button>
                <Button simple className="p0">Contact Details</Button>
                <Button simple className="p0">Success!</Button>
              </Stepper>
            </Layer>
          </Layer>

        </div>
      )
    }

    return (
      <TutorialView
        description="The Stepper component ."
        Id="Stepper"
        columnData={ChecboxProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
