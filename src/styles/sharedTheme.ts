import { css } from 'styled-components';
import { dimensions } from './classList';
import { GroupButtonWrapper } from '../components/GroupButton/style/GroupButtonWrapper';

export const themeBackgroundColor = css`
	${(props) => props.kind === 'default' && css`background-color: ${props.theme.defaultBackgroundColor};`};
	${(props) => props.kind === 'primary' && css`background-color: ${props.theme.primaryBackgroundColor};`};

	:hover {
		${(props) => props.kind === 'default' && css`background-color: ${props.theme.defaultBackgroundColorHover};`};
		${(props) => props.kind === 'primary' && css`background-color: ${props.theme.primaryBackgroundColorHover};`};
	}

	${GroupButtonWrapper}:hover & {
		${(props) => props.kind === 'default' && css`background-color: ${props.theme.defaultBackgroundColorHover};`};
		${(props) => props.kind === 'primary' && css`background-color: ${props.theme.primaryBackgroundColorHover};`};
	}
`;

export const themeBorderColor = css`
	${(props) => props.kind === 'default' && css`border-color: ${props.theme.defaultBorderColor};`};
	${(props) => props.kind === 'primary' && css`border-color: ${props.theme.primaryBorderColor};`};
`;

export const checkedStateBackgroundColor = css`
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

export const checkedStateBackgroundColorHover = css`
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
`;

export const themeCheckedStateBackgroundColor = css`
	${checkedStateBackgroundColor};

	:hover {
		${checkedStateBackgroundColorHover};
	}
`;

export const themeCheckedStateBackgroundColorHover = css`${checkedStateBackgroundColorHover};`;

export const themeBlockSize = css`
	${(props) => props.size === 'default' && css`${dimensions('32px', '32px', 1)};`};
	${(props) => props.size === 'small' && css`${dimensions('26px', '26px', 1)};`};
	${(props) => props.size === 'large' && css`${dimensions('40px', '40px', 1)};`};
	${(props) => props.size === 'xlarge' && css`${dimensions('62px', '62px', 1)};`};
`;

export const buttonSizes = css`
	${(props) => props.size === 'default' && css`${dimensions(props.block ? '100%' : 'auto', '32px', 1)};`};
	${(props) => props.size === 'small' && css`${dimensions(props.block ? '100%' : 'auto', '26px', 1)};`};
	${(props) => props.size === 'large' && css`${dimensions(props.block ? '100%' : 'auto', '40px', 1)};`};
	${(props) => props.size === 'xlarge' && css`${dimensions(props.block ? '100%' : 'auto', '62px', 1)};`};
`;
export const buttonPadding = css`
	${(props) => props.size === 'default' && css`padding: 6px 10px;`};
	${(props) => props.size === 'small' && css`padding: 3px 10px;`};
	${(props) => props.size === 'large' && css`padding: 10px 2pc;`};
	${(props) => props.size === 'xlarge' && css`padding: 17.5px 2pc;`};
`;

export const flexFloat = css`
	${(props) => (props.right ? `margin-left:auto` : null)};
	${(props) => (props.left ? `margin-right:auto` : null)};
`;
