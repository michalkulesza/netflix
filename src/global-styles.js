import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html, body {
   font-family: 'Open Sans', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   background-color: #141414;
   color: #fff;
   font-size: 16px;
   overflow-x: hidden;
   overflow-y: ${({ disableScrolling }) => disableScrolling && "hidden"};
   margin-right: ${({ disableScrolling }) => disableScrolling && "8px"};
   
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

button{
   cursor: pointer;
   border: none;
   &:focus{
      outline: none;
   }
}

*{
   box-sizing: border-box;
   user-select: none;
}

a{
   text-decoration: none;
   color: #fff
}
`;
