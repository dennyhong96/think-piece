import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);

	// For debug only
	if (process.env.NODE_ENV === "development" && !window.firebase) {
		window.firebase = firebase;
	}
}

export default firebase;