import * as React from 'react';
import * as classNames from 'classnames';
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
  flex? : any;
  flow? : any;
  justify? : any;
  align ? : any;
}

interface IToolbarState {}

export default class Toolbar extends React.Component<IToolbarProps, IToolbarState>{
  render() {

    const self = this;
    const props = self.props;

    // FLEX ===============================

    let flexFlow;
    let flexStyle;

    if (props.flex) {
      flexStyle = {
        'flex-flow' : props.flow !== '' && props.flow ? props.flow : 'row nowrap',
        'justify-content' : props.justify ? props.justify : 'flex-start',
        'align-items' : props.align ? props.align : 'stretch'
      }
    }

    // ====================================

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
      {'flex': (props.flex)},
      props.className
    );

    return (
      <div ref="toolbar" style={flexStyle} className={toolbarClass}>
        {props.children}
      </div>
    );
  }
}
