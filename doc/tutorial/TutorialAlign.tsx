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

const AlignProperties = [
  {
    name :'margin',
    type: 'number',
    options: '',
    description: 'Defines the margin between the aligned components.'
  },
  {
    name :'columns',
    type: 'array of numbers',
    options: '',
    description: 'Defines how columns are layed out.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Add a list of class names.'
  },
  {
    name :'maxCol',
    type: 'number',
    options: '',
    description: 'Defines the maximum amount of columns.'
  },
  {
    name :'vertical',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the components are aligned vertically.'
  }
]

export default class TutorialAlign extends React.Component<any,any>{
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
      {name: 'name', width:150},
      {name: 'type', width:200},
      {name: 'options', width:150},
      {name: 'description'}
    ]

    return (
      <Emerge>
        <Layer>

          <h1>Align</h1>

          <Layer className="ptb20">
            <h2 className="pb10">Description</h2>
            <p>The Align component is a flex alternative, it aligns components either horizontally or vertically with a option margin set.</p>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Examples</h2>

            <h3>Default</h3>
            <p>By default, the Align component aligns elements horizontally</p>
            <div className="ptb20">
              <div className="p10 dark">
                <Align margin={1}>
                  <Layer type="light" className="p20">Aligned Element 1</Layer>
                  <Layer type="light" className="p20">Aligned Element 2</Layer>
                </Align>
              </div>
            </div>

            <h3>Vertical</h3>
            <p>To align elements vertically, pass the <strong>vertical</strong> prop.</p>
            <div className="ptb20">
              <div className="p10 dark h200px">
                <Align vertical margin={5}>
                  <Layer fill type="light" className="p20">Aligned Element 1</Layer>
                  <Layer fill type="light" className="p20">Aligned Element 2</Layer>
                  <Layer fill type="light" className="p20">Aligned Element 3</Layer>
                </Align>
              </div>
            </div>

            <h3>Multiple Aligns</h3>
            <p>Below shows an example using multiple Align components to achieve the desired effect.</p>
            <div className="ptb20">
              <div className="p10 dark h200px">
                <Align margin={1}>
                  <Layer fill>
                    <Align margin={5} vertical>
                      <Layer type="light" className="p10" fill>1</Layer>
                      <Layer type="light" className="p10" fill>2</Layer>
                      <Layer type="light" className="p10" fill>3</Layer>
                    </Align>
                  </Layer>
                  <Layer fill>
                    <Align margin={5} vertical>
                      <Layer type="light" className="p10" fill>4</Layer>
                      <Layer type="light" className="p10" fill>5</Layer>
                      <Layer type="light" className="p10" fill>6</Layer>
                    </Align>
                  </Layer>
                  <Layer fill>
                    <Align margin={5} vertical>
                      <Layer type="light" className="p10" fill>7</Layer>
                      <Layer type="light" className="p10" fill>8</Layer>
                      <Layer type="light" className="p10" fill>9</Layer>
                    </Align>
                  </Layer>
                </Align>
              </div>
            </div>

            <h3>Custom Columns</h3>
            <p>To align columns with custom sizes, pass in a maxCol prop which accepts the max number of columns you would like. Then pass in the columns prop to define an array of numbers.</p>
            <p>So the example below, would have the props <strong>maxCol={4}</strong> and <strong>columns={[1,3]}</strong> <strong>margin={3}</strong></p>
            <div className="ptb20">
              <div className="p10 dark h200px">
              <Layer fill>
                <Align maxCol={4} columns={[1,3]} margin={1}>
                  <Layer type="light" className="p10" fill>1</Layer>
                  <Layer type="light" className="p10" fill>2</Layer>
                </Align>
              </Layer>
              </div>
            </div>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Props</h2>
            <Layer className="ptb10">
              <Grid open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={AlignProperties} />
            </Layer>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Video</h2>
            <Button checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button>
            <Door open={this.state.showVideo}>
              <Layer className="ptb10">
                VIDEO
              </Layer>
            </Door>
          </Layer>

        </Layer>
      </Emerge>
    )
  }
}
