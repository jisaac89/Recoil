import * as React from 'react';
import styled from 'styled-components/native';
import { overflow, fill, flex, flexDirection, dimensions } from '../../styles/sharedStyleObjects';
import { ISlideInProps } from './ISlideInProps';

export const SlideIn = (props: ISlideInProps) => {
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
};

const SlideInWrapper = styled.View`
	${(props) => (props.flex ? flex : null)};
	${(props) => (props.flex === 'row' ? flexDirection('row') : null)};
	${(props) => (props.fill ? fill : null)};
	${(props) => (props.overflow ? overflow : 'overflow: hidden')};
	${(props) => (props.addStyleClass ? props.addStyleClass : null)};
	${(props) => (props.dimensions ? dimensions(props.dimensions[0], props.dimensions[1], props.dimensions[2]) : null)};
`;
