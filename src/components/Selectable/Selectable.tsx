import * as React from 'react';
import { ISelectableProps } from './ISelectable';
import { SelectableWrapper } from './style';

export const Selectable = (props: ISelectableProps) => {
	return <SelectableWrapper {...props} />;
};
