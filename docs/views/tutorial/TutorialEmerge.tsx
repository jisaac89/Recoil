import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';

import TutorialView from './TutorialView';
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
      {name: 'name', width:120},
      {name: 'type', width:140},
      {name: 'description'}
    ]
    let example = () => {
      return (
        <div>
          <Emerge delay={300} if={props.if}>
            <Button className="mr10">
              Appear
            </Button>
            <Button className="mr10">
              When
            </Button>
            <Button className="mr10">
              In
            </Button>
            <Button className="">
              View
            </Button>
          </Emerge>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><Button simple icon="chevron-down">Scroll Down</Button><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Layer oocss="h300px w400px">
          <Emerge enter="slideInLeft">
            <Layer oocss="w500px h200px" border flexCenter>Appear</Layer>
            <Layer oocss="w500px h200px" border flexCenter>When</Layer>
            <Layer oocss="w500px h200px" border flexCenter>In</Layer>
            <Layer oocss="w500px h200px" border flexCenter>View</Layer>
          </Emerge>
          </Layer>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <Layer oocss="h408px w100%">
          <Emerge enter="fadeInUpBig">
            <Align>
              <Layer className="pull-left"  oocss="w200px h200px" border flexCenter>Appear</Layer>
              <Layer className="pull-left" oocss="w200px h200px" border flexCenter>When</Layer>
              <Layer className="pull-left" oocss="w200px h200px" border flexCenter>In</Layer>
              <Layer className="pull-left" oocss="w200px h200px" border flexCenter>View</Layer>
            </Align>
          </Emerge>
          </Layer>
        </div>
      )
    }

    return (
      <TutorialView 
        description="The Emerge component staggers children into view if a certain event happens."
        Id="Emerge"
        columnData={EmergeProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
