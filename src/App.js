import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HOME, SIGN_IN, SIGN_UP, BROWSE } from "./constants/routes";
import { Home, SignIn, SignUp, Browse } from "./pages";
import { IfUserRedirect, ProtectedRoute } from "./helpers/protectedRoutes";
import useAuthListener from "./hooks/use-auth-listener";

const App = () => {
	const { user } = useAuthListener();

	return (
		<Router>
			<IfUserRedirect exact path={HOME} ifUserRedirectTo={BROWSE} user={user}>
				<Home />
			</IfUserRedirect>
			<IfUserRedirect exact path={SIGN_IN} ifUserRedirectTo={BROWSE} user={user}>
				<SignIn />
			</IfUserRedirect>
			<IfUserRedirect exact path={SIGN_UP} ifUserRedirectTo={BROWSE} user={user}>
				<SignUp />
			</IfUserRedirect>
			<ProtectedRoute exact path={BROWSE} user={user}>
				<Browse />
			</ProtectedRoute>
		</Router>
	);
};

export default App;
