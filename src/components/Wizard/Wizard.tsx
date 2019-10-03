import * as React from 'react';
import classNames from 'classnames';

import Pager from '../Pager/Pager';

export interface IWizardProps {
  slideIndex: number;
  children?: React.ReactNode[];
  vertical?: boolean;
  className?: string;
  style?: Object;
  mobile?: boolean;
  animate?: boolean;
  fill?: boolean;
  overflow?: boolean;
  flex?: boolean;
  paginate?: boolean;
  selectedIsRelative?: boolean;
  onSlide?(slideIndex: number): void;
}

interface IWizardSlideProps {
  className: string;
  visible: boolean;
  children: React.ReactNode;
}

const WizardSlide: React.FunctionComponent<IWizardSlideProps> = ({ children, visible, className }) => {
  return <div className={className}>{visible ? children : null}</div>;
};

export default class Wizard extends React.Component<IWizardProps> {
  public static defaultProps = {
    slideIndex: 0
  };

  onSlide = (slideIndex: number) => {
    this.props.onSlide ? this.props.onSlide(slideIndex) : null;
  };

  render() {
    const self = this;
    const props = self.props;

    let wizardClass = classNames(
      'r-Wizard',
      { 'e-fill': props.fill },
      { 'e-flex': props.flex || props.paginate },
      { 'e-overflow': props.overflow }
    );

    let createSlidesPartial = (item: Array<React.ReactNode>, index: string | number) => {
      let selected = props.slideIndex === index;

      let wizardSlideClass = classNames(
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
        <WizardSlide visible={selected} className={wizardSlideClass} key={index}>
          {item}
        </WizardSlide>
      );
    };

    if (props.children.length > 1) {
      return (
        <div ref="r-Wizard" className={wizardClass} style={props.style}>
          <div ref="r-Wizard__track" className="r-Wizard__track">
            {props.children.map(createSlidesPartial)}
          </div>
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
