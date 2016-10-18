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

  public refs : any;

  constructor(props){
    super(); 

    this.state = {
      height : props.if ? 'auto' : 0,
      open: props.if || false,
      render: props.if || false
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      open: nextProps.if
    }, ()=>{
      nextProps.if ? this.setHeightOpen() : this.setHeightClose();
    })
  }

  setHeightOpen(){
    const self = this;
    if (this.refs.Open) {
      this.setState({
        height : this.state.open ? this.refs.Open.children[0].clientHeight : 0,
        render: true
      }, ()=>{
          setTimeout(() => {
              self.setAuto();
          }, 300);
      })
    }
  }

  setHeightClose(){
    const self = this;
    if (!this.state.open) {
      this.setState({
        height : this.state.height === 'auto' ? this.refs.Open.children[0].clientHeight : 0
      }, ()=>{
          setTimeout(()=>{
        if (self.refs.Open && self.state.render) {
            self.setState({
              height : 0
            }, () => {
                setTimeout(() => {
                    self.setState({
                        render: false
                    })
                }, 300)
                })
        }
          }, 1);
      })
    }
  }

  setAuto() {
    if(this.refs.Open && this.state.height > 0) {
      this.setState({
        height : 'auto'
      })
    }
  }
  render(){
     const self = this;
     const props = self.props;
     const state = self.state;

     let OpenClass = classNames(
        'r-Open',
        {'e-open': (props.if)},
        { 'e-close': (!props.if) },
        { 'e-auto': (state.height === 'auto') },
        {'parent': (props.parent)},
        {'child': (props.child)},
        {'fill': (props.fill)},
        props.className
     );

     return(
       <div ref="Open" className={OpenClass} style={{height : state.height}}>
         <div>{state.render || state.open ? props.children : null}</div>
       </div>
     )
  }
}

export default Open;
