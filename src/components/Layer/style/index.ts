import styled from 'styled-components/native';
import {
	flexCenter,
	overflow,
	scroll,
	scrollX,
	scrollY,
	fill,
	dimensions,
	flex,
	flexDirection
} from '../../../styles/classList';

export const LayerWrapper = styled.View`
	display: block;
	position: relative;
	${(props) => (props.fill ? fill : null)};
	${(props) => (props.flex === 'row' ? flexDirection('row') : null)};
	${(props) => (props.dimensions ? dimensions(props.dimensions[0], props.dimensions[1], props.dimensions[2]) : null)};
`;

export const TouchableWrapper = styled.TouchableOpacity`
	position: relative;
	${(props) => (props.flex !== 'row' ? flex : null)};
	${(props) => (props.flex === 'row' ? flexDirection('row') : null)};
	${(props) => (props.dimensions ? dimensions(props.dimensions[0], props.dimensions[1], props.dimensions[2]) : null)};
	${(props) => (props.fill ? fill : null)};
	${(props) => (props.overflow ? overflow : null)};
	${(props) => (props.scroll ? scroll : null)};
	${(props) => (props.scrollX ? scrollX : null)};
	${(props) => (props.scrollY ? scrollY : null)};
	${(props) => (props.flexCenter ? flexCenter : null)};
	${(props) => (props.classList ? props.classList : null)};
`;
