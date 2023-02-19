import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




// Викликаю gallery
const galleryContainer = document.querySelector('.gallery');
// Присвоюю змінну виклику функції
const cardsMarkup = ctreatePicturesCardsMarkup(galleryItems);

// Додаю розмітку в HTML
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// Створюю слухача, який створює події під час кліку
galleryContainer.addEventListener('click', onGalleryContainerClick);

    
// Функція: дії при кліку і Esc
function ctreatePicturesCardsMarkup(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
        .join('');
}
// Відкриття картнки original
function onGalleryContainerClick(event) {
    event.preventDefault();

    const isGalleryImagesEl = event.target.classList.contains('gallery__image');
   
    if (!isGalleryImagesEl) {
        return;
    }
    
    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
		captionDelay: 250,
		captionPosition: 'bottom',
        captionType: 'attr',
    });
    
    // console.log(event.target);
    // console.log(event.currentTarget);