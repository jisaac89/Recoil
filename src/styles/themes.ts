export interface IRecoilTheme {
	//FONT
	fontFamily?: string;
	fontColor?: string;
	fontColorLight?: string;
	//BUTTON
	default_buttonBackgroundColor?: string;
	default_buttonBackgroundColor_hover?: string;
	default_buttonBorderColor?: string;
	default_buttonFontColor?: string;
}

export const defaultTheme: IRecoilTheme = {
	// FONTS
	fontFamily: 'Roboto',
	fontColor: 'rgba(0,0,0,0.87)',
	fontColorLight: 'rgba(0,0,0,0.87)',
	// BUTTONS
	default_buttonBackgroundColor: '#efefef',
	default_buttonBackgroundColor_hover: '#fefefe',
	default_buttonBorderColor: '#e7e7e7',
	default_buttonFontColor: '#888'
};

export const nightModeTheme: IRecoilTheme = {
	default_buttonBackgroundColor: 'red',
	default_buttonBackgroundColor_hover: '#fefefe',
	default_buttonBorderColor: '#222',
	default_buttonFontColor: '#888'
};
