const toggle = document.getElementsByClassName('checkbtn')[0];
const navLi = document.getElementsByClassName('nav-li')[0];
const text = document.getElementsByClassName('logo')[0];

toggle.addEventListener('click', () => {
  navLi.classList.toggle('active');
  text.classList.toggle('disabled');
});

function myFunction(x) { // eslint-disable-line no-unused-vars
  x.classList.toggle('fa-xmark');
}