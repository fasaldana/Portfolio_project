const toggle = document.getElementsByClassName('checkbtn')[0];
const navLi = document.getElementsByClassName('nav-li')[0];
const text = document.getElementsByClassName('logo')[0];

toggle.addEventListener('click', () => {
  navLi.classList.toggle('active');
  text.classList.toggle('disabled');
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
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
