import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import './Door.less';

interface IDoorProps {
  open? : boolean;
  className? : any;
  children? : any;
  overflow? : boolean;
}

interface IDoorState {}

class Door extends React.Component<IDoorProps, IDoorState>{

  public refDoor : any;

  public componentDidMount() {
    this.refDoor = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["door"]);
  }
  render(){
     const self = this;
     const props = self.props;

     const getAbsoluteHeight = (el) => {
       let styles = window.getComputedStyle(el);
       let margin = parseFloat(styles.marginTop) +
                    parseFloat(styles.marginBottom);

       return Math.ceil(el.offsetHeight + margin);
     };

     let doorClass = classNames(
       'r-Door'
     );

     let doorStyle = {
       maxHeight: (props.open ? ( this.refDoor ? getAbsoluteHeight(this.refDoor.childNodes[0]) + 'px' : 'auto') : '0px'),
       overflow: 'hidden'
     };

     let doorContainerClass = classNames(
       'r-Door__container',
       props.className
     );

     return(
       <div ref="door" className={doorClass} style={doorStyle}>
         <div className={doorContainerClass}>
           {props.children}
         </div>
       </div>
     )
  }
}

export default Door;
