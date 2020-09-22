import React from "react";
import { Route, Redirect } from "react-router-dom";

export const IfUserRedirect = ({ user, ifUserRedirectTo, children, ...restProps }) => (
	<Route
		{...restProps}
		render={() => {
			if (!user) {
				return children;
			}

			if (user) {
				return (
					<Redirect
						to={{
							pathname: ifUserRedirectTo,
						}}
					/>
				);
			}

			return null;
		}}
	/>
);

export const ProtectedRoute = ({ user, children, ...restProps }) => {
	return (
		<Route
			{...restProps}
			render={({ location }) => {
				if (user) {
					return children;
				}

				if (!user) {
					return (
						<Redirect
							to={{
								pathname: "signin",
								state: { from: location },
							}}
						/>
					);
				}

				return null;
			}}
		/>
	);
};
