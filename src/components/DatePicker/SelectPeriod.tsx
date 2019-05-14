import React from 'react';
import { Dropdown } from '../Dropdown/Dropdown';

export class SelectPeriod extends React.Component<any, any> {
  render(): JSX.Element {
    const { period, periods, selectPeriod } = this.props;

    return (
      <Dropdown
        className='w100'
        material
        block
        title={periods[period]}
        selectedElements={[periods[period]]}
        rowIsSelectable={'single'}
        onChange={selectPeriod}
        dataSource={periods}
        pageSize={periods.length}
        hideHeader
        hideDropdownHeader
        scrollToId={periods[period]}
      />
    );
  }
}
