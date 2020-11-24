const dev = {
	BASE_PATH: "http://localhost:3000",
	HOME_PAGE: "",
};

const prod = {
	BASE_PATH: "https://xcxz-netflix.herokuapp.com",
	HOME_PAGE: "",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
