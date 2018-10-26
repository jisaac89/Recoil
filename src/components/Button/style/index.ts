import styled from 'styled-components/native';
import { flexCenter, w } from '../../../styles/classList';

export const TouchableWrapper = styled.TouchableOpacity`
	background: ${(props) => (false && props.theme.main.defaultBackground ? 'red' : '#e7e7e7')};
	border: 1px solid ${(props) => (false && props.theme.main.defaultBorder ? 'red' : '#e7e7e7')};
	padding: 6px 10px;
	backgroundColor: #efefef;
	height: 30px;
	${flexCenter};
	${(props) => (props.block ? 'flex: 1' : null)};
	${(props) => (props.coverflow ? 'overflow: vibile' : 'overflow: hidden')};
	${(props) => (props.scroll ? 'overflow: auto' : 'overflow: hidden')};
	${(props) => (props.scrollX ? 'overflow-x: auto' : 'overflow-x: hidden')};
	${(props) => (props.scrollY ? 'overflow-y: auto' : 'overflow-y: hidden')};
`;

export const ButtonTitle = styled.Text`color: rgba(0, 0, 0, .87);`;
