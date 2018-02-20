import * as React from 'react';

import { allowedKeys, allowedValues } from './Allowed';
import { stepThrough } from './StepThrough';

// Props you want the resulting component to take (besides the props of the wrapped component)
export interface ExternalProps {
    oocss?: string;
}

// Props the HOC adds to the wrapped component
export interface InjectedProps {
    style?: Object;
    oocss?: any;
}

// Options for the HOC factory that are not dependent on props values
export interface Options {
    key?: string;
}

export const OOCSS = () => (Component) => {
    const result = class YourComponentName extends React.Component<any, any> {

        styleObject: Array<any>;

        constructor(props: any) {
            super(props);
            this.state = {
                style: {}
            };

            this.styleObject = [];
        }

        componentDidMount() {
            let { oocss } = this.props;
            oocss ? this.convertClassToStyle(oocss) : null
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.oocss !== this.props.oocss) {
                this.convertClassToStyle(nextProps.oocss)
            }
        }

        convertClassToStyle(classNames, currentClassIndex?: number) {

            // sperate the string as a unique array
            let classesArray = classNames.split(' ');
            let classIndex = currentClassIndex || 0;
            let amountOfClasses = classesArray.length;

            let currentClass: string = classesArray[classIndex];

            if (classIndex < amountOfClasses) {
                // every class

                // let currentKey;
                // let currentValue;
                // let currentMeasurement;

                // array returns array without key and callback sets key
                stepThrough(currentClass).shiftKey(allowedKeys).shiftValue(allowedValues, (data) => {
                    this.styleObject.push(data);
                }).shiftMeasurement();

                // styleObject.push({currentKey : currentValue + currentMeasurement});

                return this.convertClassToStyle(classNames, classIndex + 1);
            } else {
                this.setState({
                    style: Object.assign({}, ...this.styleObject)
                })

            }
        }

        // Implement other methods here

        render(): JSX.Element {
            // Render all your added markup
            return <Component {...this.props} style={Object.assign({}, this.state.style, this.props.style)} />;
        }
    };

    return result;
};