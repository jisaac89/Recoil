import * as React from 'react';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';
import * as classNames from 'classnames';

import { IRecoil } from '../../index';

export interface ICheckboxProps extends IRecoil {
  icon?: string;
  onChange?: (value: boolean, event?: React.MouseEvent<MouseEvent>) => void;
  title?: string;
  loading?: boolean;
}

export interface ICheckboxState {
  checked?: boolean;
}

export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  constructor(props: ICheckboxProps) {
    super(props);
    this.state = {
      checked: props.checked || false
    };
  }

  public toggleChecked() {
    this.setState({
      checked: !this.state.checked
    });

    this.props.onChange ? this.props.onChange(this.state.checked) : null;
  }

  public notchecked() {
    this.setState({
      checked: false
    });
  }

  public checked() {
    this.setState({
      checked: true
    });
  }

  static getDerivedStateFromProps(props: ICheckboxProps, state) {
    if (state.checked !== props.checked) {
      return {
        checked: props.checked
      };
    } else {
      return {
        checked: state.checked
      };
    }
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;
    let { checked } = state;

    let checkboxClass = classNames('r-Checkbox', { disabled: props.disabled }, { 'e-checked': this.state.checked });

    let checkboxProps = {
      disabled: props.disabled,
      loading: props.loading,
      size: props.size,
      onClick: this.toggleChecked.bind(this),
      theme: props.theme ? props.theme : checked ? 'primary' : 'default'
    };

    return (
      <Toolbar flush className="r-Checkbox__Wrapper">
        <Button className={checkboxClass} icon={props.icon} {...checkboxProps} />
        {props.title ? (
          <Button {...checkboxProps} simple>
            {props.title}
          </Button>
        ) : null}
      </Toolbar>
    );
  }
}
