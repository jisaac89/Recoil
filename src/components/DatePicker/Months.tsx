import * as React from 'react';

import Button from '../Button/Button';

export default class Months extends React.Component<any, any> {
    render() {

        let { year, month, currentMonth, title, selectedDay, mobile } = this.props;

        if (currentMonth) {
            return (
                <table className="w100 h100">
                    <tbody className="r-Calendar__body h100">
                        {mobile ? <tr>
                            <td colSpan={7} className="month-header">{title}</td>
                        </tr> : null}
                        {currentMonth.map((week: any, index: any): any => {
                            return (
                                <tr key={index}>
                                    {index === 0 && week.length < 7 ?
                                        <td className="empty-date p0" colSpan={7 - week.length}></td>
                                        : undefined}
                                    {week.map((day: any, index: any) => {
                                        let selected = selectedDay.toDateString() == day.toDateString();
                                        return (
                                            <td className="p0" key={year + ' ' + month + ' ' + index}>
                                                <Button simple advanced checked={selected} onClick={this.props.selectDay.bind(this, day)} theme={selected ? 'primary' : undefined} className="e-fill">{day.getDate()}</Button>
                                            </td>
                                        );
                                    })}
                                    {index > 0 && week.length < 7 ?
                                        <td className="empty-date p0" colSpan={7 - week.length}></td>
                                        : undefined}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            );
        } else return null;
    }
}
