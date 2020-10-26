import React, { useEffect, useState } from "react";
import { ImVolumeHigh, ImVolumeLow, ImVolumeMedium, ImVolumeMute2 } from "react-icons/im";

const useVolumeIcon = volume => {
	const [icon, setIcon] = useState(null);

	useEffect(() => {
		if (volume !== null) {
			volume <= 0.05
				? setIcon(<ImVolumeMute2 />)
				: volume > 0.05 && volume < 0.33
				? setIcon(<ImVolumeLow />)
				: volume >= 0.33 && volume < 0.66
				? setIcon(<ImVolumeMedium />)
				: setIcon(<ImVolumeHigh />);
		}
	}, [volume]);

	return icon;
};

export default useVolumeIcon;
