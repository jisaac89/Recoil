import React from 'react';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { branchIn } from '../Utils';
import { IColumn } from './IColumn';
import { TableColumn } from './TableColumn';
import { ITableColumnProps } from './TableTypes';
import { T } from '../DataSource/DataSource';

const DetailTemplateColumnToggle = ({
  detailTemplateSelectedElements,
  element,
  selectedKey,
  filterOpenDetailTemplate,
  detailTemplateToggleSelectedElements
}) => {
  const onDetailTemplateToggleSelectedElements = (selectedElement: Array<any>) => () => {
    detailTemplateToggleSelectedElements(selectedElement);
  };

  return (
    <td
      onClick={onDetailTemplateToggleSelectedElements(element)}
      className="r-Table__DetailTd"
      style={{ width: '25px' }}>
      {filterOpenDetailTemplate ? (
        filterOpenDetailTemplate(element) === true ? (
          <Button
            tabIndex={-1}
            simple
            size="small"
            icon={
              detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element)
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
            detailTemplateSelectedElements.includes(selectedKey ? element[selectedKey] : element)
              ? 'chevron-down'
              : 'chevron-right'
          }
        />
      )}
    </td>
  );
};

const CheckboxColumn = ({ toggleSelectedElements, element, selectedElements }) => {
  const onToggleSelectedElements = (toggledElement: Array<any>) => () => {
    toggleSelectedElements(toggledElement);
  };

  return (
    <td style={{ width: '25px' }}>
      <Checkbox
        onChange={onToggleSelectedElements(element)}
        size="small"
        checked={selectedElements ? selectedElements.includes(element) : false}
      />
    </td>
  );
};

export class TableRow extends React.Component<ITableColumnProps> {
  toggleSelectedElements = (element: T, index: string | number) => evt => {
    this.props.rowIsSelectable ? this.props.toggleSelectedElements(element, index) : null;
    !this.props.rowIsSelectable && this.props.onRowSelect ? this.props.onRowSelect(element, index) : null;
    this.props.detailTemplateOpenOnRowSelect ? this.props.detailTemplateToggleSelectedElements(element) : null;
  };

  onRowSelect(element: T, index: string | number) {
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

    const columnsValueArray: string[] = [];

    if (columns) {
      for (const iterator of columns) {
        const key: string | undefined = iterator.name;
        if (key) {
          columnsValueArray.push(key ? branchIn(element, key) : element[key]);
        }
      }
    }

    const createColumnValue = (value: T, key: string | number) => {
      const isLoading = loadingElements && loadingElements.includes(loadingKey ? element[loadingKey] : element);

      return columns ? (
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
      ) : null;
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
            ? disableSelectedElements
              ? disableSelectedElements.length.toString()
              : ''
              ? 'r-TableColumn disabled'
              : 'r-TableColumn checked'
            : 'r-TableColumn'
        }
        onClick={
          rowIsSelectable && !checkable
            ? this.toggleSelectedElements(element, index)
            : undefined ||
              (onRowSelect || detailTemplateOpenOnRowSelect ? this.onRowSelect.bind(this, element, index) : undefined)
        }>
        {checkable === true ? <CheckboxColumn {...CheckBoxColumnProps} /> : false}
        {detailTemplate && !detailTemplateHideToggle ? (
          <DetailTemplateColumnToggle {...DetailTemplateColumnToggleProps} />
        ) : (
          false
        )}
        {columnsValueArray.map(createColumnValue)}
      </tr>
    );
  }
}
