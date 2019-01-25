import { IRecoilNew, RecoilTheme } from '../../..';

export interface IGroupButtonProps extends IRecoilNew {
	block?: boolean;
	checkedDirection?: 'left' | 'right' | 'center';
	checkedTheme?: RecoilTheme;
	checkedAmount?: number;
	onClick?: (event: React.MouseEvent<HTMLElement>) => Event;
	style?: object;
	textCenter?: boolean;
	right?: boolean;
	left?: boolean;
}
