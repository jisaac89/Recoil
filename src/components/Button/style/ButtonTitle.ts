import styled from 'styled-components';
import { css } from 'styled-components';
import { defaultTheme } from '../../../styles/themes/defaultTheme';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';
import { IButtonProps } from '../Button';

export const ButtonTitle = styled.p`
	${(props: IButtonProps) => props.kind === 'default' && css`color: ${props.theme.defaultFontColor};`};
	${(props: IButtonProps) => props.kind === 'primary' && css`color: ${props.theme.primaryFontColor};`};
`;

ButtonTitle.defaultProps = {
	kind: 'default',
	theme: defaultPropsTheme
};
