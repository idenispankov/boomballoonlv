const modal = document.querySelector('.modal');
const image = document.querySelectorAll('.section__list_image');
const imagePopup = document.querySelector('.modal__image');
const imagePopupTitle = document.querySelector('.modal__image-title');

image.forEach(item => {
  item.addEventListener('click', (e) => {
    modal.classList.add('modal_is-open');
    imagePopup.src = e.target.src;
    imagePopupTitle.textContent = e.target.alt;
  })
})

function escCloseModal(e) {
  if(e.key === 'Escape') {
    modal.classList.remove('modal_is-open');
  }
}

function closeModalOutside(e) {
  if(e.target.classList.contains('modal__close-button') || e.target.classList.contains('modal')) {
    modal.classList.remove('modal_is-open');
  }
}

document.addEventListener('keyup', escCloseModal);
document.addEventListener('click', closeModalOutside);