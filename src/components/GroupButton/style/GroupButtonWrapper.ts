import styled from 'styled-components';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';
import { flexFloat } from '../../../styles/sharedTheme';
import { IGroupButtonProps } from '../GroupButton';

export const GroupButtonWrapper = styled.div<IGroupButtonProps>`
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
