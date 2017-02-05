import * as React from 'react';

import Dropdown from '../Dropdown/Dropdown';

export default class SelectYear extends React.Component<any, any> {
    render() {

        const self = this;

        let {year, selectYear} = this.props;

        return (
            <Dropdown 
                className="w100"
                material 
                block  
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


function availableYears (year) {

    let currentYear = year;
    let index = 0;
    let availableYearsArray = [];
    let startYear = year - 2;
    let endYear = year + 100;

    function recursion(start, end) {
        let currentYear = start;
        let endYear = end;
        if (currentYear < endYear){
            availableYearsArray.push(currentYear);
            recursion(currentYear + 1, endYear);
        } else {
            return null;
        }
         
    }

    recursion(startYear, endYear);
    return availableYearsArray;
}