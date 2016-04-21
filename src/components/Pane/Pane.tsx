import * as React from 'react';
import * as classNames from 'classnames';
import './Pane.less';

interface IPaneProps {
  wrapper? : any;
  open? : any;
  fill? : any;
  direction? : any;
  className? : any;
  offset? : any;
  wrapperClick? : any;
  children? : any;
  fixed ? : boolean;
}

export default class Pane extends React.Component<IPaneProps, {}>{

  constructor(props){
    super(props);
  }
  render() {
    const self = this;
    const props = self.props;
    let axis, paneContainerStyle;


    let paneContainerClass = classNames(
      'r-Pane',
      {'e-open': (props.open)},
      {'fill': (props.fill)},
      props.direction,
      props.className
    );

    switch (props.direction) {
      case 'left' || 'right':
        axis = 'X';
        break;
      case 'top' || 'bottom':
        axis = 'Y';
        break;
      default:

    }

    let offset;

    if (props.offset) {
      offset = props.offset;
    } else {
      offset = '0px';
    }

    if (props.open) {
      paneContainerStyle = {
        transform : 'translate'+axis+'('+offset+')'
      };
    } else {
      paneContainerStyle = null;
    }

    let childrenPartial = () => {
      if (props.open) {
        return props.children;
      }
    }

    return(
      <div onClick={props.wrapperClick} ref="pane" className={paneContainerClass} style={paneContainerStyle}>
          {childrenPartial()}
      </div>
    );
  }
}
