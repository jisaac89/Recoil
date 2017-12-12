import * as React from 'react';

import Dropdown from '../Dropdown/Dropdown';
import Layer from '../Layer/Layer';

import Calendar, {ICalendarProps, ICalendarState} from './Calendar';

export {Calendar, ICalendarProps, ICalendarState};

export interface IDatePickerProps {
    mask?: string;
    date?: Date | string;
    onSelect? : (date: Date) => void;
    mobile? : boolean;
    selectedDay?: Date;
    selectTime?: boolean;
    open?: boolean;
    theme?: 'primary' | 'success' | 'error' | 'default';
}

export default class DatePicker extends React.Component<IDatePickerProps, any>{

    constructor(props?: IDatePickerProps) {
        super(props);
        var date = this.props.date || new Date(Date.now());
        this.state = {
            date : date,
            open: props.open || false
        }
    }
    
    onSelect = (date: Date) => {
        this.setState({
            date : date
        })
        this.props.onSelect ? this.props.onSelect(date) : null;
    }

    toggleOpen(){
        this.setState({
            open: !this.state.open
        })
    }

    toggleClose(){
        this.setState({
            open: false
        })
    }

    render() {
        let {date} = this.state;
        let {mobile} = this.props;
        return (
            <Dropdown 
                icon="calendar" 
                type="text" 
                material 
                title={getDateFormatted(this.state.date, this.props.selectTime)}
                mobile={mobile}
                open={this.state.open}
                onClick={this.toggleOpen.bind(this)}
                onClose={this.toggleClose.bind(this)}
                theme={this.props.theme}
            >
                <Calendar mobile={mobile} selectTime={this.props.selectTime} selectedDay={this.props.selectedDay} inDropdown={true} date={date} onSelect={this.onSelect} />
            </Dropdown>
        );
    }
}

function getDateFormatted(date: Date, selectTime) {
    let dd = date.getDate(),
        mm = date.getMonth() + 1,
        yyyy = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        day = dd < 10 ? '0' + dd : '' + dd,
        month = mm < 10 ? '0' + mm : '' + mm;

    if (selectTime){
        return month + '/' + day + '/' + yyyy + ' - ' + hours + ':' + minutes;
    }else {
        return month + '/' + day + '/' + yyyy;
    }
}