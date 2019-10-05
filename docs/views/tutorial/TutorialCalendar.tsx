import * as React from 'react';
import { Align, Calendar, Button, Toolbar, Checkbox, Table, Layer } from '../../../src/index';
import TutorialView from './TutorialView';
const CalendarProperties = [
  {
    name: 'checked',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the element is checked.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the checkbox has a disabled state.'
  }
];

export default class TutorialCalendar extends React.Component<any, any> {
  constructor(props: never) {
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
          <h3>Default</h3>
          <Layer className="ptb20">
            <Calendar calendarHeight="300px" />
          </Layer>

          <img className="w100 mtb20" src="http://reactrecoil.io/imgs/calendar1.png" />
        </div>
      );
    };

    return (
      <TutorialView
        description="The Calendar component displays a yearly Calendar."
        Id="Calendar"
        columnData={CalendarProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    );
  }
}
