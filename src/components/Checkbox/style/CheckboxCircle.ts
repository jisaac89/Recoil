import styled, { css } from 'styled-components';
import { flexDirection, p, dimensions, fill } from '../../../styles/classList';
import { defaultTheme } from '../../../styles/themes/defaultTheme';

export const CheckboxCircle = styled.div`
	cursor: pointer;
	border-radius: 50%;

	${p('6px 10px')};
	${dimensions('30px', '30px', 1)};

	${(props) =>
		props.kind === 'default' &&
		css`
			background-color: ${props.checked
				? props.theme.primaryBackgroundColor
				: props.theme.defaultBackgroundColor};
		`};
	${(props) =>
		props.kind === 'primary' &&
		css`
			background-color: ${props.checked
				? props.theme.secondaryBackgroundColor
				: props.theme.primaryBackgroundColor};
		`};
`;

CheckboxCircle.defaultProps = {
	kind: 'default',
	theme: {
		defaultBackgroundColor: defaultTheme.defaultBackgroundColor,
		defaultBackgroundColorHover: defaultTheme.defaultBackgroundColorHover,
		defaultBorderColor: defaultTheme.defaultBorderColor,
		primaryBackgroundColor: defaultTheme.primaryBackgroundColor,
		primaryBackgroundColorHover: defaultTheme.primaryBackgroundColorHover,
		secondaryBackgroundColor: defaultTheme.secondaryBackgroundColor
	}
};
