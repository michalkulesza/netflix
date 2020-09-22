import { useState, useEffect, useContext } from "react";
import { firebase } from "../firebase/index";

const useAuthListener = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));

	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged(authUser => {
			if (authUser) {
				localStorage.setItem("authUser", JSON.stringify(authUser));
				setUser(authUser);
			} else {
				localStorage.removeItem("authUser");
				setUser(null);
			}
		});

		return () => listener();
	}, []);
	return { user };
};

export default useAuthListener;
