import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "../components/";
import { ItemContainer } from "../containers";
import { useFetchGenreInfinite } from "../hooks";

const GridContainer = () => {
	const { genresType } = useSelector(state => state.genres);
	const { data, isUpdating } = useSelector(state => state.fetchGenreData);

	useFetchGenreInfinite(genresType);

	return (
		<Grid.Wrapper>
			<Grid>
				{data ? (
					data.map((item, i) => (
						<ItemContainer key={item.id} item={item} totalItems={data.length} i={i} firstHasMargin={false} grid />
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
