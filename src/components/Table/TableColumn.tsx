import * as React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { IColumn } from './IColumn';
import Button from '../Button/Button';

export interface ITableDataProps {
  value?: Array<any>;
  column: IColumn;
  element?: any;
  hideColumns?: Array<string>;
  isArray?: boolean;
  tableDataClassName?: string;
  isLoading: boolean;
  loadingKey?: string;
}

export interface ITableDataState {
  type?: string;
}

export default class TableColumn extends React.Component<ITableDataProps, ITableDataState> {
  constructor(props) {
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

    let hideColumnsArrayIncludesEitherNameOrTitle =
      hideColumns && hideColumns.includes(column.title ? column.title : column.name);

    if (isArray) {
      return (
        <td className={tableDataClassName} tabIndex={-1} id={element} style={{ width: column.width }}>
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
          id={value ? value.toString() : null}
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
