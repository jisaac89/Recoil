import { RecoilTheme, IRecoilNew } from '../..';
import { IRecoilTheme } from '../../styles/IRecoilTheme';

export interface IButtonProps extends IRecoilNew {
	block?: boolean;
	right?: boolean;
	left?: boolean;
	required?: boolean;
	id?: string;
	checkedTheme?: RecoilTheme;
	checkedAmount?: number;
	checkedDirection?: string;
	onClick?: any;
	//
	icon?: string;
	iconLocation?: string;
	theme?: IRecoilTheme;
}
