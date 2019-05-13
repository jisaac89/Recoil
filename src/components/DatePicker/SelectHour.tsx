import React from 'react';
import { Dropdown } from '../Dropdown/Dropdown';

export class SelectHour extends React.Component<any, any> {
  render(): JSX.Element {
    const { hour, hours, selectHour } = this.props;

    return (
      <Dropdown
        material
        title={hour}
        selectedElements={[hour]}
        rowIsSelectable="single"
        onChange={selectHour}
        dataSource={hours}
        pageSize={hours.length}
        hideHeader
        hideDropdownHeader
        scrollToId={hours[hour]}
      />
    );
  }
}
