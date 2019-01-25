import styled from 'styled-components';
import { css } from 'styled-components';
import { defaultTheme } from '../../../styles/themes/defaultTheme';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';

export const ButtonTitle = styled.p`
	${(props) => props.kind === 'default' && css`color: ${props.theme.defaultFontColor};`};
	${(props) => props.kind === 'primary' && css`color: ${props.theme.primaryFontColor};`};
`;

ButtonTitle.defaultProps = {
	kind: 'default',
	theme: defaultPropsTheme
};
