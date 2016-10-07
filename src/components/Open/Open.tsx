import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import './Open.less';


// state machine so it should
// on inital load do not show any child nodes.
// if open, start icrementing the height by 1
// plop in the child nodes and detect its height,
// make sure the container height does not exceed the child nodes height.


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

  public refs : any;

  constructor() {
    super(); 
    this.state = {
      height : 0
    }
    this.handleResize = this.handleResize.bind(this);
  }

  componentWillReceiveProps(nextProps) {
     const self = this;
     const props = this.props;
     let clientHeight = self.refs.Open && self.refs.Open.children.length ? self.refs.Open.children[0].clientHeight : 0;
     this.setState({
       height: nextProps.if ? self.recursiveHeight(0, clientHeight) + 'px' : 0
     })
  }

  recursiveHeight(lastHeight, initialHeight) {

      let currentHeight = lastHeight || 0;

      if (currentHeight !== initialHeight) {
            return this.recursiveHeight(currentHeight + 1, initialHeight);
        } else {
            return currentHeight;
        }
    }

  shouldComponentUpdate(){
    return true;
  }

 handleResize(e) {
    if(this.props.if) {
      const self = this;
     const props = this.props;
     let clientHeight = self.refs.Open && self.refs.Open.children.length ? self.refs.Open.children[0].clientHeight : 0;
     
     this.setState({
       height: self.recursiveHeight(0, clientHeight) + 'px'
     })
    } else return null
  }

  componentDidMount() {
    this.refs.Open.addEventListener('DOMSubtreeModified', this.handleResize);
  }

  componentWillUnmount() {
    this.refs.Open.removeEventListener('DOMSubtreeModified', this.handleResize);
  }

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
      
     let clientHeight = self.refs.Open && self.refs.Open.children.length ? self.refs.Open.children[0].clientHeight : 0;
     let openStyle;

      openStyle = {
        height : self.state.height
      }

     return(
       <div ref="Open" className={OpenClass} style={openStyle}>
         <div>{props.children}</div>
       </div>
     )
  }
}

export default Open;
