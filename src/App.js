import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HOME, SIGN_IN, SIGN_UP, BROWSE, SERIES, FILMS, LATEST, MYLIST } from "./constants/routes";
import { Home, SignIn, SignUp, Browse, Latest, MyList } from "./pages";
import { IfUserRedirect, ProtectedRoute } from "./helpers/protectedRoutes";
import { useAuthListener } from "./hooks/";

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
			<ProtectedRoute exact path={SERIES} user={user}>
				<Browse />
			</ProtectedRoute>
			<ProtectedRoute exact path={FILMS} user={user}>
				<Browse />
			</ProtectedRoute>
			<ProtectedRoute exact path={LATEST} user={user}>
				<Latest />
			</ProtectedRoute>
			<ProtectedRoute exact path={MYLIST} user={user}>
				<MyList />
			</ProtectedRoute>
		</Router>
	);
};

export default App;
