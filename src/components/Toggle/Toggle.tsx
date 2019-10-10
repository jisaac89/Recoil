import React from 'react';
import classNames from 'classnames';
import Wizard from '../Wizard/Wizard';
import Shrink from '../Shrink/Shrink';

import { IRecoil } from '../../index';

export interface IToggleProps extends IRecoil {
  name?: string;
  array: Array<string | number>;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  iconArray: Array<string>;
  type?: string; // 'colors'
  right?: boolean;
  selected?: Array<Object>;
  value?: string | string[];
  label?: string | number;
  disabled?: boolean;
  loading?: boolean;
}

export interface IToggleState {
  selected: Array<Object> | undefined;
  checked: boolean;
}

export default class Toggle extends React.Component<IToggleProps, IToggleState> {
  public static defaultProps = {
    checked: false,
    iconArray: []
  };

  constructor(props: IToggleProps) {
    super(props);
    this.state = {
      selected: props.selected || [],
      checked: props.checked || false
    };
  }

  static getDerivedStateFromProps(props: IToggleProps, state: IToggleState) {
    if (props.checked === null) {
      return null;
    } else {
      if (props.checked !== state.checked) {
        return {
          checked: props.checked
        };
      } else return null;
    }
  }

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState(
      {
        checked: !this.state.checked
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(event);
        }
      }
    );
  };

  changeSelected(item: Array<any>) {
    this.setState({ selected: item });
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;
    let { checked } = state;
    let slideIndex = state.checked ? 1 : 0;

    let { disabled, loading } = props;

    let toggleClass = classNames(
      'r-Toggle',
      {
        'e-text': (props.array && props.array.length === 2) || (props.iconArray && props.iconArray.length === 2)
      },
      { 'e-checked': checked },
      {
        'e-color': props.array && props.array.length > 2 && props.type === 'colors'
      },
      {
        'e-numbers': props.array && props.array.length > 2 && props.type !== 'colors'
      },
      { 'pull-right': props.right },
      props.size,
      props.className
    );

    let arrayFirstTemplate;
    let arraySecondTemplate;

    if ((props.array && props.array.length === 2) || (props.iconArray && props.iconArray.length === 2)) {
      arrayFirstTemplate =
        (props.array && props.array[0]) ||
        (props.iconArray[0] ? <i className={'fa fa-' + props.iconArray[0]} /> : null);
      arraySecondTemplate =
        (props.array && props.array[1]) ||
        (props.iconArray[1] ? <i className={'fa fa-' + props.iconArray[1]} /> : null);
    }

    let loadingTemplate = <i className={'fa fa-circle-o-notch fa-spin' + (props.children ? ' mr10' : '')} />;

    let createList = (item: any, index: number) => {
      let itemClass = classNames('r-Toggle__item', {
        'e-selected': state.selected === item
      });

      let colorTemplate = (
        <div className={'r-Toggle__item__color'} style={{ background: item, height: 26, width: 26 }} />
      );
      let stringTemplate = (
        <div className={'r-Toggle__item__string'} style={{ minWidth: 26 }}>
          {item}
        </div>
      );

      return (
        <div className={itemClass} onClick={this.changeSelected.bind(this, item)} key={index}>
          {(() => {
            if (props.array && props.type === 'colors') {
              return colorTemplate;
            } else {
              return stringTemplate;
            }
          })()}
        </div>
      );
    };

    let inputProps = {
      className: checked ? 'r-Toggle__input checked' : 'r-Toggle__input',
      onClick: !loading ? this.onChange : () => {}
    };

    if (
      props.type === 'colors' ||
      props.type === 'strings' ||
      (props.type === 'numbers' && props.array && props.array.length > 2)
    ) {
      return (
        <Shrink opacity={50} if={disabled} className={toggleClass}>
          {this.props.array.map(createList)}
        </Shrink>
      );
    } else {
      return (
        <Shrink opacity={50} if={disabled} className={toggleClass}>
          <input type="checkbox" {...inputProps} />
          {this.props.label}
          {(props.array && props.array.length === 2) || (props.iconArray && props.iconArray.length === 2) ? (
            <label className={'r-Toggle__button ' + props.theme}>
              <Wizard slideIndex={slideIndex}>
                <div className="text-right">{loading ? loadingTemplate : arrayFirstTemplate}</div>
                <div className="text-white">{loading ? loadingTemplate : arraySecondTemplate}</div>
              </Wizard>
            </label>
          ) : (
            <label className={'r-Toggle__button ' + props.theme} />
          )}
        </Shrink>
      );
    }
  }
}
