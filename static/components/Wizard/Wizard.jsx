"use strict";
var React = require('react');
var classNames = require('classnames');
require('./Wizard.less');
const WizardSlide = (props) => {
    return (<div className={props.className}>
      {props.children}
    </div>);
};
class Wizard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const self = this;
        const props = self.props;
        let wizardClass = classNames('r-Wizard');
        let createSlidesPartial = (item, index) => {
            let wizardSlideClass = classNames('r-WizardSlide', { 'e-selected': (props.slideIndex === index) }, { 'e-backward': (props.slideIndex > index) }, { 'e-forward': (props.slideIndex < index) }, { 'e-vertical': (props.vertical) }, props.className);
            if (props.slideIndex === index ||
                index === props.slideIndex - 1 ||
                index === props.slideIndex + 1) {
                return (<WizardSlide className={wizardSlideClass} key={index}>
            {item}
          </WizardSlide>);
            }
            else {
                return null;
            }
        };
        if (props.children) {
            return (<div ref="r-Wizard" className={wizardClass} style={props.style}>
          <div ref='r-Wizard__track' className="r-Wizard__track">
            {props.children.map(createSlidesPartial)}
          </div>
        </div>);
        }
        else {
            return null;
        }
    }
}
Wizard.defaultProps = {
    slideIndex: 0
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Wizard;
