import firebase from '~/plugins/firebase'

const auth = () => {
  return new Promise((resolve, reject) => {
    console.log("plugins/auth");
    firebase.auth().onAuthStateChanged(user => {
      resolve(user || false);
    })
  })
}
export default auth
