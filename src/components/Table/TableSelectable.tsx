import * as React from 'react';
import Selectable from '../Selectable/Selectable';

export interface ITableColumnSelectableProps {
  columns?: any;
  detailTemplate?: (element: object) => JSX.Element;
  selectedElements?: any;
  element?: any;
  checkable?: boolean;
  selectedKey?: string;
}

export default class TableSelectable extends React.Component<ITableColumnSelectableProps, any> {
  render() {
    const self = this;
    let { columns, detailTemplate, selectedElements, element, checkable, selectedKey } = self.props;

    return (
      <tr tabIndex={-1} className="r-TableColumnSelectable">
        <td colSpan={columns.length + (checkable ? 1 : 0) + (detailTemplate ? 1 : 0)}>
          <Selectable
            checked={selectedElements && selectedElements.includes(selectedKey ? element[selectedKey] : element)}
          />
        </td>
      </tr>
    );
  }
}
