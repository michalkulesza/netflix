import { useState, useEffect } from "react";
import { firebase } from "../firebase/index";
import { getUserData } from "../redux/actions/user";
import { useDispatch } from "react-redux";

const useAuthListener = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));
	const dispatch = useDispatch();

	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged(authUser => {
			if (authUser) {
				localStorage.setItem("authUser", JSON.stringify(authUser));
				dispatch(getUserData(authUser.uid));
				setUser(authUser);
			} else {
				localStorage.removeItem("authUser");
				setUser(null);
			}
		});

		return () => listener();
	}, [dispatch]);
	return { user };
};

export default useAuthListener;
