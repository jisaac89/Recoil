import * as React from 'react';
import * as classNames from 'classnames';
import './Selectable.less';

export interface ISelectableProps {
  checked? : boolean;
  classNames? : any;
  ghost? : boolean;
  children ? : any;
  type? : string;
}

class Selectable extends React.Component<ISelectableProps, {}> {

  public static defaultProps = {
    type: 'primary'
  }

  render() {
    const self = this;
    const props = self.props;

    let selectableClass = classNames(
      'r-Selectable',
      'r-Selectable__border',
      props.type,
      {'checked' : (props.checked)}
    );

    return <div className={selectableClass}></div>;
  }
}

export default Selectable;
