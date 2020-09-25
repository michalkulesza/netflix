import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');

html, body {
   font-family: 'Open Sans', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   background-color: #000000;
   color: #333333;
   font-size: 16px;

   ::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}
   }

ul,li{
   margin: 0;
   padding: 0;
   list-style: none;
}

input{
   padding: 0;
	border: 0;
}
`;
