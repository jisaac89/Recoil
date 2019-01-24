import styled from 'styled-components';
import { flexCenter, dblock, dinblock } from '../../../styles/classList';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';

export const GroupButtonWrapper = styled.div`
	position: relative;
	display: inline-flex;
	${(props) => (props.block ? dblock : dinblock)};
	${flexCenter};
`;

GroupButtonWrapper.defaultProps = {
	size: 'default',
	kind: 'default',
	theme: defaultPropsTheme
};
