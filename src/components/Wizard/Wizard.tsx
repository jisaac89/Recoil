import * as React from 'react';
import * as classNames from 'classnames';
import './Wizard.less';

interface IWizardProps {
  slideIndex ? : number;
  vertical ? : boolean;
  className ? : any;
  children ? : any;
  style ? : any;
  mobile? : boolean;
  animate? : boolean;
}

const WizardSlide : any = (props : any) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export default class Wizard extends React.Component<IWizardProps, {}>{
  public static defaultProps = {
    slideIndex: 0
  }
  constructor(props) {
    super(props);
  }
  render() {

    const self = this;
    const props = self.props;

    let wizardClass = classNames(
      'r-Wizard'
    );

    let createSlidesPartial = (item, index) => {

      let wizardSlideClass = classNames(
        'r-WizardSlide',
        {'e-selected' : (props.slideIndex === index)},
        {'e-backward' : (props.slideIndex > index)},
        {'e-forward' : (props.slideIndex < index)},
        {'e-vertical' : (props.vertical)},
        {'e-dont-animate' : (props.animate === false)},
        props.className
      );

      if(props.mobile) {
          if (props.slideIndex === index ||
              index === props.slideIndex + 1
            ) {
              return(
                <WizardSlide className={wizardSlideClass} key={index}>
                  {item}
                </WizardSlide>
              )
        } else {
          return null;
        }
      } else {
              if (props.slideIndex === index ||
            index === props.slideIndex + 1 ||
            index === props.slideIndex - 1
          ) {
        return(
          <WizardSlide className={wizardSlideClass} key={index}>
            {item}
          </WizardSlide>
        )
      } else {
        return null;
      }
      }
    };

    if (props.children) {
      return(
        <div ref="r-Wizard" className={wizardClass} style={props.style}>
          <div ref='r-Wizard__track' className="r-Wizard__track">
            {props.children.map(createSlidesPartial)}
          </div>
        </div>
      );
    } else{
      return null;
    }
  }
}
