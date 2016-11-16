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

  refs: {
      [key: string]: (Element);
      modal: (HTMLInputElement);
  }

  public static defaultProps = {
      type: 'button',
      dropDirection: 'down'
  };

  constructor(props){
    super(props);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.state = {
      min : false,
      open: props.open || false
    };
    
  }
  componentWillReceiveProps(nextProps) {
      const self = this;
      const state = this.state;
      this.setState({
          open : nextProps.open !== state.open ? nextProps.open : state.open
      });

      if (nextProps.open) {
          document.addEventListener('click', self.handleDocumentClick);
      } else {
          document.removeEventListener('click', self.handleDocumentClick);
      }
  }
  componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick);
  }
  handleDocumentClick(e) {
      const self = this;
      var modal = this.refs.modal;
      if (this.state.open && modal && !modal.contains(e.target)) {
          this.setState({
              open: false
          }, () => {
              document.removeEventListener('click', self.handleDocumentClick);
              })
          
          self.props.onClose ? self.props.onClose() : null
      }
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

    return (
      <div className={modalWrapperClass}>
        <div ref={'modal'} className={modalClass} style={props.style}>
          <ModalHeader {...props} min={this.state.min} toggleMin={this.toggleMin.bind(this)}/>
          {props.children}
        </div>
      </div>
    );
  }
}