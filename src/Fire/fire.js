import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCFwLHmSNfUK14UHTVfLzrzYpVttFgUVTQ",
    authDomain: "authapp-5aca9.firebaseapp.com",
    projectId: "authapp-5aca9",
    storageBucket: "authapp-5aca9.appspot.com",
    messagingSenderId: "45331462517",
    appId: "1:45331462517:web:a283ec529160e51dbdbb3c"
};

  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;