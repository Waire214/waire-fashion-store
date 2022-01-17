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
// queryReference - current place in the database
// qr: no actual data
// documentReference: used to perform CRU methods - set, get, update, delete - snapShot
// collectionReference: querySnapshot
// storing user profile in our firestore
// if a user signs in
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if not signed in
  if(!userAuth) return;

  //documentReference to perform CRUD
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // snapShot which holds the data
  const snapShot = await userRef.get();
  // console.log(snapShot);

  // console.log(userRef);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      // using the documentReference to perform CRUD
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('ERROR CREATING USER', error.message);
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// sign in with Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase