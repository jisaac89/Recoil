import * as React from 'react';

import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';

import TutorialView from './TutorialView';

const AlignProperties = [
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Add a list of class names.'
  },
  {
    name :'columns',
    type: 'Array<numbers>',
    options: 'Array<numbers>',
    description: 'Set an array of numbers to define each column width. e.g. 3 columns with the left most expanded would be [1,1,2]'
  },
  {
    name :'fill',
    type: 'boolean',
    options: '',
    description: 'Give the Align component a height and width of 100%.'
  },
  {
    name :'margin',
    type: 'number, px, %',
    options: '',
    description: 'Defines the spacing between columns in px or % etc.'
  },
  {
    name :'vertical',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the children are aligned vertically.'
  }
]

export default class TutorialAlign extends React.Component<any,any>{
  constructor(props) {
    super(props);

    this.state = {
      showProps : true,
      showVideo: false,
      columns: [1,1,1]
    }
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      showProps: this.state.showProps ? false : true
    })
  }

  setColumns(columns){
    this.setState({
      columns : columns
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
            <h3 className="pb20">Default</h3>
            <p>By default, children are aligned horizontally.</p>
            <p>By passing an <strong>array of numbers</strong> to the <strong>columns</strong> prop, we can easily adjust the width ratio.</p>

            <Toolbar flush className="mt20">
              <Button onClick={this.setColumns.bind(this, [2,1,1])}>[2,1,1]</Button>
              <Button onClick={this.setColumns.bind(this, [1,1,4])}>[1,1,4]</Button>
              <Button onClick={this.setColumns.bind(this, [1,3,4])}>[3,2,1]</Button>
              <Button onClick={this.setColumns.bind(this, [1,1,1])}>[1,1,1]</Button>
            </Toolbar>

            

            <div className="ptb20">
              <div className="dark p10">
                <Align columns={this.state.columns} margin={'10px'}>
                  <Layer theme="light" className="p20">A</Layer>
                  <Layer theme="light" className="p20">B</Layer>
                  <Layer theme="light" className="p20">C</Layer>
                </Align>
              </div>

              <img className="w100 mt20" src="http://reactrecoil.io/imgs/align1.png" />
            </div>

            <h3 className="pb10">Vertical</h3>
            <p>To align elements vertically, pass the <strong>vertical</strong> prop.</p>
            <div className="pt20">
              <div className="dark h300px p10">
                <Align vertical margin={'10px'} columns={this.state.columns}> 
                  <Layer fill theme="light" className="p10">A</Layer>
                  <Layer fill theme="light" className="p10">B</Layer>
                  <Layer fill theme="light" className="p10">C</Layer>
                </Align>
              </div>
              <img className="w100 mt20" src="http://reactrecoil.io/imgs/align2.png" />
            </div>


        </div>
      )
    }

    return (
      <TutorialView 
        description="The Align component arranges children either horizontally or vertically."
        Id="Align"
        columnData={AlignProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}