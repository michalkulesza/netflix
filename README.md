<h1  align="center">Netflix</h1>

<h4  align="center">Fullstack Netflix clone application allows you to create an account, browse movies or series by Collection or Genres and then save your favourites to your list.<br>
</h4>

<br>
<<<<<<< HEAD
<center></center>
<center><img  src="https://forthebadge.com/images/badges/uses-badges.svg"  alt="For the badge"></center>
=======

<p  align="center">

<img  src="https://forthebadge.com/images/badges/uses-badges.svg"  alt="For the badge"> </p>
>>>>>>> 00f40e3789f4d7cc3d15925b3cc726e36f4514e4

---

<p  align="center">

<img  align="center"  src="https://mkulesza.com/static/media/netflix.44e2e79b.jpg"  alt="Feeder preview" />

</p>

<p  align="center">
<<<<<<< HEAD
<br>
<center><a  href="https://xcxz-netflix.netlify.app/">SEE LIVE VERSION</center>
=======

<a  href="https://xcxz-netflix.netlify.app/">SEE LIVE VERSION
>>>>>>> 00f40e3789f4d7cc3d15925b3cc726e36f4514e4

</a>

</p>

## Installation

- `git clone https://github.com/michalkulesza/netflix` - clone

- `git clone https://github.com/michalkulesza/netflix-backend` - clone

- create `.env` file in the root of the server that includes a `CREDS` key with a JSON stringified value of you firebase credentials

- inside `.env` file create second entry with key of `API_KEY` and value of you TMDb API_KEY

- in `client/src/firebase/index.js` replace `firebaseConfig` with your own firebase configuration obtained from the firebase console

- now just run `yarn/npm dev` inside `netflix/backend` and `yarn/npm start` in the client

- have fun!

## Tech

**Client**:

- React
- Javascript
- Jest/Enzyme
- Styled Components
- Redux
- Router
- Firebase

**Server**:

- NodeJS
- Express
- Firebase
- Custom functions that are requesting data from TMDb API and sending them back to the client

## Features

- Authentication with Firebase Auth

- Data persistence with Firestore

- Form Validation

- Responsiveness

- Custom styling

- Fully custom carousells that feature Netflix-like infinite scroll and responsiveness

- Error handling with notifications

- Player with keyboard controls, fullscreen feature or custom scrollbars

- Custom hooks

- Loading placeholders and animations

<<<<<<< HEAD
- Lazyloading for improved loading times

=======
>>>>>>> 00f40e3789f4d7cc3d15925b3cc726e36f4514e4
## License

> MIT
