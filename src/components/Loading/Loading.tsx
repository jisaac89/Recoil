import classNames from 'classnames';
import React from 'react';
import { Button } from '../Button/Button';
import { Emerge } from '../Emerge/Emerge';
import { ILoadingProps } from './LoadingTypes';

export class Loading extends React.Component<ILoadingProps> {
  constructor(props: ILoadingProps) {
    super(props);
  }

  public render() {
    const self = this;
    const props = self.props;

    const { src, size, icon } = props;

    const loadingClass = classNames('r-Loading', 'loader', 'dinblock', props.className, size);

    if (props.if) {
      if (src) {
        return (
          <div className={loadingClass}>
            <img height={props.height} width={props.width} src={src} />
          </div>
        );
      } else {
        return (
          <div className={loadingClass}>
            <i className='fa fa-circle-o-notch fa-spin' />
            {icon ? (
              <Emerge enter='fadeIn'>
                <Button size={size} simple className='center-icon' icon={icon} />
              </Emerge>
            ) : null}
          </div>
        );
      }
    } else {
      return null;
    }
  }
}
