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
      {'horizontal' : (!props.vertical)}
    );

    let createList = (element, key) => {

      return (
        <div key={key} className="fill-height" style={{padding:props.margin}}>
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
