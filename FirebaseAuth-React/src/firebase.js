import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyADIjNCLOhM3Q_2c9N3HSbd7l6zUnp7YFw",
  authDomain: "auth-development-50d2d.firebaseapp.com",
  projectId: "auth-development-50d2d",
  storageBucket: "auth-development-50d2d.appspot.com",
  messagingSenderId: "481071360773",
  appId: "1:481071360773:web:a9c1c6960758fcb39ce56c",
});

export const auth = app.auth();
export default app;