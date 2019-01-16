import styled from 'styled-components';

export const SelectableWrapper = styled.div`
	${(props) => (props.checked ? 'width:100%' : 'width:0%')};
	background: #0099fe;
	height: 1px;
	bottom: 0px;
	right: 0;
	left: 0;
	z-index: 2;
	position: absolute;
`;
