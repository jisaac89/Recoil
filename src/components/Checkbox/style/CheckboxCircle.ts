import styled from 'styled-components';
import { p, borderRadius } from '../../../styles/classList';
import {
	themeBackgroundColor,
	themeBorderColor,
	themeCheckedStateBackgroundColor,
	themeBlockSize,
	themeCheckedStateBackgroundColorHover
} from '../../../styles/sharedTheme';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';
import { CheckboxWrapper } from './CheckboxWrapper';

export const CheckboxCircle = styled.div`
	cursor: pointer;
	border-width: 1px;
	border-style: solid;

	${p('6px 10px')};
	${(props) => (props.circle ? borderRadius('100%') : null)};
	${(props) => (props.borderRadius ? borderRadius(props.borderRadius) : null)};

	${themeBlockSize};
	${themeBackgroundColor};
	${themeBorderColor};
	${themeCheckedStateBackgroundColor};

	${CheckboxWrapper}:hover & {
		${themeCheckedStateBackgroundColorHover};
	}
`;

CheckboxCircle.defaultProps = {
	size: 'default',
	kind: 'default',
	theme: defaultPropsTheme
};
