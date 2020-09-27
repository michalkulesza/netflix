import React from "react";
import { Carousels } from "../components";
import CarouselContainer from "../containers/carousel";

const CarouselsContainer = ({ data }) => {
	return (
		<Carousels>
			{data
				? data.map((category, i) => {
						const categoryName = Object.keys(category)[0];
						const title = `${categoryName[0].toUpperCase()}${categoryName.slice(1)}`;
						return <CarouselContainer title={title} i={i} data={category[categoryName]} key={i} />;
				  })
				: null}
		</Carousels>
	);
};

export default CarouselsContainer;
