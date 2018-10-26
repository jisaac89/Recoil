import { IRecoil } from '../../index';

export interface ILayerProps extends IRecoil {
	onPress?: any;
	overflow?: boolean;
	dimensions?: [string, string, number];
	scroll?: boolean;
	scrollX?: boolean;
	scrollY?: boolean;
	flexCenter?: boolean;
	classList?: any[];
	fill?: boolean;
	style?: object;
	// TODO REMOVE
	onClick?: any;
}
