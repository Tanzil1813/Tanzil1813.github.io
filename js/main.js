//sticky navbar
var mainbottom = $('.navbar').offset().top + $('.navbar').height();

$(window).on('scroll',function(){ 
  stop = Math.round($(window).scrollTop()); 
  if (stop > mainbottom) { 
     $('.navbar-static-top').addClass('navbar-fixed-top'); 
  } else { 
     $('.navbar-static-top').removeClass('navbar-fixed-top'); 
  } 
});

jQuery(function ($) {
    'use strict';
//end sticky navbar

//#main-slider
$(function () {
    $('#main-slider.carousel').carousel({
        interval: 8000
    });
});

$('.window-height').height($(window).height());

// accordian
$('.accordion-toggle').on('click', function () {
    $(this).closest('.panel-group').children().each(function () {
        $(this).find('>.panel-heading').removeClass('active');
    });

    $(this).closest('.panel-heading').toggleClass('active');
});


// portfolio filter
$(window).load(function () {
    'use strict';
    var $portfolio_selectors = $('.portfolio-filter >li>a');
    var $portfolio = $('.portfolio-items');
    $portfolio.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'

    });

    $portfolio_selectors.on('click', function () {
        $portfolio_selectors.removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio.isotope({
            filter: selector
        });
        return false;
    });
});




$('.testimonial-slider').owlCarousel({
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});

//goto top
$('.gototop').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
});

//Pretty Photo
$("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
});
});










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

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);


function submitForm(e){
e.preventDefault();
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email'); 
var phone = getInputVal('phone');
var message = getInputVal('message');
var subject= getInputVal('subject');

saveMessage(name,company,email,phone,subject,message);
document.querySelector('.alert').style.display = 'block';


setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);


document.getElementById('contactForm').reset();

setTimeout(function(){
    document.location.href="./index.html";
  },3050);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,company,email,phone,subject,message){

    var newMessageRef= messagesRef.push();

    newMessageRef.set({
    name:name,
    address:company,
    email:email,
    phone:phone,
    subject:subject,
    message:message
    

    });
}
  
function moreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }















 