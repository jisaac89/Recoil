import React from 'react';
import Button from '../Button/Button';
import { Month } from './Calendar';

interface IMonthsProps {
  month: number;
  year: number;
  currentMonth: Date[][];
  title: Month;
  mobile: boolean;
  selectDay: (date: Date) => void;
  date: Date;
  selectedDay: Date;
}

export default class Months extends React.Component<IMonthsProps> {
  render() {
    let { year, month, currentMonth, title, selectedDay, mobile } = this.props;

    if (currentMonth) {
      return (
        <table className="w100 h100">
          <tbody className="r-Calendar__body h100">
            {mobile ? (
              <tr>
                <td colSpan={7} className="month-header">
                  {title}
                </td>
              </tr>
            ) : null}
            {currentMonth.map((week: any, index: any): any => {
              return (
                <tr key={index}>
                  {index === 0 && week.length < 7 ? (
                    <td className="empty-date p0" colSpan={7 - week.length} />
                  ) : (
                    undefined
                  )}
                  {week.map((day: any, index: any) => {
                    let selected = selectedDay.toDateString() == day.toDateString();
                    return (
                      <td className="p0" key={year + ' ' + month + ' ' + index}>
                        <Button
                          simple
                          advanced
                          checked={selected}
                          onClick={this.props.selectDay.bind(this, day)}
                          theme={selected ? 'primary' : undefined}
                          className="e-fill"
                        >
                          {day.getDate()}
                        </Button>
                      </td>
                    );
                  })}
                  {index > 0 && week.length < 7 ? (
                    <td className="empty-date p0" colSpan={7 - week.length} />
                  ) : (
                    undefined
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else return null;
  }
}
