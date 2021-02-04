const modal = document.querySelector('.modal');
const image = document.querySelectorAll('.section__list_image');
const imagePopup = document.querySelector('.modal__image');

image.forEach(item => {
  item.addEventListener('click', (e) => {
    modal.classList.add('modal_is-open');
    imagePopup.src = e.target.src;
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

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-180px";
  }
  prevScrollpos = currentScrollPos;
}