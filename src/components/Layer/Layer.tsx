import * as React from 'react';
import * as classNames from 'classnames';

import { OOCSS } from '../OOCSS/OOCSS';

import { IRecoil } from '../../index';

import styled, { ThemeProvider } from 'styled-components/native';

import { View } from 'react-native-web';
import { flexCenter, overflow, scroll, scrollX, scrollY, fill } from '../../styles/sharedStyleObjects';

export interface ILayerProps extends IRecoil {
	border?: boolean;
	overflow?: boolean;
	left?: boolean;
	right?: boolean;
	scrollY?: boolean;
	scrollX?: boolean;
	style?: Object;
	onPress?: () => void;
	key?: string | number;
	parent?: boolean;
	child?: boolean;
	dimensions?: [string, string, number];
	nightmode?: boolean;
	scroll?: boolean;
	offset?: number;
	shadow?: boolean;
	flexCenter?: boolean;
	onScroll?: any;
	id?: string;
	borderRadius?: boolean;
	dropShadow?: boolean;
	length?: number;
	// TODO REMOVE
	onClick?: any;
}

class Layer extends React.Component<ILayerProps, any> {
	public refs: {
		[key: string]: Element;
		Layer: HTMLElement;
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

		let dimensionStyle;

		if (props.dimensions) {
			dimensionStyle = {
				width: props.dimensions[0],
				height: props.dimensions[1],
				zIndex: props.dimensions[2]
			};
		}

		return <LayerWrapper {...props}>{props.children}</LayerWrapper>;
	}
}

export default Layer;

const LayerWrapper = styled.View`
	${(props) => (props.fill ? fill : null)};
	${(props) => (props.coverflow ? overflow : 'overflow: hidden')};
	${(props) => (props.scroll ? scroll : 'overflow: hidden')};
	${(props) => (props.scrollX ? scrollX : 'overflow-x: hidden')};
	${(props) => (props.scrollY ? scrollY : 'overflow-y: hidden')};
	${(props) => (props.flexCenter ? flexCenter : null)};
`;
