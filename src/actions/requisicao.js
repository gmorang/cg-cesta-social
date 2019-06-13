import { firestore, firebase } from "../config/firebase";

export const criaRequisicao = requisicao => {
  firestore
    .collection("requisicao")
    .doc()
    .set({ requisicao, user: firebase.auth().currentUser.uid })
    .then(response => {
      console.log(response);
      alert("Requisicao criada");
    })
    .catch(err => {
      console.log(err);
    });
};

export const listaRequisicao = () => {
  return firestore
    .collection("requisicao")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.forEach(doc => {
        console.log(doc.data());
        doc.data();
        return data;
      });
    })
    .catch(err => {
      console.log(err);
    });
};
