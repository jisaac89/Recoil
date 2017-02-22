import * as React from 'react';

import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';
import Modal from '../Modal/Modal';

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
    modalIsOpen ?: boolean;
}

export default class Calendar extends React.Component<ICalendarProps, ICalendarState> {
    constructor(props?: ICalendarProps) {
        super(props);
        this.state = {
            modalIsOpen: false
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

    selectMonth = (...Args) => {
        let monthIndex = Args[1];
        this.setState({
            month: monthIndex + 1
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

    openCalendar(){
        
    }

    render(): JSX.Element {

        const self = this;

        return (
            <div>
                <Button onClick={this.openCalendar.bind(this)}>Calendar</Button>
                <Modal open={this.state.modalIsOpen}>
                    <Calendar />
                </Modal>
            </div>
        );
    }
}