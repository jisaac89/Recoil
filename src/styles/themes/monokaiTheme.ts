import { IRecoilTheme } from '../IRecoilTheme';

export const monokaiTheme: IRecoilTheme = {
	// FONT
	fontFamily: 'Roboto',
	fontColorLight: 'rgba(0,0,0,0.87)',

	bodyBackgroundColor: '#272921',

	// BUTTONS
	// default
	defaultBackgroundColor: '#ff006b',
	defaultBackgroundColorHover: '#ff006bg',
	defaultBorderColor: '#602334',
	defaultFontColor: '#f5f5ed',
	// primary
	primaryBackgroundColor: '#f58600',
	primaryBackgroundColorHover: '#f58600',
	primaryBorderColor: '#784d00',
	primaryBorderColorHover: '#784d00',
	primaryFontColor: '#f5f5ed',
	//secondary
	secondaryBackgroundColor: '#09f',
	secondaryBackgroundColorHover: '#53afff',
	secondaryBorderColor: '#09f',
	secondaryBorderColorHover: '#53afff',
	secondaryFontColor: '#fff',

	// MISC
	defaultBorderRadius: '4px',
	defaultDropShadow: '0 0 4px 1px rgba(0,0,0,.01), 0 3px 24px rgba(0,0,0,.3)',

	defaultCheckedDirection: 'center'
};
