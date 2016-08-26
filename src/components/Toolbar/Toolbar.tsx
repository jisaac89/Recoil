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
  flex? : any;
  flow? : any;
  justify? : any;
  align ? : any;
  flush ? : boolean;
  noBorder? : boolean;
  onClick? : any;
}

export default class Toolbar extends React.Component<IToolbarProps, {}>{
  render() {

    const self = this;
    const props = self.props;

    // FLEX ===============================

    let flexFlow;
    let flexStyle;

    if (props.flex) {
      flexStyle = {
        'WebkitFlexFlow' : props.flow !== '' && props.flow ? props.flow : 'row nowrap',
        'justifyContent' : props.justify ? props.justify : 'flex-start',
        'alignItems' : props.align ? props.align : 'stretch',
        'WebkitFlex' : props.flex !== '' ? props.flex : null
      }
    }

    // ====================================

    let toolbarClass = classNames(
      'r-Toolbar',
      {'border' : (props.border)},
      {'vertical' : (props.vertical)},
      {'horizontal' : (!props.vertical)},
      {'text-center' : (props.textCenter)},
      {'no-radius' : (props.noRadius)},
      {'spacing' : (props.spacing)},
      {'w100' : (props.block)},
      {'pull-left' : (props.left)},
      {'pull-right' : (props.right)},
      {'w100': (props.fill)},
      {'wh100': (props.fill)},
      {'flush': (props.flush)},
      {'flex': (props.flex)},
      {'no-border': (props.noBorder)},
      props.className
    );

    return (
      <div ref="toolbar" style={Object.assign({}, flexStyle, props.style)} className={toolbarClass} onClick={this.props.onClick}>
        {props.children}
      </div>
    );
  }
}
