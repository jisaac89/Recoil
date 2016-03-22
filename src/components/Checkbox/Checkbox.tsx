import * as React from 'react';
import Button from '../Button/Button';

interface ICheckboxProps {
  checked? : boolean;
}

interface ICheckboxState {
  checked? : boolean;
}

export default class Checkbox extends React.Component<ICheckboxProps,ICheckboxState>{
  constructor() {
    super();
    this.state = {
      checked : false
    }
  }

  public componentDidMount() {
    if (this.props.checked) {
      this.setState({
        checked: true
      })
    }
  }

  public toggleChecked() {
    this.setState({
      checked : this.state.checked ? false : true
    })
  }

  public componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setState({
        checked : true
      })
    }
  }

  render() {

    const self = this;
    const props = self.props;
    let {checked} = props;

    return (
      <Button onClick={this.toggleChecked.bind(this)} tabIndex={-1} ghost icon={this.state.checked ? 'check floatL' : "circle-o"}>
        <input className="hide" type="checkbox" checked={this.state.checked} />
      </Button>
    )
  }
}
