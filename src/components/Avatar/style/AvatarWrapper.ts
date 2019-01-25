import styled from 'styled-components';
import { backgroundImage, dimensions, borderRadius, backgroundColor } from '../../../styles/classList';
import { themeBackgroundColor, themeBlockSize } from '../../../styles/sharedTheme';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';

export const AvatarWrapper = styled.div`
	overflow: hidden;
	position: relative;
	padding: 3px;
	display: inline-flex;
	${themeBlockSize};
	${themeBackgroundColor};
	${(props) => (!props.src ? backgroundImage(props.src) : null)};
	${(props) => (props.circle ? borderRadius('100%') : null)};
	${(props) => (props.borderRadius ? borderRadius(props.borderRadius) : null)};
	${(props) => (props.checked ? backgroundColor(defaultPropsTheme.primaryBackgroundColor) : null)};
	${(props) => (props.simple ? `background-color:transparent` : null)};
	${(props) => (props.simple ? `border-color:transparent` : null)};
`;

AvatarWrapper.defaultProps = {
	size: 'default',
	kind: 'default',
	theme: defaultPropsTheme
};
