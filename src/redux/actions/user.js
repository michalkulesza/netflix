import axios from "axios";
import { firebase } from "../../firebase/index";
import { setError } from "./error";
import {
	SET_USER,
	SET_USER_INFO,
	LIKE_VIDEO,
	REMOVE_LIKED_VIDEO,
	DISLIKE_VIDEO,
	REMOVE_DISLIKED_VIDEO,
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
} from "../types";

export const getUserData = userID => {
	return async dispatch => {
		try {
			const userData = await axios.get(`http://localhost:8888/data/user?id=${userID}`);

			dispatch({
				type: SET_USER,
				payload: userData.data,
			});
		} catch (err) {
			dispatch(setError(err.message));
		}
	};
};

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
				dispatch(setError(err.message));
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
				dispatch(setError(err.message));
			});
	};
};

export const signoutUser = () => {
	return dispatch => {
		return firebase
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
			})
			.catch(err => setError(err.message));
	};
};

//LIKE
export const likeVideo = (userID, videoID) => {
	return async dispatch => {
		try {
			axios
				.post("http://localhost:8888/data/like", { userID, videoID })
				.then(res => {
					if (res.status === 200) {
						dispatch({
							type: REMOVE_DISLIKED_VIDEO,
							payload: videoID,
						});
						dispatch({
							type: LIKE_VIDEO,
							payload: videoID,
						});
					}
				})
				.catch(err => {
					console.error(err.message);
					dispatch(setError("Whops! Something went wrong while liking video."));
				});
		} catch (err) {
			console.error(err.message);
			dispatch(setError("Whops! Something went wrong while liking video."));
		}
	};
};

//DISLIKE
export const dislikeVideo = (userID, videoID) => {
	return async dispatch => {
		try {
			axios
				.post("http://localhost:8888/data/dislike", { userID, videoID })
				.then(res => {
					if (res.status === 200) {
						if (res.status === 200) {
							dispatch({
								type: REMOVE_LIKED_VIDEO,
								payload: videoID,
							});
							dispatch({
								type: DISLIKE_VIDEO,
								payload: videoID,
							});
						}
					}
				})
				.catch(err => {
					console.error(err.message);
					dispatch(setError("Whops! Something went wrong while disliking video."));
				});
		} catch (err) {
			console.error(err.message);
			dispatch(setError("Whops! Something went wrong while disliking video."));
		}
	};
};

//ADD TO LIST
export const toggleVideoToList = (userID, videoID) => {
	return async dispatch => {
		try {
			axios
				.post("http://localhost:8888/data/list", { userID, videoID })
				.then(res => {
					if (res.status === 200) {
						if (res.status === 200) {
							dispatch({
								type: TOGGLE_VIDEO_LIST,
								payload: videoID,
							});
						}
					}
				})
				.catch(err => {
					console.error(err.message);
					dispatch(setError("Whops! Something went wrong while disliking video."));
				});
		} catch (err) {
			console.error(err.message);
			dispatch(setError("Whops! Something went wrong while disliking video."));
		}
	};
};
