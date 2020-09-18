import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HOME, SIGN_IN } from "./constants/routes";

import { Home, SignIn } from "./pages";

function App() {
	return (
		<Router>
			<Route exact path={HOME} component={Home} />
			<Route exact path={SIGN_IN} component={SignIn} />
		</Router>
	);
}

export default App;
