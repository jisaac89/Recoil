import * as React from 'react';
import styled from 'styled-components/native';
import { ILayerProps } from './ILayer';

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
} from '../../styles/sharedStyleObjects';

import { Selectable } from '../Selectable/Selectable';

export const Layer = (props: ILayerProps) => {
	return (
		<LayerWrapper {...props}>
			<TouchableWrapper {...props} onPress={props.onPress} disabled={!props.onPress}>
				{props.children}
			</TouchableWrapper>
			<Selectable checked={props.checked} />
		</LayerWrapper>
	);
};

export default Layer;

const LayerWrapper = styled.View`
	position: relative;
	${(props) => (props.flex ? flex : null)};
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

const TouchableWrapper = styled.TouchableOpacity`
	position: relative;
	${(props) => (props.flex ? flex : null)};
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
