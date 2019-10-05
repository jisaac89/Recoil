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
interface ISelectableProps {
  checked?: boolean;
  classNames?: string;
  ghost?: boolean;
  children?: any;
  type?: string;
}

const SelectableProperties = [
  {
    name: 'checked',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the element is checked.'
  },
  {
    name: 'classNames',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines a list of class names for the element.'
  },
  {
    name: 'ghost',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the element ghost temppate is checked.'
  },
  {
    name: 'type',
    type: 'string',
    options: '',
    description: 'Defines a class theme for the selectable element.'
  }
];

export default class TutorialSelectable extends React.Component<any, any> {
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
        description="The Selectable component is a simple way to attach a checked state to any element."
        Id="Selectable"
        columnData={SelectableProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    );
  }
}
