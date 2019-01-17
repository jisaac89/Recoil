import styled from 'styled-components';
import { css } from 'styled-components';
import { flexCenter, dblock, dinblock } from '../../../styles/classList';
import { defaultTheme } from '../../../styles/themes/defaultTheme';
import { nightModeTheme } from '../../../styles/themes/nightModeTheme';

export const ButtonWrapper = styled.button`
	position: relative;
	padding: 6px 10px;
	height: 30px;
	border-width: 1px;

	${flexCenter};
	${(props) => (props.block ? dblock : dinblock)};
	alignSelf: ${(props) => (props.block ? 'stretch' : 'flex-start')};

	border-color: ${(props) => props.theme.defaultBorderColor};
	overflow: ${(props) => (props.coverflow ? 'vibile' : 'hidden')};
	overflow: ${(props) => (props.scroll ? 'auto' : 'hidden')};
	overflow-x: ${(props) => (props.scrollX ? 'auto' : 'hidden')};
	overflow-y: ${(props) => (props.scrollY ? 'auto' : 'hidden')};

	${(props) => props.kind === 'default' && css`background-color: ${props.theme.defaultBackgroundColor};`};
	${(props) => props.kind === 'primary' && css`background-color: ${props.theme.primaryBackgroundColor};`};

	:hover {
		${(props) => props.kind === 'default' && css`background-color: ${props.theme.defaultBackgroundColorHover};`};
		${(props) => props.kind === 'primary' && css`background-color: ${props.theme.primaryBackgroundColorHover};`};
	}
`;

export const ButtonTitle = styled.div`
	${(props) => props.kind === 'default' && css`color: ${props.theme.defaultFontColor};`};
	${(props) => props.kind === 'primary' && css`color: ${props.theme.primaryFontColor};`};
`;

ButtonWrapper.defaultProps = {
	kind: 'default',
	theme: {
		defaultBackgroundColor: defaultTheme.defaultBackgroundColor,
		defaultBackgroundColorHover: defaultTheme.defaultBackgroundColorHover,
		defaultBorderColor: defaultTheme.defaultBorderColor,
		primaryBackgroundColor: defaultTheme.primaryBackgroundColor,
		primaryBackgroundColorHover: defaultTheme.primaryBackgroundColorHover
	}
};

ButtonTitle.defaultProps = {
	theme: {
		defaultFontColor: defaultTheme.defaultFontColor
	}
};
