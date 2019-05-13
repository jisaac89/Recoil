import classNames from 'classnames';
import React from 'react';
import { Pager } from '../Pager/Pager';
import { IWizardProps } from './WizardTypes';

const WizardSlide = (props: IWizardProps & { visible: boolean }) => {
  return <div className={props.className}>{props.visible ? props.children : null}</div>;
};

export class Wizard extends React.Component<IWizardProps> {
  public static defaultProps = {
    slideIndex: 0
  };

  onSlide = (slideIndex: number) => {
    if (this.props.onSlide) {
      this.props.onSlide(slideIndex);
    }
  };

  render() {
    const self = this;
    const props = self.props;

    const wizardClass = classNames(
      'r-Wizard',
      { 'e-fill': props.fill },
      { 'e-flex': props.flex || props.paginate },
      { 'e-overflow': props.overflow }
    );

    const createSlidesPartial = (item: Array<any>, index: string | number) => {
      const selected = props.slideIndex === index;

      const wizardSlideClass = classNames(
        'r-WizardSlide',
        { 'e-selected': props.slideIndex === index },
        { 'e-backward': props.slideIndex > index },
        { 'e-forward': props.slideIndex < index },
        { 'e-vertical': props.vertical },
        { 'e-dont-animate': props.animate === false },
        {
          'e-selected-relative': props.selectedIsRelative === true && props.slideIndex === index
        },
        props.className
      );

      return (
        <WizardSlide slideIndex={props.slideIndex} visible={selected} className={wizardSlideClass} key={index}>
          {item}
        </WizardSlide>
      );
    };

    if (props.children.length > 1) {
      return (
        <div className={wizardClass} style={props.style}>
          <div className={'r-Wizard__track'}>{props.children.map(createSlidesPartial)}</div>
          {props.paginate ? (
            <Pager
              numberOfPages={props.children.length}
              currentPage={props.slideIndex}
              gotoPage={this.onSlide}
              hidePageSize
            />
          ) : null}
        </div>
      );
    } else {
      return props.children;
    }
  }
}
