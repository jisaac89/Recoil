export interface IRecoilTheme {
	//MEDIA
	laptop?: string;
	tablet?: string;
	phone?: string;

	//GLOBAL
	bodyBackgroundColor?: string;
	loaderBackgroundColor?: string;
	lightBackgroundColor?: string;
	darkBackgroundColor?: string;
	greyBackgroundColor?: string;
	defaultBorderWidth?: string;
	defaultBorder?: string;
	toolbarSpacingBetweenElements?: string;

	//FONT
	fontFamily?: string;
	fontColor?: string;
	fontColorLight?: string;

	//BUTTON
	// default
	defaultBackgroundColor?: string;
	defaultBackgroundColorHover?: string;
	defaultBorderColor?: string;
	defaultdefaultBorderColorHover?: string;
	defaultFontColor?: string;
	// primary
	primaryBackgroundColor?: string;
	primaryBackgroundColorHover?: string;
	primaryBorderColor?: string;
	primaryBorderColorHover?: string;
	primaryFontColor?: string;
	// error
	errorBackgroundColor?: string;
	errorBackgroundColorHover?: string;
	errorBorderColor?: string;
	errordefaultBorderColorHover?: string;
	errorFontColor?: string;
	// success
	successBackgroundColor?: string;
	successBackgroundColorHover?: string;
	successBorderColor?: string;
	successdefaultBorderColorHover?: string;
	successFontColor?: string;

	//LINK
	linkBackgroundColor?: string;
	linkBackgroundColorHover?: string;
	linkBorderColor?: string;
	linkBorderColorHover?: string;
	linkFontColor?: string;

	//INPUT
	inputBackgroundColor?: string;
	inputBackgroundColorHover?: string;
	inputBorderColor?: string;
	inputBorderColorHover?: string;
	inputFontColor?: string;

	//SELECTABLE
	selectableDefaultBackgroundColor?: string;
	selectablePrimaryBackgroundColor?: string;
	selectableErrorBackgroundColor?: string;

	//GRID
	gridCellPadding?: string;
	gridHeaderBorderColor?: string;
	gridHeaderBorderSize?: string;
	gridBorderColor?: string;
	gridBorderSize?: string;

	//MISC
	defaultBorderRadius?: string;
	defaultDropShadow?: string;
	cardBackground?: string;
	cardPadding?: string;
	cardRadius?: string;
}
