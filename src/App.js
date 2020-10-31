import React, { useEffect } from "react";
import { HOME, SIGN_IN, SIGN_UP, BROWSE, SERIES, FILMS, LATEST, MYLIST, WATCH } from "./constants/routes";
import { Route, Switch, useHistory } from "react-router-dom";
import { Home, SignIn, SignUp, Browse, Latest, MyList, Page404, Watch } from "./pages";
import { IfUserRedirect, ProtectedRoute } from "./helpers/protectedRoutes";
import { useAuthListener, useFetchInitData, useKeyDownListener } from "./hooks/";
import { ErrorNotificationContainer } from "./containers";
import ScrollbarSize from "react-scrollbar-size";
import { useDispatch, useSelector } from "react-redux";
import { setScrollbarWidth } from "./redux/actions/misc";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { user } = useAuthListener();
	const id = history.location;
	const { scrollbarWidth } = useSelector(state => state.misc);
	useFetchInitData(id);
	useKeyDownListener();

	useEffect(() => {
		history.replace(history.location.pathname, null);
	}, [history]);

	const handleScrollbarChange = ({ width }) => width !== scrollbarWidth && dispatch(setScrollbarWidth(width));

	return (
		<>
			<AnimatePresence exitBeforeEnter>
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
					<Route path={WATCH}>
						<Watch />
					</Route>
					<Route>
						<Page404 />
					</Route>
				</Switch>
			</AnimatePresence>
			<ErrorNotificationContainer />
			<ScrollbarSize onChange={handleScrollbarChange} />
		</>
	);
};

export default App;
