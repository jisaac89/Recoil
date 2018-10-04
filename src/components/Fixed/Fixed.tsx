import * as React from 'react';
import * as classNames from 'classnames';

export interface IFixedProps {
  children?: any;
}

export default class Fixed extends React.Component<IFixedProps, any> {
  refs: {
    [key: string]: Element;
    fixedNode: HTMLElement;
  };

  constructor(props) {
    super(props);
    this.state = {
      default: 0,
      node: null,
      fixed: false
    };
  }

  componentDidMount() {
    var svg = this.refs.fixedNode;
    document.body.addEventListener('scroll', this.handleShortcuts.bind(this), true);
    this.setState({
      default: svg.getBoundingClientRect().top,
      node: svg
    });
  }

  handleShortcuts() {
    const self = this;
    var svg = this.refs.fixedNode;
    if (svg.getBoundingClientRect().top <= 2) {
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
      <div ref="fixedNode" className={fixedClass}>
        {props.children}
      </div>
    );
  }
}
