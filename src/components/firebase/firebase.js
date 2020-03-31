import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyB2vFxXW06rBswVu2tW2oEWMjjx4cG1s-o",
  authDomain: "face-recognition-ad915.firebaseapp.com",
  databaseURL: "https://face-recognition-ad915.firebaseio.com",
  projectId: "face-recognition-ad915",
  storageBucket: "face-recognition-ad915.appspot.com",
  messagingSenderId: "55466874878",
  appId: "1:55466874878:web:0e5cec92978d0d009252af"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
