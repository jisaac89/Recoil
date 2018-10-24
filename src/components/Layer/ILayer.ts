import { IRecoil } from '../../index';

export interface ILayerProps extends IRecoil {
	onPress?: () => void;
	overflow?: boolean;
	dimensions?: [string, string, number];
	scroll?: boolean;
	scrollX?: boolean;
	scrollY?: boolean;
	flexCenter?: boolean;
	addStyleClass?: any[];
	fill?: boolean;
	// TODO REMOVE
	onClick?: any;
}
