import { css } from 'styled-components';
import { dimensions } from './classList';

export const themeBackgroundColor = css`
	${(props) => props.kind === 'default' && css`background-color: ${props.theme.defaultBackgroundColor};`};
	${(props) => props.kind === 'primary' && css`background-color: ${props.theme.primaryBackgroundColor};`};

	:hover {
		${(props) => props.kind === 'default' && css`background-color: ${props.theme.defaultBackgroundColorHover};`};
		${(props) => props.kind === 'primary' && css`background-color: ${props.theme.primaryBackgroundColorHover};`};
	}
`;

export const themeBorderColor = css`
	${(props) => props.kind === 'default' && css`border-color: ${props.theme.defaultBorderColor};`};
	${(props) => props.kind === 'primary' && css`border-color: ${props.theme.primaryBorderColor};`};
`;

export const themeCheckedStateBackgroundColor = css`
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

	:hover {
		${(props) =>
		props.kind === 'default' &&
		css`
				background-color: ${props.checked
				? props.theme.primaryBackgroundColorHover
				: props.theme.defaultBackgroundColorHover};
			`};
		${(props) =>
		props.kind === 'primary' &&
		css`
				background-color: ${props.checked
				? props.theme.secondaryBackgroundColorHover
				: props.theme.primaryBackgroundColorHover};
			`};
	}
`;

export const themeBlockSize = css`
	${(props) => props.size === 'default' && css`${dimensions('30px', '30px', 1)};`};
	${(props) => props.size === 'small' && css`${dimensions('20px', '20px', 1)};`};
	${(props) => props.size === 'large' && css`${dimensions('45px', '45px', 1)};`};
	${(props) => props.size === 'xlarge' && css`${dimensions('100px', '100px', 1)};`};
`;