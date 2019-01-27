import styled from 'styled-components';
import { w, ps, ptb, fill, flexDirection } from '../../../styles/classList';
import { IAlignProps, IAlignChildProps } from '../IAlign';

export const AlignWrapper = styled.div<IAlignProps>`
	display: flex;
	${(props) => (props.fill ? fill : null)};
	${(props) => (props.vertical ? flexDirection('column !important') : null)};
	${(props) => (!props.vertical ? flexDirection('row') : null)};
	${(props) => (props.textCenter ? `text-align:center` : null)};
`;

export const AlignChildWrapper = styled.div<IAlignChildProps>`
	flex: 1;
	${fill};
	${(props) => (!props.vertical ? w(props.width) : null)};
	${(props) => (props.vertical ? w(props.width) : null)};
	${(props) => (props.vertical ? ps(0) : null)};
	${(props) => (props.horizontal ? ptb(0) : null)};
	${(props) => (props.vertical ? w(props.width) : null)};
`;
