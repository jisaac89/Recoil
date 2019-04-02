import * as React from 'react';
import classNames from 'classnames';
import Selectable from '../Selectable/Selectable';

import { IRecoil } from '../..';

export interface IButtonProps extends IRecoil {
  style?: Object;
  onClick?: (event: React.MouseEvent<any>) => void;
  pointer?: 'left' | 'right' | boolean;
  iconPointer?: 'left' | 'right' | 'up' | 'down';
  iconLocation?: 'left' | 'right';
  checkedTheme?: 'primary' | 'success' | 'error' | 'default';
  icon?: string;
  href?: string;
  target?: string;
  block?: boolean;
  strech?: boolean;
  right?: boolean;
  left?: boolean;
  submit?: boolean;
  advanced?: boolean;
  ghost?: boolean;
  required?: boolean;
  id?: string;
  shortcut?: string;
  materialIcon?: boolean;
  onMouseEnter?: (event: React.MouseEvent<any>) => void;
  shortCutInitKey?: string[];
  fileUpload?: boolean;
  onChange?(e): void;
}

export interface IButtonState {
  checked?: boolean;
  showShortcut?: any;
}

export default class AdvancedButton extends React.Component<IButtonProps, IButtonState> {
  public refs: {
    [key: string]: Element;
    button: HTMLButtonElement;
  };

  public static defaultProps = {
    disabled: false,
    block: false,
    advanced: false,
    iconLocation: 'left',
    scrollDuration: 300,
    scrollOffset: 0
  };

  constructor(props: IButtonProps) {
    super(props);
    this.state = {
      checked: false,
      showShortcut: false
    };
  }

  public onClick(event: React.MouseEvent<MouseEvent>) {
    this.props.onClick ? this.props.onClick(event) : null;
  }

  onMouseEnter(event: React.MouseEvent<MouseEvent>) {
    this.props.onMouseEnter ? this.props.onMouseEnter(event) : null;
  }

  onChangeFileUpload(e) {
    this.props.onChange ? this.props.onChange(e.target.files[0]) : null;
  }

  render() {
    const self = this;
    const props = self.props;
    let buttonType: 'button' | 'submit' | 'reset';

    let buttonClass = classNames(
      'r-Button',
      { simple: props.simple },
      { 'e-required': props.required },
      { outline: props.outline },
      { block: props.block },
      { column: props.strech },
      { icon: !props.children },
      { 'button-pointer-right': props.pointer === 'right' },
      { 'button-pointer-left': props.pointer === 'left' },
      { 'icon-right': props.iconLocation === 'right' },
      { 'icon-left': props.iconLocation === 'left' },
      { 'pull-right': props.right },
      { 'pull-left': props.left },
      props.size,
      props.theme,
      props.className,
      { checked: props.checked },
      { fill: props.fill }
    );

    if (props.submit) {
      buttonType = 'submit';
    } else {
      buttonType = 'button';
    }

    let showTooltip = () => {
      if (this.state.showShortcut) {
        return <div className="animated text-center fadeIn w100">{this.props.shortcut}</div>;
      }
    };

    let selectablePartial = <Selectable type={props.checkedTheme} checked={props.checked ? true : false} />;
    let iconPartial =
      props.icon && !props.loading ? (
        props.materialIcon ? (
          <i className={'material-icons'}>{props.icon}</i>
        ) : (
          <i className={'fa fa-' + props.icon} />
        )
      ) : null;
    let loadingPartial = props.loading ? (
      <i className={'fa fa-circle-o-notch fa-spin' + (props.children ? ' mr10' : '')} />
    ) : null;
    let animatedIcon =
      props.iconPointer && !props.loading ? <i className={'icon-pointer fa fa-caret-' + props.iconPointer} /> : null;
    let iconWrapperRight =
      props.icon && props.iconLocation === 'right' && !this.state.showShortcut ? (
        <div className={'icon-pointer-' + props.iconPointer + ' ml10 icon-wrapper'}>
          {iconPartial}
          {props.iconPointer ? animatedIcon : null}
        </div>
      ) : null;
    let iconWrapperLeft =
      props.icon && props.iconLocation === 'left' && !this.state.showShortcut ? (
        <div className={'icon-pointer-' + props.iconPointer + ' icon-wrapper ' + (props.children ? 'mr10' : '')}>
          {iconPartial}
          {props.iconPointer ? animatedIcon : null}
        </div>
      ) : null;

    let LinkButton = ({ innerRef }) => {
      return (
        <a
          href={props.href}
          id={props.id}
          target={props.target}
          ref={innerRef}
          tabIndex={props.tabIndex}
          onClick={this.onClick.bind(this)}
          className={buttonClass}
          style={props.style}
        >
          {iconWrapperLeft}
          {loadingPartial}
          {!this.state.showShortcut ? props.children : showTooltip()}
          {selectablePartial}
          {iconWrapperRight}
        </a>
      );
    };

    let SimpleButton = ({ innerRef }) => {
      return (
        <button
          id={props.id}
          ref={innerRef}
          tabIndex={props.tabIndex}
          onClick={this.onClick.bind(this)}
          type={buttonType}
          disabled={props.disabled || props.loading === true}
          className={buttonClass}
          style={props.style}
        >
          {iconWrapperLeft}
          {loadingPartial}
          {!this.state.showShortcut ? props.children : showTooltip()}
          {iconWrapperRight}
        </button>
      );
    };

    let DefaultButton = ({ innerRef }) => {
      return (
        <button
          id={props.id}
          ref={innerRef}
          onMouseEnter={this.props.onMouseEnter ? this.onMouseEnter.bind(this) : null}
          tabIndex={props.tabIndex}
          onClick={this.onClick.bind(this)}
          type={buttonType}
          disabled={props.disabled || props.loading === true}
          className={buttonClass}
          style={props.style}
        >
          {iconWrapperLeft}
          {loadingPartial}
          {!this.state.showShortcut ? props.children : showTooltip()}
          {selectablePartial}
          {iconWrapperRight}
        </button>
      );
    };

    let FileButton = ({ innerRef }) => {
      return (
        <div
          id={props.id}
          ref={innerRef}
          onMouseEnter={this.props.onMouseEnter ? this.onMouseEnter.bind(this) : null}
          className={buttonClass}
          style={props.style}
        >
          {iconWrapperLeft}
          {loadingPartial}
          {!this.state.showShortcut ? props.children : showTooltip()}
          {selectablePartial}
          {iconWrapperRight}
          <input onChange={this.onChangeFileUpload.bind(this)} className="r-Button-File" type="file" accept="image/*" />
        </div>
      );
    };

    let Link = React.forwardRef((props, ref) => <LinkButton innerRef={ref} />);
    let Simple = React.forwardRef((props, ref) => <SimpleButton innerRef={ref} />);
    let Default = React.forwardRef((props, ref) => <DefaultButton innerRef={ref} />);
    let FileUpload = React.forwardRef((props, ref) => <FileButton innerRef={ref} />);

    if (props.href) {
      return <Link />;
    } else if (props.fileUpload) {
      return <FileUpload />;
    } else {
      return props.advanced ? <Default /> : <Simple />;
    }
  }
}
