import React from 'react';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { arraysEqual } from '../Utils';
import { ITableHeadProps, ITableHeadState } from './TableTypes';

const DetailTemplateHeadToggle = ({ detailTemplateToggleAll, detailTemplateSelectedElements, dataSource }) => {
  detailTemplateToggleAll = dataSource => {
    detailTemplateToggleAll(dataSource);
  };
  return (
    <th style={{ width: '25' }} className={'r-Table__DetailTd text-center'}>
      <Button
        icon={arraysEqual(dataSource, detailTemplateSelectedElements) ? 'chevron-down' : 'chevron-right'}
        onClick={detailTemplateToggleAll(dataSource)}
        simple
        size={'small'}
      />
    </th>
  );
};

const CheckboxHead = ({ selectAll, hideCheckAll, selectedElements, dataSource }) => {
  selectAll = dataSource => {
    selectAll(dataSource);
  };
  return (
    <th style={{ width: '25px' }}>
      {!hideCheckAll ? (
        <Checkbox
          onChange={selectAll(dataSource)}
          size={'small'}
          checked={selectedElements ? arraysEqual(dataSource, selectedElements) : false}
        />
      ) : null}
    </th>
  );
};

export class TableHead extends React.Component<ITableHeadProps, ITableHeadState> {
  constructor(props: ITableHeadProps) {
    super(props);
    this.state = {
      sortType: props.sortType || 'desc',
      column: props.sortKey || '',
      columns: []
    };
  }

  toggleSorting(dataSource: Array<any>, columnName: string) {
    const self = this;

    this.setState(
      {
        sortType: this.state.sortType === 'desc' ? 'asc' : 'desc',
        column: columnName
      },
      () => {
        self.props.onSort
          ? self.props.onSort(columnName, self.state.sortType)
          : self.props.toggleSorting(dataSource, columnName, self.state.sortType);
      }
    );
  }

  render() {
    const {
      detailTemplate,
      hideCheckAll,
      sortKey,
      columns,
      detailTemplateHideToggle,
      hideHeader,
      hideColumns,
      detailTemplateToggleAll,
      dataSource,
      detailTemplateSelectedElements,
      selectAll,
      checkable,
      selectedElements,
      sortable
    } = this.props;
    const columnHeadArray: Array<any> = [];

    if (columns) {
      columns.map((key, index) => {
        const hideColumnsArrayIncludesEitherNameOrTitle =
          hideColumns && hideColumns.includes(key.title ? key.title : key.name);

        const sortTitle: string | undefined = key.title ? key.title : key.name;

        if (hideColumnsArrayIncludesEitherNameOrTitle) {
          return null;
        } else {
          columnHeadArray.push(
            <th style={{ width: key.width }} key={index}>
              {key.titleTemplate ? (
                key.titleTemplate()
              ) : (
                <Button
                  tabIndex={-1}
                  className={'p0'}
                  icon={
                    sortable && (key.name === sortKey || key.title === sortKey) ? 'sort-' + this.state.sortType : ''
                  }
                  size={'small'}
                  simple
                  iconLocation={'right'}
                  onClick={
                    (sortable && key.name) || (sortable && key.title)
                      ? this.toggleSorting.bind(this, dataSource, sortTitle ? sortTitle : '')
                      : () => null
                  }>
                  {key.hideHeader ? null : key.title || key.name}
                </Button>
              )}
            </th>
          );
        }
      });
    }

    const detailTemplateHeadProps = {
      detailTemplateToggleAll: detailTemplateToggleAll,
      dataSource: dataSource,
      detailTemplateSelectedElements: detailTemplateSelectedElements
    };

    const checkboxHeadProps = {
      selectAll: selectAll,
      selectedElements: selectedElements,
      dataSource: dataSource,
      hideCheckAll: hideCheckAll
    };

    if (!hideHeader) {
      return (
        <thead tab-index={-1}>
          <tr>
            {checkable ? <CheckboxHead {...checkboxHeadProps} /> : null}
            {detailTemplate && !detailTemplateHideToggle ? (
              <DetailTemplateHeadToggle {...detailTemplateHeadProps} />
            ) : null}
            {columnHeadArray}
          </tr>
        </thead>
      );
    } else {
      return null;
    }
  }
}
