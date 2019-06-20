import classNames from 'classnames';
import React from 'react';
import { IAlignChildProps, IAlignProps, IAlignState } from './AlignTypes';

const AlignChild = (props: IAlignChildProps) => {
  const { columns, vertical, width, element, margin } = props;

  const alignChildStyle = {
    flex: columns || vertical ? 'none' : '1 !important',
    padding: margin,
    width: !vertical ? width + '%' : '',
    height: vertical ? width + '%' : ''
  };

  return (
    <div className={'r-Align__Child'} style={alignChildStyle}>
      {element}
    </div>
  );
};

export { AlignChild };
