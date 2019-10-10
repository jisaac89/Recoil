import React from 'react';
import { ShortcutContext } from '../ShortCut/ShortCutProvider';
import Button from './Button';

export default class ShortcutButton extends React.Component<any, any> {
  public refs: {
    [key: string]: Element;
    button: HTMLButtonElement;
  };
  render() {
    const self = this;
    const props = self.props;

    return (
      <ShortcutContext.Consumer>
        {(shortCutInitKey: any) => {
          return <Button shortCutInitKey={shortCutInitKey} {...props} />;
        }}
      </ShortcutContext.Consumer>
    );
  }
}
