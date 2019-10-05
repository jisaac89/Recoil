import * as React from 'react';
import classNames from 'classnames';

export interface ISelectableProps {
  checked?: boolean;
  classNames?: any;
  type?: string;
}

class Selectable extends React.Component<ISelectableProps, {}> {
  public static defaultProps = {
    type: 'primary'
  };

  render() {
    const props = this.props;
    const { checked, type } = props;
    let selectableClass = classNames('r-Selectable', 'r-Selectable__border', type, { checked: checked });
    return <div tabIndex={-1} className={selectableClass} />;
  }
}

export default Selectable;
