import React from 'react';
import { Button } from '../Button/Button';
import { Layer } from '../Layer/Layer';
import { Toolbar } from '../Toolbar/Toolbar';
import { DaysHeader } from './DaysHeader';
import { MobileTemplate } from './MobileTemplate';
import { Months } from './Months';
import { SelectHour } from './SelectHour';
import { SelectMinute } from './SelectMinute';
import { SelectMonth } from './SelectMonth';
import { SelectYear } from './SelectYear';

type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

const monthNames: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const createArrayOfNumbers = function(n: number, string?: any) {
  const numbersArray: string[] = [];
  for (let x = 0; x < n; x++) {
    numbersArray.push(x.toString() + string);
  }
  return numbersArray;
};

// let periods = ['AM', 'PM'];

export interface ICalendarProps {
  date?: Date;
  onSelect?: (date: Date) => any;
  calendarHeight?: string;
  inDropdown?: boolean;
  selectedDay?: Date;
  selectTime?: boolean;
  mobile?: boolean;
}

export interface ICalendarState {
  month: number;
  year: number;
  date: Date;
  selectedDay: Date;
  hour: any;
  minute: any;
  period: string;
}

export class Calendar extends React.Component<ICalendarProps, ICalendarState> {
  public static defaultProps = {
    calendarHeight: '400px',
    inDropdown: false,
    date: new Date(Date.now()),
    selectTime: false
  };

  constructor(props: ICalendarProps) {
    super(props);
    const date = props.date || new Date(Date.now());
    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date,
      selectedDay: props.selectedDay || new Date(Date.now()),
      hour: date.getHours() + 'h' || '0h',
      minute: date.getMinutes() + 'm' || '0m',
      period: 'AM'
    };
  }

  componentDidUpdate(prevProps: ICalendarProps) {
    if (this.props.date && prevProps.date !== this.props.date) {
      this.setState({
        date: this.props.date,
        year: this.props.date.getFullYear(),
        month: this.props.date.getMonth()
      });
    }
  }

  increaseMonth = () => {
    const { state } = this;
    if (state) {
      this.setState({
        month: state.month === 11 ? 0 : state.month + 1
      });
    }
  };

  selectMonth = (...Args: Array<any>) => {
    const monthIndex = Args[1];
    this.setState({
      month: monthIndex
    });
  };

  decreaseMonth = () => {
    this.setState({
      month: (this.state.month + 11) % 12
    });
  };

  increaseYear = () => {
    this.setState({
      year: this.state.year + 1
    });
  };

  selectYear = (year: number) => {
    this.setState({
      year: Number(year)
    });
  };

  decreaseYear = () => {
    this.setState({
      year: this.state.year - 1
    });
  };

  selectDay(day: any) {
    if (this.props.onSelect) {
      this.props.onSelect(day);
      this.setState({
        selectedDay: day
      });
    }
  }

  getDays(year: number, month: number) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days = [firstDay];
    for (let index = 2, length = lastDay.getDate(); index < length; index++) {
      days.push(new Date(year, month, index));
    }
    days.push(lastDay);

    return days;
  }

  getWeeks(year: number, month: number) {
    const days = this.getDays(year, month);

    const weeks: Date[][] = [];
    let week: Date[];

    if (days[0].getDay() !== 0) {
      week = [];
      weeks.push(week);
    }
    days.forEach(function(day) {
      if (day.getDay() === 0) {
        week = [];
        weeks.push(week);
      }
      week.push(day);
    });

    return weeks;
  }

  selectHour(hour) {
    this.setState({
      hour: hour
    });
  }

  selectMinute(min) {
    this.setState({
      minute: min
    });
  }

  SelectPeriod(period) {
    this.setState({
      period: period
    });
  }

  render(): JSX.Element {
    const self = this;

    const { year, month, date, selectedDay } = self.state;
    const { calendarHeight, inDropdown } = self.props;

    const setHeight = inDropdown ? { height: '100%' } : { height: calendarHeight };

    return (
      <Layer flex className={'r-Calendar'}>
        <Toolbar flush block flex noRadius>
          <Toolbar block={!this.props.selectTime} flush flex noRadius>
            <Button onClick={this.decreaseMonth} icon={'chevron-left'} />
            <Button onClick={this.increaseMonth} icon={'chevron-right'} />
            <SelectMonth month={month} monthNames={monthNames} selectMonth={this.selectMonth} />
            <SelectYear year={year} monthNames={monthNames} selectYear={this.selectYear} />
          </Toolbar>
          {this.props.selectTime ? (
            <Toolbar flush flex noRadius>
              <Button>-</Button>
              <SelectHour hour={this.state.hour} hours={createArrayOfNumbers(25, 'h')} selectHour={this.selectHour} />
              <Button>:</Button>
              <SelectMinute
                minute={this.state.minute}
                minutes={createArrayOfNumbers(60, 'm')}
                selectMinute={this.selectMinute}
              />
            </Toolbar>
          ) : null}
        </Toolbar>
        <Layer overflow flex theme={'light'}>
          <Layer fill flex>
            <DaysHeader />
            {this.props.mobile ? (
              <MobileTemplate
                monthNames={monthNames}
                date={this.state.date}
                selectDay={this.selectDay}
                selectedDay={this.state.selectedDay}
                year={this.state.year}
                getWeeks={this.getWeeks}
                month={this.state.month}
                setHeight={setHeight}
              />
            ) : (
              <Months
                title={monthNames[this.state.month]}
                year={year}
                month={this.state.month}
                currentMonth={this.getWeeks(year, this.state.month)}
                selectDay={this.selectDay}
                date={date}
                selectedDay={selectedDay}
                mobile={this.props.mobile}
              />
            )}
          </Layer>
        </Layer>
      </Layer>
    );
  }
}
