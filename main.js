

const config = {
    apiKey: "AIzaSyCva7oywqsncbVqjoxrrhfC84nSZy_9Pk8",
    authDomain: "webtechproj-bd18d.firebaseapp.com",
    databaseURL: "https://webtechproj-bd18d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webtechproj-bd18d",
    storageBucket: "webtechproj-bd18d.appspot.com",
    messagingSenderId: "766295980301",
    appId: "1:766295980301:web:c5b05856a0cf1bfa1e5844"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('complaints');
  
  // Listen for form submit
  document.getElementById('complaint').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
    alert("Form Successfully submitted");
    document.location.reload();
    // Get values
    var comp = getInputVal('input-1');
    var email = getInputVal('input-2');
    console.log(comp);

  
    // Save message
    saveMessage(comp,email);
  
    // Clear form
    document.getElementById('complaint').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(comp, email){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      comp: comp,
      email:email,

    });
  }