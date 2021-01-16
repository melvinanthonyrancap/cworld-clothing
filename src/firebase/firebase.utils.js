import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBNkbz9_X4CegRYMY5WUnc9ReNoDJzPZCk",
    authDomain: "cworld-db.firebaseapp.com",
    projectId: "cworld-db",
    storageBucket: "cworld-db.appspot.com",
    messagingSenderId: "373008325458",
    appId: "1:373008325458:web:ddcbd14a3c03c75074788b",
    measurementId: "G-RMWM3Q2Y15"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;