
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCuYTZ-BwL_sl9GPo3Kh7Rwa1m_ABXngCg",
      authDomain: "kwitter-ac272.firebaseapp.com",
      databaseURL: "https://kwitter-ac272-default-rtdb.firebaseio.com",
      projectId: "kwitter-ac272",
      storageBucket: "kwitter-ac272.appspot.com",
      messagingSenderId: "911868038615",
      appId: "1:911868038615:web:fb5a8ba2b1af218ad60f92",
      measurementId: "G-78Q8BHKQZQ"
    };
    firebase.initializeApp(firebaseConfig)


    user_name =  localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

    function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose:"adding user"
      })
    }
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
    firebase.initializeApp(firebaseConfig)
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id) >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
