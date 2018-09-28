import * as React from 'react';

import Months from './Months';
import Layer from '../Layer/Layer';

export default class MobileTemplate extends React.Component<any, any> {
  render() {
    let { monthNames, date, selectDay, selectedDay, year, getWeeks, month, setHeight } = this.props;

    let Jan = getWeeks(year, 0),
      Feb = getWeeks(year, 1),
      Mar = getWeeks(year, 2),
      Apr = getWeeks(year, 3),
      May = getWeeks(year, 4),
      Jun = getWeeks(year, 5),
      Jul = getWeeks(year, 6),
      Aug = getWeeks(year, 7),
      Sep = getWeeks(year, 8),
      Oct = getWeeks(year, 9),
      Nov = getWeeks(year, 10),
      Dec = getWeeks(year, 11);

    return (
      <Layer
        style={setHeight}
        className="r-Calendar-Scroll"
        flex
        scrollY={true}
        scrollIf={month.toString().length}
        scrollToId={month.toString()}
      >
        <div id="0">
          <Months
            title={monthNames[0]}
            year={year}
            month={0}
            currentMonth={Jan}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'1'}>
          <Months
            title={monthNames[1]}
            year={year}
            month={1}
            currentMonth={Feb}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'2'}>
          <Months
            title={monthNames[2]}
            year={year}
            month={2}
            currentMonth={Mar}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'3'}>
          <Months
            title={monthNames[3]}
            year={year}
            month={3}
            currentMonth={Apr}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'4'}>
          <Months
            title={monthNames[4]}
            year={year}
            month={4}
            currentMonth={May}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'5'}>
          <Months
            title={monthNames[5]}
            year={year}
            month={5}
            currentMonth={Jun}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'6'}>
          <Months
            title={monthNames[6]}
            year={year}
            month={6}
            currentMonth={Jul}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'7'}>
          <Months
            title={monthNames[7]}
            year={year}
            month={7}
            currentMonth={Aug}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'8'}>
          <Months
            title={monthNames[8]}
            year={year}
            month={8}
            currentMonth={Sep}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'9'}>
          <Months
            title={monthNames[9]}
            year={year}
            month={9}
            currentMonth={Oct}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'10'}>
          <Months
            title={monthNames[10]}
            year={year}
            month={10}
            currentMonth={Nov}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
        <div id={'11'}>
          <Months
            title={monthNames[11]}
            year={year}
            month={11}
            currentMonth={Dec}
            selectDay={selectDay.bind(this)}
            date={date}
            selectedDay={selectedDay}
            mobile={true}
          />
        </div>
      </Layer>
    );
  }
}
