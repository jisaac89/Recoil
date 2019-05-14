import classNames from 'classnames';
import 'intersection-observer';
import React from 'react';
import Observer from 'react-intersection-observer';
import { IEmergeProps } from './EmergeType';

export class Emerge extends React.Component<IEmergeProps> {
  public static defaultProps = {
    if: true,
    enter: 'fadeInUp',
    exit: 'fadeOutDown',
    delay: 300,
    overflow: false
  };

  public render() {
    const self = this;
    const props = self.props;

    let index = 0;

    const emergeClass = classNames('r-Emerge', props.className, { 'e-enter': props.if }, { floshow: props.overflow });

    const newChildren = React.Children.map(this.props.children, (child: any) => {
      let exit, enter;

      if (props.if === true) {
        enter = props.enter;
      } else {
        enter = null;
      }

      if (props.if === false) {
        exit = props.exit;
      } else {
        exit = null;
      }

      const newClass = classNames('r-Emerge', 'animated', enter, exit, child.props.className);

      const newStyle: { animationDelay: string } = {
        animationDelay: index++ * (props.delay ? props.delay : 300) + 'ms'
      };

      function merge_options(obj1: object, obj2: object) {
        const obj3 = {};
        for (const attrname in obj1) {
          if (obj1) {
            obj3[attrname] = obj1[attrname];
          }
        }
        for (const attrname in obj2) {
          if (obj2) {
            obj3[attrname] = obj2[attrname];
          }
        }
        return obj3;
      }

      const style = props.style ? props.style : {};

      return React.cloneElement(child, { className: newClass, style: merge_options(newStyle, style) });
    });

    return (
      <Observer triggerOnce={props.triggerOnce}>
        {inView => (inView ? <span className={emergeClass}>{newChildren}</span> : null)}
      </Observer>
    );
  }
}
