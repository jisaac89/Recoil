import { IRecoilNew } from '../..';

export interface ICheckboxProps extends IRecoilNew {
	onChange: (value: boolean, event?: React.MouseEvent<MouseEvent>) => void;
	checked: boolean;
	icon?: string;
	title?: string;
	loading?: boolean;
	circle?: boolean;
	radius?: string;
}
