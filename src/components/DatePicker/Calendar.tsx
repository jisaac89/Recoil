import * as React from 'react';

import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

import Months from './Months';
import DaysHeader from './DaysHeader';
import SelectMonth from './SelectMonth';
import SelectYear from './SelectYear';

type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

let monthNames: Month[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
        let date = props.date || new Date(Date.now());
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date
        };
    }

    componentWillReceiveProps(nextProps:ICalendarProps) {
        if(nextProps.date !== this.props.date){
            this.setState({
                date: nextProps.date,
                year: nextProps.date.getFullYear(),
                month: nextProps.date.getMonth()
            })
        }
    }    

    increaseMonth = () => {
        this.setState({
            month: this.state.month === 12 ? 1 : this.state.month + 1
        });
    }

    selectMonth = (month: number) => {
        console.log(month);
        this.setState({
            month: month + 1
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

    selectYear = (year: number) => {
        this.setState({
            year: Number(year)
        });
    }

    decreaseYear = () => {
        this.setState({
            year: this.state.year - 1
        });
    }

    selectDay(day: any) {
        if (this.props.onSelect) {
            this.props.onSelect(day);
        }
    }

    getDays(year: number, month: number) {
        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);

        let days = [firstDay];
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
        days.forEach(function (day) {
            if (day.getDay() === 0) {
                week = [];
                weeks.push(week);
            }
            week.push(day);
        });

        return weeks;
    }

    render(): JSX.Element {

        const self = this;

        let {year, month, date} = self.state;

        let Jan = this.getWeeks(year, 1),
            Feb = this.getWeeks(year, 2),
            Mar = this.getWeeks(year, 3),
            Apr = this.getWeeks(year, 4),
            May = this.getWeeks(year, 5),
            Jun = this.getWeeks(year, 6),
            Jul = this.getWeeks(year, 7),
            Aug = this.getWeeks(year, 8),
            Sep = this.getWeeks(year, 9),
            Oct = this.getWeeks(year, 10),
            Nov = this.getWeeks(year, 11),
            Dec = this.getWeeks(year, 12)

        return (
            <Layer flex className="r-Calendar">
                <Toolbar flush block flex noRadius>
                    <Button onClick={this.decreaseMonth} icon="chevron-left" />
                    <Button onClick={this.increaseMonth} icon="chevron-right" />
                    <SelectMonth 
                        month={month}
                        monthNames={monthNames}
                        selectMonth={this.selectMonth.bind(this)}
                    />
                    <SelectYear 
                        year={year}
                        monthNames={monthNames}
                        selectYear={this.selectYear.bind(this)}
                    />
                </Toolbar>
                <Layer flex theme="light" className="r-Table h100">
                    <DaysHeader />
                    <Layer className="r-Calendar-Scroll" fill flex scrollY scrollIf={!!this.state.month} scrollToId={this.state.month.toString()}>
                        <div id={"1"}>
                            <Months
                                title={monthNames[0]}   
                                year={year}
                                month={1}
                                currentMonth={Jan}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>  
                        <div id={"2"}>
                            <Months
                                title={monthNames[1]}   
                                year={year}
                                month={2}
                                currentMonth={Feb}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>  
                        <div id={"3"}>
                            <Months
                                title={monthNames[2]}   
                                year={year}
                                month={3}
                                currentMonth={Mar}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>  
                        <div id={"4"}>
                            <Months
                                title={monthNames[3]}   
                                year={year}
                                month={4}
                                currentMonth={Apr}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>  
                        <div id={"5"}>
                            <Months
                                title={monthNames[4]}   
                                year={year}
                                month={5}
                                currentMonth={May}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>
                        <div id={"6"}>
                            <Months
                                title={monthNames[5]}   
                                year={year}
                                month={6}
                                currentMonth={Jun}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>  
                        <div id={"7"}>
                            <Months
                                title={monthNames[6]}   
                                year={year}
                                month={7}
                                currentMonth={Jul}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>  
                        <div id={"8"}>
                            <Months
                                title={monthNames[7]}   
                                year={year}
                                month={8}
                                currentMonth={Aug}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>  
                        <div id={"9"}>
                            <Months
                                title={monthNames[8]}   
                                year={year}
                                month={9}
                                currentMonth={Sep}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>  
                        <div id={"10"}>                    
                            <Months
                                title={monthNames[9]}   
                                year={year}
                                month={10}
                                currentMonth={Oct}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>  
                        <div id={"11"}>
                            <Months
                                title={monthNames[10]}   
                                year={year}
                                month={11}
                                currentMonth={Nov}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />
                        </div>  
                        <div id={"12"}>
                            <Months
                                title={monthNames[11]}   
                                year={year}
                                month={12}
                                currentMonth={Dec}
                                selectDay={this.selectDay.bind(this)}
                                date={date}
                            />    
                        </div>                                                                                                                                                                                                                 
                    </Layer>
                </Layer>
            </Layer>
        );
    }
}