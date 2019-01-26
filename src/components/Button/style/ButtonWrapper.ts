import styled from 'styled-components';
import { flexCenter, dblock, dinblock } from '../../../styles/classList';
import {
	themeBackgroundColor,
	themeBorderColor,
	buttonSizes,
	buttonPadding,
	flexFloat
} from '../../../styles/sharedTheme';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';

export const ButtonWrapper = styled.button`
	position: relative;
	border-width: 1px;
	display: inline-flex;
	${(props) => (props.block ? dblock : dinblock)};
	alignSelf: ${(props) => (props.block ? 'stretch' : 'flex-start')};
	overflow: ${(props) => (props.coverflow ? 'vibile' : 'hidden')};
	overflow: ${(props) => (props.scroll ? 'auto' : 'hidden')};
	overflow-x: ${(props) => (props.scrollX ? 'auto' : 'hidden')};
	overflow-y: ${(props) => (props.scrollY ? 'auto' : 'hidden')};
	${flexCenter};
	${themeBackgroundColor};
	${themeBorderColor};
	${buttonSizes};
	${buttonPadding};
	${(props) => (props.simple ? `background-color:transparent` : null)};
	${(props) => (props.simple ? `border-color:transparent` : null)};

	${flexFloat};
`;

ButtonWrapper.defaultProps = {
	size: 'default',
	kind: 'default',
	theme: defaultPropsTheme
};
