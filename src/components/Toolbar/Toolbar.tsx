import * as React from 'react';
import * as classNames from 'classnames';
import './Toolbar.less';

interface ObjectCtor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}
declare var Object: ObjectCtor;
export let assign = Object.assign ? Object.assign : function(target: any, ...sources: any[]): any {
        return;
};

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
  className?: any;
  style?: any;
  children?: any;
  flush ? : boolean;
  noBorder? : boolean;
  onClick? : any;
  tabs?: boolean;
  breadcrumbs?: boolean;
  size? : "small" | "medium" | "large" | "xlarge";
  theme? : string;
  flex?: boolean;
  id? : string;
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
      {'dblock' : (props.block)},
      {'pull-left' : (props.left)},
      {'pull-right' : (props.right)},
      {'w100': (props.fill)},
      {'wh100': (props.fill)},
      {'flush': (props.flush)},
      {'no-border': (props.noBorder)},
      props.className,
      { 'tabs': (props.tabs) },
      { 'flex': (props.flex) },
      { 'breadcrumbs': (props.breadcrumbs) },
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
