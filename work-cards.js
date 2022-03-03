const midpart = document.querySelector('.works');
const data = [
  {
    name: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: 'media/work_example.png',
    tecnologies: ['Html', 'Bootstrap', 'Ruby on rails'],
    liveVer: 'https://fasaldana.github.io/Portfolio_project/',
    source: 'https://github.com/fasaldana/Portfolio_project',
  },
];

const container = document.querySelector('.work-cards');
for (let i = 0; i < data.length; i += 1) {
  container.innerHTML = `
    <div class="box">
        <h2 class="box-title">${data[i].name}</h2>
        <p class="box-desc">${data[i].description}</p>
        <div class="box-btn-tools">
            <button>${data[i].tecnologies[0]}</button>
            <button>${data[i].tecnologies[1]}</button>
            <button>${data[i].tecnologies[2]}</button>
        </div>
        <button class="box-btn  btn-style">See Project</button>
    </div>
    <div class="box">
        <h2 class="box-title">${data[i].name}</h2>
        <p class="box-desc">${data[i].description}</p>
        <div class="box-btn-tools">
            <button>${data[i].tecnologies[0]}</button>
            <button>${data[i].tecnologies[1]}</button>
            <button>${data[i].tecnologies[2]}</button>
        </div>
        <button class="box-btn  btn-style">See Project</button>
    </div>
    <div class="box">
        <h2 class="box-title">${data[i].name}</h2>
        <p class="box-desc">${data[i].description}</p>
        <div class="box-btn-tools">
            <button>${data[i].tecnologies[0]}</button>
            <button>${data[i].tecnologies[1]}</button>
            <button>${data[i].tecnologies[2]}</button>
        </div>
        <button class="box-btn  btn-style">See Project</button>
    </div>
    <div class="box">
        <h2 class="box-title">${data[i].name}</h2>
        <p class="box-desc">${data[i].description}</p>
        <div class="box-btn-tools">
            <button>${data[i].tecnologies[0]}</button>
            <button>${data[i].tecnologies[1]}</button>
            <button>${data[i].tecnologies[2]}</button>
        </div>
        <button class="box-btn  btn-style">See Project</button>
    </div>
    <div class="box">
        <h2 class="box-title">${data[i].name}</h2>
        <p class="box-desc">${data[i].description}</p>
        <div class="box-btn-tools">
            <button>${data[i].tecnologies[0]}</button>
            <button>${data[i].tecnologies[1]}</button>
            <button>${data[i].tecnologies[2]}</button>
        </div>
        <button class="box-btn  btn-style">See Project</button>
    </div>
    <div class="box">
        <h2 class="box-title">${data[i].name}</h2>
        <p class="box-desc">${data[i].description}</p>
        <div class="box-btn-tools">
            <button>${data[i].tecnologies[0]}</button>
            <button>${data[i].tecnologies[1]}</button>
            <button>${data[i].tecnologies[2]}</button>
        </div>
        <button class="box-btn  btn-style">See Project</button>
    </div>
  `;
}

//  popupWindow
let modalContainer;
function popupWindow() {
  modalContainer = document.createElement('section');
  modalContainer.innerHTML = `

  <div class="modalContainer">
  <div class="modal">
        <div class="modalHeader">
            <h3>${data[0].name}</h3>
            <img class="close-modal" src="media/close.png" alt="close">
        </div>
        <div class="tools">
            <ul>
                <li>${data[0].tecnologies[0]}</li>
                <li>${data[0].tecnologies[1]}</li>
                <li>${data[0].tecnologies[2]}</li>
            </ul>
        </div>
        <div class="modal-content">
            <img class="modal-img" src="${data[0].featuredImage}" alt="work image">
            <div class="modal-about">
                <p>${data[0].description}</p>
                <div class="modal-btn">
                    <button>See Live<img class="live-icon" src="media/Icon.png" alt="live icon"></button>
                    <button>See Source <img src="media/Vector.png" alt="GitHub"></button>
                </div>
            </div>
        </div>
</div>
</div>`;
  midpart.appendChild(modalContainer);
}
popupWindow();

const overlay = document.getElementById('overlay');
const popupwind = document.getElementsByClassName('modalContainer')[0];

for (let i = 0; i < 6; i += 1) {
  const openModalButtons2 = document.getElementsByClassName('box-btn')[i];
  const closeModalButtons2 = document.getElementsByClassName('close-modal')[0];

  openModalButtons2.addEventListener('click', () => {
    overlay.classList.add('opened');
    popupwind.classList.add('opened');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('opened');
    popupwind.classList.remove('opened');
  });

  closeModalButtons2.addEventListener('click', () => {
    overlay.classList.remove('opened');
    popupwind.classList.remove('opened');
  });
}