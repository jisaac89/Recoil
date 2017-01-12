import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

export interface IAnimateProps {
    animationTitle?: string;
    children?: any;
}

export interface IAnimateState {
  animationTitle ?: null | string;
  currentPosition ?: any;
  playing ? : boolean; 
  animations? : any;
  playingAnimation? : any;
}

class AnimateElement extends React.Component<any, any> {

  refs : any;

  constructor(){
    super();
    this.state = {
      currentPosition: []
    }
  }
  componentDidMount(){
    this.setcurrentPositon();
  }
  setcurrentPositon(){
    let element = ReactDOM.findDOMNode<HTMLInputElement>(this.refs.AnimateElement);
    let position = element.getBoundingClientRect();
    this.setState({
        currentPosition: {
          "top" : position.top, 
          "left" : position.left
        }
    }, ()=>{
      console.log(this.state);
    })
  }
  render(){
    return (
      <div ref="AnimateElement">
        {this.props.children}
      </div>
    )
  }
}

export default class Animate extends React.Component<IAnimateProps, IAnimateState> {
  constructor() {
    super();
    this.state = {
      animationTitle: null,
      playing: false,
      animations: [],
      playingAnimation: []
    }
  }

  componentDidMount(){
    this.setState({
      animations: {
        'slideIn' : {
          duration: 300,
          keys:[
            {'left' : '200px'},
            {'left' : '-200px'}
          ]
        },
        'scale' : {
          duration: 300,
          keys:[
            {'scale' : '1'},
            {'scale' : '2'}
          ]
        }
      }
    }, ()=>{
      console.log(this.state)
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.aimationTitle && nextProps.aimationTitle !== this.state.animationTitle){
      this.setAnimationTitle(nextProps.animationTitle);
    }
  }

  setAnimationTitle(animationTitle : string){
    this.setState({
      animationTitle: animationTitle
    }, ()=>{
      this.setState({
        playing: true
      }, ()=>{
        this.playAnimationTitle(animationTitle);
      })
    })
  }

  playAnimationTitle(animationTitle){
    this.setState({
      playingAnimation: this.state.animations[this.state.animationTitle],
      animationTitle: null
    })
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;
    let {children} = props;
    
    let animateClass = classNames(
      'r-Animate',
    );

    let animateElement = (item, index) => {
      return(
        <AnimateElement animation={state.playingAnimation}  key={index}>
          {item}
        </AnimateElement>
      )
    }

    return (
      <div ref="animate" className={animateClass}>
        {children && children.length > 1 ? children.map(animateElement) : 
          <AnimateElement animation={state.playingAnimation} >
            {children}
          </AnimateElement>
        }
      </div>
    );
  }
}