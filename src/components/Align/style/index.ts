import styled from 'styled-components/native';
import { w, ps, ptb, fill, flexDirection } from '../../../styles/classList';

export const AlignWrapper = styled.View`
	${(props) => (props.fill ? fill : null)};
	${(props) => (props.vertical ? flexDirection('column') : null)};
	${(props) => (!props.vertical ? flexDirection('row') : null)};
`;

export const AlignChildWrapper = styled.View`
	flex: 1;
	${fill};
	${(props) => (!props.vertical ? w(props.width) : null)};
	${(props) => (props.vertical ? w(props.width) : null)};
	${(props) => (props.vertical ? ps(0) : null)};
	${(props) => (props.horizontal ? ptb(0) : null)};
	${(props) => (props.vertical ? w(props.width) : null)};
`;
