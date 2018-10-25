export interface IRecoil {
	size?: 'small' | 'large' | 'xlarge' | 'xxlarge' | 'default';
	theme?: 'primary' | 'success' | 'error' | 'bronze' | 'silver' | 'gold' | 'default' | 'light' | 'night' | 'dark';
	className?: string;
	flex?: boolean | 'row' | 'row-reverse';
	fill?: boolean;
	disabled?: boolean;
	checked?: boolean;
	loading?: boolean;
	simple?: boolean;
	outline?: boolean;
	tabIndex?: number;
	id?: string;
	children?: any;
}

export { default as Recoil } from './components/Recoil/Recoil';
export { default as Align } from './components/Align/Align';
export { default as AdvancedLayer } from './components/Layer/AdvancedLayer';
export { default as AdvancedButton } from './components/Button/AdvancedButton';
export { default as Button, IButtonProps, IButtonState } from './components/Button/Button';
export { Checkbox } from './components/Checkbox/Checkbox';
export { default as OldCheckbox } from './components/Checkbox/OldCheckbox';
export { default as Open } from './components/Open/Open';
export {
	default as DatePicker,
	IDatePickerProps,
	Calendar,
	ICalendarProps,
	ICalendarState
} from './components/DatePicker/DatePicker';
export { default as Dropdown } from './components/Dropdown/Dropdown';
export { default as Emerge } from './components/Emerge/Emerge';
export { default as Fixed } from './components/Fixed/Fixed';
export { default as Grid } from './components/Grid/Grid';
export { default as Input, IInputProps, IInputState } from './components/Input/Input';
export { default as Layer } from './components/Layer/Layer';
export { default as Loading } from './components/Loading/Loading';
export { default as Modal } from './components/Modal/Modal';
export { default as Notifications } from './components/Notifications/Notifications';
export { default as Selectable } from './components/Selectable/Selectable';
export { default as Shrink } from './components/Shrink/Shrink';
export { default as Toggle, IToggleProps } from './components/Toggle/Toggle';
export { default as Tree, ITreeItem } from './components/Tree/Tree';
export { default as Toolbar } from './components/Toolbar/Toolbar';
export { default as Transform } from './components/Transform/Transform';
export { default as Wizard } from './components/Wizard/Wizard';
export { default as SlideIn } from './components/SlideIn/SlideIn';
export { default as Stepper } from './components/Stepper/Stepper';
export { default as Table, ITableProps, IColumn } from './components/Table/Table';
export { default as TimePicker } from './components/TimePicker/TimePicker';
export { default as Portal } from './components/Portal/Portal';
