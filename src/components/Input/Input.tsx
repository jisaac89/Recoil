import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import Selectable from '../Selectable/Selectable';
import SlideIn from '../SlideIn/SlideIn';

import { IRecoil } from '../../index';

export interface IInputProps extends IRecoil {
  id?: string;
  ref?: string;
  type?: string;
  icon?: string;
  title?: string;
  placeholder?: string;
  value?: string | string[];
  defaultValue?: string | string[];
  style?: Object;
  errorInline?: boolean;
  errorDirection?: 'left' | 'top' | 'right' | 'bottom';
  error?: boolean;
  errorMessage?: string | JSX.Element;
  rows?: number;
  cols?: number;
  block?: boolean;
  autoExpand?: boolean;
  onBlur?: any;
  onChange?: (value: any, event: React.FormEvent<any>) => void;
  scrollHeight?: number;
  focusOnMount?: boolean;
  focusDelay?: number;
  advanced?: boolean;
  maxLength?: number;
  max?: number;
  min?: number;
  name?: string;
  required?: boolean;
  autoComplete?: string;
  disableKeys?: Array<string>;
  inputSize?: number;
  inputId?: any;
  material?: boolean;
  pattern?: string;
}

export interface IInputState {
  checked?: boolean;
  value?: string | string[];
  mouseOut?: boolean;
}

export default class Input extends React.Component<IInputProps, IInputState> {
  public state: IInputState;

  public static defaultProps = {
    advanced: false,
    type: 'text'
  };

  constructor(props: IInputProps) {
    super(props);
    this.state = {
      checked: false,
      value: this.setCurrentValue(),
      mouseOut: false
    };
  }

  setCurrentValue(props = this.props) {
    return props.value || props.defaultValue || '';
  }

  componentDidUpdate(prevProps: IInputProps) {
    const props = this.props;
    const valueIsChanging = prevProps.value !== props.value;

    if (valueIsChanging || prevProps.defaultValue !== props.defaultValue) {
      const value = this.setCurrentValue(props);
      valueIsChanging ? this.setState({ value: value, checked: true }) : null;
    }
    if (prevProps.value !== this.props.value && prevProps.value.length) {
      this.setState({ checked: true });
    }
    if (prevProps.focusOnMount !== this.props.focusOnMount) {
      this.focusOnMount();
    }
  }

  public componentDidMount() {
    const props = this.props;
    if (props.focusOnMount) {
      this.focusOnMount();
    }
  }
  public componentWillUnmount() {
    let inputDOM: any = ReactDOM.findDOMNode(this.refs['refInput']);
    (inputDOM as HTMLInputElement).blur();
  }
  public focusOnMount() {
    const self = this;
    let inputDOM = ReactDOM.findDOMNode(this.refs['refInput']);
    let focusDelay;

    focusDelay = self.props.focusDelay || 400;

    (function(inputDOM) {
      setTimeout(function() {
        (inputDOM as HTMLInputElement).focus();
      }, focusDelay);
    })(inputDOM);
  }
  public focus = (e: any) => {
    this.setState({
      checked: true
    });
  };
  public blur = (event: React.MouseEvent<HTMLInputElement>) => {
    let inputDOM = this.refs['refInput'];
    let value = (event.target as any).value;
    this.setState(
      {
        checked: (ReactDOM.findDOMNode(inputDOM) as HTMLInputElement).value !== '' ? true : false,
        value: value
      },
      () => {
        this.props.onBlur ? this.props.onBlur(value, event) : null;
      }
    );
  };
  public mouseOut() {
    let inputDOM = this.refs['refInput'];
    this.setState({
      mouseOut: (ReactDOM.findDOMNode(inputDOM) as HTMLInputElement).onmouseout ? false : true
    });
  }
  public onChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // ts issues

    this.setValue((event.target as HTMLInputElement).value, event);
  };

  limit(max: number) {
    let inputDOM = ReactDOM.findDOMNode(this.refs['refInput']);
    let maxLength = max - 1;
    if ((inputDOM as HTMLInputElement).value.length > maxLength) {
      (inputDOM as HTMLInputElement).value = (inputDOM as HTMLInputElement).value.substr(0, maxLength);
    }
  }

  setValue(value: string, event: React.FormEvent<any>) {
    this.setState(
      {
        value: value
      },
      () => {
        // this.props.maxLength ? this.limit(this.props.maxLength) : null;
        this.props.onChange ? this.props.onChange(value, event) : null;
      }
    );
  }

  disableKeys(event: any) {
    if (this.props.disableKeys.includes(event.key)) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    return true;
  }

  onKeyDown = (event: any) => {
    this.props.disableKeys ? this.disableKeys(event) : null;
  };

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    let inputPartial, iconPartial, pencilPartial, textAreaScrollHeight, errorInlinePartialTop, errorInlinePartialBottom;

    let errorInlinePartial = () => {
      if (props.errorInline && (props.errorDirection === 'top' || 'bottom') && props.errorMessage) {
        return (
          <SlideIn
            from={props.errorDirection}
            if={!state.mouseOut && props.error}
            className="p5 h90 r-Layer light w100 error-pane h30px "
          >
            <div className="error-message">{props.errorMessage}</div>
          </SlideIn>
        );
      } else {
        return null;
      }
    };

    // if input has icon then show it

    if (props.icon) {
      iconPartial = (
        <small>
          <i className={'fa fa-' + props.icon} />
        </small>
      );
    } else {
      iconPartial = null;
    }

    let inputDOM = this.refs['refInput'];

    if (inputDOM) {
      // textarea auto expand
      if (props.autoExpand) {
        textAreaScrollHeight = Math.min(self.props.scrollHeight, 300) + 'px';
      } else {
        textAreaScrollHeight = null;
      }
      // hide pencil if placholder present or input has value
      if (!props.placeholder && !state.value) {
        pencilPartial = null;
      } else {
        pencilPartial = null;
      }
    }

    // error directions
    if (!props.errorInline && props.error) {
      if (props.errorDirection === 'top') {
        errorInlinePartialTop = <small className="error-message">{props.errorMessage}</small>;
        errorInlinePartialBottom = null;
      } else {
        errorInlinePartialBottom = <small className="error-message">{props.errorMessage}</small>;
        errorInlinePartialTop = null;
      }
    } else {
      errorInlinePartialTop = null;
      errorInlinePartialBottom = null;
    }

    let valueProps;

    if (props.defaultValue) {
      valueProps = {
        defaultValue: state.value
      };
    } else {
      valueProps = {
        value: state.value
      };
    }

    let inputProps = {
      onKeyPress: this.onKeyDown,
      autoComplete: props.autoComplete,
      name: props.name,
      ref: 'refInput',
      onChange: this.focus,
      onInput: this.onChange,
      onBlur: this.blur,
      onFocus: this.focus,
      placeholder: !props.advanced ? (props.title ? props.title : props.placeholder) : props.placeholder
    };

    // switch input type depending on propType
    switch (props.type) {
      case 'number' || 'tel':
        inputPartial = (
          <input
            {...valueProps}
            {...inputProps}
            max={props.max}
            min={props.min}
            type={props.type}
            pattern={props.pattern}
            id={props.inputId}
          />
        );
        break;

      case 'textarea':
        inputPartial = (
          <textarea
            id={props.inputId}
            name={props.name}
            rows={props.rows}
            cols={props.cols}
            ref="refInput"
            style={{ height: textAreaScrollHeight }}
            onFocus={this.focus}
            onChange={this.focus}
          />
        );
        break;
      default:
        inputPartial = (
          <input id={props.inputId} {...valueProps} {...inputProps} type={props.type} size={props.inputSize} />
        );
    }

    let inputWrapperClass = classNames(
      'r-Input',
      { w100: props.block },
      { simple: props.simple },
      { checked: this.state.checked },
      { flex: !!props.flex },
      props.size,
      props.className
    );

    let inputClassadvanced = classNames(
      'r-Input',
      props.size,
      props.advanced ? 'w100' : props.className,
      { w100: props.block },
      { checked: this.state.checked },
      { 'e-disabled': props.disabled },
      { 'e-required': !props.disabled && props.required && !props.value },
      'r-Input__container',
      'flohide',
      { 'no-title': !props.title },
      { simple: props.simple },
      'e-advanced',
      props.theme
    );

    if (!props.advanced) {
      return <div className={inputClassadvanced}>{inputPartial}</div>;
    } else {
      return (
        <div id={props.id} className={inputWrapperClass} style={props.style}>
          {props.errorMessage ? errorInlinePartialTop : null}
          <div tab-index={-1} className={inputClassadvanced}>
            {iconPartial}
            <small>{props.title}</small>
            {inputPartial}
            {pencilPartial}
            <Selectable
              type={props.error ? 'error' : props.theme ? props.theme : 'primary'}
              checked={self.state.checked}
            />
            {errorInlinePartial()}
          </div>
          {props.errorMessage ? errorInlinePartialBottom : null}
        </div>
      );
    }
  }
}
