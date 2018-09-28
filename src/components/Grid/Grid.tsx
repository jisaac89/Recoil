import * as React from 'react';

import Layer from '../Layer/Layer';
import Selectable from '../Selectable/Selectable';

import DataSource from '../DataSource/DataSource';

import Align from '../Align/Align';

export interface IGridProps {
  dataSource?: any;
  selectedKey?: string;
  activeRows?: any;
  rows?: any;
  margin?: string;
  selectedElements?: any;
  onChange?: (item?: any) => void;
  toggleSelectedElements?: (x: any, s: any) => void;
  pageSize?: number;
  className?: any;
}

interface IGridState {
  gridRows: any;
  rows: any;
  update: boolean;
  selectedElements: any;
}

class Grid extends React.Component<IGridProps, IGridState> {
  constructor(props) {
    super(props);
    this.state = {
      rows: props.rows || null,
      gridRows: [],
      update: false,
      selectedElements: props.selectedElements || []
    };
  }

  componentDidMount() {
    this.convertDataSourceToGridRows(this.props.rows);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedElements !== this.props.selectedElements) {
      this.setState({
        selectedElements: this.props.selectedElements
      });
    }

    if (prevProps.rows !== this.props.rows) {
      this.setState(
        {
          update: false,
          rows: this.props.rows
        },
        () => {
          this.convertDataSourceToGridRows(this.state.rows);
        }
      );
    }
  }

  convertDataSourceToGridRows(
    r: any,
    index?: number,
    indexRow?: number,
    indexColumn?: number,
    currentArray?: Array<any>,
    arrayIndex?: any
  ) {
    let { activeRows, rows } = this.props;

    let array = currentArray || [];
    let arrayRowIndex = arrayIndex || 0;

    let currentElementIndex = index || 0;
    let currentRowIndex = indexRow || 0;
    let currentColumnIndex = indexColumn || 0;

    let elements = activeRows;
    let totalElementCount = elements.length;
    let currentElement = elements[currentElementIndex];

    let totalRowsCount = rows.length;
    let currentRow = rows[currentRowIndex];

    let columns = currentRow.columns;
    let totalColumnsCount = currentRow.columns.length;

    if (currentElementIndex < totalElementCount) {
      if (currentColumnIndex === 0 && currentColumnIndex < totalColumnsCount) {
        array.push({
          data: [],
          height: currentRow.height,
          columns: columns,
          rowIndex: [currentRowIndex]
        });

        array[arrayRowIndex].data.push(currentElement);
        this.convertDataSourceToGridRows(
          rows,
          currentElementIndex + 1,
          currentRowIndex,
          currentColumnIndex + 1,
          array,
          arrayRowIndex
        );
      } else if (currentColumnIndex < totalColumnsCount) {
        array[arrayRowIndex].data.push(currentElement);
        this.convertDataSourceToGridRows(
          rows,
          currentElementIndex + 1,
          currentRowIndex,
          currentColumnIndex + 1,
          array,
          arrayRowIndex
        );
      } else {
        if (currentRowIndex < totalRowsCount - 1) {
          this.convertDataSourceToGridRows(rows, currentElementIndex, currentRowIndex + 1, 0, array, arrayRowIndex + 1);
        } else {
          this.convertDataSourceToGridRows(rows, currentElementIndex, 0, 0, array, arrayRowIndex + 1);
        }
      }
    } else {
      this.setState({
        gridRows: array,
        update: false
      });
    }
  }

  toggleSelectedElements(element, i) {
    this.props.onChange ? this.props.onChange(element) : null;
    this.onChange(element, i, this.state.selectedElements);
  }

  onChange(element: Array<any>, index: string | number, selectedElements: Array<any>) {
    this.setState({
      selectedElements: selectedElements
    });
  }

  render() {
    let { selectedKey } = this.props;
    let { selectedElements } = this.state;

    if (!this.state.update) {
      return (
        <Layer flex fill className={this.props.className}>
          {this.state.gridRows.map((element, index) => {
            return (
              <Align
                margin={this.props.margin}
                style={{ height: element.height, marginBottom: this.props.margin }}
                columns={element.columns}
                key={index}
              >
                {element.data.map((item, i) => {
                  let checked = selectedElements.includes(selectedKey ? item[selectedKey] : item);
                  return (
                    <Layer
                      className={this.props.onChange ? 'cursor-pointer' : null}
                      onClick={this.toggleSelectedElements.bind(this, item, i)}
                      fill
                      key={i}
                    >
                      {this.state.rows[element.rowIndex].template(item)}
                      <Selectable checked={checked} />
                    </Layer>
                  );
                })}
              </Align>
            );
          })}
        </Layer>
      );
    } else return null;
  }
}

export default DataSource(<Grid />);
