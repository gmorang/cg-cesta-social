import { firestore, firebase } from '../config/firebase';

export const criaRequisicao = (ong, infoPessoais, renda, idRequisicao) => {
  firestore
    .collection('requisicao')
    .doc()
    .set({
      ong,
      infoPessoais,
      renda,
      idRequisicao,
      date: Date.now(),
      user: firebase.auth().currentUser.uid,
      status: 'pendente'
    })
    .then(response => {
      console.log(response);
      alert('Requisição criada com sucesso!!');
    })
    .catch(err => {
      console.log(err);
    });
};

export const listaRequisicao = () => {
  return firestore
    .collection('requisicao')
    .get()
    .then(res =>
      res.docs.map(doc => {
        console.log(doc);
        const data = doc.data();
        return data;
      })
    )
    .catch(err => {
      console.log(err);
    });
};

export const aprovaRequisicao = async (idRequisicao, dataRetirada, message) => {
  try {
    let aprovaRequisicao = await firestore
      .collection('requisicao')
      .where('idRequisicao', '==', idRequisicao)
      .get()
      .then(res => {
        res.forEach(doc => {
          firestore
            .collection('requisicao')
            .doc(doc.id)
            .update({
              status: 'aprovada',
              dataAprovacao: Date.now(),
              dataRetirada: dataRetirada,
              mensagem: message
            });
        });
      });
    return aprovaRequisicao;
  } catch (err) {
    console.log(err);
  }
};

export const reprovaRequisicao = async idRequisicao => {
  try {
    let reprovaRequisicao = await firestore
      .collection('requisicao')
      .where('idRequisicao', '==', idRequisicao)
      .get()
      .then(res => {
        res.forEach(doc => {
          firestore
            .collection('requisicao')
            .doc(doc.id)
            .update({
              status: 'reprovada',
              dataReprovacao: Date.now()
            });
        });
      });
    return reprovaRequisicao;
  } catch (err) {
    console.log(err);
  }
};
