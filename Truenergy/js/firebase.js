  // Initialize Firebase
function conectedToFirebase(){

  var config = {
    apiKey: "AIzaSyCAkYMm53OZei6SEb1JhuqlBLsliXKrUM0",
    authDomain: "truenergy-833ad.firebaseapp.com",
    databaseURL: "https://truenergy-833ad.firebaseio.com",
    projectId: "truenergy-833ad",
    storageBucket: "truenergy-833ad.appspot.com",
    messagingSenderId: "810864766590"
  };
  var fb =  firebase.initializeApp(config);

    return fb;
}