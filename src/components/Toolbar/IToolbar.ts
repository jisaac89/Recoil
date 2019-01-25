import { IRecoilNew } from '../..';

export interface IToolbarProps extends IRecoilNew {
	border?: boolean;
	vertical?: boolean;
	textCenter?: boolean;
	noRadius?: boolean;
	spacing?: boolean;
	block?: boolean;
	left?: boolean;
	right?: boolean;
	style?: Object;
	flush?: boolean;
	noBorder?: boolean;
	tabs?: boolean;
	breadcrumbs?: boolean;
	id?: string;
	form?: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
	onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
}
