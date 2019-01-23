import * as React from 'react';
import { ICheckboxProps } from './ICheckbox';
import { CheckboxWrapper, TouchableWrapper } from './style/CheckboxWrapper';
import { CheckboxCircle } from './style/CheckboxCircle';
import { CheckboxTitle } from './style/CheckboxTitle';

export const Checkbox = (props: ICheckboxProps) => {
	return (
		<CheckboxWrapper {...props}>
			<TouchableWrapper style={{ alignSelf: 'flex-start' }}>
				<CheckboxCircle {...props} />
				{props.title ? <CheckboxTitle>{props.title}</CheckboxTitle> : null}
			</TouchableWrapper>
		</CheckboxWrapper>
	);
};
