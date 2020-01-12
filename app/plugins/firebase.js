import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY, // こう書くことで.envファイルを見てくれる
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_API_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
