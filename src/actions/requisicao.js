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
    .limit(10)
    .get()
    .then(res =>
      res.docs.map(doc => {
        const data = doc.data();
        console.log('data', data);
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
