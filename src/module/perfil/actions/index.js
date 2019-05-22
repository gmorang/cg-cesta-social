import { firebase } from "../../../config/firebase/index";
export default {
  infoUser() {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(res => res.data());
  }
};
