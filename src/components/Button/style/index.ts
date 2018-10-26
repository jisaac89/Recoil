import styled from 'styled-components/native';

export const ButtonWrapper = styled.View`
	background: ${(props) => (false && props.theme.main.defaultBackground ? 'red' : 'yellow')};
	border: 1px solid ${(props) => (false && props.theme.main.defaultBorder ? 'red' : 'yellow')};
	padding: 6px 10px;
`;

export const TouchableWrapper = styled.TouchableOpacity`
	height: 100%;
	width: 100%;
	background: yellow;
	display: flex;
	${(props) => (props.coverflow ? 'overflow: vibile' : 'overflow: hidden')};
	${(props) => (props.scroll ? 'overflow: auto' : 'overflow: hidden')};
	${(props) => (props.scrollX ? 'overflow-x: auto' : 'overflow-x: hidden')};
	${(props) => (props.scrollY ? 'overflow-y: auto' : 'overflow-y: hidden')};
`;

export const ButtonTitle = styled.Text`color: palevioletred;`;
