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

form.addEventListener('submit', (e) => {
  const Emailtext = email.value;
  if (Emailtext !== Emailtext.toLowerCase()) {
    e.preventDefault();
    error.style.color = 'red';
    error.style.gridColumn = '2/3';
    error.textContent = 'Please Enter your Email in Lowercase';
  } else {
    error.textContent = '';
  }
});
