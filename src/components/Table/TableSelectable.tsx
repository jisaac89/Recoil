import React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { ITableColumnSelectableProps } from './TableTypes';

export class TableSelectable extends React.Component<ITableColumnSelectableProps> {
  render() {
    const self = this;
    const { columns, detailTemplate, selectedElements, element, checkable, selectedKey } = self.props;

    return (
      <tr tabIndex={-1} className={'r-TableColumnSelectable'}>
        <td colSpan={columns && columns.length + (checkable ? 1 : 0) + (detailTemplate ? 1 : 0)}>
          <Selectable
            checked={selectedElements && selectedElements.includes(selectedKey ? element[selectedKey] : element)}
          />
        </td>
      </tr>
    );
  }
}
