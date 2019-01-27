import styled from 'styled-components';
import { flexCenter, dblock, dinblock } from '../../../styles/classList';
import {
	themeBackgroundColor,
	themeBorderColor,
	buttonSizes,
	buttonPadding,
	flexFloat
} from '../../../styles/sharedTheme';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';
import { IButtonProps } from '../Button';

export const ButtonWrapper = styled.button<IButtonProps>`
	position: relative;
	border-width: 1px;
	display: inline-flex;
	${(props) => (props.block ? dblock : dinblock)};
	alignSelf: ${(props) => (props.block ? 'stretch' : 'flex-start')};
	${themeBackgroundColor};
	${themeBorderColor};
	${buttonSizes};
	${buttonPadding};
	${(props) => (props.simple ? `background-color:transparent` : null)};
	${(props ) => (props.simple ? `border-color:transparent` : null)};

	${flexFloat};
`;

ButtonWrapper.defaultProps = {
	size: 'default',
	kind: 'default',
	theme: defaultPropsTheme
};
