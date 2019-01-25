import styled from 'styled-components';
import { flexCenter, dblock, dinblock } from '../../../styles/classList';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';

export const GroupButtonWrapper = styled.div`
	display: inline-flex;
	position: relative;
	${(props) => (props.textCenter ? `text-align:center` : null)};

	${(props) => (props.right ? `margin-left:auto` : null)};
	${(props) => (props.left ? `margin-right:auto` : null)};

	:hover {
		cursor: pointer;
	}
`;

GroupButtonWrapper.defaultProps = {
	size: 'default',
	kind: 'default',
	theme: defaultPropsTheme
};
