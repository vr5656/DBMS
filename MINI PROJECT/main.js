const firebaseConfig = {
    apiKey: "AIzaSyB_0uluTS8fGNorRwVNvIIrspkZ9YskjZ4",
    authDomain: "details-3a10f.firebaseapp.com",
    databaseURL: "https://details-3a10f-default-rtdb.firebaseio.com",
    projectId: "details-3a10f",
    storageBucket: "details-3a10f.appspot.com",
    messagingSenderId: "728921447199",
    appId: "1:728921447199:web:ed9a7044f5019faac6ee2a",
    measurementId: "G-ZGGXDMWM3J"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this,id)'>#"+Room_names +"</div><hr>";
      //End code
      });});}
getData();

function addRoom()
{
      
    roomname=document.getElementById("room_name").value;
    localStorage.setItem("room_name",roomname);
    roomnamee=document.getElementById("room_namee").value;
    localStorage.setItem("room_namee",roomnamee);
    roomnameee=document.getElementById("room_nameee").value;
    localStorage.setItem("room_nameee",roomnameee);
    a=document.getElementById("a").value;
    localStorage.setItem("a",a);
    b=document.getElementById("b").value;
    localStorage.setItem("b",b);
    c=document.getElementById("c").value;
    localStorage.setItem("c",c);
    d=document.getElementById("d").value;
    localStorage.setItem("d",d);
    e=document.getElementById("e").value;
    localStorage.setItem("e",e);  


  firebase.database().ref("/").child(roomname).update({
    purpose : "adding roomname"
  });
  firebase.database().ref("/").child(roomnamee).update({
    purpose : "adding roomnamee"
  });
  firebase.database().ref("/").child(roomnameee).update({
    purpose : "adding roomnameee"
  });
  firebase.database().ref("/").child(a).update({
    purpose : "adding a"
  });
  firebase.database().ref("/").child(b).update({
    purpose : "adding b"
  });
  firebase.database().ref("/").child(c).update({
    purpose : "adding c"
  });
  firebase.database().ref("/").child(d).update({
    purpose : "adding d"
  });
  firebase.database().ref("/").child(e).update({
    purpose : "adding e"
  });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
uname=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4"+uname+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();