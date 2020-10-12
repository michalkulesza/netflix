import React, { useEffect } from "react";
import { HOME, SIGN_IN, SIGN_UP, BROWSE, SERIES, FILMS, LATEST, MYLIST } from "./constants/routes";
import { useLocation, Route, Switch, useHistory } from "react-router-dom";
import { Home, SignIn, SignUp, Browse, Latest, MyList, Page404 } from "./pages";
import { IfUserRedirect, ProtectedRoute } from "./helpers/protectedRoutes";
import { useAuthListener, useFetchInitData, useKeyDownListener } from "./hooks/";

const App = () => {
	const history = useHistory();
	const { user } = useAuthListener();
	const id = useLocation();
	useFetchInitData(id);
	useKeyDownListener();

	useEffect(() => {
		history.replace(history.location.pathname, null);
	}, [history]);

	return (
		<>
			<Switch>
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
				<Route>
					<Page404 />
				</Route>
			</Switch>
		</>
	);
};

export default App;
