import * as React from 'react';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

export default class ModalHeader extends React.Component<any, any>{
    toggleFullScreen() {
        this.props.toggleFullScreen();
    }
    hasTitle() {
        let props = this.props;
        let {icon, title} = props;
        return title ?
            <div>
                {icon ? <i className={'pull-left mt10 fa fa-' + icon}></i> : null}
                <h2 className="dinblock"> {title} </h2>
            </div> 
       : null
    }
    menuTemplate() {
        let props = this.props;
        let {fullScreen, onClose} = props;
        return (
            <Toolbar size="small" right spacing>
                {!props.hideFullScreenButton ? <Button onClick={this.toggleFullScreen.bind(this)} icon={fullScreen ? 'expand' : 'compress'} /> : null}
                {!props.hideCloseButton ? <Button shortcut={"x"} id={this.props.closeId} onClick={onClose} icon="times" theme="error" /> : null}
            </Toolbar>
        ) 
    }
    render() {
        let props = this.props;
        let {open, hideCloseButton} = props;

        if (open && !hideCloseButton && !hideCloseButton) {
            return (
                <Toolbar className="r-Modal__header">
                    {this.hasTitle.bind(this)}
                    {this.menuTemplate()}
                </Toolbar>
            );
        } else return null;
    }
}