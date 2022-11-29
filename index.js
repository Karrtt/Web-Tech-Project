// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCva7oywqsncbVqjoxrrhfC84nSZy_9Pk8",
    authDomain: "webtechproj-bd18d.firebaseapp.com",
    databaseURL: "https://webtechproj-bd18d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webtechproj-bd18d",
    storageBucket: "webtechproj-bd18d.appspot.com",
    messagingSenderId: "766295980301",
    appId: "1:766295980301:web:c5b05856a0cf1bfa1e5844"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  
  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('uemail').value
    password = document.getElementById('upass').value
    uname = document.getElementById('uname').value
    phno = document.getElementById('uphno').value
    
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
console.log(email);
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref('user')
  
      // Create User data
      var user_data = {
        email : email,
        uname : uname,
        phone_no : phno,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      var new_dbref = database_ref.push();
      new_dbref.set(user_data);
  
      // DOne
      alert('User Created!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('username').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref('time')

      sessionStorage.setItem('uname',user.uname)
      // DOne
      document.location.href = "./home.html";
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }