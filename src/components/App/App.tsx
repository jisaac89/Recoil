import * as React from 'react';
import * as classNames from 'classnames';
import './App.less';

export interface IAppProps {
    nightmode ? : boolean;
    className?: Array<string>;
    overflow?: boolean;
    mobile?: boolean;
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

export default class App extends React.Component<IAppProps, any> {

    refs: any;

    constructor() {
        super();
        this.state = {
            fixInput: false
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
                    fixInput: true
                })
            });
            delegate(self.refs.Recoil, "focusout", "input", function (event) {
                self.setState({
                    fixInput: false
                })
            });
        }
    }
    render() {

        const self = this;
        const props = self.props;

        let {nightmode, className} = props;

        let appClass = classNames(
            'r-App',
            { 'e-NightMode': (props.nightmode) },
            { 'flohide': (props.overflow) },
            { 'e-fix-inputs': (this.state.fixInput) },
            props.className
        );

        return (
            <div ref={'Recoil'} id={'Recoil'} className={appClass}>
                {this.props.children}
            </div>
        );
    }
}