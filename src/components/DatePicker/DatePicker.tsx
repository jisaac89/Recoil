import * as React from 'react';
import './DatePicker.less';

import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';

import * as classNames from 'classnames';

import Calendar, {ICalendarProps, ICalendarState} from './Calendar';
export {Calendar, ICalendarProps, ICalendarState};

export interface IDatePickerProps {
    mask?: string;
    date?: Date | string;
    onSelect? : (date: Date) => void;
}

export default class DatePicker extends React.Component<IDatePickerProps, any>{

    constructor(props?: ICalendarProps) {
        super(props);
        var date = this.props.date || new Date(Date.now());
        this.state = {
            date : date
        }
    }
    
    onSelect = (date: Date) => {
        this.setState({
            date : date
        })
        this.props.onSelect ? this.props.onSelect(date) : null;
    }

    onChange = (value) => { 
        this.setState({
            date : new Date(value)
        })
    }

    render() {
        let {date} = this.state;
        return (
            <Dropdown onChange={this.onChange.bind(this)} icon="calendar" type="text" material title={getDateFormatted(this.state.date)}>
                <Calendar date={date} onSelect={this.onSelect} />
            </Dropdown>
        );
    }
}

function getDateFormatted(date: Date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();

    var day = dd < 10 ? '0' + dd : '' + dd;
    var month = mm < 10 ? '0' + mm : '' + mm;
    return month + '/' + day + '/' + yyyy;
}


function convertFormattedDate(date) {

    let splitDate = date.split('/');

    var dd = splitDate[0].getDate();
    var mm = splitDate[1].getMonth() + 1; //January is 0!
    var yyyy = splitDate[2].getFullYear();

    var day = dd < 10 ? '0' + dd : '' + dd;
    var month = mm < 10 ? '0' + mm : '' + mm;
    return month + '/' + day + '/' + yyyy;
}