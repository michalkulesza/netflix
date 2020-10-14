import React from "react";
import { Grid } from "../components/";
import { ItemContainer } from "../containers";

const GridContainer = ({ data }) => {
	const itemsInViewport = 4;
	return data ? (
		<Grid.Wrapper>
			<Grid>
				{data.map((item, i) => (
					<ItemContainer
						key={item.id}
						item={item}
						totalItems={data.length}
						i={i}
						totalTilesInVievport={itemsInViewport}
						firstHasMargin={false}
					/>
				))}
			</Grid>
		</Grid.Wrapper>
	) : null;
};

export default GridContainer;
