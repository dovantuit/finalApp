import firebase from 'firebase'; // 4.8.1

firebase.initializeApp({
    apiKey: "AIzaSyDK6xdOY2syhvzgJHnPeldW1U0KehFGnDk",
    authDomain: "finalapp-3b26c.firebaseapp.com",
    databaseURL: "https://finalapp-3b26c.firebaseio.com",
    projectId: "finalapp-3b26c",
    storageBucket: "finalapp-3b26c.appspot.com",
    messagingSenderId: "96598646993"
});

const database = firebase.database();

export default database;