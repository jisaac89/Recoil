import { IRecoil } from '../../index';

export interface ILayerProps extends IRecoil {
	overflow?: boolean;
	dimensions?: [string, string, number];
	scroll?: boolean;
	scrollX?: boolean;
	scrollY?: boolean;
	flexCenter?: boolean;
	classList?: any[];
	fill?: boolean | string;
	style?: object;
	border?: boolean | string;
	// TODO REMOVE
	onClick?: any;
	// TODO
	scrollIf?: boolean;
	scrollToId?: string;
}
