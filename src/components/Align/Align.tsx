import * as React from 'react';
import * as classNames from 'classnames';
import './Align.less';

export interface IAlignProps {
    vertical?: boolean;
    className?: string;
    columns?: Array<any>;
    margin?: string;
    children?: Array<any>;
}

export interface IAlignState {
  widthArray ?: Array<any>;
  maxColumnsLength ?: number;
}

const AlignChild = (props) => {
      let {columns, vertical, widthArray, element, margin, index : key} = props;
      return (
        <div className="r-Align__Child" style={{flex: columns ? 'none' : '1',padding:margin, width: !vertical ? widthArray[key]+'%' : null, height: vertical ? widthArray[key]+'%' : null }}>
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
  componentWillReceiveProps(nextProps){
    if(nextProps.columns !== this.props.columns) {
      this.alignColumns(nextProps.columns);
    }
  }
  alignUpdate(widthArray, singleColumnLength, maxColumnsLength) {
    this.setState({
      maxColumnsLength: maxColumnsLength
    }, ()=> {
      widthArray.push((singleColumnLength / this.state.maxColumnsLength) * 100)
      this.setState({widthArray : widthArray});
    });
  }
  alignColumns(columns) {
    let widthArray = [];
    let maxColumnsLength = 0;
    if (columns) {
      columns.map((singleColumnLength, index) =>{
        maxColumnsLength += singleColumnLength;
        this.alignUpdate(widthArray, singleColumnLength, maxColumnsLength);
      })
    }
  }
  alignChildren(element : JSX.Element, key : string) {
      let {columns, margin, vertical} = this.props;
      let props = this.props;
      return <AlignChild key={key} index={key} element={element} widthArray={this.state.widthArray} {...props} />
  }
  render() {
    const self = this;
    const props = self.props;
    let {vertical, children, className} = props;
    let alignChildren = self.alignChildren.bind(self);

    let alignClass = classNames(
      'r-Align',
      {'e-vertical' : (vertical)},
      { 'e-horizontal': (!vertical)},
      className
    );

    return (
      <div className={alignClass}>
        {children.map(alignChildren)}
      </div>
    );
  }
}