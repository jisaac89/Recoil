import * as React from 'react';
import {Align, Button, Toolbar,DatePicker,Calendar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';
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

export default class TutorialDatePicker extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false,
      from : null,
      to: null
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

  selectFrom(day){
    this.setState({
      from: day
    })
  }

  selectTo(day){
    this.setState({
      to: day
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
            <h3>Select</h3>
            <Layer className="ptb20">
                <Toolbar>
                  <Button simple>Select Exp date:</Button>
                  <DatePicker onSelect={this.selectFrom.bind(this)} date={this.state.from} mobile={props.mobile} />
                </Toolbar>
            </Layer>
            <Layer className="ptb20">
                <Toolbar>
                  <Button simple>Select Exp date and time:</Button>
                  <DatePicker theme="primary" selectTime={true} onSelect={this.selectFrom.bind(this)} date={this.state.from} mobile={props.mobile} />
                </Toolbar>
            </Layer>
            <h3>Mobile</h3>
            <Layer className="ptb20">
                <Toolbar>
                  <Button simple>From:</Button>
                  <DatePicker mobile={true} onSelect={this.selectFrom.bind(this)} date={this.state.from} />
                </Toolbar>
            </Layer>
            <h3>Default</h3>
            <Layer className="pt20">
                <Toolbar>
                  <Button simple>From:</Button>
                  <DatePicker onSelect={this.selectFrom.bind(this)} date={this.state.from} mobile={props.mobile} />
                  <Button simple>To:</Button>
                  <DatePicker onSelect={this.selectTo.bind(this)} date={this.state.to} mobile={props.mobile} />
                </Toolbar>
            </Layer>
        </div>
      )
    }

    return (
      <TutorialView 
        description="The DatePicker."
        Id="DatePicker"
        columnData={ChecboxProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
