document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

//firebase

var firebaseConfig = {
    apiKey: "AIzaSyDLQ8X9WRGDWtFsL4A02zuj21p27vffP9c",
    authDomain: "travel-and-explore-17631.firebaseapp.com",
    databaseURL: "https://travel-and-explore-17631.firebaseio.com",
    projectId: "travel-and-explore-17631",
    storageBucket: "travel-and-explore-17631.appspot.com",
    messagingSenderId: "784291422197",
    appId: "1:784291422197:web:d7fde6eeac84dd1a654abc",
    measurementId: "G-DD87QK5HE8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //make auth and firestore references

  const auth = firebase.auth();
  const db = firebase.firestore();

  //update firestore settings

  db.settings({timestampsInSnapshots: true});

  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit',(e)=>{
	  e.preventDefault();
	  //get user info
	  const email = signupForm['signup-email'].value;
	  const password=signupForm['signup-password'].value;
	  //console.log(email,password)
	  //sign up the user

	  auth.createUserWithEmailAndPassword(email,password).then(cred=>{
		  console.log(cred)
	  })






  })

