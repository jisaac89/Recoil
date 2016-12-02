import * as React from 'react';
import * as classNames from 'classnames';
import './Recoil.less';

export interface IRecoilProps {
    nightmode ? : boolean;
    className?: Array<string>;
    overflow?: boolean;
    mobile?: boolean;
    scroll? : boolean;
    scrollX? : boolean;
    scrollY? : boolean;
}

function delegate(el, evt, sel, handler) {
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

    constructor() {
        super();
        this.state = {
            inputIsFocused: false
        }
    }
    componentDidMount() {
        this.isMobile(this.props.mobile);
    }
    componentWillReceiveProps(nextProps) {
        this.isMobile(nextProps.mobile);
    }
    isMobile(mobile) {
        const self = this;
        if (mobile) {
            
            delegate(self.refs.Recoil, "focusin", "input", function (event) {
                self.setState({
                    inputIsFocused: true
                })
            });
            delegate(self.refs.Recoil, "focusout", "input", function (event) {
                self.setState({
                    inputIsFocused: false
                })
            });
        }
    }
    render() {

        const self = this;
        const props = self.props;

        let {nightmode, className} = props;

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