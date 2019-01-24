import styled from 'styled-components';
import { flexDirection, p, dimensions, fill } from '../../../styles/classList';

export const CheckboxWrapper = styled.div`
	${flexDirection('row')};
	cursor:pointer;
	position: relative;
	display: inline-block;
	display: inline-flex;
`;

export const TouchableWrapper = styled.div`
	display: flex;
	${flexDirection('row')};
`;
