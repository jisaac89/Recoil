import styled from 'styled-components/native';
import { flexDirection, p, dimensions, fill } from '../../../styles/classList';

export const CheckboxWrapper = styled.View`${flexDirection('row')};`;

export const TouchableWrapper = styled.TouchableOpacity`
	${fill};
	${flexDirection('row')};
`;

export const CheckboxCircle = styled.TouchableOpacity`
	border-radius: 50%;
	background: ${(props) => (props.checked ? '#09f' : '#efefef')};
	${p('6px 10px')};
	${dimensions('30px', '30px', 1)};
`;

export const CheckboxTitle = styled.Text`
	position: relative;
	display: block;
	${p('5px 10px')};
`;
