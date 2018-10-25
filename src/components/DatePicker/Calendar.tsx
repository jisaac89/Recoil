import * as React from 'react';

import Layer from '../Layer/Layer';
import { Button } from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

import Months from './Months';
import { DaysHeader } from './DaysHeader';
import SelectMonth from './SelectMonth';
import SelectYear from './SelectYear';

import SelectHour from './SelectHour';
import SelectMinute from './SelectMinute';
// import SelectPeriod from './SelectPeriod';

import MobileTemplate from './MobileTemplate';

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

let monthNames: Month[] = [
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

let createArrayOfNumbers = function(n, string?: any) {
	let numbersArray = [];
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
	month?: number;
	year?: number;
	date?: Date;
	selectedDay?: Date;
	hour?: any;
	minute?: any;
	period?: string;
}

export default class Calendar extends React.Component<ICalendarProps, ICalendarState> {
	public static defaultProps = {
		calendarHeight: '400px',
		inDropdown: false,
		date: new Date(Date.now()),
		selectTime: false
	};

	constructor(props?: ICalendarProps) {
		super(props);
		let date = props.date || new Date(Date.now());
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
		if (prevProps.date !== this.props.date) {
			this.setState({
				date: this.props.date,
				year: this.props.date.getFullYear(),
				month: this.props.date.getMonth()
			});
		}
	}

	increaseMonth = () => {
		this.setState({
			month: this.state.month === 11 ? 0 : this.state.month + 1
		});
	};

	selectMonth = (...Args: Array<any>) => {
		let monthIndex = Args[1];
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
		let firstDay = new Date(year, month, 1);
		let lastDay = new Date(year, month + 1, 0);

		let days = [ firstDay ];
		for (let index = 2, length = lastDay.getDate(); index < length; index++) {
			days.push(new Date(year, month, index));
		}
		days.push(lastDay);

		return days;
	}

	getWeeks(year: number, month: number) {
		let days = this.getDays(year, month);

		let weeks: Date[][] = [];
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

		let { year, month, date, selectedDay } = self.state;
		let { calendarHeight, inDropdown } = self.props;

		let setHeight = inDropdown ? { height: '100%' } : { height: calendarHeight };

		return (
			<Layer flex className="r-Calendar">
				<Toolbar flush block flex noRadius>
					<Toolbar block={!this.props.selectTime} flush flex noRadius>
						<Button onClick={this.decreaseMonth} icon="chevron-left" />
						<Button onClick={this.increaseMonth} icon="chevron-right" />
						<SelectMonth month={month} monthNames={monthNames} selectMonth={this.selectMonth.bind(this)} />
						<SelectYear year={year} monthNames={monthNames} selectYear={this.selectYear.bind(this)} />
					</Toolbar>
					{this.props.selectTime ? (
						<Toolbar flush flex noRadius>
							<Button>-</Button>
							<SelectHour
								hour={this.state.hour}
								hours={createArrayOfNumbers(25, 'h')}
								selectHour={this.selectHour.bind(this)}
							/>
							<Button>:</Button>
							<SelectMinute
								minute={this.state.minute}
								minutes={createArrayOfNumbers(60, 'm')}
								selectMinute={this.selectMinute.bind(this)}
							/>
						</Toolbar>
					) : null}
				</Toolbar>
				<Layer overflow flex theme="light">
					<Layer fill flex>
						<DaysHeader />
						{this.props.mobile ? (
							<MobileTemplate
								monthNames={monthNames}
								date={this.state.date}
								selectDay={this.selectDay.bind(this)}
								selectedDay={this.state.selectedDay}
								year={this.state.year}
								getWeeks={this.getWeeks.bind(this)}
								month={this.state.month}
								setHeight={setHeight}
							/>
						) : (
							<Months
								title={monthNames[this.state.month]}
								year={year}
								month={this.state.month}
								currentMonth={this.getWeeks(year, this.state.month)}
								selectDay={this.selectDay.bind(this)}
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
