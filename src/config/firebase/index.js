import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBrV3NFqXg_ml4WVYF5kIsDVj8YeoMXm00",
  authDomain: "cesta-social.firebaseapp.com",
  databaseURL: "https://cesta-social.firebaseio.com",
  projectId: "cesta-social",
  storageBucket: "cesta-social.appspot.com",
  messagingSenderId: "830256704817"
});

//comexão com o firebase//

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firebase, firestore, storage };
