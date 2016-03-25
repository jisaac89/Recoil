import * as React from 'react';
import * as classNames from 'classnames';
import {findDOMNode} from 'react-dom';
import Selectable from '../Selectable/Selectable';
import './Button.less';

interface IButtonProps {
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
  className? : string;
  type?: string;
  icon? : string;
  href?: string;
  target?: string;
  ghost? : boolean;
  strech? : boolean;
  children? : boolean;
  pointer? : any;
  right? : boolean;
  left? : boolean;
  size? : string;
  submit? : boolean;
  style? : any;
  checked? : boolean;
  onClick?: () => void;
  tabIndex? : number;
  progressiveClick? : Array<() => string>;
  shortcut? : any;
}

interface IButtonState {
  checked? : boolean;
  progressiveClickIndex? : any;
  showShortcut?: boolean;
  progressiveClickLength? : any;
  clickCounter? : any;
  shiftCounter? : any;
}

export default class Button extends React.Component<IButtonProps, IButtonState>{
  public static defaultProps = {
      active: true,
      disabled: false,
      block: false
  };
  constructor(props: IButtonProps) {
    super(props);
    this.state = {
      checked : false,
      progressiveClickIndex: 0,
      showShortcut : false,
      clickCounter: 0,
      shiftCounter: 0
    };
  }
  public componentDidMount() {
    const self = this;
    const props = self.props;
    if (props.progressiveClick) {
      this.setState({
        progressiveClickLength: props.progressiveClick.length
      })
    }
    if (props.shortcut) {
      window.addEventListener("keydown", this.startShortcutListener.bind(this), false);
      window.addEventListener("keyup", this.startShortcutListener.bind(this), false);
    }
  }

  public componentWillUnmount() {
    if (this.props.shortcut) {
      window.removeEventListener("keydown", null, false);
      window.removeEventListener("keyup", null, false);
    }
  }

  public startShortcutListener(e) {
    const context = this;
    const props = context.props;
    let state = context.state;

    const refButton = findDOMNode<HTMLElement>(context.refs["button"]);

    context.setState({
      showShortcut : e.shiftKey ? true : false
    })
    context.setState({
      shiftCounter: 1
    })

    if (e.shiftKey && e.code === "Key" + props.shortcut.toUpperCase() && state.clickCounter !== 1) {
      refButton.click();
      context.setState({
        clickCounter: 1
      })
      setTimeout(() => {
        context.setState({
          clickCounter: 0
        })
      }, 300);
    }
  }

  public onClick() {
    const self = this;
    if (this.props.onClick) {
      this.props.onClick();
      this.setState({
        checked : true
      });
    }
  }
  public progressiveClick (arrayOfFunctions) {
    const self = this;
    const array = this.props.progressiveClick;
    let state = self.state;
    let clickIndex = state.progressiveClickIndex;
    let arrayLength = state.progressiveClickLength;

    if (clickIndex < arrayLength) {
      array[clickIndex]();
      self.setState({
        progressiveClickIndex: clickIndex + 1
      })
    } else {
      array[0]();
      self.setState({
        progressiveClickIndex: 1
      })
    }
  }
  render() {

    const self = this;
    const props = self.props;

    let buttonType;

    let buttonClass = classNames(
      'r-Button',
      {'ghost' : (props.ghost)},
      {'block' : (props.block)},
      {'column' : (props.strech)},
      {'icon' : (!props.children)},
      {'pointer' : (props.pointer)},
      {'right' :(props.pointer === 'right')},
      {'left' :(props.pointer === 'left')},
      {'pull-right' :(props.right)},
      {'pull-left' :(props.left)},
      props.size,
      props.type,
      props.className
    );

    if (props.submit) {
      buttonType = 'submit';
    } else {
      buttonType = 'button';
    }

    let selectablePartial = <Selectable checked={props.checked ? true : false}></Selectable>;
    let iconPartial = (props.icon ? <i className={(this.state.showShortcut ? 'e-invisible ' : '') + 'fa fa-'+props.icon+(props.children ? ' mr5' : '')}></i> : null );

    let showTooltip = () => {
      if (this.state.showShortcut) {
        return (
          <span className="e-shortcut animated fadeInUp">{this.props.shortcut}</span>
        )
      }
    }

    if (props.href) {
      return (
        <a href={props.href} target={props.target} ref="button" tabIndex={props.tabIndex} onClick={props.progressiveClick ? this.progressiveClick.bind(this) : this.onClick.bind(this)} type={buttonType} disabled={props.disabled === true} className={buttonClass} style={props.style}>
          {iconPartial}
          {(()=>{
            if (!this.state.showShortcut) {
              return (
                <span>{props.children}</span>
              )
            } else {
              return null;
            }
          })()}
          {showTooltip()}
          {selectablePartial}
        </a>
      );
    } else {
      return (
        <button ref="button" tabIndex={props.tabIndex} onClick={props.progressiveClick ? this.progressiveClick.bind(this) : this.onClick.bind(this)} type={buttonType} disabled={props.disabled === true} target={props.target} className={buttonClass} style={props.style}>
          {iconPartial}
          <span className={this.state.showShortcut ? "e-invisible" : ''}>{props.children}</span>
          {showTooltip()}
          {selectablePartial}
        </button>
      );
    }
  }
}
