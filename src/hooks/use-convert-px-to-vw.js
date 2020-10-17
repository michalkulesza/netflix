import { useEffect, useState } from "react";

const useConvertPxToVw = px => {
	const [vw, setVw] = useState(0);

	useEffect(() => {
		const convert = () => {
			const vwValue = (px / window.innerWidth) * 100;
			if (vwValue !== vw) setVw(vwValue);
		};

		window.addEventListener("resize", convert);

		convert();

		return () => window.removeEventListener("resize", convert);
	}, [px, vw]);

	return vw;
};

export default useConvertPxToVw;
