import type { FC } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	:root {
  	--primary-typography: 'Archivo', sans-serif;

    --hero-big: 900 52px/56px 'Archivo', sans-serif;
    --hero-small: 900 24px/26px 'Archivo', sans-serif;
    --title-black: 900 16px/20px 'Archivo', sans-serif;
    --body-black: 900 14px/18px 'Archivo', sans-serif;
    --body-semibold: 600 14px/18px 'Archivo', sans-serif;
    --body-light: 300 14px/18px 'Archivo', sans-serif;
    --content-light: 300 12px/16px 'Archivo', sans-serif;
    --subhead-semibold: 600 12px/16px 'Archivo', sans-serif;
	}
`;

export const Typography: FC = () => {
  return <GlobalStyle />;
};
