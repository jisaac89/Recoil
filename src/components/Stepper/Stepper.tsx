import * as React from 'react';

import Align from '../Align/Align';
import Shrink from '../Shrink/Shrink';

export interface IStepperProps {
  title?: string;
  className?: string;
  stepIndex: number;
  children?: any;
  vertical?: boolean;
  align?: 'top' | 'center';
}

class Stepper extends React.Component<IStepperProps, any> {
  createList = (item: Array<any>, index: number | number) => {
    let { stepIndex } = this.props;
    if (item !== null) {
      if (Math.abs(index % 2) !== 1) {
        return (
          <Shrink key={index} opacity={50} scale={1} if={index > stepIndex}>
            <div>{item}</div>
          </Shrink>
        );
      } else {
        return (
          <Shrink key={index} opacity={50} scale={1} if={index > stepIndex}>
            <div className={index > stepIndex - 1 ? 'flex-step e-gray' : 'flex-step'} />
          </Shrink>
        );
      }
    } else return null;
  };
  render() {
    const self = this;
    const props = self.props;

    let { className, align, title, vertical, children } = props;

    let updatedArray = [];

    children.map((item, index) => {
      if (index !== children.length) {
        updatedArray.push(item, []);
      }
    });

    return (
      <div className={'r-Stepper dblock w100 ' + className}>
        {title ? <h5>{title}</h5> : null}
        <Align className={align === 'top' ? 'e-align-top' : 'middle'} vertical={vertical}>
          {updatedArray.map(this.createList)}
        </Align>
      </div>
    );
  }
}

export default Stepper;
