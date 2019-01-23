import styled, { css } from 'styled-components';
import { flexDirection, p, dimensions, fill, borderRadius } from '../../../styles/classList';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';

export const ImageWrapper = styled.img`
	${flexDirection('row')};
	position: relative;
    display: inline-block;
    ${(props) => props.fill && css`width: 100%;`};
    ${(props) => (props.circle ? borderRadius('100%') : null)};
`;

ImageWrapper.defaultProps = {
    kind: 'default',
    theme: defaultPropsTheme
};
