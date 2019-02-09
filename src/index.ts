import { IRecoilTheme } from './styles/IRecoilTheme';

export type RecoilTheme =
	| 'primary'
	| 'success'
	| 'error'
	| 'bronze'
	| 'silver'
	| 'gold'
	| 'default'
	| 'light'
	| 'night'
	| 'dark';

export type RecoilSize = 'small' | 'large' | 'xlarge' | 'xxlarge' | 'default';
export type RecoilFlex =   'row' | 'row-reverse';
export type RecoilElement = React.ReactNode;

export interface IRecoilNew {
	theme?: IRecoilTheme
	size?: RecoilSize;
	kind?: RecoilTheme;
	className?: string;
	flex?: RecoilFlex;
	fill?: boolean | string;
	disabled?: boolean;
	checked?: boolean;
	loading?: boolean;
	simple?: boolean | string;
	outline?: boolean;
	tabIndex?: number;
	id?: string;
	children?: RecoilElement;
}

export interface IRecoil {
	size?: RecoilSize;
	theme?: RecoilTheme;
	className?: string;
	flex?: RecoilFlex;
	fill?: boolean | string;
	disabled?: boolean;
	checked?: boolean;
	loading?: boolean;
	simple?: boolean;
	outline?: boolean;
	tabIndex?: number;
	id?: string;
	children?: RecoilElement;
}

export { default as Recoil } from './components/Recoil/Recoil';
export {  Avatar } from './components/Avatar/Avatar';
export { default as Align } from './components/Align/Align';
export { default as Button, IButtonProps } from './components/Button/Button';
export { Checkbox } from './components/Checkbox/Checkbox';
export { default as Open } from './components/Open/Open';
export { default as Emerge } from './components/Emerge/Emerge';
export { default as Layer } from './components/Layer/Layer';
export { Selectable } from './components/Selectable/Selectable';
export { default as Shrink } from './components/Shrink/Shrink';
export { default as Toolbar } from './components/Toolbar/Toolbar';
export { default as Wizard } from './components/Wizard/Wizard';
export { default as SlideIn } from './components/SlideIn/SlideIn';
export { default as Portal } from './components/Portal/Portal';
// export { default as Dropdown } from './components/Dropdown/Dropdown';
// export { default as Grid } from './components/Grid/Grid';
// export { default as Fixed } from './components/Fixed/Fixed';
// export { default as Input, IInputProps, IInputState } from './components/Input/Input';
// export { default as Modal } from './components/Modal/Modal';
// export { default as Toggle, IToggleProps } from './components/Toggle/Toggle';
// export { default as Loading } from './components/Loading/Loading';
// export { default as Notifications } from './components/Notifications/Notifications';
// export { default as Tree, ITreeItem } from './components/Tree/Tree';
// export { default as Stepper } from './components/Stepper/Stepper';
// export { default as Transform } from './components/Transform/Transform';
// export { default as Table, ITableProps, IColumn } from './components/Table/Table';
// export { default as TimePicker } from './components/TimePicker/TimePicker';
