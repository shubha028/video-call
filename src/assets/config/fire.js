import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBFPl6yV7qOrEQvT0YAAbMYRkmsVsWRikI",
  authDomain: "video-call-website-6ec44.firebaseapp.com",
  projectId: "video-call-website-6ec44",
  storageBucket: "video-call-website-6ec44.appspot.com",
  messagingSenderId: "818899933687",
  appId: "1:818899933687:web:9243d920399283d78ff6f2"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;