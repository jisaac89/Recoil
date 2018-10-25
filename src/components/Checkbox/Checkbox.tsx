import * as React from 'react';
import styled from 'styled-components/native';
import { ICheckboxProps } from './ICheckbox';
import { fill } from '../../styles/sharedStyleObjects';

export const Checkbox = (props: ICheckboxProps) => {
	return (
		<CheckboxWrapper {...props}>
			<TouchableWrapper onPress={props.onChange} />
			{props.title ? <CheckboxTitle>{props.title}</CheckboxTitle> : null}
		</CheckboxWrapper>
	);
};

const CheckboxWrapper = styled.View`
	display: inline-block;
	flexWrap: nowrap;
	border-radius: 50% !important;
	padding: 6px 8px;
	height: 30px;
	width: 30px;
	background: ${(props) => (props.checked ? '#09f' : '#efefef')};
`;
const TouchableWrapper = styled.View`${fill};`;
const CheckboxTitle = styled.Text``;
