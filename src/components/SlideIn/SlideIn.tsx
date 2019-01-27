import * as React from 'react';
import styled from 'styled-components';
import { overflow, fill, flex, flexDirection, dimensions } from '../../styles/classList';
import { ISlideInProps } from './ISlideInProps';

export const SlideIn = (props: ISlideInProps) => {
	return (
		<SlideInWrapper
			{...props}
		>
			{props.children}
		</SlideInWrapper>
	);
};

const SlideInWrapper = styled.div<ISlideInProps>`
	${(props) => (props.flex ? flex : null)};
	${(props) => (props.flex === 'row' ? flexDirection('row') : null)};
	${(props) => (props.fill ? fill : null)};
	${(props) => (props.overflow ? overflow : 'overflow: hidden')};
	${(props) => (props.dimensions ? dimensions(props.dimensions[0], props.dimensions[1], props.dimensions[2]) : null)};
`;

export default SlideIn;
