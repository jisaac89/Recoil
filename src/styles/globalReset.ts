import { createGlobalStyle } from 'styled-components';

export const GlobalReset = createGlobalStyle`
	body {
		background: #fff;
	}



	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	*:focus {
		outline: none;
	}


`;
