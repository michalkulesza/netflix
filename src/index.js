import React from "react";
import App from "./App";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyles } from "./global-styles";
import "normalize.css";

render(
	<Provider store={store}>
		<React.StrictMode>
			<GlobalStyles />
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
