import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAS2ITD_3uI6r_R3bw1orwWwWMnsJmgeu4",
    authDomain: "app-hibrida-indra-fa966.firebaseapp.com",
    databaseURL: "https://app-hibrida-indra-fa966.firebaseio.com",
    projectId: "app-hibrida-indra-fa966",
    storageBucket: "app-hibrida-indra-fa966.appspot.com",
    messagingSenderId: "717533345293",
    appId: "1:717533345293:web:d92de899299ddaa576c744"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);