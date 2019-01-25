import { IRecoilNew, RecoilTheme } from '../../..';

export interface IGroupButtonProps extends IRecoilNew {
	checkedDirection?: 'left' | 'right' | 'center';
	checkedTheme?: RecoilTheme;
	checkedAmount?: number;
	onClick?: (event: React.MouseEvent<HTMLElement>) => Event;
}
