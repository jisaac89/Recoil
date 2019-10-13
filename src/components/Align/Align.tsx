import React from 'react';
import classNames from 'classnames';

export interface IAlignProps {
  vertical?: boolean;
  className?: string;
  columns: number[];
  margin?: string;
  children: React.ReactNode[];
  fill?: boolean;
  style?: React.CSSProperties;
  alignItems?: string;
}

export interface IAlignChildProps {
  columns?: number[];
  vertical?: boolean;
  width?: number;
  element?: JSX.Element;
  margin?: string;
}

export interface IAlignState {
  widthArray: number[];
  maxColumnsLength: number;
}

const AlignChild = (props: IAlignChildProps) => {
  let { columns, vertical, width, element, margin } = props;

  let alignChildStyle = {
    flex: columns || vertical ? 'none' : '1 !important',
    padding: margin,
    width: !vertical ? width + '%' : '',
    height: vertical ? width + '%' : ''
  };

  return (
    <div className="r-Align__Child" style={alignChildStyle}>
      {element}
    </div>
  );
};

export default class Align extends React.Component<IAlignProps, IAlignState> {
  static defaultProps = {
    columns: []
  };

  constructor(props: IAlignProps) {
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
    if (prevProps.columns !== this.props.columns) {
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
    let widthArray: Array<number> = [];
    let maxColumnsLength = 0;
    if (columns) {
      columns.map((singleColumnLength: number) => {
        maxColumnsLength += singleColumnLength;
        this.alignUpdate(widthArray, singleColumnLength, maxColumnsLength);
      });
    }
  }
  alignChildren = (element: JSX.Element, index: number) => {
    let { columns, margin, vertical } = this.props;
    return (
      <AlignChild
        key={index}
        element={element}
        width={this.state.widthArray[index]}
        columns={columns}
        margin={margin}
        vertical={vertical}
      />
    );
  };
  render() {
    const self = this;
    const props = self.props;
    let { vertical, children, className, fill, alignItems } = props;

    let alignClass = classNames(
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
