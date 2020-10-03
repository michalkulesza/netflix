import React from "react";
import App from "./App";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { fetchInitialData } from "./redux/actions";
import { GlobalStyles } from "./global-styles";
import "normalize.css";

store.dispatch(fetchInitialData());

render(
	<Provider store={store}>
		<React.StrictMode>
			<GlobalStyles />
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
