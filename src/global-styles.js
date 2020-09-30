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


@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1)
  }
  100% {
    opacity: 1;
    transform: translate(-50%, calc(-50% - 50px)) scale(1.2)
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translate(-50%, calc(-50% - 50px)) scale(1.2)
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1)
  }
}
`;
