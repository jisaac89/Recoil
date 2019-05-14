import classNames from 'classnames';
import React from 'react';
import { Button } from '../Button/Button';
import { Toolbar } from '../Toolbar/Toolbar';
import { ICheckboxProps } from './CheckboxType';

export class Checkbox extends React.Component<ICheckboxProps> {
  static defaultProps = {
    checked: false
  };

  public toggleChecked = () => {
    if (this.props.onChange) {
      this.props.onChange(this.props.checked);
    }
  };

  render() {
    const self = this;
    const props = self.props;
    const { checked, disabled, icon, loading, theme, size } = props;
    const checkboxClass = classNames('r-Checkbox', { disabled: props.disabled }, { 'e-checked': this.props.checked });

    const checkboxProps = {
      disabled,
      loading,
      size,
      icon,
      onClick: this.toggleChecked,
      theme: theme ? theme : checked ? 'primary' : 'default'
    };

    return (
      <Toolbar flush className={'r-Checkbox__Wrapper'}>
        <Button className={checkboxClass} {...checkboxProps} />
        {props.title ? (
          <Button {...checkboxProps} simple>
            {props.title}
          </Button>
        ) : null}
      </Toolbar>
    );
  }
}
