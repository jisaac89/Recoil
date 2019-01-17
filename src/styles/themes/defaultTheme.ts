import { IRecoilTheme } from './IRecoilTheme';

export const defaultTheme: IRecoilTheme = {
	// FONT
	fontFamily: 'Roboto',
	fontColorLight: 'rgba(0,0,0,0.87)',

	// BUTTONS
	// default
	defaultBackgroundColor: '#efefef',
	defaultBackgroundColorHover: '#fefefe',
	defaultBorderColor: '#e7e7e7',
	defaultFontColor: '#888',
	// primary
	primaryBackgroundColor: '#09f',
	primaryBackgroundColorHover: '#53afff',
	primaryBorderColor: '#09f',
	primaryBorderColorHover: '#53afff',
	primaryFontColor: '#fff',

	// MISC
	defaultBorderRadius: '4px',
	defaultDropShadow: '0 0 4px 1px rgba(0,0,0,.01), 0 3px 24px rgba(0,0,0,.3)'
};
