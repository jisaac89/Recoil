import * as React from 'react';
import { ISelectableProps } from './ISelectable';
import styled from 'styled-components/native';

export const Selectable = (props: ISelectableProps) => {
	return <SelectableWrapper {...props} />;
};

const SelectableWrapper = styled.View`
	${(props) => (props.checked ? 'width:100%' : 'width:0%')};
	background: blue;
	height: 1px;
	bottom: 1px;
	z-index: 2;
`;
