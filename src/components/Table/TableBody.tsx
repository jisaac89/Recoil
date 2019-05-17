import React from 'react';
import { TableDetail } from './TableDetail';
import { TableRow } from './TableRow';
import { TableSelectable } from './TableSelectable';
import { TableBodyProps } from './TableTypes';

export class TableBody extends React.Component<TableBodyProps> {
  render() {
    const self = this;
    const props = self.props;

    const {
      columns,
      detailTemplate,
      activeRows,
      selectedElements,
      dataSource,
      serverSide,
      detailTemplateOpenAll,
      detailTemplateToggleSelectedElements,
      detailTemplateSelectedElements,
      detailTemplateHideToggle,
      disableSelectedElements,
      toggleSelectedElements,
      rowIsSelectable,
      id,
      checkable,
      hideColumns,
      onRowSelect,
      isArray,
      detailTemplateOpenOnRowSelect,
      selectedKey,
      filterRow,
      filterOpenDetailTemplate,
      tableDataClassName,
      loadingElements,
      loadingKey
    } = props;

    const columnArray: Array<any> = [];
    let key;

    let data;

    if (serverSide) {
      data = dataSource;
    } else {
      data = activeRows;
    }

    if (data instanceof Array) {
      data.map((element, index) => {
        const columnProps = {
          element,
          columns,
          detailTemplate,
          toggleSelectedElements,
          detailTemplateOpenAll,
          detailTemplateToggleSelectedElements,
          detailTemplateSelectedElements,
          detailTemplateHideToggle,
          rowIsSelectable,
          selectedElements,
          checkable: checkable,
          hideColumns: hideColumns,
          onRowSelect,
          index,
          isArray,
          detailTemplateOpenOnRowSelect,
          selectedKey: selectedKey,
          filterOpenDetailTemplate,
          id,
          disableSelectedElements,
          tableDataClassName,
          loadingElements,
          loadingKey
        };
        if (typeof element === 'string' || typeof element === 'number') {
          key = element;
        } else {
          if (!element['_uniqueId']) {
            Object.defineProperty(element, '_uniqueId', {
              configurable: true,
              enumerable: false,
              writable: true,
              value: Math.floor(Math.random() * 100000)
            });
          }

          key = element['_uniqueId'];
        }
        const keySelectable = key + '_selectable';
        const keyDetail = key + '_detail';
        let filteredElement;

        filterRow ? (filteredElement = filterRow(element)) : (filteredElement = false);
        if (filteredElement === false) {
          columnArray.push([
            [<TableRow key={key} id={key} {...columnProps} />],
            [<TableSelectable key={keySelectable} {...columnProps} />],
            [<TableDetail key={keyDetail} {...columnProps} />]
          ]);
        } else {
          return null;
        }
      });
    }

    return <tbody tab-index={-1}>{columnArray}</tbody>;
  }
}
