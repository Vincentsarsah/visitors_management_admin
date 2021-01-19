import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDEX-Hym5hbr55Pqvgj81ro-SgCLo99PmI",
    authDomain: "visitors-app-7b543.firebaseapp.com",
    databaseURL: "https://visitors-app-7b543-default-rtdb.firebaseio.com",
    projectId: "visitors-app-7b543",
    storageBucket: "visitors-app-7b543.appspot.com",
    messagingSenderId: "15687979725",
    appId: "1:15687979725:web:82dee0c9e9520145238f84",
    measurementId: "G-F65YJ5Z3T7"
};

var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();


