import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./user";
import * as types from "../types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../../constants/config";
import * as firebase from "../../firebase";

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store;
const mockData = { data: { details: ["testDetails"] } };
const userID = 12345;
const videoID = 10101010;

beforeEach(() => {
	store = mockStore({ details: [] });
	mock.reset();

	firebase.firebase.auth = jest.fn().mockReturnValue({
		createUserWithEmailAndPassword: (email, password) => {
			if (email && password) {
				return Promise.resolve({
					user: {
						uid: 19283465,
						email,
						password,
						updateProfile: jest.fn().mockResolvedValue(),
					},
				});
			} else {
				return Promise.reject();
			}
		},
		signInWithEmailAndPassword: jest.fn().mockResolvedValue(),
		signOut: jest.fn().mockResolvedValue(),
	});

	firebase.firebase.firestore = jest.fn().mockReturnValue({
		collection: jest.fn().mockReturnValue({
			doc: jest.fn().mockReturnValue({
				set: jest.fn().mockResolvedValue(),
			}),
		}),
	});
});

describe("getUserData action", () => {
	it("creates an action that fetches user data", () => {
		const expectedAction = [
			{
				type: types.SET_USER,
				payload: mockData,
			},
		];

		mock.onGet(`${config.BASE_PATH}/data/user?id=${userID}`).reply(200, mockData);

		return store.dispatch(actions.getUserData(userID)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails fetching user data and sets an error", () => {
		const userID = 12345;
		const expectedAction = [
			{
				type: types.SET_ERROR,
				payload: "Whoops! Something went wrong while getting user data.",
			},
		];

		mock.onGet(`${config.BASE_PATH}/data/user?id=${userID}`).reply(400);

		return store.dispatch(actions.getUserData(userID)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("signupUser action", () => {
	it("creates an action that signups user with firebase", () => {
		const mockUser = {
			email: "test@test.com",
			password: "12345",
			name: "Testuser",
			avatar: "avatar67",
		};

		const expectedUser = {
			info: {
				displayName: mockUser.name,
				avatar: mockUser.avatar,
			},
			list: [],
			liked: [],
			disliked: [],
		};

		const expectedAction = [
			{
				type: types.AUTH_CHANGE,
				payload: true,
			},
			{
				type: types.SET_USER,
				payload: expectedUser,
			},
			{
				type: types.AUTH_CHANGE,
				payload: false,
			},
		];

		return store.dispatch(actions.signupUser(...Object.values(mockUser))).then(() => {
			expect(firebase.firebase.auth).toHaveBeenCalled();
			expect(firebase.firebase.firestore).toHaveBeenCalled();
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails signup and returns and error", () => {
		const expectedAction = [
			{
				type: types.AUTH_CHANGE,
				payload: true,
			},
			{
				type: types.SET_ERROR,
				payload: "Whoops! Something went wrong while signing user in.",
			},
			{
				type: types.AUTH_CHANGE,
				payload: false,
			},
		];

		return store.dispatch(actions.signupUser()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("signinUser action", () => {
	const mockData = {
		email: "test@test.com",
		password: "1234",
		name: "tester",
		avatar: "default1",
	};

	it("creates an action that signs user in with firebase", () => {
		const expectedAction = [
			{
				type: types.AUTH_CHANGE,
				payload: true,
			},
			{
				type: types.AUTH_CHANGE,
				payload: false,
			},
		];

		return store.dispatch(actions.signinUser(...Object.values(mockData))).then(() => {
			expect(firebase.firebase.auth().signInWithEmailAndPassword).toHaveBeenCalled();
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails signin user in and returns an error", () => {
		const expectedAction = [
			{
				type: types.AUTH_CHANGE,
				payload: true,
			},
			{
				type: types.SET_ERROR,
				payload: "Whoops! Something went wrong while signing user in.",
			},
			{
				type: types.AUTH_CHANGE,
				payload: false,
			},
		];

		firebase.firebase.auth = jest.fn().mockReturnValue({
			signInWithEmailAndPassword: jest.fn().mockRejectedValue(),
		});

		return store.dispatch(actions.signinUser(...Object.values(mockData))).then(() => {
			expect(firebase.firebase.auth().signInWithEmailAndPassword).toHaveBeenCalled();
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("sigoutUser action", () => {
	it("creates an action that signs user out with firebase", () => {
		const expectedAction = [
			{
				type: types.CLEAR_INITIAL_DATA,
			},
			{
				type: types.CLEAR_DETAILS,
			},
			{
				type: types.CLEAR_EPISODES,
			},
			{
				type: types.CLEAR_GENRE_DATA,
			},
			{
				type: types.CLEAR_TOGGLES,
			},
			{
				type: types.CLEAR_MISC,
			},
			{
				type: types.CLEAR_GENRES,
			},
			{
				type: types.CLEAR_PLAYER,
			},
			{
				type: types.CLEAR_USER,
			},
		];
		return store.dispatch(actions.signoutUser()).then(() => {
			expect(firebase.firebase.auth().signOut).toHaveBeenCalled();
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails signing user out and returns an error", () => {
		const expectedAction = [
			{
				type: types.SET_ERROR,
				payload: "Whoops! Something went wrong while signing user out.",
			},
		];

		firebase.firebase.auth = jest.fn().mockReturnValue({
			signOut: jest.fn().mockRejectedValue(),
		});
		return store.dispatch(actions.signoutUser()).then(() => {
			expect(firebase.firebase.auth().signOut).toHaveBeenCalled();
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("likeVideo action", () => {
	it("creates an action that toggles like of a video", () => {
		const expectedAction = [
			{
				type: types.TOGGLE_DISLIKE_VIDEO,
				payload: videoID,
			},
			{
				type: types.TOGGLE_LIKE_VIDEO,
				payload: videoID,
			},
		];

		mock.onPost(`${config.BASE_PATH}/data/like`).reply(200);

		return store.dispatch(actions.likeVideo(userID, videoID)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails toggling video like and returns an error", () => {
		const expectedAction = [
			{
				type: types.SET_ERROR,
				payload: "Whops! Something went wrong while liking video.",
			},
		];

		mock.onPost(`${config.BASE_PATH}/data/like`).reply(400);

		return store.dispatch(actions.likeVideo(userID, videoID)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("dislikeVideo action", () => {
	it("creates an action that toggles dislike of a video", () => {
		const expectedAction = [
			{
				type: types.TOGGLE_LIKE_VIDEO,
				payload: videoID,
			},
			{
				type: types.TOGGLE_DISLIKE_VIDEO,
				payload: videoID,
			},
		];

		mock.onPost(`${config.BASE_PATH}/data/dislike`).reply(200);

		return store.dispatch(actions.dislikeVideo(userID, videoID)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails toggling video dislike and returns an error", () => {
		const expectedAction = [
			{
				type: types.SET_ERROR,
				payload: "Whops! Something went wrong while disliking video.",
			},
		];

		mock.onPost(`${config.BASE_PATH}/data/dislike`).reply(400);

		return store.dispatch(actions.dislikeVideo(userID, videoID)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});

describe("toggleVideoToList action", () => {
	it("creates an action that toggles video on users list", () => {
		const expectedAction = [
			{
				type: types.TOGGLE_VIDEO_LIST,
				payload: mockData,
			},
		];

		mock.onPost(`${config.BASE_PATH}/data/list`).reply(200);

		return store.dispatch(actions.toggleVideoToList(userID, mockData)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it("creates an action that fails toggling video on a user list and returns an error", () => {
		const expectedAction = [
			{
				type: types.SET_ERROR,
				payload: "Whops! Something went wrong while toggling video.",
			},
		];

		mock.onPost(`${config.BASE_PATH}/data/list`).reply(400);

		return store.dispatch(actions.toggleVideoToList(userID, mockData)).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});
