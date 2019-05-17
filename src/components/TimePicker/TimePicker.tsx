import React from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { Toolbar } from '../Toolbar/Toolbar';

export interface IDatePickerProps {
  mask?: string;
  time?: Date | string;
  onSelect?: (date: Date) => void;
  mobile?: boolean;
}

export class TimePicker extends React.Component<IDatePickerProps, any> {
  constructor(props: IDatePickerProps) {
    super(props);
    const time = this.props.time || new Date(Date.now()).getTime();
    this.state = {
      time: time
    };
  }

  onSelect = (time: any) => {
    this.setState({
      time: time
    });
    this.props.onSelect ? this.props.onSelect(time) : null;
  };

  onChange = (value: any) => {
    this.setState({
      time: new Date(value).getTime()
    });
  };

  render() {
    return (
      <Toolbar flex flush>
        <Dropdown rowIsSelectable="single" hideDropdownHeader hideHeader title={'HH'} dataSource={hours} />
        <Dropdown rowIsSelectable="single" hideDropdownHeader hideHeader title={'MM'} dataSource={secondsMinutes} />
        <Dropdown rowIsSelectable="single" hideDropdownHeader hideHeader title={'SS'} dataSource={secondsMinutes} />
      </Toolbar>
    );
  }
}

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const secondsMinutes = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59
];
