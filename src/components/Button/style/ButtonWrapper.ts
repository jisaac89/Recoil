import styled from 'styled-components';
import { flexCenter, dblock, dinblock } from '../../../styles/classList';
import { defaultTheme } from '../../../styles/themes/defaultTheme';
import { themeBackgroundColor, themeBorderColor } from '../../../styles/sharedTheme';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';

export const ButtonWrapper = styled.button`
	position: relative;
	padding: 6px 10px;
	height: 30px;
	border-width: 1px;

	${flexCenter};
	${(props) => (props.block ? dblock : dinblock)};
	alignSelf: ${(props) => (props.block ? 'stretch' : 'flex-start')};

	overflow: ${(props) => (props.coverflow ? 'vibile' : 'hidden')};
	overflow: ${(props) => (props.scroll ? 'auto' : 'hidden')};
	overflow-x: ${(props) => (props.scrollX ? 'auto' : 'hidden')};
	overflow-y: ${(props) => (props.scrollY ? 'auto' : 'hidden')};

	${themeBackgroundColor};
	${themeBorderColor};
`;

ButtonWrapper.defaultProps = {
	kind: 'default',
	theme: defaultPropsTheme
};
