const dev = {
	BASE_PATH: "http://localhost:3000",
	HOME_PAGE: "http://localhost:3001",
};

const prod = {
	BASE_PATH: "https://xcxz-netflix.herokuapp.com",
	HOME_PAGE: "https://5fbd19bf4527ee15c711d13a--xcxz-netflix.netlify.app/",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
