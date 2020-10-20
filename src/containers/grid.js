import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "../components/";
import { ItemContainer } from "../containers";
import { useFetchGenreInfinite, useTilesInViewport } from "../hooks";
import { markItemsPositionGrid } from "../helpers/markItemsPosition";

const GridContainer = () => {
	const { genresType } = useSelector(state => state.genres);
	const { data, isUpdating } = useSelector(state => state.fetchGenreData);
	const totalTilesInVievport = useTilesInViewport();
	const itemsPositionArr = markItemsPositionGrid(data, totalTilesInVievport);
	useFetchGenreInfinite(genresType);

	return (
		<Grid.Wrapper>
			<Grid itemsInRow={totalTilesInVievport}>
				{data && itemsPositionArr ? (
					data.map((item, i) => (
						<ItemContainer key={item.id} item={item} i={i} auxPosition={itemsPositionArr[i]} grid />
					))
				) : (
					<Grid.Loading />
				)}
				{isUpdating && <Grid.Loading />}
			</Grid>
		</Grid.Wrapper>
	);
};

export default GridContainer;
