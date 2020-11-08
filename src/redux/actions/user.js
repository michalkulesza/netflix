import axios from "axios";
import { firebase } from "../../firebase/index";
import { setError } from "./error";
import {
	SET_USER,
	TOGGLE_LIKE_VIDEO,
	TOGGLE_DISLIKE_VIDEO,
	CLEAR_INITIAL_DATA,
	CLEAR_EPISODES,
	CLEAR_GENRE_DATA,
	CLEAR_TOGGLES,
	CLEAR_MISC,
	CLEAR_GENRES,
	CLEAR_DETAILS,
	CLEAR_PLAYER,
	CLEAR_USER,
	TOGGLE_VIDEO_LIST,
	AUTH_CHANGE,
} from "../types";
import { BASE_PATH } from "../../constants/config";
import { fetchInitialDataList } from "./fetch-initial-data";

export const getUserData = userID => {
	return async dispatch => {
		try {
			const userData = await axios.get(`${BASE_PATH}/data/user?id=${userID}`);

			dispatch({
				type: SET_USER,
				payload: userData.data,
			});
		} catch (err) {
			dispatch(setError("Whoops! Something went wrong while getting user data."));
		}
	};
};

export const signupUser = (email, password, name, avatar = "avatar1") => {
	return async dispatch => {
		const initUserData = {
			info: {
				displayName: name,
				avatar,
			},
			list: [],
			liked: [],
			disliked: [],
		};

		dispatch({
			type: AUTH_CHANGE,
			payload: true,
		});

		return firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				user.updateProfile({
					displayName: name,
					photoURL: avatar,
				});
				return user;
			})
			.then(user => {
				firebase.firestore().collection("users").doc(user.uid).set(initUserData);
			})
			.then(() => {
				dispatch({
					type: SET_USER,
					payload: initUserData,
				});
			})
			.catch(err => {
				dispatch(setError("Whoops! Something went wrong while signing user in."));
			})
			.finally(() => {
				dispatch({
					type: AUTH_CHANGE,
					payload: false,
				});
			});
	};
};

export const signinUser = (email, password) => {
	return async dispatch => {
		dispatch({
			type: AUTH_CHANGE,
			payload: true,
		});
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(err => {
				dispatch(setError("Whoops! Something went wrong while signing user in."));
			})
			.finally(() => {
				dispatch({
					type: AUTH_CHANGE,
					payload: false,
				});
			});
	};
};

export const signoutUser = () => {
	return async dispatch => {
		try {
			return await firebase
				.auth()
				.signOut()
				.then(() => {
					dispatch({
						type: CLEAR_INITIAL_DATA,
					});
					dispatch({
						type: CLEAR_DETAILS,
					});
					dispatch({
						type: CLEAR_EPISODES,
					});
					dispatch({
						type: CLEAR_GENRE_DATA,
					});
					dispatch({
						type: CLEAR_TOGGLES,
					});
					dispatch({
						type: CLEAR_MISC,
					});
					dispatch({
						type: CLEAR_GENRES,
					});
					dispatch({
						type: CLEAR_PLAYER,
					});
					dispatch({
						type: CLEAR_USER,
					});
				});
		} catch (err) {
			dispatch(setError("Whoops! Something went wrong while signing user out."));
		}
	};
};

//LIKE
export const likeVideo = (userID, videoID) => {
	return async dispatch => {
		try {
			return axios
				.post(`${BASE_PATH}/data/like`, { userID, videoID })
				.then(res => {
					if (res.status === 200) {
						dispatch({
							type: TOGGLE_DISLIKE_VIDEO,
							payload: videoID,
						});
						dispatch({
							type: TOGGLE_LIKE_VIDEO,
							payload: videoID,
						});
					}
				})
				.catch(err => {
					dispatch(setError("Whops! Something went wrong while liking video."));
				});
		} catch (err) {
			dispatch(setError("Whops! Something went wrong while liking video."));
		}
	};
};

//DISLIKE
export const dislikeVideo = (userID, videoID) => {
	return async dispatch => {
		try {
			return axios
				.post(`${BASE_PATH}/data/dislike`, { userID, videoID })
				.then(res => {
					if (res.status === 200) {
						dispatch({
							type: TOGGLE_LIKE_VIDEO,
							payload: videoID,
						});
						dispatch({
							type: TOGGLE_DISLIKE_VIDEO,
							payload: videoID,
						});
					}
				})
				.catch(err => {
					dispatch(setError("Whops! Something went wrong while disliking video."));
				});
		} catch (err) {
			dispatch(setError("Whops! Something went wrong while disliking video."));
		}
	};
};

//ADD TO LIST
export const toggleVideoToList = (userID, obj) => {
	return async dispatch => {
		try {
			return axios
				.post(`${BASE_PATH}/data/list`, { userID, data: obj })
				.then(res => {
					if (res.status === 200) {
						dispatch(fetchInitialDataList());
						dispatch({
							type: TOGGLE_VIDEO_LIST,
							payload: obj,
						});
					}
				})
				.catch(err => {
					dispatch(setError("Whops! Something went wrong while toggling video."));
				});
		} catch (err) {
			dispatch(setError("Whops! Something went wrong while toggling video."));
		}
	};
};
