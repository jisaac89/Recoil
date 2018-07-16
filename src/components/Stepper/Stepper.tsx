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

class Stepper extends React.Component<IStepperProps, any>{

    public refOpen: any;

    render() {
        const self = this;
        const props = self.props;

        let { className } = props;

        let itemArray: Array<any> = [];

        let createList = (item: Array<any>, index: string | number) => {
            if (item !== null) {
                if (index === props.children.length - 1) {
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
                            <div className={index > props.stepIndex - 1 ? "flex-step e-gray" : "flex-step"}>
                            </div>
                        </Shrink>
                    )
                }
            } else return null;
        }

        props.children.map(createList);

        return (
            <div className={"r-Stepper dblock w100 " + className}>
                {props.title ? <h5>{props.title}</h5> : null}
                <Align className={props.align === 'top' ? 'e-align-top' : 'middle'} vertical={props.vertical}>
                    {itemArray}
                </Align>
            </div>
        )
    }
}

export default Stepper;