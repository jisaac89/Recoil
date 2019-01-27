import { IRecoilNew } from '../..';

export interface ICheckboxProps extends IRecoilNew {
	onChange: any;
	checked: boolean;
	icon?: string;
	title?: string;
	loading?: boolean;
	circle?: boolean;
	radius?: string;
	borderRadius?: string;
}
