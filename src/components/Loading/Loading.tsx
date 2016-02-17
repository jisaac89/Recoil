import * as React from 'react';
import classNames from 'classnames';
import './Loading.less';

import Button from '../Button/Button';

interface ILoadingProps {
  children ? : any;
  if? : boolean;
  className? : any;
}

interface ILoadingState {}

export default class Loading extends React.Component<ILoadingProps, ILoadingState> {
  public state : ILoadingState;

  constructor (props : ILoadingProps) {
    super(props);
  }

  public render() {

    const self = this;
    const props = self.props;

    let loadingClass = classNames(
      'r-Loading',
      'animated',
      'fadeInUp',
      'text-center',
      props.className
    )

    if (props.if) {
      return <i className="fa fa-circle-o-notch fa-spin"></i>
    } else {
      return null;
    }
  }
}
