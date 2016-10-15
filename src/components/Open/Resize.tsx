import * as React from 'react';


const iframeStyle = {
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  border: 'none',
  background: 'transparent',
  pointerEvents: 'none',
  zIndex: -1
};

export default class Resize extends React.Component<any, any>{

    public sensor : any;
    public rafOnResize: any;
    public container: any;

      public static defaultProps = {
      style : {}
  };

  constructor() {
    super();
    this.state = {
      width: -1,
      height: -1,
      offsetLeft: -1,
      offsetTop: -1,
      scrollLeft: -1,
      scrollTop: -1
    };

    const {onResize} = this.props;

    if (onResize) {
      this.onResize
    }
  }

  componentDidMount() {
    const {onResize} = this.props;

    if (onResize) {
      this.sensor.contentWindow.addEventListener('resize', this.onResize, false);
      this.rafOnResize = requestAnimationFrame(this.onResize);
    }
  }


  componentWillUnmount() {
    const {onResize, onScroll} = this.props;

    if (onResize) {
      cancelAnimationFrame(this.rafOnResize);
      this.sensor.contentWindow.removeEventListener('resize', this.onResize, false);
    }
  }


  onResize() {
    const {innerWidth: width, innerHeight: height} = this.sensor.contentWindow;
    const {onResize} = this.props;
    onResize({width, height});
    this.setState({width, height});
  }

  onContainerRef(ref) {
    this.container = ref;
  }


  onSensorRef(ref) {
    this.sensor = ref;
  }


  render() {
    const {
      style,
      onResize,
      children : render
    } = this.props;

    const {width, height, offsetLeft, offsetTop, scrollLeft, scrollTop} = this.state;
    const shouldRender = onResize && width > -1 && height > -1;

    return (
      <div ref={this.onContainerRef} style={{position: 'relative'}} {...this.props}>
        {onResize ?
          <iframe ref={this.onSensorRef} style={iframeStyle} /> : null}
        {shouldRender ?
          render({width, height, offsetLeft, offsetTop, scrollLeft, scrollTop}) : null}
      </div>
    )
  }
};