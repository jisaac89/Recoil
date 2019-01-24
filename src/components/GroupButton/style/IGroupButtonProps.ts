import { IRecoilNew, RecoilTheme } from '../../..';

export interface IGroupButtonProps extends IRecoilNew {
	checkedTheme?: RecoilTheme;
	checkedAmount?: number;
	onClick?: (event: React.MouseEvent<HTMLElement>) => Event;
}
