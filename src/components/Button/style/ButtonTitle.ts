import styled from 'styled-components';
import { css } from 'styled-components';
import { defaultTheme } from '../../../styles/themes/defaultTheme';

export const ButtonTitle = styled.div`
	${(props) => props.kind === 'default' && css`color: ${props.theme.defaultFontColor};`};
	${(props) => props.kind === 'primary' && css`color: ${props.theme.primaryFontColor};`};
`;

ButtonTitle.defaultProps = {
	theme: {
		defaultFontColor: defaultTheme.defaultFontColor
	}
};
