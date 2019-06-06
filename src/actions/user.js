import { firebase } from "../config/firebase/";

export const infoUser = () => {
  return firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then(res => res.data());
};
