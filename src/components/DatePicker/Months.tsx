import * as React from 'react';

import Dropdown from '../Dropdown/Dropdown';

export default class Months extends React.Component<any, any> {
    render() {

        const self = this;

        let {year, month, currentMonth, selectDay, date, title} = this.props;

        if (currentMonth) {
            return (
                    <table className="w100 h100">
                        <tbody className="r-Calendar__body h100">
                            <tr>
                                <td colSpan={7} className="month-header">{title}</td>
                            </tr>
                                {currentMonth.map((week, index, array) => {
                                    return (
                                        <tr key={index}>
                                            {index === 0 && week.length < 7 ?
                                                <td className="empty-date" colSpan={7 - week.length}></td>
                                                : undefined}
                                            {week.map((day, index, array) => {
                                                let selected = date && date.getTime() === day.getTime();
                                                return (
                                                    <td onClick={this.props.selectDay.bind(this, day) } className={selected ? 'selected-date' : undefined} key={year + ' ' + month + ' ' + index}>
                                                        {day.getDate() }
                                                    </td>
                                                );
                                            }) }
                                            {index > 0 && week.length < 7 ?
                                                <td className="empty-date" colSpan={7 - week.length}></td>
                                                : undefined}
                                        </tr>
                                    );
                                }) }
                        </tbody>
                    </table>
            );
        } else return null;
    }
}