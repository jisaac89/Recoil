import React from 'react';
import { Dropdown } from '../Dropdown/Dropdown';

export class SelectYear extends React.Component<any, any> {
  render() {
    const { year, selectYear } = this.props;

    return (
      <Dropdown
        material
        title={year.toString()}
        selectedElements={[year]}
        dataSource={availableYears(year)}
        rowIsSelectable={'single'}
        onChange={selectYear}
        pageSize={availableYears(year).length}
        hideHeader
        hideDropdownHeader
      />
    );
  }
}

function availableYears(year: number) {
  const availableYearsArray: Array<any> = [];
  const startYear = year - 2;
  const endYear = year + 100;

  function recursion(start: number, end: number): any {
    const currentYear = start;
    if (currentYear < end) {
      availableYearsArray.push(currentYear);
      recursion(currentYear + 1, end);
    } else {
      return false;
    }
  }

  recursion(startYear, endYear);
  return availableYearsArray;
}
