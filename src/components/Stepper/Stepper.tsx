import * as React from 'react';
import './Stepper.less';

import Align from '../Align/Align';
import Shrink from '../Shrink/Shrink';

export interface IStepperProps {
    title?: string;
    className?: string;
    stepIndex: number;
    children?: any;
    vertical?: boolean;
}

class Stepper extends React.Component<IStepperProps, any>{

  public refOpen : any;

  render(){
     const self = this;
     const props = self.props;

     let itemArray : Array<any> = [];

     let createList = (item : Array<any>, index: string | number) => {
         if (index === props.children.length -1) {
             itemArray.push(
                 <Shrink key={index} opacity={50} scale={1} if={index > props.stepIndex}>
                     <div>
                         {item}
                     </div>
                 </Shrink>
             )
         } else {
             itemArray.push(
                 <Shrink key={index} opacity={50} scale={1} if={index > props.stepIndex}>
                     <div>
                         {item}
                     </div>
                 </Shrink>,
                 <Shrink key={index} opacity={50} scale={1} if={index > props.stepIndex}>
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