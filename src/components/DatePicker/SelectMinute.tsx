import React from 'react';
import { Dropdown } from '../Dropdown/Dropdown';

export class SelectMinute extends React.Component<any, any> {
  render(): JSX.Element {
    const { minute, minutes, selectMinute } = this.props;

    return (
      <Dropdown
        material
        title={minute}
        selectedElements={minute}
        rowIsSelectable='single'
        onChange={selectMinute}
        dataSource={minutes}
        pageSize={minutes.length}
        hideHeader
        hideDropdownHeader
        scrollToId={minutes[minute]}
      />
    );
  }
}
