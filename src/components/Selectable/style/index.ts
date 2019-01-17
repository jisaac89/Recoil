import styled from 'styled-components';
import { animated } from 'react-spring/hooks';

export const SelectableWrapper = styled(animated.div)`
	width: ${(props) => (props.value ? props.value : '0')};
	background: #0099fe;
	height: 2px;
	bottom: 0px;
	right: 0;
	left: 0;
	z-index: 2;
	position: absolute;
	margin:auto;
`;
