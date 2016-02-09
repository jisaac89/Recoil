"use strict";
var React = require('react');
var classnames_1 = require('classnames');
require('./Card.less');
class CardHeader extends React.Component {
    render() {
        const self = this;
        const props = self.props;
        return (<div className="r-CardHeader p10">
        <h2>{props.title}</h2>
        <h3>{props.subTitle}</h3>
      </div>);
    }
}
class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const self = this;
        const props = self.props;
        let headerPartial;
        let cardClass = classnames_1.default('r-Card', { 'flexit': (props.flex) }, { 'resize': (props.resize) }, { 'e-hover': (props.hover) }, { 'e-scale': (props.scale) }, { 'e-float': (props.float) }, { 'w100': (props.fill) }, { 'h100': (props.fill) }, { 'w100': (props.block) }, props.className);
        if (props.title || props.subTitle) {
            headerPartial = <CardHeader title={props.title} subTitle={props.subTitle}/>;
        }
        else {
            headerPartial = null;
        }
        return (<div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={props.onClick} style={props.style} ref='card' className={cardClass}>
        {headerPartial}
        {props.children}
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
//# sourceMappingURL=Card.jsx.map