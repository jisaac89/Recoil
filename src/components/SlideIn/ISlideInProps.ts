export interface ISlideInProps {
	if: boolean;
	fill?: boolean;
	from: 'left' | 'right' | 'top' | 'bottom';
	className?: string;
	offset?: number;
	onClick?: () => void;
	children?: any;
	fixed?: boolean;
	beforeOpen?: () => void;
	afterOpen?: () => void;
	title?: string;
	icon?: string;
	onClose?: () => void;
	mobile?: boolean;
	flex?: boolean;
	id?: string;
	dimensions?: any;
}
