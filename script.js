const toggle = document.getElementsByClassName('checkbtn')[0];
const navLi = document.getElementsByClassName('nav-li')[0];

toggle.addEventListener('click', () => {
  navLi.classList.toggle('active');
  document.body.classList.toggle('stop-scrolling');
});

function myFunction(x) {
  // eslint-disable-line no-unused-vars
  x.classList.toggle('fa-xmark');
}

//Get the button:
mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
    // the button needs to appear with an animation so it doesn't just pop up
    mybutton.classList.add('animate__animated', 'animate__fadeIn');
    document.getElementById('nav').style.top = '-50px';
  } else {
    mybutton.style.display = 'none';
    mybutton.classList.remove('animate__animated', 'animate__fadeIn');
    document.getElementById('nav').style.top = '0';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
