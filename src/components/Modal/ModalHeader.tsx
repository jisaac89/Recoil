import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

export default class ModalHeader extends React.Component<any, any>{
    toggleFullScreen() {
        this.props.toggleFullScreen();
    }
    hasTitle() {
        let props = this.props;
        return props.title ?
             <div>
                {props.icon ? <i className={'pull-left mt10 fa fa-' + props.icon}></i> : null}
                <h1 className="dinblock"> {props.title} </h1>
            </div> 
       : null
    }
    render() {
        let props = this.props;
        if (props.open) {
            return (
                <Toolbar block flush noRadius className="r-Modal__header border-bottom clearfix">
                    {this.hasTitle.bind(this)}
                    <Button simple size="small" className="pull-right" onClick={props.onClose} icon="times" />
                    <Button simple className="pull-right " size="small" onClick={this.toggleFullScreen.bind(this) } icon={this.props.fullScreen ? 'expand' : 'compress'} />
                </Toolbar>
            );
        } else return null;
    }
}