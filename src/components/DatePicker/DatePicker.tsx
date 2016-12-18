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
    date: Date | string;
    onSelect: (date: Date) => void;
}

export default class DatePicker extends React.Component<IDatePickerProps, any>{
    onSelect = (date: Date) => {
        this.props.onSelect(date);
    }

    render() {
        var date: Date;
        if (!(this.props.date instanceof Date)) {
            date = new Date(this.props.date as string);
        } else {
            date = this.props.date as Date;
        }
        return (
            <Dropdown material title={getDateFormatted(date) }>
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