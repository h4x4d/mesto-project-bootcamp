const editButton = document.querySelector('.profile__edit-button')
const editPopup = document.querySelector('.edit-popup')
const editPopupCloseButton = document.querySelector('.edit-popup__close-button')
const editPopupSaveButton = document.querySelector('.edit-popup__save-button')

const nameField = document.querySelector('.profile__name')
const workField = document.querySelector('.profile__work-place')

const editPopupNameInput = document.querySelector('.edit-popup__name-input')
const editPopupWorkInput = document.querySelector('.edit-popup__work-input')

const editForm = document.querySelector('.profile__form')

console.log(editForm)


editButton.addEventListener('click', function () {
    editPopup.classList.add('popup_opened');
    editPopupNameInput.value = nameField.textContent
    editPopupWorkInput.value = workField.textContent

})

editPopupCloseButton.addEventListener('click', function () {
    editPopup.classList.remove('popup_opened');
})

editForm.addEventListener('submit', function (event) {
    event.preventDefault()
    nameField.textContent = editPopupNameInput.value
    workField.textContent = editPopupWorkInput.value

    editPopup.classList.remove('popup_opened');
})