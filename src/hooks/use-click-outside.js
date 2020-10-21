import { useEffect } from "react";

const useClickOutside = (ref, callback) => {
	useEffect(() => {
		const handleOutsideClick = e => {
			if (ref?.current) {
				console.log(ref.current);
				console.log(e.target);

				if (ref.current.contains(e.target)) {
					// inside click
					return;
				}
				// outside click
				callback();
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [ref, callback]);
};

export default useClickOutside;
