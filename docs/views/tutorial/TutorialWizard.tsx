import React from 'react';
import { Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard } from '../../../src/index';
import TutorialView from './TutorialView';
const WizardProperties = [
  { name: 'slideIndex', type: '', options: '', description: 'The active index to show.' },
  { name: 'fill', type: '', options: '', description: 'Add a width and height of 100% to the Wizard.' },
  { name: 'className', type: '', options: '', description: '' }
];

export default class TutorialWizard extends React.Component<any, any> {
  constructor(props: never) {
    super(props);

    this.state = {
      showProps: true,
      showVideo: false,
      slideIndex: 0,
      slideIndex2: 0
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

  gotoSlideIndex(n: number) {
    this.setState({
      slideIndex: n
    });
  }

  gotoSlideIndex2(n: number) {
    this.setState({
      slideIndex2: n
    });
  }

  onSlide = (index: number) => {
    this.setState({
      slideIndex: index,
      slideIndex2: index
    });
  };

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;
    let example = () => {
      return (
        <div>
          <h3>Default</h3>
          <Layer className="h300px p20 pb0 mt20" theme="dark">
            <Wizard onSlide={this.onSlide.bind(this)} paginate fill slideIndex={this.state.slideIndex}>
              <Layer fill theme="light" className="p20">
                1
              </Layer>
              <Layer fill theme="light" className="p20">
                2
              </Layer>
              <Layer fill theme="light" className="p20">
                3
              </Layer>
            </Wizard>
          </Layer>

          <h3 className="pt20 pb20">Vertical</h3>
          <Layer className="h300px p20 pb0 mb10" theme="dark">
            <Wizard onSlide={this.onSlide.bind(this)} paginate vertical fill slideIndex={this.state.slideIndex2}>
              <Layer fill theme="light" className="p20">
                1
              </Layer>
              <Layer fill theme="light" className="p20">
                2
              </Layer>
              <Layer fill theme="light" className="p20">
                3
              </Layer>
            </Wizard>
          </Layer>
        </div>
      );
    };

    return (
      <TutorialView
        description="The Wizard component allows you to create multi-step processes where users will move through screens in a specified order."
        Id="Wizard"
        columnData={WizardProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    );
  }
}
