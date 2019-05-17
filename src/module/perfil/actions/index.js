import { firebase, firestore } from "../../../config/firebase/index";

const infoUser = () => {
  firestore
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get();
  let data = infoUser.data;
  console.log(data);
};

export default { infoUser };
