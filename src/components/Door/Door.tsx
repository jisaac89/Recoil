import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import './Door.less';

export interface IDoorProps {
  open? : boolean;
  className? : any;
  children? : any;
  overflow? : boolean;
  parent? : boolean;
  child? : boolean;
  fill? : boolean;
}

const getAbsoluteHeight = (el) => {
  let styles = window.getComputedStyle(el);
  let margin = parseFloat(styles.marginTop) +
               parseFloat(styles.marginBottom);

  return Math.ceil(el.offsetHeight + margin);
};

class Door extends React.Component<IDoorProps, any>{

  public refDoor : any;

  constructor() {
    super();
    this.state = {
      autoHeight: false,
      height: 0
    }
  }

  render(){
     const self = this;
     const props = self.props;
     const state = self.state;

     let doorClass = classNames(
       'r-Door',
       {'e-open': (props.open)},
       {'e-close': (!props.open)},
       {'e-autoHeight': (state.autoHeight)},
       {'parent': (props.parent)},
      {'child': (props.child)},
      {'fill': (props.fill)},
       props.className
     );

     let doorContainerClass = classNames(
       'r-Door__container'
     );

     return(
       <div ref="door" className={doorClass} style={{height: this.state.maxHeight}}>
         {props.open ? props.children : null}
       </div>
     )
  }
}

export default Door;
