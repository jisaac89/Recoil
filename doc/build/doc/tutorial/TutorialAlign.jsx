"use strict";
var React = require('react');
var Align_1 = require('../../src/components/Align/Align');
var Button_1 = require('../../src/components/Button/Button');
var Door_1 = require('../../src/components/Door/Door');
var Emerge_1 = require('../../src/components/Emerge/Emerge');
var Grid_1 = require('../../src/components/Grid/Grid');
var Layer_1 = require('../../src/components/Layer/Layer');
const AlignProperties = [
    {
        name: 'margin',
        type: 'number',
        options: '',
        description: 'Defines the margin between the aligned components.'
    },
    {
        name: 'data',
        type: 'array of numbers',
        options: '',
        description: 'Defines how columns are layed out.'
    },
    {
        name: 'className',
        type: 'string',
        options: '',
        description: 'Add a list of class names.'
    },
    {
        name: 'maxCol',
        type: 'number',
        options: '',
        description: 'Defines the maximum amount of columns.'
    },
    {
        name: 'vertical',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the components are aligned vertically.'
    }
];
class TutorialAlign extends React.Component {
    constructor() {
        super();
        this.state = {
            showProps: true,
            showVideo: false
        };
    }
    toggleShowProps() {
        this.setState({
            showVideo: false,
            showProps: this.state.showProps ? false : true
        });
    }
    toggleShowVideo() {
        this.setState({
            showProps: false,
            showVideo: this.state.showVideo ? false : true
        });
    }
    render() {
        const self = this;
        const props = self.props;
        let state = self.state;
        const columns = [
            { name: 'name', width: 150 },
            { name: 'type', width: 200 },
            { name: 'options', width: 150 },
            { name: 'description' }
        ];
        return (<Emerge_1.default>
        <Layer_1.default>

          <h1>Align</h1>

          <Layer_1.default className="ptb20">
            <h2 className="pb10">Description</h2>
            <p>The Align component is a flex alternative, it aligns components either horizontally or vertically with a option margin set.</p>
          </Layer_1.default>

          <Layer_1.default className="pb20">
            <h2 className="pb10">Examples</h2>

            <h3>Default</h3>
            <p>By default, the Align component aligns elements horizontally</p>
            <Layer_1.default className="ptb20">
              <Layer_1.default className="p10 dark">
                <Align_1.default margin={1}>
                  <Layer_1.default type="light" className="p20">Aligned Element 1</Layer_1.default>
                  <Layer_1.default type="light" className="p20">Aligned Element 2</Layer_1.default>
                </Align_1.default>
              </Layer_1.default>
            </Layer_1.default>

            <h3>Vertical</h3>
            <p>To align elements vertically, pass the <strong>vertical</strong> prop.</p>
            <Layer_1.default className="ptb20">
              <Layer_1.default className="p10 dark h200px">
                <Align_1.default vertical margin={5}>
                  <Layer_1.default fill type="light" className="p20">Aligned Element 1</Layer_1.default>
                  <Layer_1.default fill type="light" className="p20">Aligned Element 2</Layer_1.default>
                  <Layer_1.default fill type="light" className="p20">Aligned Element 3</Layer_1.default>
                </Align_1.default>
              </Layer_1.default>
            </Layer_1.default>

            <h3>Multiple Aligns</h3>
            <p>Below shows an example using multiple Align components to achieve the desired effect.</p>
            <Layer_1.default className="ptb20">
              <Layer_1.default className="p10 dark h200px">
                <Align_1.default margin={1}>
                  <Layer_1.default fill>
                    <Align_1.default margin={5} vertical>
                      <Layer_1.default type="light" className="p10" fill>1</Layer_1.default>
                      <Layer_1.default type="light" className="p10" fill>2</Layer_1.default>
                      <Layer_1.default type="light" className="p10" fill>3</Layer_1.default>
                    </Align_1.default>
                  </Layer_1.default>
                  <Layer_1.default fill>
                    <Align_1.default margin={5} vertical>
                      <Layer_1.default type="light" className="p10" fill>4</Layer_1.default>
                      <Layer_1.default type="light" className="p10" fill>5</Layer_1.default>
                      <Layer_1.default type="light" className="p10" fill>6</Layer_1.default>
                    </Align_1.default>
                  </Layer_1.default>
                  <Layer_1.default fill>
                    <Align_1.default margin={5} vertical>
                      <Layer_1.default type="light" className="p10" fill>7</Layer_1.default>
                      <Layer_1.default type="light" className="p10" fill>8</Layer_1.default>
                      <Layer_1.default type="light" className="p10" fill>9</Layer_1.default>
                    </Align_1.default>
                  </Layer_1.default>
                </Align_1.default>
              </Layer_1.default>
            </Layer_1.default>
          </Layer_1.default>

          <Layer_1.default className="pb20">
            <h2 className="pb10">Props</h2>
            <Layer_1.default className="ptb10">
              <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={AlignProperties}/>
            </Layer_1.default>
          </Layer_1.default>

          <Layer_1.default className="pb20">
            <h2 className="pb10">Video</h2>
            <Button_1.default checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button_1.default>
            <Door_1.default open={this.state.showVideo}>
              <Layer_1.default className="ptb10">
                VIDEO
              </Layer_1.default>
            </Door_1.default>
          </Layer_1.default>

        </Layer_1.default>
      </Emerge_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialAlign;
