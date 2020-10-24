import React from "react";
import LazyLoad from "react-lazyload";
import { useSelector } from "react-redux";
import { Carousels } from "../components";
import CarouselContainer from "../containers/carousel";

const CarouselsContainer = ({ data, noMargin }) => {
	const { selectedGenre } = useSelector(state => state.genres);

	return (
		data && (
			<Carousels biggerMargin={selectedGenre} noMargin={noMargin}>
				{data.map((category, i) => {
					const categoryName = category && Object.keys(category)[0];
					const title = categoryName
						?.split("_")
						.map(word => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" ");

					return (
						<LazyLoad height={200} key={category.id}>
							<CarouselContainer title={title} parentID={i} data={category[categoryName]} />
						</LazyLoad>
					);
				})}
			</Carousels>
		)
	);
};

export default CarouselsContainer;
