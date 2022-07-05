import firebase from 'firebase';

// Agregar SDK Firebase

var firebaseConfig = {
    apiKey: "AIzaSyCChh6jalPHelXW8wsX8hoE6WAuljga5wc",
    authDomain: "votacion-en-equipo-3a49d.firebaseapp.com",
    projectId: "votacion-en-equipo-3a49d",
    storageBucket: "votacion-en-equipo-3a49d.appspot.com",
    messagingSenderId: "979605250703",
    appId: "1:979605250703:web:77f2918359b425d27186fa",
    measurementId: "G-50Z3J402Z1"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
