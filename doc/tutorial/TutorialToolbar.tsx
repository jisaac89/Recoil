import * as React from 'react';

import Align from '../../src/components/Align/Align';
import Button from '../../src/components/Button/Button';
import Card from '../../src/components/Card/Card';
import Checkbox from '../../src/components/Checkbox/Checkbox';
import Door from '../../src/components/Door/Door';
import Dropdown from '../../src/components/Dropdown/Dropdown';
import Emerge from '../../src/components/Emerge/Emerge';
import Grid from '../../src/components/Grid/Grid';
import Input from '../../src/components/Input/Input';
import Layer from '../../src/components/Layer/Layer';
import Loading from '../../src/components/Loading/Loading';
import Modal from '../../src/components/Modal/Modal';
import Pane from '../../src/components/Pane/Pane';
import Selectable from '../../src/components/Selectable/Selectable';
import Shrink from '../../src/components/Shrink/Shrink';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Transform from '../../src/components/Transform/Transform';
import Wizard from '../../src/components/Wizard/Wizard';

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
        <div className="p10">

          <h1>Toolbar</h1>

          <Layer className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The toolbar component allows you to pass and style a group of buttons, inputs and dropdowns.</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer className="ptb10">
              <Layer className="p10 light text-center">
                <Toolbar vertical spacing>
                  <Button>A</Button>
                  <Button>B</Button>
                  <Button>C</Button>
                </Toolbar>
                <Toolbar spacing>
                  <Button>A</Button>
                  <Button>B</Button>
                  <Button>C</Button>
                </Toolbar>
              </Layer>
            </Layer>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
            <Door open={this.state.showProps}>
              <Layer className="ptb10">
                <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={ToolbarProperties} />
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

        </div>
      </Emerge>
    )
  }
}
