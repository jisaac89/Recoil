import styled from 'styled-components';
import { flexCenter, dblock, dinblock } from '../../../styles/classList';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';
import { flexFloat } from '../../../styles/sharedTheme';

export const GroupButtonWrapper = styled.div`
	display: inline-flex;
	position: relative;
	${(props) => (props.textCenter ? `text-align:center` : null)};

	${flexFloat};

	:hover {
		cursor: pointer;
	}
`;

GroupButtonWrapper.defaultProps = {
	size: 'default',
	kind: 'default',
	theme: defaultPropsTheme
};
