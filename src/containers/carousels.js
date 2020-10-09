import React from "react";
import LazyLoad from "react-lazyload";
import { Carousels } from "../components";
import CarouselContainer from "../containers/carousel";

const CarouselsContainer = ({ data }) => {
	return (
		data && (
			<Carousels>
				{data.map((category, i) => {
					const categoryName = category && Object.keys(category)[0];
					const title =
						categoryName &&
						categoryName
							.split("_")
							.map(word => word.charAt(0).toUpperCase() + word.slice(1))
							.join(" ");

					return (
						<LazyLoad height={200} key={i}>
							<CarouselContainer title={title} i={i} data={category[categoryName]} />
						</LazyLoad>
					);
				})}
			</Carousels>
		)
	);
};

export default CarouselsContainer;
