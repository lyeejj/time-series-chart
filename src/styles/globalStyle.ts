import { css } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = css`
	${reset}

	*, *::before, *::after {
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
