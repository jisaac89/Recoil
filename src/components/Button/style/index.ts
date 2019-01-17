import styled from 'styled-components';
import { css } from 'styled-components';
import { flexCenter, dblock, dinblock } from '../../../styles/classList';
import { defaultTheme, nightModeTheme } from '../../../styles/themes';

export const ButtonWrapper = styled.button`
	position: relative;
	padding: 6px 10px;
	height: 30px;
	border-width: 1px;
	:hover {
		background: ${(props) => props.theme.default_buttonBackgroundColor_hover};
	}
	${flexCenter};
	${(props) => (props.block ? dblock : dinblock)};
	alignSelf: ${(props) => (props.block ? 'stretch' : 'flex-start')};

	border-color: ${(props) => props.theme.default_buttonBorderColor};
	overflow: ${(props) => (props.coverflow ? 'vibile' : 'hidden')};
	overflow: ${(props) => (props.scroll ? 'auto' : 'hidden')};
	overflow-x: ${(props) => (props.scrollX ? 'auto' : 'hidden')};
	overflow-y: ${(props) => (props.scrollY ? 'auto' : 'hidden')};

	${(props) => props.kind === 'default' && css`background-color: ${props.theme.default_buttonBackgroundColor};`};
	${(props) => props.kind === 'primary' && css`background-color: ${props.theme.primary_buttonBackgroundColor};`};
`;

export const ButtonTitle = styled.div`color: ${(props) => props.theme.buttonFontColor};`;

ButtonWrapper.defaultProps = {
	kind: 'default',
	theme: {
		default_buttonBackgroundColor: defaultTheme.default_buttonBackgroundColor,
		default_buttonBackgroundColor_hover: defaultTheme.default_buttonBackgroundColor_hover,
		default_buttonBorderColor: defaultTheme.default_buttonBorderColor,
		primary_buttonBackgroundColor: defaultTheme.primary_buttonBackgroundColor
	}
};

ButtonTitle.defaultProps = {
	theme: {
		default_buttonFontColor: nightModeTheme.default_buttonFontColor
	}
};
