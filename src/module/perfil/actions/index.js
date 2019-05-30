import React from "react";
import Loading from "../../../components/loading/";
import { firebase, storage } from "../../../config/firebase/index";

export default {
  infoUser() {
    return firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(res => res.data());
  },

  uploadFile(file) {
    const uploadTask = storage
      .ref(`arquivos/${firebase.auth().currentUser.uid}/${file.name}`)
      .put(file);

    uploadTask.on(
      "state_changed",
      progress => {
        console.log(progress);
        return <Loading />;
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref(`arquivos/${firebase.auth().currentUser.uid}`)
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.saveInfoFirestore(file, url);
          });
      }
    );

    return uploadTask;
  },

  saveInfoFirestore(file, url) {
    return firebase
      .firestore()
      .collection("arquivos-user")
      .doc(firebase.auth().currentUser.uid)
      .set({
        nome: file.name,
        tipo: file.type,
        url: url
      });
  }
};
