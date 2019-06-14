import { firebase, firestore } from "../config/firebase/";

export const infoUser = () => {
  return firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then(res => res.data());
};

export const register = (
  nome,
  telefone,
  cpf,
  cep,
  rua,
  numero,
  bairro,
  cidade,
  estado,
  complemento,
  email,
  password
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firestore
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          nome,
          telefone,
          cpf,
          cep,
          rua,
          numero,
          bairro,
          cidade,
          estado,
          complemento,
          uid: firebase.auth().currentUser.uid
        });
    });
  return register;
};
export const auth = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("user", firebase.auth().currentUser.uid);
    });
};
