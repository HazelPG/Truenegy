function conectedToFirebase(){

  var config = {
    apiKey: "AIzaSyDiJ5mK-wAjW2s0kuKRhNRyvmOLmQgh9DE",
    authDomain: "truenergy-b193a.firebaseapp.com",
    databaseURL: "https://truenergy-b193a.firebaseio.com",
    projectId: "truenergy-b193a",
    storageBucket: "truenergy-b193a.appspot.com",
    messagingSenderId: "1092201535357"
  };

  var firebase =  firebase.initializeApp(config);

  return firebase;
}

