import * as React from 'react';
import { Align, Button, Toolbar, Checkbox, Table, Layer } from '../../../src/index';

import TutorialView from './TutorialView';
const TransformProperties = [
  { name: 'fill', type: '', options: '', description: '' },
  { name: 'type', type: '', options: '', description: '' },
  { name: 'className', type: '', options: '', description: '' },
  { name: 'if', type: '', options: '', description: '' },
  { name: 'amount', type: '', options: '', description: '' },
  { name: 'push', type: '', options: '', description: '' },
  { name: 'axis', type: '', options: '', description: '' }
];

export default class TutorialTransform extends React.Component<any, any> {
  constructor(props) {
    super(props);

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

    const columns = [{ name: 'name', width: 120 }, { name: 'type', width: 140 }, { name: 'description' }];
    let example = () => {
      return (
        <div>
          <Layer className="p10 dark">
            <Layer theme="light" className="p10">
              This is a Layer
            </Layer>
          </Layer>
        </div>
      );
    };

    return (
      <TutorialView
        description="The Transform component is an allows you to transform an element, add a type (translate, scale etc) and an amount (interger or string) to an element if a certain event happens."
        Id="Transform"
        columnData={TransformProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    );
  }
}
