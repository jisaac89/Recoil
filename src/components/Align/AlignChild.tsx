import * as React from 'react';
import { IAlignChildProps } from './IAlign';
import { AlignChildWrapper } from './style';

export const AlignChild = (props: IAlignChildProps) => {
	return <AlignChildWrapper {...props}>{props.element}</AlignChildWrapper>;
};
