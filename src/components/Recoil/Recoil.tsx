import * as React from 'react';
import * as classNames from 'classnames';

export interface IRecoilProps {
    nightmode ? : boolean;
    className?: string;
    overflow?: boolean;
    mobile?: boolean;
    scroll? : boolean;
    scrollX? : boolean;
    scrollY? : boolean;

    onMobile? : any;
}

function delegate(el : HTMLElement, evt : any, sel : any, handler : any) {
    el.addEventListener(evt, function (event) {
        var t = event.target;
        while (t && t !== this) {
            if (t.matches(sel)) {
                handler.call(t, event);
            }
            t = t.parentNode;
        }
    });
}

export default class Recoil extends React.Component<IRecoilProps, any> {

    refs: any;

    constructor(props : IRecoilProps) {
        super(props);
        this.state = {
            inputIsFocused: false,
            mobile: props.mobile || false
        }
    }
    componentDidMount() {
        this.detectMobile();
        
    }
    detectMobile(){
        this.setState({
            mobile : window.navigator.userAgent.match(/Android|iPad|iPhone|iPod/i) != null || window.screen.width <= 480
        }, ()=>{
            this.isMobile(this.state.mobile);
            this.state.mobile ? this.props.onMobile ? this.props.onMobile(this.state.mobile) : null : null
        })
    }
    componentWillReceiveProps(nextProps: IRecoilProps) {
        this.isMobile(nextProps.mobile);
    }
    isMobile(mobile : boolean) {
        const self = this;
        if (mobile) {
            
            delegate(self.refs.Recoil, "focusin", "input", function () {
                self.setState({
                    inputIsFocused: true
                })
            });
            delegate(self.refs.Recoil, "focusout", "input", function () {
                self.setState({
                    inputIsFocused: false
                })
            });
        }
    }
    render() {

        const self = this;
        const props = self.props;

        let RecoilClass = classNames(
            'r-Recoil',
            { 'e-NightMode': (props.nightmode)},
            { 'flohide': (props.overflow)},
            { 'e-scroll': (props.scroll)},
            {'e-scroll-y': (props.scrollY)},
            {'e-scroll-x': (props.scrollX)},
            { 'e-inputIsFocused': (this.state.inputIsFocused)},
            props.className
        );

        return (
            <div ref={'Recoil'} id={'Recoil'} className={RecoilClass}>
                {this.props.children}
            </div>
        );
    }
}