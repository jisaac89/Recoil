import * as React from 'react';
import {
  Align,
  Button,
  Toolbar,
  Checkbox,
  Table,
  Layer,
  Dropdown,
  Input,
  Wizard,
  Modal,
  Open,
  Emerge,
  SlideIn,
  Transform,
  Toggle,
  Shrink
} from '../../../src/index';

import TutorialView from './TutorialView';
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
  }
];

export default class TutorialCard extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      showProps: true,
      showVideo: false,
      toggleIt: true
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

  toggle() {
    this.setState({
      toggleIt: !this.state.toggleIt
    });
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    const columns = [{ name: 'name', width: 120 }, { name: 'type', width: 140 }, { name: 'description' }];
    let example = () => {
      return (
        <div>
          <h3>Default</h3>
          <Layer className="ptb20">
            <Toggle />
          </Layer>
          <Layer className="pb20">
            <p>With theme error.</p>
            <Toggle theme="error" className="mt10" checked={true} />
          </Layer>
          <Layer className="pb20">
            <p>
              With props checked passed as <strong>true</strong>.
            </p>
            <Toggle onChange={this.toggle.bind(this)} className="mt10" checked={state.toggleIt} />
          </Layer>
          <Layer className="pb20">
            <p>
              With props array passed with an array value of <strong>['No', 'Yes']</strong>.
            </p>
            <Toggle array={['No', 'Yes']} className="mt10" />
          </Layer>

          <Layer className="pb20">
            <p>
              With props array passed with an array value of <strong>['No', 'Yes']</strong>.
            </p>
            <Toggle array={['Tuesday', 'Wednesday']} className="mt10" />
          </Layer>

          <Layer className="pb20">
            <p>
              With props iconArray passed with an array value of <strong>['times', 'check']</strong>.
            </p>
            <Toggle iconArray={['times', 'check']} className="mt10" />
          </Layer>
          <Layer className="pb20">
            <p>Disabled.</p>
            <Toggle disabled iconArray={['times', 'check']} className="mt10" />
          </Layer>
          <Layer className="pb20">
            <p>Loading.</p>
            <Toggle loading iconArray={['times', 'check']} className="mt10" />
          </Layer>
          <h3>Toggle Numbers</h3>
          <Layer className="ptb20">
            <Toolbar spacing>
              <Toggle type="numbers" array={[15, 20, 25]} />
            </Toolbar>
          </Layer>

          <h3>Toggle Strings</h3>
          <Layer className="ptb20">
            <Toolbar spacing>
              <Toggle type="strings" array={['S', 'M', 'L']} />
            </Toolbar>
          </Layer>

          <h3>Toggle Colors</h3>
          <p>
            To toggle a string of CSS based background colors or images just pass in the <strong>colors</strong> prop.
          </p>
          <Layer className="ptb20">
            <Toolbar spacing>
              <Toggle type="colors" array={['#FF5757', '#00A0DC', '#8D6CAB']} />
            </Toolbar>
          </Layer>
        </div>
      );
    };

    return (
      <TutorialView
        description="The material component is a google material enspired div, it has advanced feautures."
        Id="Toggle"
        columnData={CardProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    );
  }
}
