import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '../Button/Button';

import './Checkbox.less';

export interface ICheckboxProps {
  checked? : boolean;
  tristate? : boolean;
  disabled? : boolean;
  size? : "small" | "medium" | "large" | "xlarge";
  ghost? : boolean;
}

export interface ICheckboxState {
  value? : number;
  checked? : boolean;
}

export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState>{
  constructor(props) {
    super(props);
    this.state = {
      value : 0,
      checked: false
    }
  }

  public componentDidMount() {
    this.setState({
      value: this.props.tristate ? 2 : this.props.checked ? 1 : 0,
      checked : this.props.checked
    })
  }

  public toggleChecked() {
    this.setState({
      value : this.state.value === 0 ? 1 : 0,
      checked: !this.state.checked
    })
  }

  public notchecked() {
    this.setState({
      value : 0,
      checked: false
    })
  }

  public checked() {
    this.setState({
      value : 1,
      checked: true
    })
  }

  public indeterminate() {
    this.setState({
      value : 2
    })
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;
    let {checked} = props;
    let {value} = state;

    return (
        <Button
          className="r-Checkbox"
          size={props.size}
          progressiveClick={this.props.tristate ? [this.checked.bind(this), this.notchecked.bind(this)] : null}
          onClick={this.toggleChecked.bind(this)}
          theme={ props.theme ? props.theme : value === 1 ? 'primary' : ''}
          icon={props.icon}
        >
        </Button>
    )
  }
}
