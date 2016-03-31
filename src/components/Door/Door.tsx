import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import './Door.less';

interface IDoorProps {
  open? : boolean;
  className? : any;
  children? : any;
  overflow? : boolean;
}

class Door extends React.Component<IDoorProps, any>{

  public refDoor : any;

  constructor() {
    super();
    this.state = {
      autoheight: false,
      maxHeight: 100
    }
  }

  render(){
     const self = this;
     const props = self.props;
     const state = self.state;

     let doorClass = classNames(
       'r-Door',
       props.className
     );


     let doorContainerClass = classNames(
       'r-Door__container'
     );

     if (props.open) {
       return(
         <div ref="door" className={doorClass}>
           <div className={doorContainerClass}>
             {props.children}
           </div>
         </div>
       )
     } else {
       return (
         <div ref="door" className={doorClass}>
           <div className={doorContainerClass}>
           </div>
         </div>
       )
     }
  }
}

export default Door;
