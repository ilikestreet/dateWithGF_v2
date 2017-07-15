// db.js
// Initialize Firebase
var config = {
	apiKey: "AIzaSyAlHl__cNTylKuecxz2_-qDdxiQvorp3_o",
	authDomain: "gfweb-946c5.firebaseapp.com",
	databaseURL: "https://gfweb-946c5.firebaseio.com",
	projectId: "gfweb-946c5",
	storageBucket: "gfweb-946c5.appspot.com",
	messagingSenderId: "113703462935"
};
firebase.initializeApp(config);

firebase.auth().signInWithEmailAndPassword("ilikestreet.jz@gmail.com", "a110110119").catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	console.log(errorMessage);
});

var db = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
	// User is signed in.
	var uid = user.uid;
	db.ref(uid).set({log: ""});
	console.log("User signed in!!!");
  } else {
	// User is signed out.
	console.log("user signed out!!!");
  }
});
