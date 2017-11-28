import * as React from 'react';
import {Align, Button,Loading, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';

import TutorialView from './TutorialView';
const LoadingProperties = [
  {
    name :'if',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the loading element should show.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Defines a list of class names for the element.'
  }
]

export default class TutorialLoading extends React.Component<any,any>{
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
      {name: 'name', width:120},
      {name: 'type', width:140},
      {name: 'description'}
    ]
    let example = () => {
      return (
        <div>
          <Loading if={true} icon="check" />
          <Loading size={'large'} icon="users" if={true} />
          <Loading size={"xlarge"} icon="star" if={true} /> 
          <Loading size={"xxlarge"} icon="lock" if={true} />             
        </div>
      )
    }

    return (
      <TutorialView 
        description="The Loading component shows a simple loader if a certain event happens."
        Id="Loading"
        columnData={LoadingProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
