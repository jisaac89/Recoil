import styled from 'styled-components';
import { flexDirection, p, dimensions, fill } from '../../../styles/classList';

export const CheckboxWrapper = styled.div`
	${flexDirection('row')};
	position: relative;
`;

export const TouchableWrapper = styled.div`${flexDirection('row')};`;

export const CheckboxCircle = styled.div`
	border-radius: 50%;
	background: ${(props) => (props.checked ? '#09f' : '#efefef')};
	${p('6px 10px')};
	${dimensions('30px', '30px', 1)};
`;

export const CheckboxTitle = styled.p`
	position: relative;
	display: block;
	${p('5px 10px')};
`;
