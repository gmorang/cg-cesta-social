import { firestore, firebase } from "../config/firebase";

export const criaRequisicao = requisicao => {
  firestore
    .collection("requisicao")
    .doc()
    .set({
      requisicao,
      date: Date.now(),
      user: firebase.auth().currentUser.uid
    })
    .then(response => {
      console.log(response);
      alert("Requisição criada com sucesso!!");
    })
    .catch(err => {
      console.log(err);
    });
};

export const listaRequisicao = () => {
  return firestore
    .collection("requisicao")
    .limit(10)
    .get()
    .then(res =>
      res.docs.map(doc => {
        const data = doc.data();
        console.log("data", data);
        return data;
      })
    )
    .catch(err => {
      console.log(err);
    });
};
