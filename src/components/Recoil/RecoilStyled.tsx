import { styled } from 'styled-components';

const RecoilStyled = styled.div`
	height: 100%;
	width: 100%;
	flex: 1 1 auto;
	-webkit-flex: 1 1 auto;

	${(props) => (props.coverflow ? 'overflow: vibile' : 'overflow: hidden')};
	${(props) => (props.scroll ? 'overflow: auto' : 'overflow: hidden')};
	${(props) => (props.scrollX ? 'overflow-x: auto' : 'overflow-x: hidden')};
	${(props) => (props.scrollY ? 'overflow-y: auto' : 'overflow-y: hidden')};
`;

export default RecoilStyled;
