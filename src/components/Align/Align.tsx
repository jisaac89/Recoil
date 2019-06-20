import classNames from 'classnames';
import React from 'react';
import { IAlignProps, IAlignState } from './AlignTypes';
import { AlignChild } from './AlignChild';

export class Align extends React.Component<IAlignProps, IAlignState> {
  static defaultProps: { columns: number[] } = {
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
    if (this.props.columns) {
      this.alignColumns(this.props.columns);
    }
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
  alignChildren = (element: JSX.Element, index: number) => {
    const { columns, margin, vertical } = this.props;
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
