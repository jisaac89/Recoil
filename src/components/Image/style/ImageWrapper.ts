import styled, { css } from 'styled-components';
import { flexDirection, p, dimensions, fill, borderRadius } from '../../../styles/classList';
import { defaultPropsTheme } from '../../../styles/defaultPropsTheme';
import { IImageProps } from '../IImageProps';

export const ImageWrapper = styled.img<IImageProps>`
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
