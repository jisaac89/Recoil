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

class Door extends React.Component<IDoorProps, {}>{

  public refDoor : any;

  public componentDidMount() {
    this.refDoor = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["door"]);

    const getAbsoluteHeight = (el) => {
      let styles = window.getComputedStyle(el);
      let margin = parseFloat(styles.marginTop) +
                   parseFloat(styles.marginBottom);

      return Math.ceil(el.offsetHeight + margin);
    };

    if (this.props.open) {
      this.refDoor.style.maxHeight = getAbsoluteHeight(this.refDoor.childNodes[0]) + 'px';
    }
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
       'r-Door',
       props.className
     );

     let doorStyle = {
       maxHeight: (props.open ? ( this.refDoor ? getAbsoluteHeight(this.refDoor.childNodes[0]) + 'px' : 'auto') : '0px'),
       overflow: 'hidden'
     };

     let doorContainerClass = classNames(
       'r-Door__container'
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
