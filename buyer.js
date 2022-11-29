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
  var messagesRef = firebase.database().ref('orders');
  document.getElementById('view').addEventListener('click',viewitem);
  function viewitem(e){
    e.preventDefault();
    alert("Your items are \n" +sessionStorage.getItem("allEntries"))
  }
  // Listen for form submit
  document.getElementById('buy').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
    document.location.href = "./success.html";
    // Get values
    var cname = getInputVal('name');
    var phno = getInputVal('phno');
    var city = getInputVal('city');
    var address = getInputVal('address');
    console.log(name);

  
    // Save message
    saveMessage(cname,phno,city,address);
  
    // Clear form
    document.getElementById('buy').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(cname, phno,city,address){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: cname,
      phno:phno,
      city:city,
      address:address,
      orders:sessionStorage.getItem("allEntries")
    });
  }