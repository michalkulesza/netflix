import Firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCm8avQRt4eoZOzFOWxrWvDYeP4sOPNElc",
	authDomain: "netflix-d2613.firebaseapp.com",
	databaseURL: "https://netflix-d2613.firebaseio.com",
	projectId: "netflix-d2613",
	storageBucket: "netflix-d2613.appspot.com",
	messagingSenderId: "750472583661",
	appId: "1:750472583661:web:0daf1f14f1dfa5b111efe4",
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
