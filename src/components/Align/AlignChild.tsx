import * as React from 'react';
import { IAlignChildProps } from './IAlign';
import styled from 'styled-components/native';
import { w, ps, ptb, fill } from '../../styles/sharedStyleObjects';

export const AlignChild = (props: IAlignChildProps) => {
	return <AlignChildWrapper {...props}>{props.element}</AlignChildWrapper>;
};

const AlignChildWrapper = styled.View`
	flex: 1;
	${fill};
	${(props) => (!props.vertical ? w(props.width) : null)};
	${(props) => (props.vertical ? w(props.width) : null)};
	${(props) => (props.vertical ? ps(0) : null)};
	${(props) => (props.horizontal ? ptb(0) : null)};
	${(props) => (props.vertical ? w(props.width) : null)};
`;
