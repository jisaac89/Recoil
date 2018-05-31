import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';
import TutorialView from './TutorialView';
const ChecboxProperties = [
  {
    name :'checked',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the element is checked.'
  },
  {
    name :'disabled',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the checkbox has a disabled state.'
  }
]

export default class TutorialCheckbox extends React.Component<any,any>{
  constructor(props) {
    super(props);

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
      {name: 'name', width:120},
      {name: 'type', width:140},
      {name: 'description'}
    ]
    let example = () => {
      return (
        <div>
            <h3>Default</h3>
            <Layer className="ptb20">
                <Checkbox icon="check" title={'Select All'} />
            </Layer>

            <img className="w100 mtb20" src="http://reactrecoil.io/imgs/checkbox1.png" />

            <h3>Checked</h3>
            <Layer className="ptb20">
                <Checkbox checked />
            </Layer>

            <img className="w100 mtb20" src="http://reactrecoil.io/imgs/checkbox2.png" />

            <h3>Sizes</h3>
            <Layer className="ptb20">
                <Toolbar spacing>
                  <Checkbox size="small" />
                  <Checkbox icon={'star'} />
                  <Checkbox size="large" />
                  <Checkbox icon={'users'} size="xlarge" />
                </Toolbar>
            </Layer>

            <img className="w100 mtb20" src="http://reactrecoil.io/imgs/checkbox3.png" />

            <h3>Disabled</h3>
            <Layer className="ptb20">
                <Toolbar spacing>
                  <Checkbox disabled icon={'star'} />
                </Toolbar>
            </Layer>

            <img className="w100 mtb20" src="http://reactrecoil.io/imgs/checkbox4.png" />

            <h3>Loading</h3>
            <Layer className="ptb20">
                <Toolbar spacing>
                  <Checkbox size="large" loading={true} disabled icon={'star'} />
                </Toolbar>
            </Layer>

            <img className="w100 mtb20" src="http://reactrecoil.io/imgs/checkbox5.png" />

            <h3>Themes</h3>
            <Layer className="ptb20">
                <Toolbar spacing>
                  <Checkbox theme="primary" />
                  <Checkbox theme="error" />
                  <Checkbox icon={'star'} theme="success" />
                </Toolbar>
            </Layer>

            <img className="w100 mtb20" src="http://reactrecoil.io/imgs/checkbox6.png" />
        </div>
      )
    }

    return (
      <TutorialView 
        description="The Checkbox component is an advanced version of the standard input type='checkbox' control."
        Id="Checkbox"
        columnData={ChecboxProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
