import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../Button/Button';
import Layer from '../Layer/Layer';
import './Modal.less';

import ModalHeader from './ModalHeader';

export interface IModalProps {
    ghost?: boolean;
    open?: boolean;
    float?: boolean;
    effect?: any;
    className?: any;
    icon?: string;
    fullScreen?: boolean;
    style?: any;
    title?: string;
    onClose?: any;
    children?: any;

    beforeOpen?: any;
    afterOpen?: any;
    mobile ? :boolean;
}

export interface IModalState {
    fullScreen?: boolean;
    open?: boolean;
    showChildren?: boolean;
}

export default class Modal extends React.Component<IModalProps, IModalState>{

    refs: {
        [key: string]: (Element);
        modal: (HTMLInputElement);
    }

    constructor(props) {
        super(props);
        this.state = {
            fullScreen: props.fullScreen || false,
            open: props.open || false,
            showChildren: false
        };
    }

    componentDidMount() {
        this.props.open ? this.open() : this.close();
    }

    componentWillReceiveProps(nextProps) {
        nextProps.open ? this.open() : this.close();
    }
 
    open() {
        this.beforeOpen();
        this.afterOpen();
    }

    beforeOpen() {
        this.props.beforeOpen ? this.props.beforeOpen() : null;
        this.openModal();
    }

    openModal() {
        this.setState({
            open:true
        }, () => {
            this.afterOpen();
        })
    }

    afterOpen() {
        this.setState({
            showChildren: true
        })
    }

    close() {
        this.setState({
            open: false,
            showChildren: false
        })
    }

    toggleFullScreen() {
        this.setState({
            fullScreen: !this.state.fullScreen
        })
    }

    render() {

        const self = this;
        const props = self.props;

        let iconPartial;
        let fullScreenPartial;
        //let body = document.querySelectorAll('body')[0];

        let modalWrapperClass = classNames(
            'r-Modal',
            { 'e-show': (this.state.open) },
            { 'ghost': (props.ghost) },
            { 'e-float': (props.float) },
            { 'e-fade': (props.effect === 'fade') },
            { 'e-fullscreen': (self.state.fullScreen) },
            {'mobile': props.mobile}
        );

        let modalClass = classNames(
            'r-ModalContent',
            props.className
        );

        //this.state.open ? (body.className = ' flohide') : (body.className = '');
        
        return (
            <div className={modalWrapperClass}>
                <div ref={'modal'} className={modalClass} style={props.style}>
                    <ModalHeader {...props} fullScreen={this.state.fullScreen} toggleFullScreen={this.toggleFullScreen.bind(this) }/>
                    {this.state.showChildren ? props.children : null}
                </div>
            </div>
        );
    }
}