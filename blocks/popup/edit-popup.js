const editButton = document.querySelector('.profile__edit-button')
const editPopup = document.querySelector('.edit-popup')
const editPopupCloseButton = document.querySelector('.edit-popup__close-button')
const editPopupSaveButton = document.querySelector('.edit-popup__save-button')

const nameField = document.querySelector('.profile__name')
const workField = document.querySelector('.profile__work-place')

const editPopupNameInput = document.querySelector('.edit-popup__name-input')
const editPopupWorkInput = document.querySelector('.edit-popup__work-input')

const editForm = document.querySelector('.profile__form')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


editButton.addEventListener('click', function () {
    editPopup.classList.add('popup_visible');
    editPopup.classList.add('popup_opened');
    editPopupNameInput.value = nameField.textContent
    editPopupWorkInput.value = workField.textContent

})

editPopupCloseButton.addEventListener('click', async function () {
    editPopup.classList.remove('popup_opened');
    await sleep(200);
    editPopup.classList.remove('popup_visible');
})

editForm.addEventListener('submit', function (event) {
    event.preventDefault()
    nameField.textContent = editPopupNameInput.value
    workField.textContent = editPopupWorkInput.value

    addPopupCloseButton.click();
})