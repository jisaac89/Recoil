import { createGlobalStyle } from 'styled-components';

export const GlobalReset = createGlobalStyle`
	body {
		color: ${(props) => (props.whiteColor ? 'white' : 'black')};
	}

	html {
		font-family: ${(props) => (props.theme.main.fontFamily ? props.theme.main.fontFamily : 'Roboto')};
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	*:focus {
		outline: none;
	}

	button:focus,
	input:focus {
		box-shadow: 0 0 3px ${(props) =>
			props.theme.main && props.theme.main.primaryBackground ? props.theme.main.primaryBackground : '0099ff'};
	}

	body {
		background: ${(props) =>
			props.theme.main && props.theme.main.bodyBackground ? props.theme.main.bodyBackground : 'red !important'};
		overflow-y: hidden !important;
	}

	.body-background {
		background: ${(props) =>
			props.theme.main && props.theme.main.bodyBackground ? props.theme.main.bodyBackground : 'red !important'};
	}

`;
