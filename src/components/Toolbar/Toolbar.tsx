import * as React from 'react';
import classNames from 'classnames';
import './Toolbar.less';

interface IToolbarProps {
  border?: boolean;
  vertical?: boolean;
  textCenter?: boolean;
  noRadius?: boolean;
  spacing?: boolean;
  block?: boolean;
  left?: boolean;
  right?: boolean;
  fill?: boolean;
  className?: any;
  style?: any;
  children?: any;
}

interface IToolbarState {}

export default class Toolbar extends React.Component<IToolbarProps, IToolbarState>{
  render() {

    const self = this;
    const props = self.props;

    let toolbarClass = classNames(
      'r-Toolbar',
      {'border' : (props.border)},
      {'vertical' : (props.vertical)},
      {'text-center' : (props.textCenter)},
      {'no-radius' : (props.noRadius)},
      {'spacing' : (props.spacing)},
      {'w100' : (props.block)},
      {'pull-left' : (props.left)},
      {'pull-right' : (props.right)},
      {'w100': (props.fill)},
      {'wh100': (props.fill)},
      props.className
    );

    return (
      <div style={props.style} className={toolbarClass}>
        {props.children}
      </div>
    );
  }
}
