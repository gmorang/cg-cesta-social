import { firebase } from "../../../config/firebase/index";
import { ProfileStore } from "../store";

const infoUser = async () => {
  let infoUser = await firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get();

  let data = infoUser.data();

  ProfileStore.userInfo = {
    nome: data.nome,
    telefone: data.telefone,
    cpf: data.cpf,
    cep: data.cep,
    rua: data.rua,
    numero: data.numero,
    bairro: data.bairro,
    cidade: data.cidade,
    estado: data.estado,
    complemento: data.complemento
  };

  return infoUser;
};

export default { infoUser };
