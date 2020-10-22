export const markItemsPosition = (i, isFirstSlide, totalTilesInVievport) => {
	if (i !== undefined && totalTilesInVievport && isFirstSlide) {
		const offset = isFirstSlide ? 0 : 1;
		const items = totalTilesInVievport - 2;

		if (i === 0 + offset) {
			return "left";
		}

		if (i > 0 + offset && i < items + offset) {
			return "center";
		}

		if (i === items + offset) {
			return "right";
		}
	}
};

export const markItemsPositionGrid = (data, totalTilesInVievport) => {
	if (data && totalTilesInVievport) {
		let counter = 0;

		return data.map(() => {
			if (counter === 0) {
				counter += 1;
				return "first";
			}

			if (counter > 0 && counter < totalTilesInVievport - 2) {
				counter += 1;
				return "middle";
			}

			if (counter === totalTilesInVievport - 2) {
				counter = 0;
				return "last";
			}
			return null;
		});
	}
};
