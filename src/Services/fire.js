import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
     apiKey: "AIzaSyCgMKA_v2pIDD1SbpnFQg_PTHAqDYR66cg",
     authDomain: "complete-todo.firebaseapp.com",
     databaseURL: "https://complete-todo-default-rtdb.firebaseio.com",
     projectId: "complete-todo",
     storageBucket: "complete-todo.appspot.com",
     messagingSenderId: "952424461925",
     appId: "1:952424461925:web:3aa14a06f06ff7240e388c",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

// fire.database()
// .ref(taskId)
// .remove()
// .then(console.log("done"))
// .catch(console.log("failed"));
