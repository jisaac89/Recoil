import classNames from 'classnames';
import React from 'react';

export interface IAlignProps {
  vertical?: boolean;
  className?: string;
  columns?: Array<number>;
  margin?: string;
  children?: any;
  fill?: boolean;
  style?: any;
  alignItems?: string;
}

export interface IAlignChildProps {
  columns?: Array<number>;
  vertical?: boolean;
  width?: number;
  element?: JSX.Element;
  margin?: string;
}

export interface IAlignState {
  widthArray: Array<number>;
  maxColumnsLength: number;
}

const AlignChild = (props: IAlignChildProps) => {
  const { columns, vertical, width, element, margin } = props;

  const alignChildStyle = {
    flex: columns || vertical ? 'none' : '1 !important',
    padding: margin,
    width: !vertical ? width + '%' : '',
    height: vertical ? width + '%' : ''
  };

  return (
    <div className='r-Align__Child' style={alignChildStyle}>
      {element}
    </div>
  );
};

export class Align extends React.Component<IAlignProps, IAlignState> {
  static defaultProps: { columns: number[] } = {
    columns: []
  };
  constructor(props) {
    super(props);
    this.state = {
      widthArray: [],
      maxColumnsLength: 0
    };
  }
  componentDidMount() {
    this.props.columns ? this.alignColumns(this.props.columns) : null;
  }
  componentDidUpdate(prevProps: IAlignProps) {
    if (this.props.columns && prevProps.columns !== this.props.columns) {
      this.alignColumns(this.props.columns);
    }
  }
  alignUpdate(widthArray: Array<number>, singleColumnLength: number, maxColumnsLength: number) {
    this.setState(
      {
        maxColumnsLength: maxColumnsLength
      },
      () => {
        widthArray.push((singleColumnLength / this.state.maxColumnsLength) * 100);
        this.setState({ widthArray: widthArray });
      }
    );
  }
  alignColumns(columns: Array<number>) {
    const widthArray: Array<number> = [];
    let maxColumnsLength = 0;
    if (columns) {
      columns.map(singleColumnLength => {
        maxColumnsLength += singleColumnLength;
        this.alignUpdate(widthArray, singleColumnLength, maxColumnsLength);
      });
    }
  }
  alignChildren = (element: JSX.Element, key: string) => {
    const { columns, margin, vertical } = this.props;
    return (
      <AlignChild
        key={key}
        element={element}
        width={this.state.widthArray[key]}
        columns={columns}
        margin={margin}
        vertical={vertical}
      />
    );
  };
  render() {
    const self = this;
    const props = self.props;
    const { vertical, children, className, fill, alignItems } = props;

    const alignClass = classNames(
      'r-Align',
      { 'e-vertical': vertical },
      { 'e-horizontal': !vertical },
      { 'e-fill': fill },
      'e-align-' + alignItems,
      className
    );

    return (
      <div style={this.props.style} className={alignClass}>
        {children.length > 1 ? children.map(this.alignChildren) : this.props.children}
      </div>
    );
  }
}
