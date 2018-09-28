import * as React from 'react';
import * as classNames from 'classnames';

import Pager from '../Pager/Pager';

export interface IWizardProps {
  slideIndex: number;
  children?: any;
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
}

const WizardSlide: any = (props: any) => {
  return <div className={props.className}>{props.visible ? props.children : null}</div>;
};

export default class Wizard extends React.Component<IWizardProps, any> {
  public static defaultProps = {
    slideIndex: 0
  };
  constructor(props: IWizardProps) {
    super(props);
    this.state = {
      slideIndex: props.slideIndex || 0
    };
  }

  componentDidUpdate(prevProps: IWizardProps) {
    if (prevProps.slideIndex !== this.props.slideIndex) {
      this.gotoSlideIndex(this.props.slideIndex);
    }
  }

  gotoSlideIndex(slideIndex: number) {
    this.setState({
      slideIndex: slideIndex
    });
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    let wizardClass = classNames(
      'r-Wizard',
      { 'e-fill': props.fill },
      { 'e-flex': props.flex || props.paginate },
      { 'e-overflow': props.overflow }
    );

    let createSlidesPartial = (item: Array<any>, index: string | number) => {
      let selected = state.slideIndex === index;

      let wizardSlideClass = classNames(
        'r-WizardSlide',
        { 'e-selected': state.slideIndex === index },
        { 'e-backward': state.slideIndex > index },
        { 'e-forward': state.slideIndex < index },
        { 'e-vertical': props.vertical },
        { 'e-dont-animate': props.animate === false },
        {
          'e-selected-relative': props.selectedIsRelative === true && state.slideIndex === index
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
              currentPage={state.slideIndex}
              gotoPage={this.gotoSlideIndex.bind(this)}
              firstPage={this.gotoSlideIndex.bind(this, 0)}
              lastPage={this.gotoSlideIndex.bind(this, props.children.length - 1)}
              nextPage={this.gotoSlideIndex.bind(this, this.state.slideIndex + 1)}
              previousPage={this.gotoSlideIndex.bind(this, this.state.slideIndex - 1)}
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
