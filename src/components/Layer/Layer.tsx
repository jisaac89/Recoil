import * as React from 'react';
import { LayerWrapper, TouchableWrapper } from './style';
import { Selectable } from '../Selectable/Selectable';
import { ILayerProps } from './ILayer';

export const Layer = (props: ILayerProps) => {
	return (
		<LayerWrapper {...props} fill={props.fill ? props.fill : null}>
			<TouchableWrapper
				{...props}
				fill={props.fill ? props.fill : null}
				onClick={props.onClick}
				disabled={!props.onClick}
			>
				<React.Fragment>{props.children}</React.Fragment>
			</TouchableWrapper>
			<Selectable checked={props.checked} />
		</LayerWrapper>
	);
};

export default Layer;
