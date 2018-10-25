import * as React from 'react';

import styled from 'styled-components/native';
import { ISlideInProps } from './ISlideInProps';

import { overflow, fill, flex, flexRow, dimensions } from '../../styles/sharedStyleObjects';

export default class SlideIn extends React.Component<ISlideInProps, any> {
	constructor(props: ISlideInProps) {
		super(props);
	}

	render() {
		const self = this;
		const props = self.props;

		return (
			<SlideInWrapper
				style={{
					transform: [
						{
							['translate' + (props.from === 'left' || props.from === 'right' ? 'X' : 'Y')]: props.if
								? 0
								: '100%'
						}
					]
				}}
				{...props}
			>
				{props.children}
			</SlideInWrapper>
		);
	}
}

const SlideInWrapper = styled.View`
	${(props) => (props.flex ? flex : null)};
	${(props) => (props.flex === 'row' ? flexRow : null)};
	${(props) => (props.fill ? fill : null)};
	${(props) => (props.overflow ? overflow : 'overflow: hidden')};
	${(props) => (props.addStyleClass ? props.addStyleClass : null)};
	${(props) => (props.dimensions ? dimensions(props.dimensions[0], props.dimensions[1], props.dimensions[2]) : null)};
`;
