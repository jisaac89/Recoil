import * as React from 'react';

import TableRow from './TableRow';
import TableDetail from './TableDetail';
import TableSelectable from './TableSelectable';

import { IColumn } from './IColumn';

export interface TableBodyProps {
  id?: string;
  portal?: boolean;
  activeRows: any;
  // initial dataSource loaded as prop
  dataSource: Array<any> | Object;
  // columns defined by user
  columns?: Array<IColumn>;
  // a detail template function that returns a view
  detailTemplate?: (element: Array<any>) => JSX.Element;
  selectedElements?: Array<any>;
  detailTemplateOpenAll?: boolean;
  detailTemplateToggleSelectedElements?: boolean;
  detailTemplateSelectedElements?: Array<any>;
  detailTemplateHideToggle?: boolean;
  toggleSelectedElements?: Array<any>;
  rowIsSelectable?: boolean | string;
  checkable?: boolean;
  hideColumns?: Array<any>;
  onRowSelect?: (
    element?: Array<any>,
    key?: string | number,
    selectedElements?: Array<any> | Object,
    id?: string | number
  ) => void;
  isArray?: boolean;
  detailTemplateOpenOnRowSelect?: boolean | 'single';
  selectedKey?: string;
  filterRow?: (item: Object) => void;
  filterOpenDetailTemplate?: (item: Object) => void;
  serverSide?: boolean;
  disableSelectedElements?: Array<any>;
  tableDataClassName?: string;
  loadingElements?: any[];
  loadingKey?: string;
}

export default class TableBody extends React.Component<TableBodyProps, any> {
  render() {
    const self = this;
    const props = self.props;

    let {
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

    let columnArray: Array<any> = [];
    let key;

    let data;

    if (serverSide) {
      data = dataSource;
    } else {
      data = activeRows;
    }

    if (data instanceof Array) {
      data.map((element, index) => {
        let columnProps = {
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
        let keySelectable = key + '_selectable';
        let keyDetail = key + '_detail';
        let filteredElement;

        filterRow ? (filteredElement = filterRow(element)) : (filteredElement = false);
        if (filteredElement === false) {
          columnArray.push([
            [<TableRow key={key} id={key} {...columnProps} />],
            [<TableSelectable key={keySelectable} {...columnProps} />],
            [<TableDetail key={keyDetail} {...columnProps} />]
          ]);
        } else return null;
      });
    }

    return <tbody tab-index={-1}>{columnArray}</tbody>;
  }
}
