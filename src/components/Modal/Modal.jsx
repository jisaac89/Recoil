"use strict";
var React = require('react');
var classNames = require('classnames');
var Button_1 = require('../Button/Button');
require('./Modal.less');
class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            min: false
        };
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
        let modalWrapperClass = classNames('r-Modal', { 'e-show': (props.open) }, { 'ghost': (props.ghost) }, { 'e-float': (props.float) }, { 'e-fade': (props.effect === 'fade') }, { 'e-fullscreen': (self.state.min) });
        let modalClass = classNames('r-ModalContent', props.className);
        props.icon ? (iconPartial = <i className={'pull-left mt10 fa fa-' + props.icon}></i>) : null;
        props.open ? (body.className += ' flohide') : (body.className = '');
        props.fullScreen ? (fullScreenPartial = <Button_1.default className="pull-right " onClick={this.toggleMin.bind(this)} icon={this.state.min ? 'expand' : 'compress'} type="link"/>) : null;
        return (<div className={modalWrapperClass}>
        <div className={modalClass} style={props.style}>
            {(() => {
            if (props.title) {
                return (<div className="r-Modal__header p10 border-bottom clearfix">
                  <div>
                    {iconPartial}
                    {fullScreenPartial}
                    <h2 className="dinblock pull-left">
                      {props.title}
                    </h2>
                  </div>
                  <Button_1.default className="pull-right" onClick={props.onClose} icon="times" type="link"/>
                </div>);
            }
        })()}
          {props.children}
        </div>
      </div>);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Modal;
