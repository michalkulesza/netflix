import { firebase } from "../../firebase/index";
import { setError } from "./error";
import { SET_USER } from "../types";

export const signupUser = (email, password, name, avatar = "avatar1") => {
	return async dispatch => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				user.updateProfile({
					displayName: name,
					photoURL: avatar,
				});
			})
			.then(() => {
				dispatch({
					type: SET_USER,
					payload: { displayName: name, avatar },
				});
			})
			.catch(err => {
				console.error(err);
				dispatch(setError("Whops! Something went wrong while Signing Up."));
			});
	};
};
