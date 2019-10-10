import React from 'react';

import Dropdown from '../Dropdown/Dropdown';

export default class SelectYear extends React.Component<any, any> {
  render() {
    let { year, selectYear } = this.props;

    return (
      <Dropdown
        material
        title={year.toString()}
        selectedElements={[year]}
        dataSource={availableYears(year)}
        rowIsSelectable="single"
        onChange={selectYear}
        pageSize={availableYears(year).length}
        hideHeader
        hideDropdownHeader
      />
    );
  }
}

function availableYears(year: number) {
  let availableYearsArray: Array<any> = [];
  let startYear = year - 2;
  let endYear = year + 100;

  function recursion(start: number, end: number): any {
    let currentYear = start;
    let endYear = end;
    if (currentYear < endYear) {
      availableYearsArray.push(currentYear);
      recursion(currentYear + 1, endYear);
    } else {
      return false;
    }
  }

  recursion(startYear, endYear);
  return availableYearsArray;
}
