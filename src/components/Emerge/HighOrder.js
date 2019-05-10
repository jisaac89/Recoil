import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export function HighOrder(Component) {
  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect()

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */ &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  class component extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isVisible: false
      }

      this.element = null
    }
    componentDidMount() {
      this.element = ReactDOM.findDOMNode(this.refs.element)
      this.startWatching(this.element)
    }
    startWatching(element) {
      this.setState({
        isVisible: isElementInViewport(this.element) ? true : false
      })
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        isVisible: isElementInViewport(this.element)
      })
    }
    componentWillUnmount() {
      this.setState({
        isVisible: false
      })
    }
    render() {
      const self = this
      const props = self.props
      return <Component {...props} visible={self.state.isVisible} ref="element" />
    }
  }

  component.defaultProps = {
    type: 'fadeInUp',
    delay: 300
  }

  return component
}
