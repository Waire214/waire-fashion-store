import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyBLC7-K-KJVZR5QTDP_ajSiSkDzrxQrXOQ",
  authDomain: "waire-fashion-store.firebaseapp.com",
  projectId: "waire-fashion-store",
  storageBucket: "waire-fashion-store.appspot.com",
  messagingSenderId: "884132011456",
  appId: "1:884132011456:web:4cc543eb50a99cc567fc25",
  measurementId: "G-0PBB6YMP3V"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase