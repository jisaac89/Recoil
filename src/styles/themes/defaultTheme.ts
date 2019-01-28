import { IRecoilTheme } from '../IRecoilTheme';
import {colors, font} from '../sharedBrand';

export const defaultTheme: IRecoilTheme = {
	// FONT
	fontFamily: font.fontFamily.default,
	fontColorLight: colors.font.base,

	bodyBackgroundColor: colors.body.base,
	// BUTTONS
	// default
	defaultBackgroundColor: colors.default.base,
	defaultBackgroundColorHover: colors.default.light,
	defaultBorderColor: colors.default.dark,
	defaultFontColor: colors.default.special,
	// primary
	primaryBackgroundColor: colors.primary.base,
	primaryBackgroundColorHover: colors.primary.light,
	primaryBorderColor: colors.primary.base,
	primaryBorderColorHover: colors.primary.base,
	primaryFontColor: colors.primary.special,
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
