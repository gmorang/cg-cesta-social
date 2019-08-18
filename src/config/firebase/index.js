import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyCT7tGVwePMYmbw-sqQsqUmaCLND8lvxzI',
  authDomain: 'cesta-social-cf995.firebaseapp.com',
  databaseURL: 'https://cesta-social-cf995.firebaseio.com',
  projectId: 'cesta-social-cf995',
  storageBucket: 'cesta-social-cf995.appspot.com',
  messagingSenderId: '574441175291',
  appId: '1:574441175291:web:8c09c9ec532217e2'
});

//comexão com o firebase//

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firebase, firestore, storage };
