export const markItemsPosition = (i, isFirstSlide, totalTilesInVievport) => {
	const offset = isFirstSlide ? 0 : 1;
	const items = totalTilesInVievport - 2;

	if (i === 0 + offset) {
		return "first";
	}

	if (i > 0 + offset && i < items + offset) {
		return "middle";
	}

	if (i === items + offset) {
		return "last";
	}

	return "outside";
};
