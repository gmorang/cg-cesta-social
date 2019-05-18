import { firebase } from "../../../config/firebase/index";

const infoUser = async () => {
  let infoUser = await firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then(res => {
      return res.data();
    });
};

export default { infoUser };
