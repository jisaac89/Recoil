import React from 'react';
import { Open } from '../Open/Open';
import { IColumn } from './IColumn';
import { ITableColumnDetailProps } from './TableTypes';

export class TableDetail extends React.Component<ITableColumnDetailProps> {
  render() {
    const self = this;
    const props = self.props;
    const {
      element,
      columns,
      detailTemplate,
      detailTemplateOpenAll,
      detailTemplateSelectedElements,
      checkable,
      selectedKey
    } = props;

    if (detailTemplate) {
      return (
        <tr className="r-TableColumnDetail">
          <td colSpan={columns && columns.length + (checkable ? 1 : 0) + (detailTemplate ? 1 : 0)}>
            <Open
              if={
                detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element) ||
                detailTemplateOpenAll
              }>
              {() => {
                if (detailTemplate) {
                  return detailTemplate(element);
                }
              }}
            </Open>
          </td>
        </tr>
      );
    } else {
      return null;
    }
  }
}
