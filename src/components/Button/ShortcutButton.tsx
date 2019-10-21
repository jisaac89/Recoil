import React from 'react';
import { ShortcutContext } from '../ShortCut/ShortCutProvider';
import Button from './Button';

interface IShortcutButtonProps {
  tabIndex: number;
  onClick: () => void;
  className: string;
  theme:
    | 'primary'
    | 'success'
    | 'error'
    | 'default'
    | 'bronze'
    | 'silver'
    | 'gold'
    | 'light'
    | 'night'
    | 'dark'
    | undefined;
  icon: string;
  iconPointer?: 'left' | 'right' | 'up' | 'down';
}

export default class ShortcutButton extends React.Component<IShortcutButtonProps> {
  render() {
    const self = this;
    const props = self.props;

    return (
      <ShortcutContext.Consumer>
        {(shortCutInitKey: string) => {
          return <Button shortCutInitKey={shortCutInitKey} {...props} />;
        }}
      </ShortcutContext.Consumer>
    );
  }
}
