const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector('.nav__wrapper__ul');

// add click event on toggle
toggle.addEventListener('click', () => {
    ul.classList.toggle('nav__active');
});

// name typewrite effect
const nameElement = document.querySelector('.header__data__contents__heading');
const nameText = "likith kumar kandukuri"
let start = 0;

const typewrite = () => {
    if(start < nameText.length) {
        nameElement.innerHTML += nameText.charAt(start);
        start++;
        setTimeout(typewrite, 300);
    }
}
typewrite();

// open /close modal

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__wrapper__close');

// open modal
modalBtn.addEventListener('click', () => {
    modal.style.display = "flex";
})

// close modal
modalClose.addEventListener('click', () => {
    modal.style.display = "none"; 
})