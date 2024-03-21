const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const cardTemplate = document.querySelector('#card').content
const cardsContainer = document.querySelector('.content__columns')

// add popup
const addButton = document.querySelector('.profile__add-button')
const addPopup = document.querySelector('.add-popup')
const addPopupCloseButton = document.querySelector('.add-popup__close-button')

const addPopupNameInput = document.querySelector('.add-popup__name-input')
const addPopupImageInput = document.querySelector('.add-popup__image-input')

const addForm = document.querySelector('.card__form')

// image popup
const galleryPopup = document.querySelector('.gallery-popup')
const galleryPopupImage = document.querySelector('.popup__image')
const galleryPopupText = document.querySelector('.popup__image-name')
const galleryPopupCloseButton = document.querySelector('.gallery-popup__close-button')


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function addCard(card) {
    let newCard = cardTemplate.cloneNode(true);
    newCard.querySelector('.content__image').src = card.link;
    newCard.querySelector('.content__image').alt = card.name;
    newCard.querySelector('.content__name').textContent = card.name;

    newCard.querySelector('.content__like-button').addEventListener('click', function (event) {
        event.target.classList.toggle('content__like-button_active');
    })

    newCard.querySelector('.content__delete-button').addEventListener('click', function (event) {
        event.target.parentElement.remove()
    })

    newCard.querySelector('.content__image').addEventListener('click', function (event) {
        galleryPopup.classList.add('popup_visible');
        galleryPopup.classList.add('popup_opened');
        galleryPopupImage.src = event.target.src;
        const name = event.target.nextElementSibling.querySelector('.content__name').textContent;
        galleryPopupImage.alt = name;
        galleryPopupText.textContent = name;
    })

    cardsContainer.prepend(newCard);
}

for (let i = initialCards.length - 1; i >= 0; --i) {
    addCard(initialCards[i]);
}

// Create popup

addButton.addEventListener('click', function () {
    addPopup.classList.add('popup_visible');
    addPopup.classList.add('popup_opened');
})

addPopupCloseButton.addEventListener('click', async function () {
    addPopup.classList.remove('popup_opened');
    await sleep(200);
    addPopup.classList.remove('popup_visible');
})

addForm.addEventListener('submit', async function (event) {
    event.preventDefault()
    addCard({'name': addPopupNameInput.value, 'link': addPopupImageInput.value})

    addPopupCloseButton.click();
})

// Gallery popup

galleryPopupCloseButton.addEventListener('click', async function () {
    galleryPopup.classList.remove('popup_opened');
    await sleep(200);
    galleryPopup.classList.remove('popup_visible');
})