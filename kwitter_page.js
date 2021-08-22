

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBP5TskRO2pvYO8wwfbOjS0W04QEdfILQc",
    authDomain: "chat-app-573ab.firebaseapp.com",
    projectId: "chat-app-573ab",
    storageBucket: "chat-app-573ab.appspot.com",
    messagingSenderId: "910462206972",
    appId: "1:910462206972:web:4d01285d11f4b308836879",
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
