import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPressedKey } from "../redux/actions";

const useKeyDownListener = () => {
	const [pressKey, setPressKey] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const onKeyDown = ({ key }) => {
			setPressKey(key);
			dispatch(setPressedKey(key));
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [pressKey, dispatch]);

	return pressKey;
};

export default useKeyDownListener;
