import { IRecoilNew } from '../..';

export interface IAvatarProps extends IRecoilNew {
	src?: string;
	circle?: boolean;
	radius?: string;
	simple?: boolean | string;
	right?: boolean;
	left?: boolean;
	borderRadius?: string;
}
