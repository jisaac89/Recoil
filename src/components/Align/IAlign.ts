export interface IAlignProps {
	vertical?: boolean;
	className?: string;
	columns?: Array<number>;
	margin?: string;
	children?: any;
	fill?: boolean;
	style?: any;
	alignItems?: string;
	textCenter?: boolean;
}

export interface IAlignChildProps {
	columns?: Array<number>;
	vertical?: boolean;
	width?: number;
	element?: JSX.Element;
	margin?: string;
}

export interface IAlignState {
	widthArray?: Array<number>;
	maxColumnsLength?: number;
}
