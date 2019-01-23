import * as React from 'react';
import { IImageProps } from './IImageProps';
import { ImageWrapper } from './style/ImageWrapper';

export const Image = (props: IImageProps) => {
    return (
        <ImageWrapper src={props.source.uri}
            {...props} />
    )
}