import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HOME, SIGN_IN, SIGN_UP, BROWSE } from "./constants/routes";
import { Home, SignIn, SignUp, Browse } from "./pages";
import { IfUserRedirect, ProtectedRoute } from "./helpers/protectedRoutes";
import { useAuthListener } from "./hooks/";

// const query = "/genre/movie/list";

const App = () => {
	const { user } = useAuthListener();

	// const { error, data } = useFetch(query);
	// console.log("Data: ", data);
	// console.log("Error: ", error);

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
