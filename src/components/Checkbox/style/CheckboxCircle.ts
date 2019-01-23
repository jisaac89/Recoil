import styled, { css } from 'styled-components';
import { flexDirection, p, dimensions, fill } from '../../../styles/classList';
import { defaultTheme } from '../../../styles/themes/defaultTheme';
import { themeBackgroundColor, themeBorderColor, themeCheckedStateBackgroundColor } from '../../../styles/sharedTheme';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';

export const CheckboxCircle = styled.div`
	cursor: pointer;
	border-radius: 50%;
	border-width: 1px;
	border-style: solid;

	${p('6px 10px')};
	${dimensions('30px', '30px', 1)};

	${themeBackgroundColor};
	${themeBorderColor};
	${themeCheckedStateBackgroundColor};
`;

CheckboxCircle.defaultProps = {
	kind: 'default',
	theme: defaultPropsTheme
};
