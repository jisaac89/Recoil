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
	flex
} from '../../styles/sharedStyleObjects';

class Layer extends React.Component<ILayerProps, any> {
	public refs: {
		[key: string]: Element;
		Layer: Element;
	};

	public static defaultProps = {
		overflow: false,
		type: '',
		left: false,
		right: false,
		border: '',
		flexCenter: false
	};

	render() {
		const self = this;
		const props = self.props;

		return (
			<LayerWrapper ref="Layer" {...props}>
				{props.children}
			</LayerWrapper>
		);
	}
}

export default Layer;

const LayerWrapper = styled.View`
	${(props) => (props.flex ? flex : null)};
	${(props) => (props.dimensions ? dimensions(props.dimensions[0], props.dimensions[1], props.dimensions[2]) : null)};
	${(props) => (props.fill ? fill : null)};
	${(props) => (props.overflow ? overflow : 'overflow: hidden')};
	${(props) => (props.scroll ? scroll : 'overflow: hidden')};
	${(props) => (props.scrollX ? scrollX : 'overflow-x: hidden')};
	${(props) => (props.scrollY ? scrollY : 'overflow-y: hidden')};
	${(props) => (props.flexCenter ? flexCenter : null)};
	${(props) => (props.addStyleClass ? props.addStyleClass : null)};
`;
