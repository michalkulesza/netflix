import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HOME } from "./constants/routes";

import { Home } from "./pages";

function App() {
	return (
		<Router>
			<Route exact path={HOME}>
				<Home />
			</Route>
		</Router>
	);
}

export default App;
