export interface IWizardProps {
	slideIndex?: number;
	children?: any;
	vertical?: boolean;
	className?: string;
	style?: Object;
	mobile?: boolean;
	animate?: boolean;
	fill?: boolean;
	overflow?: boolean;
	flex?: boolean;
	paginate?: boolean;
	selectedIsRelative?: boolean;
	onSlide?(slideIndex): void;
	visible?: boolean;
}
