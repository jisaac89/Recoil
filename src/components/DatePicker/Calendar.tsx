import * as React from 'react';

import Align from '../Align/Align';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import Toolbar from '../Toolbar/Toolbar';
import Input from '../Input/Input';

type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

var monthNames: Month[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export interface ICalendarProps {
    date?: Date;
    onSelect?: (date: Date) => any;
}

export interface ICalendarState {
    month?: number;
    year?: number;
    date?: Date;
}

export default class Calendar extends React.Component<ICalendarProps, ICalendarState> {
    constructor(props?: ICalendarProps) {
        super(props);
        var date = this.props.date || new Date(Date.now());
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date
        };
    }

    increaseMonth = () => {
        this.setState({
            month: (this.state.month + 1) % 12
        });
    }

    selectMonth = (month, index) => {
        this.setState({
            month: (index) % 12
        });
    }

    decreaseMonth = () => {
        this.setState({
            month: (this.state.month + 11) % 12
        });
    }

    increaseYear = () => {
        this.setState({
            year: this.state.year + 1
        });
    }

    decreaseYear = () => {
        this.setState({
            year: this.state.year - 1
        });
    }

    selectDay = (day) => {
        if (this.props.onSelect) {
            this.props.onSelect(day);
        }
    }

    getDays(year: number, month: number) {
        var firstDay = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0);

        var days = [firstDay];
        for (var index = 2, length = lastDay.getDate(); index < length; index++) {
            days.push(new Date(year, month, index));
        }
        days.push(lastDay);

        return days;
    }

    getWeeks(year: number, month: number) {
        var days = this.getDays(year, month);

        var weeks: Date[][] = [];
        var week: Date[];

        if (days[0].getDay() !== 0) {
            week = [];
            weeks.push(week);
        }
        days.forEach(function (day) {
            if (day.getDay() === 0) {
                week = [];
                weeks.push(week);
            }
            week.push(day);
        });

        return weeks;
    }

    render() {
        var weeks = this.getWeeks(this.state.year, this.state.month);
        return (
            <div className="r-Calendar">
                <div>
                    <Toolbar flush block flex textCenter noRadius>
                        <Button onClick={this.decreaseMonth} icon="chevron-left" />
                        <Dropdown 
                            className="w100"
                            material 
                            block 
                            title={monthNames[this.state.month]} 
                            selectedElements={[monthNames[this.state.month]]} 
                            onChange={this.selectMonth.bind(this)} 
                            dataSource={monthNames}
                            pageSize={monthNames.length}
                            hideHeader
                        />
                        <Button onClick={this.increaseMonth} icon="chevron-right" />
                    </Toolbar>
                    <Toolbar flush block flex textCenter noRadius>
                        <Button onClick={this.decreaseYear} icon="chevron-left" />
                        <Input flex className="text-center w100" value={this.state.year.toString()} />
                        <Button onClick={this.increaseYear} icon="chevron-right" />
                    </Toolbar>
                </div>
                <table className="w100">
                    <thead>
                        <tr>
                            <th className="p5">Sun</th>
                            <th className="p5">Mon</th>
                            <th className="p5">Tue</th>
                            <th className="p5">Wed</th>
                            <th className="p5">Thu</th>
                            <th className="p5">Fri</th>
                            <th className="p5">Sat</th>
                        </tr>
                    </thead>
                    <tbody className="r-Calendar__body">
                        {weeks.map((week, index, array) => {
                            return (
                                <tr key={this.state.year + ' ' + this.state.month + ' ' + index}>
                                    {index === 0 && week.length < 7 ?
                                        <td colSpan={7 - week.length}></td>
                                        : undefined}
                                    {week.map((day, index, array) => {
                                        var selected = this.props.date && this.props.date.getTime() === day.getTime();
                                        return (
                                            <td className={selected ? 'selected-date' : undefined} key={this.state.year + ' ' + this.state.month + ' ' + index}>
                                                <a className="p5" onClick={this.selectDay.bind(this, day) }>{day.getDate() }</a>
                                            </td>
                                        );
                                    }) }
                                    {index > 0 && week.length < 7 ?
                                        <td colSpan={7 - week.length}></td>
                                        : undefined}
                                </tr>
                            );
                        }) }
                    </tbody>
                </table>
            </div>
        );
    }
}
