import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';
import './Modal.less';

import ModalHeader from './ModalHeader';

export interface IModalProps {
  ghost ? : boolean;
  open ? : boolean;
  float ? : boolean;
  effect ? : any;
  className ? : any;
  icon ? : string;
  fullScreen ? : boolean;
  style ? : any;
  title ? : string;
  onClose ? : any;
  children ? : any;
}

export interface IModalState {
  min ? : boolean;
  open ? : boolean;
}

export default class Modal extends React.Component<IModalProps, IModalState>{
  mouseIsDown: boolean;

  public static defaultProps = {
      type: 'button',
      dropDirection: 'down'
  };
  
  constructor(props){
    super(props);
    this.state = {
      min : false,
      open: props.open || false
    };
  }
  componentWillReceiveProps(nextProps) {
      const state = this.state;
      this.setState({
          open : nextProps.open !== state.open ? nextProps.open : state.open
      });
  }
  componentDidMount() {
      window.addEventListener('mousedown', this.pageClick.bind(this), false);
  }
  pageClick(e) {
      if (this.mouseIsDown) {
          return;
      }

      // this.setState({
      //     open: false
      // });

      this.props.onClose ? this.props.onClose() : null
  }
  onMouseDown() {
      this.mouseIsDown = true;
  }

  onMouseUp() {
      this.mouseIsDown = false;
  }
  toggleMin() {
    this.setState({
      min: this.state.min ? false : true
    });
  }
  render() {

    const self = this;
    const props = self.props;

    let iconPartial;
    let fullScreenPartial;
    let body = document.querySelectorAll('body')[0];

    let modalWrapperClass = classNames(
      'r-Modal',
      {'e-show': ( this.state.open )},
      {'ghost': ( props.ghost )},
      {'e-float': ( props.float )},
      {'e-fade': ( props.effect === 'fade' )},
      {'e-fullscreen': ( self.state.min )}
    );

    let modalClass = classNames(
      'r-ModalContent',
      props.className
    );

    props.icon ? (iconPartial = <i className={'pull-left mt10 fa fa-'+props.icon}></i>) : null;
    this.state.open ? (body.className += ' flohide') : (body.className = '');
    props.fullScreen ? (fullScreenPartial = <Button className="pull-right " onClick={this.toggleMin.bind(this)} icon={this.state.min ? 'expand' : 'compress'} simple />) : null;

    let openProps;

    if (this.state.open) {
      openProps = {
        onMouseDown: this.onMouseDown.bind(this),
        onMouseUp: this.onMouseUp.bind(this)
      }
    } else {
      openProps = null;
    }

    return (
      <div className={modalWrapperClass}>
        <div className={modalClass} style={props.style} {...openProps}>
          <ModalHeader {...props}/>
          {props.open ? props.children : null}
        </div>
      </div>
    );
  }
}