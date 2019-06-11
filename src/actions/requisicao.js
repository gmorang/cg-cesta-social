import { firestore } from "../config/firebase";

export const criaRequisicao = requisicao => {
  firestore
    .collection("requisicao")
    .doc()
    .set(requisicao)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
};
