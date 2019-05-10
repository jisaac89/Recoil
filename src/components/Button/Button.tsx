import classNames from 'classnames';
import React from 'react';
import { IRecoil } from '../../index';
import { Selectable } from '../Selectable/Selectable';

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
  shortCutInitKey?: string;
  materialIcon?: boolean;
}

export class Button extends React.Component<IButtonProps> {
  public static defaultProps = {
    disabled: false,
    block: false,
    advanced: false,
    iconLocation: 'left'
  };
  public refs!: {
    [key: string]: Element;
    button: HTMLButtonElement;
  };

  render() {
    const self = this;
    const props = self.props;

    let buttonType: string;

    const buttonClass = classNames(
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

    const iconPartial =
      props.icon && !props.loading ? (
        props.materialIcon ? (
          <i className={'material-icons'}>{props.icon}</i>
        ) : (
          <i className={'fa fa-' + props.icon} />
        )
      ) : null;
    const loadingPartial = props.loading ? (
      <i className={'fa fa-circle-o-notch fa-spin' + (props.children ? ' mr10' : '')} />
    ) : null;
    const animatedIcon =
      props.iconPointer && !props.loading ? <i className={'icon-pointer fa fa-caret-' + props.iconPointer} /> : null;
    const iconWrapperRight =
      props.icon && props.iconLocation === 'right' ? (
        <div className={'icon-pointer-' + props.iconPointer + ' ml10 icon-wrapper'}>
          {iconPartial}
          {props.iconPointer ? animatedIcon : null}
        </div>
      ) : null;
    const iconWrapperLeft =
      props.icon && props.iconLocation === 'left' ? (
        <div className={'icon-pointer-' + props.iconPointer + ' icon-wrapper ' + (props.children ? 'mr10' : '')}>
          {iconPartial}
          {props.iconPointer ? animatedIcon : null}
        </div>
      ) : null;

    const SimpleButton = ({ innerRef }) => {
      return (
        <button
          id={props.id}
          ref={innerRef}
          tabIndex={props.tabIndex}
          onClick={props.onClick}
          type={buttonType}
          disabled={props.disabled || props.loading === true}
          className={buttonClass}
          style={props.style}>
          {iconWrapperLeft}
          {loadingPartial}
          {props.children}
          {iconWrapperRight}
          <Selectable type={props.checkedTheme} checked={props.checked ? true : false} />
        </button>
      );
    };

    const Button = React.forwardRef((props, ref) => <SimpleButton innerRef={ref} />);

    return <Button />;
  }
}
