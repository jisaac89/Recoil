import React from 'react';
import Selectable from '../Selectable/Selectable';
import { IColumn } from './Table';
import { TDataSource } from '../DataSource/DataSource';

export interface ITableColumnSelectableProps {
  columns: IColumn[];
  detailTemplate?: (element: TDataSource) => JSX.Element;
  selectedElements?: TDataSource[];
  element?: TDataSource;
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
            checked={
              selectedElements && selectedElements.includes(selectedKey && element ? element[selectedKey] : element)
            }
          />
        </td>
      </tr>
    );
  }
}
