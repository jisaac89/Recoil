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

  componentWillReceiveProps(nextProps) {

    const self = this;
    var refDoor = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["door"]);

         const getAbsoluteHeight = (el) => {
           let styles = window.getComputedStyle(el);
           let margin = parseFloat(styles.marginTop) +
                        parseFloat(styles.marginBottom);

           return Math.ceil(el.offsetHeight + margin);
         };


         if (nextProps.open) {
           self.setState({
             maxHeight : getAbsoluteHeight(refDoor.childNodes[0])
           })
         }

      //
      // if (nextProps.open) {
      //   window.setTimeout(()=>{
      //     self.setState({
      //       autoheight : true
      //     })
      //   },300);
      // } else {
      //   window.setTimeout(()=>{
      //     self.setState({
      //       autoheight : false
      //     })
      //   },1000)
      // }
  }

  render(){
     const self = this;
     const props = self.props;
     const state = self.state;

     const getAbsoluteHeight = (el) => {
       let styles = window.getComputedStyle(el);
       let margin = parseFloat(styles.marginTop) +
                    parseFloat(styles.marginBottom);

       return Math.ceil(el.offsetHeight + margin);
     };

     let doorClass = classNames(
       'r-Door',
      //  {'hide': (!props.open)},
       {'e-open': (props.open)},
       {'e-autoHeight': (state.autoheight)},
       props.className
     );


     let doorContainerClass = classNames(
       'r-Door__container'
     );

     return(
       <div ref="door" className={doorClass} style={{maxHeight: (props.open ? this.state.maxHeight + 'px' : '0px')}}>
         <div className={doorContainerClass}>
           {props.children}
         </div>
       </div>
     )
  }
}

export default Door;
