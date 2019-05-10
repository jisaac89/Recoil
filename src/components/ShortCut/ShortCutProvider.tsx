import React from 'react';
import ReactDOM from 'react-dom';
export const ShortcutContext = React.createContext('');

export class ShortCutProvider extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      showShortcut: false
    };
  }
  public componentDidMount() {
    const self = this;
    const props = self.props;

    if (props.shortcut) {
      window.addEventListener('keydown', this.startShortcutListener.bind(this), false);
      window.addEventListener('keyup', this.startShortcutListener.bind(this), false);
    }
  }

  public startShortcutListener(e) {
    const context = this;
    const props = context.props;
    const refButton: any = ReactDOM.findDOMNode(context.refs['button']);
    context.setState({
      showShortcut: e.shiftKey ? true : false
    });
    if (e.shiftKey && e.code === 'Key' + props.shortcut.toUpperCase()) {
      refButton.focus();
    }
  }

  public componentWillUnmount() {
    if (this.props.shortcut) {
      window.removeEventListener('keydown', null, false);
      window.removeEventListener('keyup', null, false);
    }
  }

  render() {
    return <ShortcutContext.Provider value={this.props.shortCutInitKey}>{this.props.children}</ShortcutContext.Provider>;
  }
}
