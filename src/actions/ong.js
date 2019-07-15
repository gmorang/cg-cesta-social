import { firestore, firebase } from '../config/firebase';

export const listaOng = () => {
  return firestore
    .collection('users')
    .where('tipo', '==', 'ong')
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

export const criaCesta = idCesta => {
  return firestore
    .collection('cesta')
    .doc()
    .set({
      idCesta,
      data: Date.now(),
      uid: firebase.auth().currentUser.uid,
      status: 'estoque'
    })
    .then(response => {
      console.log(response);
      alert('Cesta criada com sucesso!!');
    })
    .catch(err => {
      console.log(err);
    });
};
export const listaCesta = () => {
  return firestore
    .collection('cesta')
    .where('uid', '==', firebase.auth().currentUser.uid)
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
