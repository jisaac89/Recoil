import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '../Button/Button';

import './Checkbox.less';

export interface ICheckboxProps {
  checked? : boolean;
  disabled? : boolean;
  size? : "small" | "medium" | "large" | "xlarge";
  ghost? : boolean;
  theme? : 'primary' | 'error' | 'success' | 'default';
  icon? : string;
  onChange? : any;
}

export interface ICheckboxState {
  checked? : boolean;
}

export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState>{
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false
    }
  }

  public toggleChecked() {
    this.setState({
      checked: !this.state.checked
    })

    this.props.onChange(this.state.checked);
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
  
  componentWillReceiveProps(nextProps){
    this.setState({
      checked : nextProps.checked !== this.state.checked ? nextProps.checked : this.state.checked
    })
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;
    let {checked} = state;

    return (
        <Button
          className="r-Checkbox"
          size={props.size}
          onClick={this.toggleChecked.bind(this)}
          theme={checked ? 'primary' : 'default'}
          icon={props.icon}
        >
        </Button>
    )
  }
}
