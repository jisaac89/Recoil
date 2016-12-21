import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import './Stepper.less';
import Layer from '../Layer/Layer';

import Align from '../Align/Align';
import Shrink from '../Shrink/Shrink';

import Button from '../Button/Button';

export interface IStepperProps {
    title?: string;
    className?: string;
    stepIndex?: number;
    children?: any;
    vertical?: boolean;
}

class Stepper extends React.Component<IStepperProps, any>{

  public refOpen : any;

  render(){
     const self = this;
     const props = self.props;
     const state = self.state;

     let stepperClass = classNames(
        'r-Stepper',
        props.className
     );

     let itemArray = [];

     let createList = (item, index) => {
         if (index === props.children.length -1) {
             itemArray.push(
                 <Shrink key={index} opacity={50} if={index > props.stepIndex}>
                     <div>
                         {item}
                     </div>
                 </Shrink>
             )
         } else {
             itemArray.push(
                 <Shrink key={index} opacity={50} if={index > props.stepIndex}>
                     <div>
                         {item}
                     </div>
                 </Shrink>,
                 <Shrink key={index} opacity={50} if={index > props.stepIndex}>
                     <div className="flex-step">
                     </div>
                 </Shrink>
             )
         }
     } 

     props.children.map(createList);

     return(
         <div className="r-Stepper dblock w100">
             {props.title ? <h5>{props.title}</h5> : null}
             <Align vertical={props.vertical}>
                 {itemArray}
             </Align>
         </div>
     )
  }
}

export default Stepper;