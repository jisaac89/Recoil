import { RecoilTheme, IRecoilNew } from '../..';

export interface IButtonProps extends IRecoilNew {
	block?: boolean;
	right?: boolean;
	left?: boolean;
	required?: boolean;
	id?: string;

	checkedTheme?: RecoilTheme;
	checkedAmount?: number;

	onPress?: (event: React.MouseEvent<any>) => void;
	onClick?: (event: React.MouseEvent<any>) => void;
}
