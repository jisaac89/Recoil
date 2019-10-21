import React from 'react';
import classNames from 'classnames';

export interface IFixedProps {
  children?: React.ReactNode;
}

export interface IFixedState {
  default: number;
  node: React.ReactNode;
  fixed: boolean;
}

export default class Fixed extends React.Component<IFixedProps, IFixedState> {
  public refFixed: React.RefObject<HTMLElement>;

  constructor(props: IFixedProps) {
    super(props);
    this.refFixed = React.createRef();
    this.state = {
      default: 0,
      node: null,
      fixed: false
    };
  }

  componentDidMount() {
    var svg = this.refFixed.current;
    if (svg) {
      document.body.addEventListener('scroll', this.handleShortcuts.bind(this), true);
      this.setState({
        default: svg.getBoundingClientRect().top,
        node: svg
      });
    }
  }

  handleShortcuts() {
    const self = this;
    var svg = this.refFixed.current;
    if (svg && svg.getBoundingClientRect().top <= 2) {
      self.setState({
        fixed: true
      });
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('scroll', this.handleShortcuts);
  }

  public render() {
    const self = this;
    const props = self.props;

    let { fixed } = self.state;
    let fixedClass = classNames('r-Fixed', { 'e-fixed': fixed === true });

    return (
      <div ref={() => this.refFixed} className={fixedClass}>
        {props.children}
      </div>
    );
  }
}
