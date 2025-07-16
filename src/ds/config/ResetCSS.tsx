import type { FC } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	@media (prefers-reduced-motion: reduce) {
  	* {
			-webkit-animation: none !important;
      animation: none !important;
    	-webkit-transition: none !important;
    	transition: none !important;
		}
	}

	* {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	-webkit-box-sizing: border-box;
    box-sizing: border-box;
  	vertical-align: baseline;
	}

	img, picture, video, iframe, figure {
  	max-width: 100%;
  	width: 100%;
  	display: block;
  	/* opcional */
  	-o-object-fit: cover;
    object-fit: cover;
  	/* opcional */
  	-o-object-position: center center;
    object-position: center center;
	}

	a {
  	display: block;
  	text-decoration: none;
  	color: inherit;
  	font-size: inherit;
	}

	p a {
  	display: inline;
	}

	li {
  	//list-style-type: none;
	}

	html {
  	scroll-behavior: smooth;
		width: 100%;
		height: 100%;
	}

	h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {
  	font-size: 1em;
  	font-weight: inherit;
  	font-style: inherit;
  	text-decoration: none;
  	color: inherit;
		user-select: none;
	}

	blockquote:before, blockquote:after, q:before, q:after {
  	content: "";
  	content: none;
	}

	::-moz-selection {
  	background-color: var(--light-100);
  	color: var(--dark-100);
	}
	::selection {
  	background-color: var(--light-100);
  	color: var(--dark-100);
	}

	form, input, textarea, select, button, label {
  	font-family: inherit;
  	font-size: inherit;
  	-webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  	background-color: transparent;
  	color: inherit;
  	display: block;
  	/* opcional */
  	-webkit-appearance: none;
    -moz-appearance: none;
  	appearance: none;
	}

	table, tr, td {
  	border-collapse: collapse;
  	border-spacing: 0;
	}

	svg {
  	display: block;
	}

	body {
		background-color: var(--dark-100);
		width: 100%;
		height: 100%;
		overflow: hidden;
  	font-size: 100%;
  	font-family: var(--primary-typography);
  	color: var(--light-100);
  	/* opcional */
  	line-height: 1.4em;
  	/* opcional */
  	-webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  	/* opcional */
  	font-smooth: always;
  	/* opcional */
  	-webkit-font-smoothing: antialiased;
  	/* opcional */
  	-moz-osx-font-smoothing: grayscale;

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-text-size-adjust: 100%;
	}
`;

export const ResetCSS: FC = () => {
  return <GlobalStyle />;
};
