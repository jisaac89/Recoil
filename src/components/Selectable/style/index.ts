import styled from 'styled-components';
import { animated } from 'react-spring/hooks';
import { defaultTheme } from '../../../styles/themes/defaultTheme';
import { themeBackgroundColor } from '../../../styles/sharedTheme';

export const SelectableWrapper = styled(animated.div)`
	width: ${(props) => (props.value ? props.value : '0')};
	height: 3px;
	bottom: 0px;
	right: ${(props) => (props.checkeddirection === 'right' || props.checkeddirection === 'center' ? '0' : 'auto')};
	left: ${(props) => (props.checkeddirection === 'left' || props.checkeddirection === 'center' ? '0' : 'auto')};
	z-index: 2;
	position: absolute;
	margin:auto;
	${themeBackgroundColor}
`;

SelectableWrapper.defaultProps = {
	kind: 'primary',
	checkeddirection: defaultTheme.defaultCheckedDirection
};
