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
    open?: boolean;
    onClose? : any;
    title? : any;
    icon? : any;
    portalType? : string;
}

export default class Portal extends React.Component<P, any>{

  public static defaultProps = {
      portalType: 'SlideIn'
  };

  portalElement = null;
  componentDidMount() {
    let p = this.props.portalId && document.getElementById(this.props.portalId);
    if (!p) {
      let docfrag = document.createDocumentFragment();
      p = document.createElement('div');
      p.id = this.props.portalId;
      docfrag.appendChild(p);
      document.getElementById('Recoil').appendChild(docfrag);
    }
    this.portalElement = p;
    this.componentDidUpdate();
  }
  componentWillUnmount() {
     document.getElementById('Recoil').removeChild(this.portalElement);
  }
  componentDidUpdate() {
     if(this.props.portalType !== 'SlideIn') {
        ReactDOM.render(<Layer flex fill>{this.props.children}</Layer>, this.portalElement);
     } else {
        ReactDOM.render(<SlideIn flex onClose={this.props.onClose} title={this.props.title} icon={this.props.icon} className="z5" fixed from="bottom" fill={true} if={this.props.open} ><Layer flex fill theme="light">{this.props.children}</Layer></SlideIn>, this.portalElement);
     }
  }
  render(){return null}
};

    // ReactDOM.render(<Modal mobile fullScreen onClose={this.props.onClose} open={this.props.open} {...this.props}>{this.props.children}</Modal>, this.portalElement);
