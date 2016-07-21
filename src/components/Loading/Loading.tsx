import * as React from 'react';
import * as classNames from 'classnames';
import './Loading.less';

import Button from '../Button/Button';

export interface ILoadingProps {
  children ? : any;
  if? : boolean;
  className? : any;
  src? : any;
}

export interface ILoadingState {}

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
      if (props.src) {
        return <div className="w100 text-center"><img src={props.src} className="w50 p10 mb20 floatL loader" /></div>;
      } else {
        return <i className="fa fa-circle-o-notch fa-spin"></i>
      }
    } else {
      return null;
    }
  }
}
