import * as React from "react";

export const ShortcutContext = React.createContext(''); //passing initial value

export default class ShortCutProvider extends React.Component<any,any> {
    render() {
      return (
        <ShortcutContext.Provider value={this.props.shortCutInitKey}>
          {this.props.children}
        </ShortcutContext.Provider>
      );
    }
};