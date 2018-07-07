import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layer from '../Layer/Layer';
import SlideIn from '../SlideIn/SlideIn';

export interface IPortalProps {
    portalId?: string;
    portal? : JSX.Element;
    open?: boolean;
    onClose? : ()=> void;
    title? : string;
    icon? : string;
    portalType? : string;
}

export default class Portal extends React.Component<IPortalProps, any>{

  public static defaultProps = {
      portalType: 'SlideIn'
  };

  portalElement : HTMLElement = null;
  componentWillMount() {
    let p = this.props.portalId && document.getElementById(this.props.portalId);
    if (!p) {
      let docfrag = document.createDocumentFragment();
      p = document.createElement('div');
      p.id = this.props.portalId;
      docfrag.appendChild(p);
      document.getElementById('Recoil').appendChild(docfrag);
    }
    this.portalElement = p;
  }
  componentWillUnmount() {
     document.getElementById('Recoil').removeChild(this.portalElement);
  } 
  render(){
    if(this.props.portalType !== 'SlideIn') {
      return ReactDOM.createPortal(
        this.props.children,
        this.portalElement
      )
   } else {
    return ReactDOM.createPortal(
      <SlideIn 
      flex 
      fill 
      onClose={this.props.onClose} 
      title={this.props.title} 
      icon={this.props.icon} 
      className="r-Portal z5" 
      fixed from="bottom" 
      if={this.props.open} 
      > <Layer flex fill>{this.props.children}
      </Layer></SlideIn>,
      this.portalElement
    )
   }
  }
};
