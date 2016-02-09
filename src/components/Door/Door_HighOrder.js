import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default function Door_HighOrder(Component) {

  const getAbsoluteHeight = (el) => {
    let styles = window.getComputedStyle(el);
    let margin = parseFloat(styles['marginTop']) +
                 parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
  }

  class component extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        height : 0
      }
    }
    componentDidMount(){
      this.element = ReactDOM.findDOMNode(this.refs.element.props.children);
      this.setState({
        height : getAbsoluteHeight(this.element)
      })
    }
    render() {
      const self = this;
      const props = self.props;
      let state = self.state;
      return <Component height={state.height} {...props} ref="element" />
    }
  }

  component.defaultProps = {
    height: 0
  }

  return component;
}
