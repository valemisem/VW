import type { FC } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--primary-100: rgba(255, 0, 79, 1);
		--primary-60: rgba(255, 0, 79, 0.6);
		--primary-40: rgb(255, 0, 79, 0.4);
		--primary-20: rgba(255, 0, 79, 0.2);
		--primary-8: rgba(255, 0, 79, 0.08);
		--primary-gradient-color: rgba(209, 0, 96, 1);
		--primary-gradient: linear-gradient(90deg, var(--primary-gradient-color) 3.23%, #F00 95.34%);
  	--secondary-100: rgba(35, 34, 35, 1);
		--secondary-80: rgba(35, 34, 35, 0.8);
		--light-100: rgba(255, 255, 255, 1);
		--light-50: rgba(255, 255, 255, 0.5);
		--light-30: rgba(255, 255, 255, 0.3);
		--light-15: rgba(255, 255, 255, 0.15);
		--light-8: rgba(255, 255, 255, 0.08);
		--light-4: rgba(255, 255, 255, 0.04);
		--black-70: rgba(0, 0, 0, 0.7);
		--dark-100: rgba(10, 10, 10, 1);		
		--dark-80: rgba(10, 10, 10, 0.8);
		--dark-70: rgba(10, 10, 10, 0.7);
		--dark-50: rgba(10, 10, 10, 0.5);
		--dark-30: rgba(10, 10, 10, 0.3);
		--good : rgba(84, 62, 255, 1);
		--bad : rgba(255, 184, 0, 1);
	}
`;

export const Colors: FC = () => {
  return <GlobalStyle />;
};
