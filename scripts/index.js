// Ответьте на вопросы, которые я задал в README, пожалуйста

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

const addPopupNameInput = document.querySelector('.add-popup__name-input')
const addPopupImageInput = document.querySelector('.add-popup__image-input')

const addForm = document.forms["add-card"]

// image popup
const galleryPopup = document.querySelector('.gallery-popup')
const galleryPopupImage = document.querySelector('.popup__image')
const galleryPopupText = document.querySelector('.popup__image-name')

// edit popup
const editButton = document.querySelector('.profile__edit-button')
const editPopup = document.querySelector('.edit-popup')

const nameField = document.querySelector('.profile__name')
const workField = document.querySelector('.profile__work-place')

const editPopupNameInput = document.querySelector('.edit-popup__name-input')
const editPopupWorkInput = document.querySelector('.edit-popup__work-input')

const editForm = document.forms['change-profile']

const closeButtons = document.querySelectorAll('.popup__close-button');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});


function createCard(card) {
    const newCard = cardTemplate.cloneNode(true);

    const image = newCard.querySelector('.content__image');
    image.src = card.link;
    image.alt = card.name;

    newCard.querySelector('.content__name').textContent = card.name;

    newCard.querySelector('.content__like-button').addEventListener('click', function (event) {
        event.target.classList.toggle('content__like-button_active');
    })

    newCard.querySelector('.content__delete-button').addEventListener('click', function (event) {
        event.target.closest('.content__card').remove()
    })

    image.addEventListener('click', function (event) {
        openPopup(galleryPopup);
        galleryPopupImage.src = card.link;
        galleryPopupImage.alt = card.name;
        galleryPopupText.textContent = card.name;
    })
    return newCard
}

function addCard(card, method="prepend") {
    const newCard = createCard(card);
    cardsContainer[method](newCard);
}

initialCards.reverse().forEach((card) => {
    addCard(card);
})

// Create popup

addButton.addEventListener('click', function () {
    console.log(addPopup);
    openPopup(addPopup);
})

addForm.addEventListener('submit', async function (event) {
    event.preventDefault()
    addCard({'name': addPopupNameInput.value, 'link': addPopupImageInput.value})
    event.target.reset();
    closePopup(addPopup);
})

// Gallery popup

editButton.addEventListener('click', function () {
    openPopup(editPopup);
    editPopupNameInput.value = nameField.textContent
    editPopupWorkInput.value = workField.textContent

})

editForm.addEventListener('submit', function (event) {
    event.preventDefault()
    nameField.textContent = editPopupNameInput.value
    workField.textContent = editPopupWorkInput.value

    closePopup(editPopup);
})