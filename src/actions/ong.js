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

export const criaCesta = () => {
  return firestore
    .collection('cesta')
    .set()
    .then(res => res.data);
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
