import * as React from 'react';
import { LayerWrapper, TouchableWrapper } from './style';
import { Selectable } from '../Selectable/Selectable';
import { ILayerProps } from './ILayer';

export const Layer = (props: ILayerProps) => {
	return (
		<LayerWrapper {...props}>
			<TouchableWrapper {...props} onPress={props.onPress} disabled={!props.onPress}>
				{props.children}
			</TouchableWrapper>
			<Selectable checked={props.checked} />
		</LayerWrapper>
	);
};

export default Layer;
