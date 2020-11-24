import React from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { config } from "./constants/config";

render(
	<Provider store={store}>
		<React.StrictMode>
			<GlobalStyles />
			<Router basename={config.HOME_PAGE}>
				<App />
			</Router>
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
