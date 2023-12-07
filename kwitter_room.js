
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyAHeUH7uwhUu1wEDmgdfr1GfAxad-5WkTE",
      authDomain: "kwitter-64299.firebaseapp.com",
      databaseURL: "https://kwitter-64299-default-rtdb.firebaseio.com",
      projectId: "kwitter-64299",
      storageBucket: "kwitter-64299.appspot.com",
      messagingSenderId: "939076915181",
      appId: "1:939076915181:web:57b5d5f6bf6b19b10a21e4"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
