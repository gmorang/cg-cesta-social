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
