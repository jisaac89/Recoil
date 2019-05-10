import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

export type NotificationType = 'success' | 'primary' | 'error' | 'default';

export interface INotificationItem {
  template: string | JSX.Element;
  type?: NotificationType;
  id?: number;
}

export interface INotificationProps {
  item: INotificationItem;
}

export interface INotificationState {
  view?: 'visible' | 'hiding' | 'removed';
  time?: number;
  isOn?: boolean;
  start: number;
}

export class Notification extends React.Component<INotificationProps, INotificationState> {
  secondsRemaining: any;
  timer: any;
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0,
      view: 'visible'
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  }
  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }

  componentDidMount() {
    this.startTimer();
  }

  stopAndResetTimer() {
    this.stopTimer();
    this.resetTimer();
  }

  render() {
    const self = this;
    const props = self.props;
    const { time, view } = this.state;

    let animationClass;

    if (time < 3000) {
      animationClass = 'fadeInUp';
    } else if (time < 4000 && time > 3000) {
      animationClass = 'fadeOut';
    } else {
      animationClass = 'hide';
    }

    return (view === 'visible' && animationClass !== 'hide') || (view === 'hiding' && animationClass !== 'hide') ? (
      <Toolbar
        onMouseEnter={this.stopAndResetTimer.bind(this)}
        onMouseLeave={this.startTimer.bind(this)}
        block
        textCenter
        className={'p10 m0 w100 e-light e-dropShadow animated' + ' ' + animationClass}>
        {props.item.template}
      </Toolbar>
    ) : null;
  }
}
