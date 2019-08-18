import { firebase, firestore, storage } from '../config/firebase/';

export const infoUser = () => {
  return firebase
    .firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then(res => res.data());
};

export const register = async (
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
  try {
    let register = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(register);
    if (register) {
      await firestore
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
          email,
          password,
          tipo,
          foto: '',
          data: Date.now(),
          user: firebase.auth().currentUser.uid
        })
        .then(() => {
          console.log(file);
          if (!file) {
            firestore
              .collection('users')
              .doc(firebase.auth().currentUser.uid)
              .update({
                foto:
                  'https://banner2.kisspng.com/20180521/ocp/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e4f1ce65.9760504415269493489905.jpg'
              });
          } else {
            storage
              .ref(`arquivos/${firebase.auth().currentUser.uid}/fotoPerfil`)
              .put(file)
              .then(() => {
                storage
                  .ref(`arquivos/${firebase.auth().currentUser.uid}/fotoPerfil`)
                  .getDownloadURL()
                  .then(url => {
                    firestore
                      .collection('users')
                      .doc(firebase.auth().currentUser.uid)
                      .update({
                        foto: url
                      });
                  });
              });
          }
        });
    }
    return register;
  } catch (e) {
    console.log(e);
    alert(e.message);
  }
};

export const auth = async (email, password) => {
  try {
    let auth = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return auth;
  } catch (e) {
    alert(e);
  }
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
