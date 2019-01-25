import { RecoilTheme } from '../..';

export interface ISelectableProps {
	checkedDirection?: 'left' | 'right' | 'center';
	checked?: boolean;
	checkedAmount?: number;
	kind?: RecoilTheme;
}
