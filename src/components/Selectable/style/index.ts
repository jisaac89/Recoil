import styled from 'styled-components/native';

export const SelectableWrapper = styled.View`
	${(props) => (props.checked ? 'width:100%' : 'width:0%')};
	backgroundColor: #0099fe;
	height: 1px;
	bottom: 0px;
	z-index: 2;
	position: absolute;
`;
