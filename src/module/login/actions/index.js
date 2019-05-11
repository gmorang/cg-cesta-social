import { firebase } from "../../../config/firebase/";

const auth = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("usuario logado");
    });
};

export default { auth };
