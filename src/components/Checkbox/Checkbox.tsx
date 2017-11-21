import * as React from 'react';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';
import * as classNames from 'classnames';

import {IRecoil} from '../../index';

export interface ICheckboxProps extends IRecoil{
  icon? : string;
  onChange? : (value: boolean, event?: React.MouseEvent<MouseEvent>) => void;
  title? : string;
}

export interface ICheckboxState {
  checked? : boolean;
}

export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState>{
  constructor(props : ICheckboxProps) {
    super(props);
    this.state = {
      checked: props.checked || false
    }
  }

  public toggleChecked() {
    this.setState({
      checked: !this.state.checked
    })

    this.props.onChange ? this.props.onChange(this.state.checked) : null;
  }

  public notchecked() {
    this.setState({
      checked: false
    })
  }

  public checked() {
    this.setState({
      checked: true
    })
  }
  
  componentWillReceiveProps(nextProps : ICheckboxProps){
    this.setState({
      checked : nextProps.checked !== this.state.checked ? nextProps.checked : this.state.checked
    })
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;
    let {checked} = state;

    let checkboxClass = classNames(
      'r-Checkbox',
      {'disabled' : (props.disabled)}
    )

    let checkboxProps = {
      disabled:props.disabled,
      size:props.size,
      onClick:this.toggleChecked.bind(this),
      theme: props.theme ? props.theme : checked ? 'primary' : 'default'
    }

    return (
      <Toolbar flush>
        <Button
          className={checkboxClass}
          icon={props.icon}
          {...checkboxProps}
        >
        </Button>
        {props.title ? <Button {...checkboxProps} simple>{props.title}</Button> : null}
      </Toolbar>
    )
  }
}
