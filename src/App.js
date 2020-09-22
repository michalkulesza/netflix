import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HOME, SIGN_IN, SIGN_UP, BROWSE } from "./constants/routes";

import { Home, SignIn, SignUp, Browse } from "./pages";

const App = () => {
	return (
		<Router>
			<Route exact path={HOME} component={Home} />
			<Route exact path={SIGN_IN} component={SignIn} />
			<Route exact path={SIGN_UP} component={SignUp} />
			<Route exact path={BROWSE} component={Browse} />
		</Router>
	);
};

export default App;
