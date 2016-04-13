import * as React from 'react';
import * as classNames from 'classnames';
import './Card.less';

interface ICardProps {
  resize? : boolean;
  hover? : boolean;
  scale? : boolean;
  float? : boolean;
  fill? : boolean;
  subTitle? : string;
  title? : string;
  onClick? :  () => void;
  style? : any;
  className? : any;
  children? : any;
  onMouseEnter? :  () => void;
  onMouseLeave? :  () => void;
  block? : boolean;
}

class CardHeader extends React.Component<ICardProps, {}>{
  render() {
    const self = this;
    const props = self.props;

    return (
      <div className="r-CardHeader p10">
        <h2>{props.title}</h2>
        <h3>{props.subTitle}</h3>
      </div>
    );
  }
}

export default class Card extends React.Component<ICardProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {

    const self = this;
    const props = self.props;

    let headerPartial;
    let cardClass = classNames(
      'r-Card',
      {'e-resize' : (props.resize)},
      {'e-hover' : (props.hover)},
      {'e-scale' : (props.scale)},
      {'e-float' : (props.float)},
      {'w100' : (props.fill)},
      {'h100' : (props.fill)},
      {'w100' : (props.block)},
      props.className
    );

    if (props.title || props.subTitle) {
      headerPartial = <CardHeader title={props.title} subTitle={props.subTitle}  />;
    } else {
      headerPartial = null;
    }

    return (
      <div
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
        style={props.style} ref='card'
        className={cardClass}>
        {headerPartial}
        {props.children}
      </div>
    );

  }
}
