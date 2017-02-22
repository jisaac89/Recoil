import * as React from 'react';
import * as classNames from 'classnames';
import './Toolbar.less';

export interface IToolbarProps {
  border?: boolean;
  vertical?: boolean;
  textCenter?: boolean;
  noRadius?: boolean;
  spacing?: boolean;
  block?: boolean;
  left?: boolean;
  right?: boolean;
  fill?: boolean;
  className?: string;
  style?: Object;
  children?: any;
  flush ? : boolean;
  noBorder? : boolean;
  onClick? : (event : React.MouseEvent<HTMLElement>) => void;
  tabs?: boolean;
  breadcrumbs?: boolean;
  size? : "small" | "medium" | "large" | "xlarge";
  theme? : string;
  flex?: boolean;
  id? : string;
  disabled? : boolean;
}

export default class Toolbar extends React.Component<IToolbarProps, {}>{
  render() {

    const self = this;
    const props = self.props;

    let toolbarClass = classNames(
      'r-Toolbar',
      {'border' : (props.border)},
      {'vertical' : (props.vertical)},
      {'horizontal' : (!props.vertical)},
      {'text-center' : (props.textCenter)},
      {'no-radius' : (props.noRadius)},
      {'spacing' : (props.spacing)},
      {'w100' : (props.block)},
      {'dblock' : (props.vertical && props.block)},
      {'pull-left' : (props.left)},
      {'pull-right' : (props.right)},
      {'w100': (props.fill)},
      {'wh100': (props.fill)},
      {'flush': (props.flush)},
      {'no-border': (props.noBorder)},
      props.className,
      { 'tabs': (props.tabs) },
      { 'e-flex-row': (props.flex) },
      { 'breadcrumbs': (props.breadcrumbs) },
      {'disabled': (props.disabled)},
      props.size,
      props.theme
    );

    return (
      <div id={this.props.id} ref="toolbar" style={Object.assign({}, props.style)} className={toolbarClass} onClick={this.props.onClick}>
        {props.children}
      </div>
    );
  }
}
