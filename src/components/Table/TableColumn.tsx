import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { IColumn } from './IColumn';
import Button from '../Button/Button';
import { TDataSource } from '../DataSource/DataSource';

export interface ITableDataProps {
  value: TDataSource[];
  column: IColumn;
  element: TDataSource;
  hideColumns: string[];
  isArray: boolean;
  tableDataClassName: string;
  isLoading: boolean;
  loadingKey: string;
}

export interface ITableDataState {
  type: string;
}

export default class TableColumn extends React.Component<ITableDataProps, ITableDataState> {
  static defaultProps = {
    value: [],
    column: [],
    element: '',
    hideColumns: [],
    isArray: true,
    tableDataClassName: '',
    isLoading: true,
    loadingKey: ''
  };

  constructor(props: ITableDataProps) {
    super(props);
    this.state = {
      type: ''
    };
  }

  componentDidMount() {
    this.renderType();
  }

  renderType() {
    const self = this;
    const props = self.props;
    let { value } = props;

    if (value instanceof Array) {
      this.setState({
        type: 'Array'
      });
    } else if (typeof value === 'object' && value !== null) {
      this.setState({
        type: 'Object'
      });
    } else {
      this.setState({
        type: 'Value'
      });
    }
  }

  render() {
    const self = this;
    let state = self.state;
    let { type } = state;
    let { value, column, element, hideColumns, isArray, tableDataClassName, isLoading } = self.props;

    let string = '';

    if (column.title) {
      string = column.title;
    } else if (column.name) {
      string = column.name;
    }

    let hideColumnsArrayIncludesEitherNameOrTitle = hideColumns && hideColumns.includes(string);

    if (isArray) {
      return (
        <td className={tableDataClassName} tabIndex={-1} id={element.toString()} style={{ width: column.width }}>
          {column.template ? (
            column.template(element)
          ) : (
            <Button loading={this.props.isLoading} size="small" simple>
              {element}
            </Button>
          )}
        </td>
      );
    } else if (type !== '' && !hideColumnsArrayIncludesEitherNameOrTitle) {
      return (
        <td
          className={tableDataClassName}
          tabIndex={-1}
          id={value ? value.toString() : ''}
          style={{ width: column.width }}
        >
          {column.template ? (
            column.template(element)
          ) : type === 'Value' ? (
            <Button loading={isLoading} size="small" simple>
              {value}
            </Button> ? (
              <Button loading={isLoading} size="small" simple>
                {value.toString()}
              </Button>
            ) : null
          ) : (
            <Dropdown loading={isLoading} className="r-Table-Dropdown" material dataSource={value} title={type} />
          )}
        </td>
      );
    }
    return null;
  }
}
