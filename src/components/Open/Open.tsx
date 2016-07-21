import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import './Open.less';

export interface IOpenProps {
  if? : boolean;
  className? : any;
  children? : any;
  overflow? : boolean;
  parent? : boolean;
  child? : boolean;
  fill? : boolean;
}

class Open extends React.Component<IOpenProps, any>{

  public refOpen : any;

  render(){
     const self = this;
     const props = self.props;
     const state = self.state;

     let OpenClass = classNames(
        'r-Open',
        {'e-open': (props.if)},
        {'e-close': (!props.if)},
        {'parent': (props.parent)},
        {'child': (props.child)},
        {'fill': (props.fill)},
        props.className
     );

     return(
       <div ref="Open" className={OpenClass}>
         {props.if ? props.children : null}
       </div>
     )
  }
}

export default Open;
