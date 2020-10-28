import axios from "axios";
import { firebase } from "../../firebase/index";
import { setError } from "./error";
import { SET_USER, SET_USER_INFO } from "../types";

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
					type: SET_USER_INFO,
					payload: { displayName: name, avatar },
				});
			})
			.catch(err => {
				console.error(err.message);
				dispatch(setError("Whops! Something went wrong while Signing Up."));
			});
	};
};

export const getUserData = userID => {
	return async dispatch => {
		const userData = await axios.get(`http://localhost:8888/data/user?id=${userID}`);

		dispatch({
			type: SET_USER,
			payload: userData.data,
		});
	};
};

export const signinUser = (email, password) => {
	return async dispatch => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				getUserData(user.user.uid);
			})
			.catch(err => {
				console.error(err.message);
				dispatch(setError("Whops! Something went wrong, please check your email and password."));
			});
	};
};
