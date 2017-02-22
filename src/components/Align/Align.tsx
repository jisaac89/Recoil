import * as React from 'react';
import * as classNames from 'classnames';
import './Align.less';

export interface IAlignProps {
    vertical?: boolean;
    className?: string;
    columns?: Array<number>;
    margin?: string;
    children?: any;
    fill ?: boolean;
}

export interface IAlignChildProps{
  columns ?: Array<number>;
  vertical ?: boolean; 
  width ?: number;
  element ?: JSX.Element; 
  margin ?: string;
}

export interface IAlignState {
  widthArray ?: Array<number>;
  maxColumnsLength ?: number;
}

const AlignChild = (props: IAlignChildProps) => {

      let {columns, vertical, width, element, margin} = props;

      let alignChildStyle = {
        flex: columns || vertical ? 'none' : '1',
        padding: margin, 
        width: !vertical ? width+'%' : null, 
        height: vertical ? width+'%' : null 
      };

      return (
        <div className="r-Align__Child" style={alignChildStyle}>
          {element}
        </div>
      )
};

export default class Align extends React.Component<IAlignProps, IAlignState> {
  constructor() {
    super();
    this.state = {
      widthArray: [],
      maxColumnsLength : 0
    }
  }
  componentDidMount() {
    this.props.columns ? this.alignColumns(this.props.columns) : null;
  }
  componentWillReceiveProps(nextProps: IAlignProps){
    if(nextProps.columns !== this.props.columns) {
      this.alignColumns(nextProps.columns);
    }
  }
  alignUpdate(widthArray : Array<number>, singleColumnLength : number, maxColumnsLength : number) {
    this.setState({
      maxColumnsLength: maxColumnsLength
    }, ()=> {
      widthArray.push((singleColumnLength / this.state.maxColumnsLength) * 100)
      this.setState({widthArray : widthArray});
    });
  }
  alignColumns(columns : Array<number>) {
    let widthArray : Array<number> = [];
    let maxColumnsLength = 0;
    if (columns) {
      columns.map((singleColumnLength) =>{
        maxColumnsLength += singleColumnLength;
        this.alignUpdate(widthArray, singleColumnLength, maxColumnsLength);
      })
    }
  }
  alignChildren(element : JSX.Element, key : string) {
      let {columns, margin, vertical} = this.props;
      return (
        <AlignChild 
          key={key} 
          element={element} 
          width={this.state.widthArray[key]} 
          columns={columns}
          margin={margin}
          vertical={vertical}
          />
      )
  }
  render() {
    const self = this;
    const props = self.props;
    let {vertical, children, className, fill} = props;
    let alignChildren = self.alignChildren.bind(self);

    let alignClass = classNames(
      'r-Align',
      {'e-vertical' : (vertical)},
      { 'e-horizontal': (!vertical)},
      { 'e-fill': (fill)},
      className
    );

    return (
      <div className={alignClass}>
        {children.map(alignChildren)}
      </div>
    );
  }
}