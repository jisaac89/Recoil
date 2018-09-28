import * as React from 'react';

import Dropdown from '../Dropdown/Dropdown';

export default class SelectHour extends React.Component<any, any> {
  render(): JSX.Element {
    let { hour, hours, selectHour } = this.props;

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
