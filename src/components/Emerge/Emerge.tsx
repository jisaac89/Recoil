import * as React from 'react';
import * as classNames from 'classnames';

import 'intersection-observer';
import Observer from 'react-intersection-observer';

export interface IEmergeProps {
  if?: boolean;
  enter?: string;
  exit?: string;
  delay?: number;
  overflow?: boolean;
  className?: string;
  style?: Array<string>;
  triggerOnce?: boolean;
}

export default class Emerge extends React.Component<IEmergeProps, {}> {
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

    let emergeClass = classNames('r-Emerge', props.className, { 'e-enter': props.if }, { floshow: props.overflow });

    let newChildren = React.Children.map(this.props.children, (child: any) => {
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

      let newClass = classNames('r-Emerge', 'animated', enter, exit, child.props.className);

      let newStyle: any = {
        animationDelay: index++ * props.delay + 'ms'
      };

      function merge_options(obj1: Array<any>, obj2: Array<any>) {
        let obj3 = {};
        for (let attrname in obj1) {
          obj3[attrname] = obj1[attrname];
        }
        for (let attrname in obj2) {
          obj3[attrname] = obj2[attrname];
        }
        return obj3;
      }
      return React.cloneElement(child, { className: newClass, style: merge_options(newStyle, props.style) });
    });

    return (
      <Observer triggerOnce={props.triggerOnce}>
        {inView =>
          inView ? (
            <span className={emergeClass} ref="element">
              {newChildren}
            </span>
          ) : null
        }
      </Observer>
    );
  }
}
