const midpart = document.querySelector('.works');
const data = [
  {
    name: 'Save Animals',
    description:
      "This project is about an event for raising fundings for protecting and defending animals that are abandoned or don't have a home. Also looking at some effects last year's events left on people.",
    featuredImage: 'media/save-animals.png',
    tecnologies: ['Html', 'CSS', 'JavaScript'],
    liveVer: 'https://fasaldana.github.io/capstone_project/',
    source: 'https://github.com/fasaldana/capstone_project',
  },
  {
    name: 'YGO - Build your deck',
    description:
      'a SPA (single page application) that allows the user to connect to the YuGiOh official API to get information about cards from selected archetypes so that you can build your deck following your favorite card',
    featuredImage: 'media/YGO_project.png',
    tecnologies: ['React', 'Redux', 'JavaScript'],
    liveVer: 'https://ygo-pro.herokuapp.com',
    source: 'https://github.com/fasaldana/capstone_YGO',
  },
  {
    name: 'Budget App',
    description:
      'A Mobile Web App made with Rails that takes care of your expenses. You can have a record of your expenses by date, category, amount, and others. Has feature and system tests with RSpec and Capybara. Implements authentication with Devise. Deployed to Heroku. Uses PostgreSQL and ActiveRecord.',
    featuredImage: 'media/budget_app.png',
    tecnologies: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
    liveVer: 'https://obscure-brushlands-44462.herokuapp.com',
    source: 'https://github.com/fasaldana/budgetApp',
  },
  {
    name: 'Math Magicians',
    description:
      'Math magicians is a website for all fans of mathematics. It allows users to: Make simple calculations. Read a random math-related quote.',
    featuredImage: 'media/math_magicians.png',
    tecnologies: ['ReactJS', 'CSS'],
    liveVer: 'https://math-magicians-hero.herokuapp.com',
    source: 'https://github.com/fasaldana/math-magicians',
  },
  {
    name: 'Space Travelers',
    description:
      'a SPA (single page application) that allows the user to connect to the Space X API to view rocket and mission data! A User can reserve a rocket for space travel and embark on space missions.',
    featuredImage: 'media/space_travelers.png',
    tecnologies: ['ReactJS', 'CSS', 'Redux', 'Redux-toolkit'],
    liveVer: 'https://space-travelers-ak-fs.herokuapp.com',
    source: 'https://github.com/AKeeganDev/space_travelers',
  },
  {
    name: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'media/work_example.png',
    tecnologies: ['Html', 'Bootstrap', 'Ruby on rails'],
    liveVer: 'https://fasaldana.github.io/Portfolio_project/',
    source: 'https://github.com/fasaldana/Portfolio_project',
  },
];

const container = document.querySelector('.work-cards');
for (let i = 0; i < data.length; i += 1) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundImage = `url(${data[i].featuredImage})`;
  const boxBtn = document.createElement('button');
  boxBtn.classList.add('box-btn');
  boxBtn.classList.add('btn-style');
  boxBtn.innerHTML = 'See Project';
  boxBtn.addEventListener('click', () => {
    popupWindow(i);
  });
  box.append(boxBtn);
  container.appendChild(box);
}

//  popupWindow
function popupWindow(index) {
  const modalSection = document.createElement('section');
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modalContainer');
  modalContainer.classList.add('opened');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modalHeader');
  const modalTitle = document.createElement('h3');
  modalTitle.innerHTML = data[index].name;
  const modalClose = document.createElement('img');
  modalClose.src = 'media/close.png';
  modalClose.classList.add('close-modal');
  modalClose.alt = 'close';
  modalClose.addEventListener('click', () => {
    modalSection.remove();
  });
  modalHeader.append(modalTitle, modalClose);

  const tools = document.createElement('div');
  tools.classList.add('tools');
  const list = document.createElement('ul');
  for (let i = 0; i < data[index].tecnologies.length; i += 1) {
    const item = document.createElement('li');
    item.innerHTML = data[index].tecnologies[i];
    list.appendChild(item);
  }
  tools.appendChild(list);

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  const modalImage = document.createElement('img');
  modalImage.classList.add('modal-image');
  modalImage.src = data[index].featuredImage;
  modalImage.alt = 'work image';
  const modalAbout = document.createElement('div');
  modalAbout.classList.add('modal-about');
  const modalDesc = document.createElement('p');
  modalDesc.innerHTML = data[index].description;
  const modalBtn = document.createElement('div');
  modalBtn.classList.add('modal-btn');

  const liveBtn = document.createElement('button');
  liveBtn.innerHTML = 'See Live';
  const liveIcon = document.createElement('img');
  liveIcon.classList.add('live-icon');
  liveIcon.src = 'media/Icon.png';
  liveIcon.alt = 'live icon';
  liveBtn.addEventListener('click', () => {
    window.open(data[index].liveVer, '_blank');
  });
  liveBtn.appendChild(liveIcon);
  const sourceBtn = document.createElement('button');
  sourceBtn.innerHTML = 'See Source';
  const sourceIcon = document.createElement('img');
  sourceIcon.classList.add('source-icon');
  sourceIcon.src = 'media/Vector.png';
  sourceIcon.alt = 'source icon';
  sourceBtn.addEventListener('click', () => {
    window.open(data[index].source, '_blank');
  });
  sourceBtn.appendChild(sourceIcon);
  modalBtn.append(liveBtn, sourceBtn);

  modalAbout.append(modalDesc, modalBtn);

  modalContent.append(modalImage, modalAbout);

  modal.append(modalHeader, tools, modalContent);

  modalContainer.appendChild(modal);

  modalSection.appendChild(modalContainer);

  midpart.appendChild(modalSection);
}

const overlay = document.getElementById('overlay');

for (let i = 0; i < 6; i += 1) {
  const closeModalButtons2 = document.getElementsByClassName('close-modal')[i];

  overlay.addEventListener('click', () => {
    overlay.classList.remove('opened');
  });

  closeModalButtons2.addEventListener('click', () => {
    overlay.classList.remove('opened');
  });
}

const form = document.querySelector('.form');
const email = document.querySelector('#email');
const error = document.querySelector('.error');

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

const storeForm = {};

function saveData(data) {
  const stringyData = JSON.stringify(data);
  window.localStorage.setItem('customFormData', stringyData);
}

document.querySelector('.form').addEventListener('change', () => {
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  inputs.forEach((input) => {
    storeForm[input.id] = input.value;
  });
  storeForm[textArea.id] = textArea.value;
  saveData(storeForm);
});

function reinsertValues(storeForm) {
  Object.entries(storeForm).forEach((ele) => {
    const [key, value] = ele;
    document.getElementById(key).value = value;
  });
}

window.addEventListener('load', () => {
  const formDataObj = JSON.parse(window.localStorage.getItem('customFormData'));
  if (formDataObj) {
    reinsertValues(formDataObj);
  }
});
