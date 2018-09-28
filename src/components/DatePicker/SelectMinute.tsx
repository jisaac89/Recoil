import * as React from 'react';

import Dropdown from '../Dropdown/Dropdown';

export default class SelectMinute extends React.Component<any, any> {
  render(): JSX.Element {
    let { minute, minutes, selectMinute } = this.props;

    return (
      <Dropdown
        material
        title={minute}
        selectedElements={minute}
        rowIsSelectable="single"
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
