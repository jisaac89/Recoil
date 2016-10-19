import * as React from 'react';
import * as classNames from 'classnames';
import './Align.less';

export default class Align extends React.Component<any, any> {
  render() {

    const self = this;
    const props = self.props;

    let alignClass = classNames(
      'r-Align',
      {'vertical' : (props.vertical)},
      { 'horizontal': (!props.vertical) },
      props.className
    );

    let maxCol = 0;
    let widthArray = [];

    if (props.columns){
      props.columns.map((item, index) =>{
        maxCol +=item;
      })
    }

    if (maxCol > 0 && props.columns){
      props.columns.map((item, index) =>{
        widthArray.push((item / maxCol) * 100);
      })
    }

    let createList = (element, key) => {

      return (
        <div key={key} className="fill-height" style={{flex: props.columns ? 'none' : '1',padding:props.margin, width: !props.vertical ? widthArray[key]+'%' : null, height: props.vertical ? widthArray[key]+'%' : null }}>
          {element}
        </div>
      )
    }

    return (
      <div  className={alignClass}>
        {this.props.children.map(createList)}
      </div>
    );
  }
}
