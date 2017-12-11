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

    render() {
        let {date} = this.state;
        let {mobile} = this.props;
        return (
            <Dropdown 
                icon="calendar" 
                type="text" 
                material 
                title={getDateFormatted(this.state.date)}
                mobile={mobile}
            >
                <Layer>
                    <Calendar selectedDay={this.props.selectedDay} inDropdown={true} date={date} onSelect={this.onSelect} />
                </Layer>
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