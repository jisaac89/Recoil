import React from 'react';
import { Button } from '../Button/Button';
import { Toolbar } from '../Toolbar/Toolbar';

export class ModalHeader extends React.Component<any, any> {
  toggleFullScreen() {
    this.props.toggleFullScreen();
  }
  hasTitle() {
    const props = this.props;
    const { icon, title } = props;
    return title ? (
      <div className='dinblock pull-left'>
        {icon ? <i className={'pull-left mt10 fa fa-' + icon} /> : null}
        <h2 className='r-ModalHeader_Title dinblock'> {title} </h2>
      </div>
    ) : null;
  }
  menuTemplate() {
    const props = this.props;
    const { fullScreen, onClose } = props;
    return (
      <Toolbar size='small' right spacing>
        {!props.hideFullScreenButton ? (
          <Button onClick={this.toggleFullScreen.bind(this)} icon={fullScreen ? 'expand' : 'compress'} />
        ) : null}
        {!props.hideCloseButton ? (
          <Button shortcut={'x'} id={this.props.closeId} onClick={onClose} icon='times' theme='error' />
        ) : null}
      </Toolbar>
    );
  }
  render() {
    const props = this.props;
    const { open, hideCloseButton } = props;

    if (open && !hideCloseButton && !hideCloseButton) {
      return (
        <Toolbar className='r-Modal__header'>
          {this.hasTitle()}
          {this.menuTemplate()}
        </Toolbar>
      );
    } else {
      return null;
    }
  }
}
