import { firebase, firestore, storage } from '../config/firebase/';

export const infoUser = () => {
  return firebase
    .firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then(res => res.data());
};

export const register = (
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
  password,
  file,
  tipo
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const uploadTask = storage
        .ref(
          `arquivos/${firebase.auth().currentUser.uid}/fotoPerfil/${file.name}`
        )
        .put(file);

      uploadTask.on(
        'state_changed',
        progress => {
          console.log(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref(`arquivos/${firebase.auth().currentUser.uid}/fotoPerfil`)
            .child(file.name)
            .getDownloadURL()
            .then(url => {
              firestore
                .collection('users')
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
                  tipo,
                  uid: firebase.auth().currentUser.uid,
                  foto: url
                });
            });
        }
      );
      return register;
    });
};
export const auth = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('user', firebase.auth().currentUser.uid);
    });
};

export const listaUsuario = () => {
  return firestore
    .collection('users')
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
