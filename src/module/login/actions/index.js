import React from "react";
import { firebase, firestore } from "../../../config/firebase/";

import { Redirect } from "react-router-dom";
const auth = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("user", firebase.auth().currentUser.uid);
    });

  return <Redirect to="/" />;
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
          complemento,
          uid: firebase.auth().currentUser.uid
        });
    });
  return register;
};

export default { auth, register };
