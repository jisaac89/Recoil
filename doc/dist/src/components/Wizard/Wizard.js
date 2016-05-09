"use strict";
const React = require('react');
const classNames = require('classnames');
require('./Wizard.less');
const WizardSlide = (props) => {
    return (React.createElement("div", {className: props.className}, props.children));
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
            let wizardSlideClass = classNames('r-WizardSlide', { 'e-selected': (props.slideIndex === index) }, { 'e-backward': (props.slideIndex > index) }, { 'e-forward': (props.slideIndex < index) }, { 'e-vertical': (props.vertical) }, { 'e-dont-animate': (!props.animate) }, props.className);
            if (props.mobile) {
                if (props.slideIndex === index ||
                    index === props.slideIndex + 1) {
                    return (React.createElement(WizardSlide, {className: wizardSlideClass, key: index}, item));
                }
                else {
                    return null;
                }
            }
            else {
                if (props.slideIndex === index ||
                    index === props.slideIndex + 1 ||
                    index === props.slideIndex - 1) {
                    return (React.createElement(WizardSlide, {className: wizardSlideClass, key: index}, item));
                }
                else {
                    return null;
                }
            }
        };
        if (props.children) {
            return (React.createElement("div", {ref: "r-Wizard", className: wizardClass, style: props.style}, 
                React.createElement("div", {ref: 'r-Wizard__track', className: "r-Wizard__track"}, props.children.map(createSlidesPartial))
            ));
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
//# sourceMappingURL=Wizard.js.map