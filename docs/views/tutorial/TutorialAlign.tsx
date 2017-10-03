import * as React from 'react';

import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';

import TutorialView from './TutorialView';

const AlignProperties = [
  {
    name :'margin',
    type: 'number, px, %',
    options: '',
    description: 'Defines the margin width in px, %, etc.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Add a list of class names.'
  },
  {
    name :'vertical',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the children are aligned vertically.'
  },
  {
    name :'columns',
    type: 'Array',
    options: 'true, false',
    description: 'Set an array of numbers to define each column width. e.g. 3 columns with the left most expanded would be [1,1,2]'
  }
]

export default class TutorialAlign extends React.Component<any,any>{
  constructor() {
    super();

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
            <h3>Default</h3>
            <p>By default, the Align component aligns elements horizontally</p>
            <p>Set Columns:</p>
            <Toolbar flush className="mt20">
              <Button onClick={this.setColumns.bind(this, [1,1,1])}>[1,1,1]</Button>
              <Button onClick={this.setColumns.bind(this, [2,1,1])}>[2,1,1]</Button>
              <Button onClick={this.setColumns.bind(this, [1,1,4])}>[1,1,4]</Button>
              <Button onClick={this.setColumns.bind(this, [1,3,4])}>[3,2,1]</Button>
            </Toolbar>
            <div className="ptb20">
              <div className="dark p10">
                <Align columns={this.state.columns} margin={'10px'}>
                  <Layer theme="light" className="p20">1</Layer>
                  <Layer theme="light" className="p20">2</Layer>
                  <Layer theme="light" className="p20">3</Layer>
                </Align>
              </div>
            </div>

            <h3>Vertical</h3>
            <p>To align elements vertically, pass the <strong>vertical</strong> prop.</p>
            <div className="ptb20">
              <div className="dark h300px p10">
                <Align vertical margin={'10px'} columns={this.state.columns}> 
                  <Layer fill theme="light" className="p10">1</Layer>
                  <Layer fill theme="light" className="p10">2</Layer>
                  <Layer fill theme="light" className="p10">3</Layer>
                </Align>
              </div>
            </div>


        </div>
      )
    }

    return (
      <TutorialView 
        description="The Align component is a flex alternative, it aligns components either horizontally or vertically with a option margin set."
        Id="Align"
        columnData={AlignProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}


            // <h3>Multiple Aligns</h3>
            // <p>Below shows an example using multiple Align components to achieve the desired effect.</p>
            // <div className="ptb20">
            //   <div className="dark p5 h300px">
            //     <Align columns={this.state.columns} margin={"5px"}>
            //       <Align margin={"5px"} vertical>
            //         <Layer theme="light" className="p10" fill>1</Layer>
            //         <Layer theme="light" className="p10" fill>2</Layer>
            //         <Layer theme="light" className="p10" fill>3</Layer>
            //       </Align>
            //       <Align margin={"5px"} vertical>
            //         <Layer theme="light" className="p10" fill>4</Layer>
            //         <Layer theme="light" className="p10" fill>5</Layer>
            //       </Align>
            //       <Layer fill>
            //         <Button fill icon="star" />
            //       </Layer>
            //     </Align>
            //   </div>
            // </div>