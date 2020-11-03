import React from "react";
import LazyLoad from "react-lazyload";
import { useSelector } from "react-redux";
import { Carousels } from "../components";
import CarouselContainer from "../containers/carousel";

const CarouselsContainer = ({ listData, data }) => {
	const { selectedGenre } = useSelector(state => state.genres);
	console.log(listData);

	return (
		data && (
			<Carousels biggerMargin={selectedGenre}>
				{listData.length > 0 && <CarouselContainer title="My List" data={listData} />}
				{data.map((category, i) => {
					const categoryName = category && Object.keys(category)[0];
					const title = categoryName
						?.split("_")
						.map(word => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" ");

					return (
						<LazyLoad height={200} key={category.id}>
							<CarouselContainer title={title} parentID={listData ? i + 1 : i} data={category[categoryName]} />
						</LazyLoad>
					);
				})}
			</Carousels>
		)
	);
};

export default CarouselsContainer;
