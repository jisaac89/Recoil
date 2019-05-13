import React from 'react';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { IColumn } from './IColumn';
import { TableColumn } from './TableColumn';
import { branchIn } from '../Utils';

class DetailTemplateColumnToggle extends React.Component<any, any> {
  detailTemplateToggleSelectedElements(element: Array<any>) {
    this.props.detailTemplateToggleSelectedElements(element);
  }
  render() {
    const props = this.props;

    const { detailTemplateOpenOnRowSelect, element, selectedKey, filterOpenDetailTemplate } = props;

    return (
      <td
        onClick={
          !detailTemplateOpenOnRowSelect ? this.detailTemplateToggleSelectedElements.bind(this, props.element) : null
        }
        className="r-Table__DetailTd"
        style={{ width: '25px' }}>
        {filterOpenDetailTemplate ? (
          filterOpenDetailTemplate(element) === true ? (
            <Button
              tabIndex={-1}
              simple
              size="small"
              icon={
                props.detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element)
                  ? 'chevron-down'
                  : 'chevron-right'
              }
            />
          ) : null
        ) : (
          <Button
            tabIndex={-1}
            simple
            size="small"
            icon={
              props.detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element)
                ? 'chevron-down'
                : 'chevron-right'
            }
          />
        )}
      </td>
    );
  }
}

class CheckboxColumn extends React.Component<any, any> {
  toggleSelectedElements(element: Array<any>) {
    // console.log(element);
    this.props.toggleSelectedElements(element);
  }
  render() {
    const props = this.props;
    const { selectedElements } = props;
    return (
      <td style={{ width: '25px' }}>
        <Checkbox
          onChange={this.toggleSelectedElements.bind(this, props.element)}
          size="small"
          checked={selectedElements ? selectedElements.includes(props.element) : false}
        />
      </td>
    );
  }
}

export interface ITableColumnProps {
  element?: any;
  columns?: IColumn[];
  toggleSelectedElements?: any;
  rowIsSelectable?: any;
  selectedElements?: any;
  checkable?: boolean;
  hideColumns?: Array<string>;
  onRowSelect?: (element: any, index: number | string, event?: React.MouseEvent<any>) => void;
  selectedKey?: string;
  index?: number | string;
  isArray: boolean;
  detailTemplateOpenOnRowSelect?: boolean | 'single';
  detailTemplate?: (element: any) => JSX.Element;
  detailTemplateOpenAll?: any;
  detailTemplateToggleSelectedElements?: any;
  detailTemplateSelectedElements?: Array<any>;
  detailTemplateHideToggle?: boolean;
  filterOpenDetailTemplate?: any;
  id?: any;
  disableSelectedElements?: Array<any>;
  tableDataClassName?: string;
  loadingElements?: any;
  loadingKey?: string;
}

export class TableRow extends React.Component<ITableColumnProps, any> {
  toggleSelectedElements(element: Array<any>, index: string | number) {
    this.props.rowIsSelectable ? this.props.toggleSelectedElements(element, index) : null;
    !this.props.rowIsSelectable && this.props.onRowSelect ? this.props.onRowSelect(element, index) : null;
    this.props.detailTemplateOpenOnRowSelect ? this.props.detailTemplateToggleSelectedElements(element) : null;
  }

  onRowSelect(element: Array<any>, index: string | number) {
    this.props.onRowSelect ? this.props.onRowSelect(element, index) : null;
    this.props.detailTemplateOpenOnRowSelect ? this.props.detailTemplateToggleSelectedElements(element) : null;
  }

  render() {
    const self = this;
    const props = self.props;

    const {
      element,
      columns,
      detailTemplate,
      detailTemplateToggleSelectedElements,
      detailTemplateSelectedElements,
      detailTemplateHideToggle,
      toggleSelectedElements,
      selectedElements,
      rowIsSelectable,
      hideColumns,
      checkable,
      onRowSelect,
      isArray,
      detailTemplateOpenOnRowSelect,
      selectedKey,
      index,
      filterOpenDetailTemplate,
      disableSelectedElements,
      tableDataClassName,
      loadingElements,
      loadingKey
    } = props;

    const columnsValueArray = [];

    for (let index = 0; index < columns.length; index++) {
      const key = columns[index].name;
      columnsValueArray.push(key ? branchIn(element, key) : element[key]);
    }

    const createColumnValue = (value: Array<any>, key: string | number) => {
      const isLoading = loadingElements && loadingElements.includes(loadingKey ? element[loadingKey] : element);

      return (
        <TableColumn
          tableDataClassName={tableDataClassName}
          isArray={isArray}
          hideColumns={hideColumns}
          element={element}
          key={key}
          value={value}
          column={columns[key]}
          isLoading={isLoading}
        />
      );
    };

    const DetailTemplateColumnToggleProps = {
      element: element,
      detailTemplateToggleSelectedElements: detailTemplateToggleSelectedElements,
      detailTemplateSelectedElements: detailTemplateSelectedElements,
      detailTemplateOpenOnRowSelect: detailTemplateOpenOnRowSelect,
      selectedKey: selectedKey,
      filterOpenDetailTemplate
    };

    const CheckBoxColumnProps = {
      element: element,
      selectedElements: selectedElements,
      toggleSelectedElements: toggleSelectedElements
    };

    // let disabled = disableSelectedElements.includes(selectedKey ? element[selectedKey] : element);

    return (
      <tr
        tab-index={-1}
        className={
          selectedElements && selectedElements.includes(selectedKey ? element[selectedKey] : element)
            ? disableSelectedElements.length
              ? 'r-TableColumn disabled'
              : 'r-TableColumn checked'
            : 'r-TableColumn'
        }
        onClick={
          rowIsSelectable && !checkable
            ? this.toggleSelectedElements.bind(this, element, index)
            : null ||
              (onRowSelect || detailTemplateOpenOnRowSelect ? this.onRowSelect.bind(this, element, index) : null)
        }>
        {checkable ? <CheckboxColumn {...CheckBoxColumnProps} /> : null}
        {detailTemplate && !detailTemplateHideToggle ? (
          <DetailTemplateColumnToggle {...DetailTemplateColumnToggleProps} />
        ) : null}
        {columnsValueArray.map(createColumnValue)}
      </tr>
    );
  }
}
