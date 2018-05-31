import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';

import TutorialView from './TutorialView';
const ToolbarProperties = [
  {name: 'border', type: '', options: '', description: ''},
  {name: 'vertical', type: '', options: '', description: ''},
  {name: 'textCenter', type: '', options: '', description: ''},
  {name: 'noRadius', type: '', options: '', description: ''},
  {name: 'spacing', type: '', options: '', description: ''},
  {name: 'block', type: '', options: '', description: ''},
  {name: 'left', type: '', options: '', description: ''},
  {name: 'right', type: '', options: '', description: ''},
  {name: 'fill', type: '', options: '', description: ''},
  {name: 'className', type: '', options: '', description: ''},
  {name: 'style', type: '', options: '', description: ''},
  {name: 'children', type: '', options: '', description: ''},
  {name: 'flex', type: '', options: '', description: ''},
  {name: 'flow', type: '', options: '', description: ''},
  {name: 'justify', type: '', options: '', description: ''},
  {name: 'align', type: '', options: '', description: ''}
]

export default class TutorialToolbar extends React.Component<any,any>{
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
          <Layer className="ptb10">
              <Layer className="p10 light">
                <Toolbar disabled flush block>
                  <Button icon="user" />
                  <Input placeholder="Find Users" />
                  <Button icon="times" />
                </Toolbar>
                <Toolbar spacing block className="mt10">
                  <Button icon="user" />
                  <Input placeholder="Find Users" />
                  <Button icon="times" />
                </Toolbar>
                <Toolbar spacing block className="mt10">
                  <Button simple icon="user" />
                  <Input simple placeholder="Find Users" />
                  <Button simple icon="times" />
                </Toolbar>

                <Toolbar flush  block className="mt10">
                  <Button size="large"  icon="user" />
                  <Input size="large"  placeholder="Find Users" />
                  <Button size="large"  icon="times" />
                </Toolbar>
          
                <Toolbar vertical block spacing className="mt10 w300px">
                  <Button block>Menu Item 1</Button>
                  <Button block>Menu Item 2</Button>
                  <Button block>Menu Item 3</Button>
                </Toolbar>
                <Toolbar block size="small" vertical flush className="mt10 w200px">
                  <Button block>Menu Item 1</Button>
                  <Button block>Menu Item 2</Button>
                  <Button block>Menu Item 3</Button>
                </Toolbar>
              </Layer>
            </Layer>
        </div>
      )
    }

    return (
      <TutorialView 
        description="The toolbar component allows you to pass and style a group of buttons, inputs and dropdowns."
        Id="Toolbar"
        columnData={ToolbarProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
