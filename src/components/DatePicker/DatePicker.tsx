import React from 'react';
import { Dropdown, IDropdownProps } from '../Dropdown/Dropdown';
import { Calendar, ICalendarProps, ICalendarState } from './Calendar';
export { Calendar, ICalendarProps, ICalendarState };

export interface IDatePickerProps extends IDropdownProps {
  mask?: string;
  date?: Date | string;
  onSelect?: (date: Date) => void;
  selectTime?: boolean;
  open?: boolean;
  title?: string;
  className?: string;
  outline?: boolean;
  onClick?: () => void;
}

export class DatePicker extends React.Component<IDatePickerProps, any> {
  constructor(props: IDatePickerProps) {
    super(props);
    const date = this.props.date || new Date(Date.now());
    this.state = {
      date: date,
      open: props.open || false
    };
  }

  componentDidUpdate(prevProps) {
    const self = this;
    if (prevProps.open !== this.props.open) {
      self.setState({
        open: this.props.open
      });
    }

    if (prevProps.date !== this.props.date) {
      self.setState({
        date: this.props.date
      });
    }
  }

  onSelect = (date: Date) => {
    this.setState({
      date: date
    });
    this.props.onSelect ? this.props.onSelect(date) : null;
  };

  toggleOpen() {
    if (this.props.onClick) {
      this.props.onClick();
    } else {
      this.setState(state => {
        return {
          open: !state.open
        };
      });
    }
  }

  toggleClose() {
    this.setState({
      open: false
    });
  }

  onOpen() {
    return null;
  }

  render() {
    const { date } = this.state;
    const { mobile, title, className, outline, size, block } = this.props;
    return (
      <Dropdown
        className={className}
        icon='calendar'
        material
        title={title ? title : getDateFormatted(this.state.date, this.props.selectTime)}
        mobile={mobile}
        open={this.state.open}
        onClick={this.toggleOpen.bind(this)}
        onClose={this.toggleClose.bind(this)}
        onCloseDropdown={this.toggleClose.bind(this)}
        theme={this.props.theme}
        outline={outline}
        dataSource={this.props.dataSource}
        size={size}
        block={block}
        onOpen={this.onOpen.bind(this)}>
        <Calendar
          mobile={mobile}
          selectTime={this.props.selectTime}
          selectedDay={this.state.date}
          inDropdown={true}
          date={date}
          onSelect={this.onSelect}
        />
      </Dropdown>
    );
  }
}

function getDateFormatted(date: Date, selectTime) {
  const dd = date.getDate(),
    mm = date.getMonth() + 1,
    yyyy = date.getFullYear(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    day = dd < 10 ? '0' + dd : '' + dd,
    month = mm < 10 ? '0' + mm : '' + mm;

  if (selectTime) {
    return month + '/' + day + '/' + yyyy + ' - ' + hours + ':' + minutes;
  } else {
    return month + '/' + day + '/' + yyyy;
  }
}
