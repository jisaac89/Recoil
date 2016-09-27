import * as React from 'react';
import * as classNames from 'classnames';
import './Loading.less';

import Button from '../Button/Button';

export interface ILoadingProps {
  children ? : any;
  if? : boolean;
  className? : string;
  src? : string;
  size? : 'small' | 'medium' | 'large' | 'xlarge';
  title? : string;
  theme?: 'success' | 'primary' | 'error' | 'default';
  width?: number;
  height?: number;
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

    let {src, size, theme, title} = props;

    let loadingClass = classNames(
      'r-Loading',
      'floatL',
      'loader',
      props.className
    )

    if (props.if) {
      if (src)
          return <div className={loadingClass}><img height={props.height} width={props.width} src={src} /></div>;
      else
        return <Button className={loadingClass} size={size} theme={theme} simple loading={true}>{title}</Button>
    } else return null;
  }
}
