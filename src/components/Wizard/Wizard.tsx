import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Pager from '../Pager/Pager';

export interface IWizardProps {
  slideIndex: number;
  children: React.ReactNode[];
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

const Wizard: FunctionComponent<IWizardProps> = ({
  slideIndex = 0,
  onSlide,
  fill,
  flex,
  paginate,
  overflow,
  vertical,
  animate,
  selectedIsRelative,
  className,
  children,
  style
}) => {
  const handleOnSlide = (slideIndex: number) => {
    onSlide ? onSlide(slideIndex) : null;
  };

  let wizardClass = classNames(
    'r-Wizard',
    { 'e-fill': fill },
    { 'e-flex': flex || paginate },
    { 'e-overflow': overflow }
  );

  const createSlidesPartial = (item: React.ReactNode, index: number) => {
    const selected = slideIndex === index;

    const wizardSlideClass = classNames(
      'r-WizardSlide',
      { 'e-selected': slideIndex === index },
      { 'e-backward': slideIndex > index },
      { 'e-forward': slideIndex < index },
      { 'e-vertical': vertical },
      { 'e-dont-animate': animate === false },
      {
        'e-selected-relative': selectedIsRelative === true && slideIndex === index
      },
      className
    );

    return (
      <WizardSlide visible={selected} className={wizardSlideClass} key={index}>
        {item}
      </WizardSlide>
    );
  };

  if (children.length > 1) {
    return (
      <div className={wizardClass} style={style}>
        <div className="r-Wizard__track">{children.map(createSlidesPartial)}</div>
        {paginate ? (
          <Pager numberOfPages={children.length} currentPage={slideIndex} gotoPage={handleOnSlide} hidePageSize />
        ) : null}
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export { Wizard };
