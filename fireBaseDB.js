//import VueFire from 'vuefire'
import firebase from '@firebase/app'
import '@firebase/firestore'

require('@firebase/auth')
import Vue from 'vue';
//Vue.use(VueFire)
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCnDcBYXUS0OxvAYoxU5Ue03y80iZxjfZ0",
  authDomain: "gkeepfirebase.firebaseapp.com",
  databaseURL: "https://gkeepfirebase.firebaseio.com",
  projectId: "gkeepfirebase",
  storageBucket: "gkeepfirebase.appspot.com",
  messagingSenderId: "863391360374",
  appId: "1:863391360374:web:ea22dc291066b7a4a2c657",
  measurementId: "G-8H63EXLMK7"
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const db = firebase.firestore()

export const store = {
  currentUser: null
};

firebase.auth().onAuthStateChanged((user) => {
  store.currentUser = user;
});
// Get a Firestore instance
// export const db = firebase
//   .initializeApp({ projectId: 'gkeepfirebase' })
//   .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
//const { Timestamp, GeoPoint } = firebase.firestore
//export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
//db.settings({ timestampsInSnapshots: true })


// Real Time database settings
// import firebase from 'firebase/app'
// import 'firebase/database'

// export const db = firebase
//   .initializeApp({ databaseURL: 'MY PROJECT URL' })
//   .database()