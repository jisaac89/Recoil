import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

import Selectable from '../Selectable/Selectable';
import Input from '../Input/Input';
import Layer from '../Layer/Layer';
import SlideIn from '../SlideIn/SlideIn';
import Modal from '../Modal/Modal';

interface P {
    portalId?: any;
    portal? : any;
    portalToId? :any;
    open?: boolean;
    onClose? : any;
    title? : any;
    icon? : any;
}

export default class Portal extends React.Component<P, any>{
  portalElement = null;
  componentDidMount() {
    let p = this.props.portalId && document.getElementById(this.props.portalId);
    if (!p) {
      p = document.createElement('div');
      p.id = this.props.portalId;
      
      this.props.portalToId ? document.getElementById(this.props.portalToId).appendChild(p) : document.body.appendChild(p);
    }
    this.portalElement = p;
    this.componentDidUpdate();
  }
  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  }
  componentDidUpdate() {
    ReactDOM.render(<SlideIn onClose={this.props.onClose} title={this.props.title} icon={this.props.icon} className="z5" fixed from="bottom" fill if={this.props.open} ><Layer fill theme="light">{this.props.children}</Layer></SlideIn>, this.portalElement);
  }
  render(){return null}
};

    // ReactDOM.render(<Modal mobile fullScreen onClose={this.props.onClose} open={this.props.open} {...this.props}>{this.props.children}</Modal>, this.portalElement);
