import { firebase, firestore } from "../../../config/firebase/";

const auth = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("usuario logado");
    });
};

const register = (
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
          complemento
        });
    });
  return register;
};

export default { auth, register };
