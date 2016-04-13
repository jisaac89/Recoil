"use strict";
const React = require('react');
const Button_1 = require('../../src/components/Button/Button');
const Card_1 = require('../../src/components/Card/Card');
const Door_1 = require('../../src/components/Door/Door');
const Emerge_1 = require('../../src/components/Emerge/Emerge');
const Grid_1 = require('../../src/components/Grid/Grid');
const Layer_1 = require('../../src/components/Layer/Layer');
const CardProperties = [
    {
        name: 'resize',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element can be resized.'
    },
    {
        name: 'hover',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets if the element has an hover action.'
    },
    {
        name: 'float',
        type: 'boolean',
        options: 'true, false',
        description: 'Defines if the element will float on screen.'
    },
    {
        name: 'block',
        type: 'boolean',
        options: 'true, false',
        description: 'Sets the element to have a block display.'
    },
    {
        name: 'fill',
        type: 'number',
        options: '',
        description: 'Sets the element to have a height and width of 100% relative to its parent.'
    },
    {
        name: 'onClick',
        type: 'number',
        options: '',
        description: 'Defines a onClick function for the element.'
    },
    {
        name: 'style',
        type: 'number',
        options: '',
        description: 'Defines the styles for the element.'
    },
    {
        name: 'className',
        type: 'number',
        options: '',
        description: 'Defines a list of class names for the element.'
    },
    {
        name: 'onMouseEnter',
        type: 'number',
        options: '',
        description: 'Defines a onMouseEnter function for the element.'
    },
    {
        name: 'onMouseLeave',
        type: 'number',
        options: '',
        description: 'Defines a onMouseLeave function for the element.'
    },
];
class TutorialCard extends React.Component {
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
            { name: 'name', width: 250 },
            { name: 'description' },
            { name: 'type', width: 300 },
            { name: 'options', width: 250 }
        ];
        return (<Emerge_1.default>
        <Layer_1.default>

          <h1>Card</h1>

          <div className="ptb20">
            <h2 className="pb10">Description</h2>
            <p>The material component is a google material enspired div, it has advanced feautures.</p>
          </div>

          <div className="pb20">
            <h2 className="pb10">Examples</h2>
            <h3>Default</h3>
            <div className="ptb20">
              <Layer_1.default className="p10 dark h100px">
                <Card_1.default>
                  This is an exampe of a Card.
                </Card_1.default>
              </Layer_1.default>
            </div>

            <h3>Fill</h3>
            <p>Fill gives the element a <strong>width</strong> and <strong>height</strong> of <strong>100%</strong> relative to its parent.</p>
            <div className="ptb20">
              <Layer_1.default className="p10 dark h100px">
                <Card_1.default fill>
                  This is an exampe of a Card with the prop <strong>fill</strong>.
                </Card_1.default>
              </Layer_1.default>
            </div>

            <h3>Block</h3>
            <p>Block gives the element a <strong>width</strong> of <strong>100%</strong> relative to its parent.</p>
            <div className="ptb20">
              <Layer_1.default className="p10 dark h100px">
                <Card_1.default block>
                  This is an exampe of a Card with the prop <strong>block</strong>.
                </Card_1.default>
              </Layer_1.default>
            </div>

            <h3>Resize</h3>
            <p>Resize allows the user to resize the element.</p>
            <div className="ptb20">
              <Layer_1.default className="p10 dark">
                <Card_1.default resize>
                  This is an exampe of a Card with the prop <strong>resize</strong>.
                </Card_1.default>
              </Layer_1.default>
            </div>


          </div>

          <div className="pb20">
            <h2 className="pb10">Props</h2>
            <div className="ptb10">
              <Grid_1.default open={this.state.showProps} numberPerPage={20} sortable columns={columns} dataSource={CardProperties}/>
            </div>
          </div>

          <div className="pb20">
            <h2 className="pb10">Video</h2>
            <Button_1.default checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button_1.default>
            <Door_1.default open={this.state.showVideo}>
              <div className="ptb10">
                VIDEO
              </div>
            </Door_1.default>
          </div>

        </Layer_1.default>
      </Emerge_1.default>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialCard;
