var firebaseConfig = {
    apiKey: "AIzaSyDYgN7exlsR8pjC4KhmiiuqiG4PBwxBF_M",
    authDomain: "realtimecomments-5965d.firebaseapp.com",
    databaseURL: "https://realtimecomments-5965d.firebaseio.com",
    projectId: "realtimecomments-5965d",
    storageBucket: "realtimecomments-5965d.appspot.com",
    messagingSenderId: "1075881262358",
    appId: "1:1075881262358:web:c3c7537052537f3bf22437",
    measurementId: "G-WTD431K7RW"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Rootref is the whole database.
const rootRef = firebase.database().ref();
//commentsRef is just the pageCountsNode
const commentsRef = rootRef.child('comments');
//Listen for click on Submit Comment button, and post comment.
document.getElementById("btnSubmitComment").addEventListener('click', function () {
    //Replace line breaks in comment with br tags.
    var newcomment = document.getElementById('txComment').value;//.replace(/\n/g, "<br>");
    //Define a new, keyed post.
    var newPostRef = commentsRef.push();
    //Fill tne new keyed post with data
    newPostRef.set({
        name: document.getElementById('tbName').value.trim(),
        comment: newcomment.trim(),
        frompage: location.pathname,
        when: firebase.database.ServerValue.TIMESTAMP
    });
});

function showpastcomments() {
    var showat = document.getElementById('pastcomments');
    //Get comments whose from page equals this page's pathname.
    var commentsRef = firebase.database().ref('comments/');
    commentsRef.once('value', function (snapshot) {
        snapshot.forEach(function (itemSnapshot) {
            //Get the object for one snapshot
            var itemData = itemSnapshot.val();
            var comment = itemData.comment;
            var name = itemData.name;
            var when = new Date(itemData.when).toLocaleDateString("en-us");
            showat.innerHTML += "<li>"+"<b>"+name+"</b>"+"<br>"+ "<br>" + comment + "<span> -- " + " (" + when +
            ")</span></li>";
        })
    })
}
//Called when page first opens and also after Submit button click to show all comments for this page.
showpastcomments()