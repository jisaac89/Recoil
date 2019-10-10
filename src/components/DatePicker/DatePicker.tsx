import React from 'react';
import Dropdown, { IDropdownProps } from '../Dropdown/Dropdown';
import Calendar, { ICalendarProps, ICalendarState } from './Calendar';
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

export interface IDatePickerState {
  date: Date | string | undefined;
  open: boolean | undefined;
}

export default class DatePicker extends React.Component<IDatePickerProps, IDatePickerState> {
  static defaultProps = {
    dataSource: [],
    searchableKeys: [],
    activeRows: [],
    filterItems: []
  };
  constructor(props: IDatePickerProps) {
    super(props);
    var date = this.props.date || new Date(Date.now());
    this.state = {
      date: date,
      open: props.open || false
    };
  }

  componentDidUpdate(prevProps: IDatePickerProps) {
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

  render() {
    let { date } = this.state;
    let { mobile, title, className, outline, size, block } = this.props;
    return (
      <Dropdown
        className={className}
        icon="calendar"
        material
        title={
          title
            ? title
            : getDateFormatted(this.state.date as Date, this.props.selectTime ? this.props.selectTime : false)
        }
        mobile={mobile}
        open={this.state.open}
        onClick={this.toggleOpen.bind(this)}
        onClose={this.toggleClose.bind(this)}
        onCloseDropdown={this.toggleClose.bind(this)}
        theme={this.props.theme}
        outline={outline}
        size={size}
        block={block}
      >
        <Calendar
          mobile={mobile}
          selectTime={this.props.selectTime}
          selectedDay={this.state.date as Date}
          inDropdown={true}
          date={date as Date}
          onSelect={this.onSelect}
        />
      </Dropdown>
    );
  }
}

function getDateFormatted(date: Date, selectTime: boolean) {
  let dd = date.getDate(),
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
