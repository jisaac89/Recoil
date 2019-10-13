import React from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';
import { IRecoil } from '../../index';

export interface ILoadingProps extends IRecoil {
  children?: React.ReactNode;
  if?: boolean;
  src?: string;
  title?: string;
  width?: number;
  height?: number;
  icon?: string;
}

export interface ILoadingState {}

export default class Loading extends React.Component<ILoadingProps, ILoadingState> {
  public state: ILoadingState;

  constructor(props: ILoadingProps) {
    super(props);
  }

  public render() {
    const self = this;
    const props = self.props;

    let { src, size, icon } = props;

    let loadingClass = classNames('r-Loading', 'loader', 'dinblock', props.className, size);

    if (props.if) {
      if (src)
        return (
          <div className={loadingClass}>
            <img height={props.height} width={props.width} src={src} />
          </div>
        );
      else {
        return (
          <div className={loadingClass}>
            <i className="fa fa-circle-o-notch fa-spin" />
            {icon ? (
              <Emerge enter="fadeIn">
                <Button size={size} simple className="center-icon" icon={icon} />
              </Emerge>
            ) : null}
          </div>
        );
      }
    } else return null;
  }
}
