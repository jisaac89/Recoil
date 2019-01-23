import { RecoilTheme, IRecoilNew } from '../..';

export interface IButtonProps extends IRecoilNew {
	block?: boolean;
	right?: boolean;
	left?: boolean;
	required?: boolean;
	id?: string;
	checkedTheme?: RecoilTheme;
	checkedAmount?: number;
	onClick?: (event: React.MouseEvent<HTMLElement>) => Event;
}