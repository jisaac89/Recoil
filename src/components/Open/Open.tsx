import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import './Open.less';
import Layer from '../Layer/Layer';

export interface IOpenProps {
  if? : boolean;
  className? : any;
  children? : any;
  overflow? : boolean;
  fill? : boolean;
  openToHeight? : string;
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
        {'e-fill': (props.fill) },
        props.className
     );

     let hasStyle;

     if(props.openToHeight) {
       hasStyle = {height: props.openToHeight && props.if === true ? props.openToHeight : 0}
     } else {
      hasStyle = null;
     }

     return(
       <div ref="Open" className={OpenClass} style={hasStyle}>
        {props.openToHeight ? 
          <Layer fill flex overflow scroll>
            {props.if ? props.children : null}
          </Layer>
        : props.if ? props.children : null}
       </div>
     )
  }
}

export default Open;