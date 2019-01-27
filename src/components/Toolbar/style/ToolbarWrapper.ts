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
import { IToolbarProps } from '../IToolbar';

export const ToolbarWrapper = styled.div<IToolbarProps>`
	position: relative;
	border-width: 1px;
	display: inline-flex;
	flex-direction: row;
	alignSelf: ${(props) => (props.block ? 'stretch' : 'flex-start')};
	${themeBorderColor};
	${(props) => (props.block ? `width:100%` : null)};
	${(props) => (props.simple ? `border-color:transparent` : null)};
	${flexFloat};
`;

ToolbarWrapper.defaultProps = {
	size: 'default',
	kind: 'default',
	theme: defaultPropsTheme
};
